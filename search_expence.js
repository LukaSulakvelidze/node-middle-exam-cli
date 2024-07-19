#! /usr/bin/env node

const { Command } = require("commander");
const program = new Command();
const path = require("path");
const { readFile } = require("./utilities");

program
  .command("search")
  .description("Search your expense")
  .argument("[date]", "Search by date")
  .argument("[category]", "Search by category")
  .action(async (date, category) => {
    const data = await readFile(path.join(__dirname, "expenceData.json"), true);
    const expenceByBoth = data
      .filter((el) => el.category === category)
      .filter((el) => el.date.includes(date));
    const expenceByCategory = data.filter((el) => el.category === category);
    const expenceByDate = data.filter((el) => el.date.includes(date));
    if (date && category) {
      console.log(expenceByBoth, "expenceByBoth");
    } else if (date) {
      console.log(expenceByDate, "expenceByDate");
    } else if (category) {
      console.log(expenceByCategory, "expenceByCategory");
    } else {
      console.log(
        "Please provide a date and/or category to search for expenses."
      );
    }
  });

program.parse();
