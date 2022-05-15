#!/usr/bin/env node
import boxen from 'boxen';
import chalk from 'chalk';
import inquirer from 'inquirer';
import clear from 'clear';
import { questions } from './questions.js';

clear();

const prompt = inquirer.createPromptModule();

const data = {
    fact: chalk.hex('#B10000')('I love Open-Source!'),
    github: chalk.hex('#787878')("https://github.com/buster95"),
    website: chalk.hex('#00AB9E')("https://buster95.github.io"),
    linkedin: chalk.hex('#0077B5')('https://www.linkedin.com/in/walter-corrales'),
    gmail: chalk.hex('#C14438')("walter.r.corrales@gmail.com"),
    microsoft: chalk.hex('#F65314')("corraleswalter@live.com"),
    telegram: chalk.hex('#0072AF')("https://t.me/KingBuster95"),
};

function createText(text, { color, bold }) {
    if (bold) return chalk.hex(color).bold(text);
    return chalk.hex(color)(text);
}

const me = boxen(
    [
        `${chalk.bold.green("                     Walter Corrales")}`,
        ``,
        `${createText(' Github:   ', { color: '#9E9E9E', bold: true })} ${data.github} `,
        `${createText(' Website:  ', { color: '#59FFC8', bold: true })} ${data.website} `,
        `${createText(' LinkedIn: ', { color: '#0077B5', bold: true })} ${data.linkedin} `,
        `${createText(' Microsoft:', { color: '#F65314', bold: true })} ${data.microsoft} `,
        `${createText(' Gmail:    ', { color: '#C14438', bold: true })} ${data.gmail} `,
        `${createText(' Telegram: ', { color: '#0072AF', bold: true })} ${data.telegram} `,
        ``,
        `${chalk.bold("Hi folks 👋, this is my presentation card on npm")}`,
        `${chalk.bold("I'm a passionate developer, command line junkie 🧬 and")}`,
        `${chalk.bold("I love to create awesome things. I enjoy working with")}`,
        `${chalk.bold("nodejs, dotnet and docker 🐳, my favorites programming ")}`,
        `${chalk.bold("languages are TypeScript JavaSCript, C# and Dart")} `
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "round",
        borderColor: "blue"
    }
);

// Show the boxen
console.log(me);

prompt(questions).then(answer => answer.action());
