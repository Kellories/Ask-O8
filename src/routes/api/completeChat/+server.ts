import { OPENAI_KEY } from "$env/static/private"
import OpenAI from "openai";
export const POST = async({request}) => {

    try {
        const openai = new OpenAI({apiKey:OPENAI_KEY})
        let { message , content} = await request.json()

        const data = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                { role: "system", content: "You are a helpful assistant. You will be given context which is retrieve from a database which is most similar to the prompt that the user gives, return contextually accurate responses." },
                {
                    role: "user",
                    content: `***Prompt*** ${message} *** Context *** ${content}`,
                },
            ],
        });
        let completion = data.choices[0].message.content


        

        return new Response(JSON.stringify({ completion }), {
            status: 200,
        });
    } catch (error) {
        console.error("Error creating embeddings:", error.message);
        return new Response(
            JSON.stringify({ error: "Failed to complete chat", details: error.message }),
            { status: 500 }
        );
    }


}