import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/scenario", async (req, res) => {
    try {
      const { scenario } = req.body;
      if (!scenario) {
        return res.status(400).json({ error: "Scenario is required" });
      }

      const prompt = `You are the Wildcard Labs AI assistant, a highly capable automation platform.
A user has provided the following hypothetical business scenario:
"${scenario}"

Provide a concise, professional summary of how Wildcard Labs's AI would handle this scenario.
Format your response in a few short paragraphs or bullet points. Focus on:
1. Understanding the request/data.
2. The automated actions taken (e.g., updating CRM, sending notifications).
3. The ultimate benefit to the business (e.g., time saved, zero manual chasing).

Keep the response engaging and under 150 words.`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      res.json({ result: response.text });
    } catch (error) {
      console.error("Error generating scenario response:", error);
      res.status(500).json({ error: "Failed to generate response" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
