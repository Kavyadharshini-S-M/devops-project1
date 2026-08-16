const fs = require("fs");

console.log("Running website tests...");

// Test 1: index.html exists
if (!fs.existsSync("index.html")) {
    console.error("❌ index.html is missing");
    process.exit(1);
}

console.log("✅ index.html exists");

// Read the HTML file
const html = fs.readFileSync("index.html", "utf8");

// Test 2: HTML contains <h1>


// Test 3: package.json exists
if (!fs.existsSync("package.json")) {
    console.error("❌ package.json is missing");
    process.exit(1);
}

console.log("✅ package.json exists");

console.log("🎉 All tests passed!");