#! /usr/bin/env node

const { Command } = require("commander");
const program = new Command();
const { writeFile, readFile, getCurrentDateTime } = require("./utilities");
const path = require("path");

program
  .command("create")
  .description("create a new expence")
  .argument("<Expence>", "Expance amount")
  .argument("Category", "Expence category")
  .action(async (expence, category) => {
    const data = await readFile(path.join(__dirname, "expenceData.json"), true);
    balance = 10000
    const newExpence = {
      id: data.length + 1,
      date: getCurrentDateTime(),
      expence: Number(expence),
      category: category,
      Balance: balance -= expence,
    };
    data.push(newExpence);
    await writeFile(path.join(__dirname, "expenceData.json"), data);
    console.log(data);
  });

program.parse();
