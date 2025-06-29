const { GoogleGenerativeAI } = require("@google/generative-ai");

// Correct usage of environment variable
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash",
    systemInstruction:`

    you are an code reviewer,who have expertise in develpment. you look for the code and find the problem and suggest the solutions to developer.

    you always try to find the best solution for the developer and also try to make the code more efficient and clean.
    `
 });

async function generateContent(prompt) {
    const result = await model.generateContent(prompt);
    return result.response.text();
}

module.exports = generateContent;  //export kr diya kyuki hme dusri file me use krna hai
