import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// System context about the app
const APP_CONTEXT = `
You are Guggi, a friendly and helpful chatbot assistant for "Let's Cook" - a recipe discovery web application.

ABOUT THE APP:
- App Name: Let's Cook 🍳
- Creator: Harsh Mishra
- Purpose: Help users discover delicious recipes from around the world
- Year: 2025

KEY FEATURES:
1. Search by Region: Browse recipes from different countries and cuisines worldwide
2. Search by Name: Find specific dishes by entering the meal name
3. Search by Ingredient: Discover recipes that feature specific ingredients

FUNCTIONALITY:
- Users can search for recipes using three different methods
- Each recipe includes: high-quality images, complete ingredient lists with measurements, step-by-step cooking instructions, country of origin, meal category, and YouTube video tutorial links
- The app uses TheMealDB API to fetch recipe data
- Built with React, Vite, React Router, and Axios
- Fully responsive design that works on desktop, tablet, and mobile devices

YOUR ROLE:
- Help users navigate the app
- Answer questions about recipes and cooking
- Explain how to use different features
- Provide cooking tips and suggestions
- Be friendly, warm, and enthusiastic about food
- Use emojis occasionally to be more engaging
- Keep responses concise and helpful

PERSONALITY:
- Friendly and approachable
- Passionate about food and cooking
- Patient and helpful
- Enthusiastic but not overwhelming
- Use casual, conversational language

Remember: You're here to make the cooking experience enjoyable and help users get the most out of Let's Cook!
`;

let genAI;
let model;

// Initialize Gemini
const initializeGemini = () => {
  if (!API_KEY || API_KEY === "your_api_key_here") {
    throw new Error("Gemini API key is not configured. Please add your API key to the .env file.");
  }
  
  if (!genAI) {
    genAI = new GoogleGenerativeAI(API_KEY);
    model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
  }
};

// Get response from Gemini
export const getGeminiResponse = async (userMessage) => {
  try {
    initializeGemini();

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: APP_CONTEXT }],
        },
        {
          role: "model",
          parts: [{ text: "Hello! I'm Guggi, your cooking assistant for Let's Cook! I understand the app's features and I'm here to help you discover amazing recipes and navigate the platform. How can I assist you today?" }],
        },
      ],
      generationConfig: {
        maxOutputTokens: 500,
        temperature: 0.7,
      },
    });

    const result = await chat.sendMessage(userMessage);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error getting Gemini response:", error);
    
    if (error.message.includes("API key")) {
      return "I'm having trouble connecting because my API key isn't configured properly. Please check the .env file and make sure your Gemini API key is set correctly! 🔑";
    }
    
    return "I'm having a little trouble right now. Could you try asking that again? 😅";
  }
};
