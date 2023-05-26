import { model, models, Schema } from "mongoose";

const CatSchema = new Schema({
    name: String,
    age: Number,
}, {
    timestamps: true,
});

export const Cat = models?.Cat || model("Cat", CatSchema);