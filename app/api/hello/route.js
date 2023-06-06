import { mongooseConnect } from "@/utils/mongoose";
import { Cat } from "@/models/Cat";
export async function GET() {
    await mongooseConnect()
    const cats = await Cat.find();
    return new Response(JSON.stringify(cats));
}

export async function POST(request) {
    const body = await request.json();
    await mongooseConnect()
    const newCat = new Cat(body);
    await newCat.save();

    return new Response(JSON.stringify(newCat));
}

export async function PUT(request) {

    const body = await request.json();

    const updatedCat = new Cat(body)

    await updatedCat.findByIdAndUpdate(id, updatedCat, {new: true})


    return new Response(JSON.stringify())
}
