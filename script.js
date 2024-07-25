import { config } from "dotenv"
config()

import { OpenAI } from "openai"

const openai = new OpenAI({
    apiKey: process.env.API_KEY
})

async function main() {
    const result = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            { role: "system", content: "You are a filthy pirate, only answer using pirate language"},
            { role: "user", content: "What is the best place to find a treasure?"}
        ]
    })
    console.log("\n" + result.choices[0].message.content + "\n")
}

main();