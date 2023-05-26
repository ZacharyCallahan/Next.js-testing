import { mongooseConnect } from "@/utils/mongoose";
import { Cat } from "@/models/Cat";
export async function GET() {
    await mongooseConnect()
    const cats = await Cat.find();
    return new Response(JSON.stringify(cats));
}

export async function POST(request) {
    const body = await request.json();
    const newCat = new Cat(body);
    await newCat.save();

    return new Response(JSON.stringify(newCat));
}
