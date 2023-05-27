import { mongooseConnect } from "@/utils/mongoose";
import { Cat } from "@/models/Cat";
export async function GET(request, {params}) {
    const name = params.name
    console.log("", name);
    
    await mongooseConnect()
    const cats = await Cat.find({name: name});
    return new Response(JSON.stringify(cats));
}