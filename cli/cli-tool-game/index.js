#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

let playerName;

const sleep = (ms = 2000) => new Promise(r => setTimeout(r, ms));
async function welcome () {
    const rainbowTitle = chalkAnimation.rainbow("Who wants? \n");
    await sleep();
    rainbowTitle.stop();
    console.log(`${chalk.bgBlack("How To Play")}`);
}

//await welcome();

async function askName () {
    const answers = await inquirer.prompt({
        name: "player_name",
        type: "input",
        message: "Whats you name?",
        default () {
            return "Player";
        }
    });

    playerName = answers.player_name;
}

await askName();

console.log("Got player name=", playerName);

async function askQuestion1 () {
    const answers = await inquirer.prompt({
        name: "question_1",
        type: "list",
        message: "Q1...\n",
        choices: ["choice1", "choice2", "choice3"]
    });

    //return answers.question_1;
    return handleAnswer(answers.question_1 == "choice1");
}

async function handleAnswer (isCorrect) {
    const spinner = createSpinner("Checking ans..").start();
    if (isCorrect) {
        spinner.success({ text: `Player ${playerName} ` });
    } else {
        spinner.error({ text: `Game over` });
        process.exit(1);
    }
}

//await askQuestion1();

function winner () {
    console.clear();
    const msg = `Congrats, ${playerName}`;

    figlet(msg, (err, msg) => {
        console.log(gradient.pastel.multiline(msg));
    });
}

winner();
