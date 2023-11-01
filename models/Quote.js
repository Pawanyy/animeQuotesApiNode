import mongoose, { Schema } from "mongoose";

const quoteSchema = {
  quote: { type: String, required: true },
  anime: {
    name: { type: String, required: true },
    slug: { type: String, required: true },
  },
  character: {
    name: { type: String, required: true },
    slug: { type: String, required: true },
  },
};

export const Quote = mongoose.model("quotes", quoteSchema);
