require('dotenv').config({ path: 'e:/V  Stdio,  Prj/Export Etsy/backend/.env' });
const { GoogleGenAI } = require('@google/genai');

async function run() {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: 'Hello!'
    });
    console.log(response.text);
  } catch (e) {
    console.error(e);
  }
}
run();
