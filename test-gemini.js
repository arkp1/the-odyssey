const fs = require('fs');
const { GoogleGenerativeAI } = require("@google/generative-ai");

let envContent = fs.readFileSync('.env.local', 'utf8');

// Remove BOM if present
if (envContent.charCodeAt(0) === 0xFEFF) {
  envContent = envContent.slice(1);
}

console.log("Raw .env.local content:", JSON.stringify(envContent));

const match = envContent.match(/GEMINI_API_KEY=(.+)/);
const apiKey = match ? match[1].replace(/[\r\n]/g, '').trim() : null;

console.log("API Key found:", !!apiKey);
console.log("API Key length:", apiKey ? apiKey.length : 0);
console.log("API Key (first 10 chars):", apiKey ? apiKey.substring(0, 10) + "..." : "N/A");

if (!apiKey) {
  console.error("No API Key found in .env.local");
  process.exit(1);
}

async function run() {
  try {
    console.log("Creating GoogleGenerativeAI instance...");
    const genAI = new GoogleGenerativeAI(apiKey);
    
    console.log("Getting model...");
    const model = genAI.getGenerativeModel({ model: "models/gemini-pro" });
    
    console.log("Generating content...");
    const result = await model.generateContent("Tell me a fact about Zeus.");
    
    console.log("Getting response...");
    const response = await result.response;
    const text = response.text();
    
    console.log("Success! Result:", text);
  } catch (error) {
    console.error("Error details:", error);
    console.error("Error message:", error.message);
    if (error.response) {
      console.error("Error response:", error.response);
    }
  }
}

run();
