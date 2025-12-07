import { createServer } from "node:http";
import { fileURLToPath } from "url";
import { hostname } from "node:os";
import { server as wisp, logging } from "@mercuryworkshop/wisp-js/server";
import Fastify from "fastify";
import fastifyStatic from "@fastify/static";

import { scramjetPath } from "@mercuryworkshop/scramjet/path";
import { epoxyPath } from "@mercuryworkshop/epoxy-transport";
import { baremuxPath } from "@mercuryworkshop/bare-mux/node";

const publicPath = fileURLToPath(new URL("../public/", import.meta.url));

// Wisp Configuration
logging.set_level(logging.NONE);
Object.assign(wisp.options, {
  allow_udp_streams: false,
  hostname_blacklist: [/example\.com/],
  dns_servers: ["1.1.1.3", "1.0.0.3"],
});

const fastify = Fastify({
  serverFactory: (handler) => {
    return createServer()
      .on("request", (req, res) => {
        // Required for Scramjet + BareMux
        res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
        res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
        handler(req, res);
      })
      .on("upgrade", (req, socket, head) => {
        if (req.url.endsWith("/wisp/")) wisp.routeRequest(req, socket, head);
        else socket.end();
      });
  },
});

// Static public files
fastify.register(fastifyStatic, {
  root: publicPath,
  decorateReply: true,
});

// Scramjet internal files
fastify.register(fastifyStatic, {
  root: scramjetPath,
  prefix: "/scram/",
  decorateReply: false,
});

// Epoxy transport
fastify.register(fastifyStatic, {
  root: epoxyPath,
  prefix: "/epoxy/",
  decorateReply: false,
});

// BareMux worker
fastify.register(fastifyStatic, {
  root: baremuxPath,
  prefix: "/baremux/",
  decorateReply: false,
});


// ======================================================================
// ✅ TMDB PROXY ROUTE — FIXES POSTERS + SEARCH + TRENDING (NO CORS ERRORS)
// ======================================================================
fastify.get("/tmdb", async (req, reply) => {
  try {
    const path = req.query.path;
    const q = req.query.q || "";
    const page = req.query.page || 1;

    if (!path) {
      return reply.code(400).send({ error: "Missing TMDB path" });
    }

    // Your actual TMDB v3 API key goes here
    const TMDB_KEY = "2d1351cf74f73892042699d0431b799a";

    // Build TMDB URL
    const url = `https://api.themoviedb.org/3${path}?api_key=${TMDB_KEY}&query=${encodeURIComponent(q)}&page=${page}`;

    const res = await fetch(url);
    const data = await res.json();

    return reply.send(data);
  } catch (err) {
    console.error("TMDB Proxy Error:", err);
    return reply.code(500).send({ error: "TMDB proxy failed" });
  }
});


// 404 Handler
fastify.setNotFoundHandler((res, reply) => {
  return reply.code(404).type("text/html").sendFile("404.html");
});

// Server Info Logging
fastify.server.on("listening", () => {
  const address = fastify.server.address();
  console.log("Listening on:");
  console.log(`  http://localhost:${address.port}`);
  console.log(`  http://${hostname()}:${address.port}`);
  console.log(
    `  http://${
      address.family === "IPv6" ? `[${address.address}]` : address.address
    }:${address.port}`
  );
});

// Graceful Shutdown
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

function shutdown() {
  console.log("SIGTERM signal received: closing HTTP server");
  fastify.close();
  process.exit(0);
}

let port = parseInt(process.env.PORT || "");
if (isNaN(port)) port = 8080;

fastify.listen({
  port,
  host: "0.0.0.0",
});
