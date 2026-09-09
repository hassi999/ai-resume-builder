import express from "express";
import Groq from "groq-sdk";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config({ path: ".env.local" });

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});
app.post("/api/ai", async (req, res) => {
  try {
    const { fullName, jobTitle, experienceLevel, location } = req.body;

    if (!jobTitle || !experienceLevel) {
      return res.status(400).json({
        error: "Job title and experience level are required.",
      });
    }

    const prompt = `
You are an expert resume writer.

Create 2 professional resume summary suggestions for this person.

User information:
Name: ${fullName || "Not provided"}
Target Job Title: ${jobTitle}
Experience Level: ${experienceLevel}
Location: ${location || "Not provided"}

IMPORTANT RULES:
- Only use information provided above.
- NEVER invent work experience.
- NEVER invent companies.
- NEVER invent achievements.
- NEVER invent skills or technologies.
- NEVER claim experience that the user did not provide.
- Keep each summary concise and professional.
- Make the wording appropriate for the selected experience level.
- Return exactly 2 different summary suggestions.

Return ONLY valid JSON in this format:

{
  "suggestions": [
    "Summary 1",
    "Summary 2"
  ]
}
`;

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "openai/gpt-oss-20b",
      temperature: 0.7,
    });

    const content = completion.choices[0]?.message?.content;

    if (!content) {
      return res.status(500).json({
        error: "AI did not return a response.",
      });
    }

    const cleanedContent = content
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const result = JSON.parse(cleanedContent);

    res.json(result);
  } catch (error) {
    console.error("AI Error:", error);

    res.status(500).json({
      error: "Something went wrong while generating the summary.",
    });
  }
});

app.listen(5000, () => {
  console.log("AI server running on http://localhost:5000");
});

