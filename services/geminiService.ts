
import { GoogleGenAI, Type } from "@google/genai";
import { CheatSheet } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    console.warn("API_KEY environment variable not set. Web search will not work.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

const responseSchema = {
    type: Type.ARRAY,
    items: {
      type: Type.OBJECT,
      properties: {
        id: {
            type: Type.STRING,
            description: "A unique identifier string for the cheat sheet, like a UUID."
        },
        category: {
          type: Type.STRING,
          description: "The main technology category (e.g., 'GIT', 'Docker', 'SQL', 'Python'). Be broad."
        },
        subCategory: {
          type: Type.STRING,
          description: "The specific language or tool (e.g., 'bash', 'python', 'psql'). This is used for syntax highlighting."
        },
        title: {
          type: Type.STRING,
          description: "A short, descriptive title for the cheat sheet."
        },
        snippet: {
          type: Type.STRING,
          description: "The code snippet, command, or syntax example."
        },
        description: {
          type: Type.STRING,
          description: "A clear, concise explanation of what the snippet does and how to use it."
        },
        tags: {
          type: Type.ARRAY,
          items: { type: Type.STRING },
          description: "An array of relevant keywords or tags for searching."
        },
        priority: {
            type: Type.STRING,
            description: "The priority of the cheat sheet. Can be 'High', 'Medium', or 'Low'. Optional.",
            enum: ['High', 'Medium', 'Low']
        }
      },
      required: ["id", "category", "subCategory", "title", "snippet", "description", "tags"],
    }
  };


export async function fetchCheatSheetsFromWeb(query: string): Promise<CheatSheet[] | null> {
    if (!API_KEY) {
        throw new Error("API_KEY is not configured.");
    }
    
    const prompt = `
        You are a helpful assistant for developers. A user is searching for technical cheat sheets related to "${query}".
        Generate a list of 3 to 5 relevant cheat sheet entries based on this query.
        For each entry, please provide a unique id (can be a random string), a broad category, a specific sub-category for syntax highlighting, a title, the code snippet, a detailed description, an array of useful tags, and an optional priority ('High', 'Medium', 'Low').
        Ensure the response is a valid JSON array matching the provided schema. If the query is ambiguous, provide common examples.
    `;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: responseSchema,
                temperature: 0.5
            },
        });
        
        const jsonText = response.text.trim();
        const parsedJson = JSON.parse(jsonText);

        // Basic validation
        if (Array.isArray(parsedJson)) {
            return parsedJson as CheatSheet[];
        }
        
        console.error("Parsed response is not an array:", parsedJson);
        return null;

    } catch (error) {
        console.error("Error fetching cheat sheets from Gemini:", error);
        return null;
    }
}