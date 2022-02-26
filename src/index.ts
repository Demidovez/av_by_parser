import axios from "axios";
import express from "express";
import cheerio from "cheerio";
import fs from "fs";

const app = express();
const port = process.env.PORT;

// Выгружаем список моделей всех марок (чтобы по очереди парсить все объявления)
app.get("/save_models_links", async (req, res) => {
  try {
    let linksAllModels = [];

    // brands.txt - html-файл, вручную выгруженный из сайта, со списками марок
    const htmlBrands = fs.readFileSync("brands.txt", "utf8");

    const $ = cheerio.load(htmlBrands);

    let linksBrands = [];

    // Достаем ссылки на марки
    $(".catalog__list .catalog__items .catalog__link").each((i, elem) => {
      linksBrands[i] = $(elem).attr("href");
    });

    // На странице каждой марки достаем список моделей
    for (let i = 0; i < linksBrands.length; i++) {
      await axios
        .get(`https://cars.av.by${linksBrands[i]}`)
        .then((page) => {
          console.log(linksBrands[i]);
          const $ = cheerio.load(page.data);

          let linksModels = [];

          $(".catalog__list .catalog__items .catalog__link").each((i, elem) => {
            linksModels[i] = $(elem).attr("href");
          });

          linksModels.map((linkModel) => {
            linksAllModels.push(linkModel);
          });
        })
        .catch((err) => {
          console.log("ERROR: " + linksBrands[i]);
          console.log(err);
        });
    }

    // Сохраняем список ссылок в файл
    fs.writeFileSync("models.txt", linksAllModels.join("\n"));
    console.log("DONE!");
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
});

// Собираем все объявления на сайте
app.get("/get_all_advts", (req, res) => {
  const modelsLinks = fs.readFileSync("models.txt", "utf8").split("\n");

  // modelsLinks.length
  for (let i = 0; i < 2; i++) {}

  res.sendStatus(200);
});

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () =>
  console.log(`Parser for Av.by is listening on ${port}: ${new Date()}`)
);
