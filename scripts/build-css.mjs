#!/usr/bin/env node

/**
 * Build script for @fluid-theme/core
 *
 * Bundles all @import statements and minifies src/fluid.css → dist/fluid.min.css
 * Uses lightningcss for bundling + minification.
 */

import { bundle } from "lightningcss";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const entry = join(root, "src", "fluid.css");
const outDir = join(root, "dist");
const outFile = join(outDir, "fluid.min.css");

// Ensure dist/ exists
mkdirSync(outDir, { recursive: true });

const start = Date.now();

const { code, map } = bundle({
  filename: entry,
  minify: true,
  sourceMap: false,
  // Target modern browsers that support CSS layers, container queries, logical properties
  targets: {
    chrome: 120 << 16,
    firefox: 120 << 16,
    safari: (16 << 16) | (4 << 8),
    edge: 120 << 16,
  },
  // Don't transform modern CSS — our targets all support it natively
  drafts: {
    customMedia: false,
  },
});

// Prepend a banner comment
const banner = `/* @fluid-theme/core v${getVersion()} | MIT License | https://thefluidtheme.com */\n`;
writeFileSync(outFile, banner + code);

const size = (Buffer.byteLength(banner + code) / 1024).toFixed(1);
const elapsed = Date.now() - start;
console.log(`✓ dist/fluid.min.css  ${size} kB  (${elapsed}ms)`);

function getVersion() {
  const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
  return pkg.version;
}
