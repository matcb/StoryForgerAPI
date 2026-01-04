import dotenv from 'dotenv'
dotenv.config({ path: '../.env' })
import {GoogleGenerativeAI} from "@google/generative-ai"

const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

 async function main (){
    const model =  ai.getGenerativeModel({
        model: "gemini-2.5-flash"
 })
 const result = await model.generateContent('How much is 2 + 2?')

 console.log(result.response.text())
}

main()