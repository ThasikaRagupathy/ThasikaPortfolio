/**
 * Video Processing & Frame Extraction Helper
 *
 * This optional script assists in optimizing the introduction video and
 * extracting a high-resolution portrait frame for the About section using FFmpeg.
 *
 * Usage:
 *   node scripts/prepare-video.js
 */

const { execSync, spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

function checkFfmpeg() {
  try {
    const result = spawnSync("ffmpeg", ["-version"]);
    return result.status === 0;
  } catch {
    return false;
  }
}

function run() {
  console.log("=== Thasika Ragupathy Portfolio: Video Asset Tool ===");

  const hasFfmpeg = checkFfmpeg();
  const inputVideo = path.join(__dirname, "../public/hero/intro.mp4");
  const outputPortrait = path.join(__dirname, "../public/portrait");

  if (!fs.existsSync(inputVideo)) {
    console.log(`[!] Input video not found at: ${inputVideo}`);
    console.log("    Please ensure your introduction video is placed at public/hero/intro.mp4\n");
    return;
  }

  console.log(`[✓] Found source video: ${inputVideo}`);

  if (!hasFfmpeg) {
    console.log("\n[Notice] FFmpeg is not currently detected on this system.");
    console.log("The website already supports playing HTML5 MP4 videos natively without preprocessing.");
    console.log("\nIf you wish to optimize, crop, or extract still portrait frames:");
    console.log("1. Install FFmpeg:");
    console.log("   - Windows (PowerShell): winget install Gyan.FFmpeg");
    console.log("   - macOS: brew install ffmpeg");
    console.log("   - Linux: sudo apt install ffmpeg");
    console.log("\n2. Recommended FFmpeg Commands:");
    console.log("   # Extract a portrait frame at timestamp 00:00:01:");
    console.log("   ffmpeg -ss 00:00:01 -i public/hero/intro.mp4 -vframes 1 -q:v 2 public/portrait/portrait.jpg");
    console.log("\n   # Crop landscape 16:9 video to 9:16 portrait for mobile displays:");
    console.log("   ffmpeg -i public/hero/intro.mp4 -vf \"crop=ih*(9/16):ih\" -c:v libx264 -crf 22 -c:a aac -movflags +faststart public/hero/intro-portrait.mp4");
    console.log("\n   # Optimize video for ultra-fast web delivery (FastStart MOOV box):");
    console.log("   ffmpeg -i public/hero/intro.mp4 -c:v libx264 -preset slow -crf 23 -c:a aac -b:a 128k -movflags +faststart public/hero/intro.mp4\n");
    return;
  }

  // FFmpeg is present
  console.log("[✓] FFmpeg detected. Processing assets...");
  if (!fs.existsSync(outputPortrait)) {
    fs.mkdirSync(outputPortrait, { recursive: true });
  }

  try {
    const frameCmd = `ffmpeg -y -ss 00:00:01 -i "${inputVideo}" -vframes 1 -q:v 2 "${path.join(outputPortrait, "portrait.jpg")}"`;
    console.log(`[+] Extracting frame: ${frameCmd}`);
    execSync(frameCmd, { stdio: "inherit" });
    console.log("[✓] Successfully extracted portrait frame to public/portrait/portrait.jpg");
  } catch (err) {
    console.error("[!] Frame extraction failed:", err.message);
  }
}

run();
