#! /usr/bin/env node

const { Command } = require("commander");
const program = new Command();
const { readFile, writeFile } = require("./utilities");
const path = require("path");

program
  .command("delete")
  .description("Delete a expence from a expenceData")
  .argument("<Id>")
  .action(async (id) => {
    const data = await readFile(path.join(__dirname, "expenceData.json"), true);
    const indexOf = data.findIndex((el) => el.id === Number(id));
    if (indexOf === -1) throw new Error("This id does not exist");
    data[data.length - 1].Balance += data[indexOf].expence;
    const deletedExpance = data.splice(indexOf, 1);
    await writeFile(path.join(__dirname, "expenceData.json"), data);
    console.log(deletedExpance, "is deleted");
  });

program.parse();
