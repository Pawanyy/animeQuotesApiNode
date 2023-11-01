import express from "express";
import mongoose from "./database.js";
import { stringToSlug } from "./utils/utils.js";
import { Quote } from "./models/Quote.js";

const app = express();
const PORT = process.env.PORT | 3000;

app.use(express.json());

app.get("/api", async (req, res) => {
  res.send({ message: "Welcome to Anime Quotes API!" });
});

app.route("/api/quotes/random").get(async (req, res) => {
  await Quote.aggregate([{ $sample: { size: 1 } }])
    .then((randomQuote) => {
      return res.json(randomQuote);
    })
    .catch(() => {
      return res.status(404).json({ message: "Quote Not Found!" });
    });
});

app
  .route("/api/quotes/:quoteId")
  .get(async (req, res) => {
    await Quote.findOne({ _id: req.params.quoteId })
      .then((quote) => {
        return res.json(quote);
      })
      .catch(() => {
        return res.status(404).json({ message: "Quote Not Found!" });
      });
  })
  .delete(async (req, res) => {
    const quote = await Quote.deleteOne({ _id: req.params.quoteId });
    return res.json(quote);
  });

app
  .route("/api/quotes")
  .get(async (req, res) => {
    const quotes = await Quote.find({});
    return res.json({ quotes: quotes });
  })
  .post(async (req, res) => {
    const quote = await Quote.create({
      quote: req.body.quote,
      anime: {
        name: req.body.anime.name,
        slug: stringToSlug(req.body.anime.name),
      },
      character: {
        name: req.body.character.name,
        slug: stringToSlug(req.body.character.name),
      },
    });

    return res.json(quote);
  });

app.listen(PORT, () => {
  console.log(`Server Started on PORT: ${PORT}`);
});
