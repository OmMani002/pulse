import OpenAI from "openai";

export const openai = new OpenAI({
    apiKey: process.env.OpenAI_API_KEY
})