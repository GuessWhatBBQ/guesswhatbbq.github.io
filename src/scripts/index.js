import "jquery.terminal/css/jquery.terminal.min.css";
import "../styles/index.css";
import terminal from "jquery.terminal";
terminal($);
import figlet from "figlet";
import standard from "figlet/importable-fonts/Standard";
import xml_formatting from "jquery.terminal/js/xml_formatting";
xml_formatting($);

import { directories } from "./directories.js";
import {
  createLsCommand,
  createCdCommand,
  createCatCommand,
} from "./commands.js";

const font = "Standard";
figlet.parseFont(font, standard); // name should be the same one used in figlet.text

const root = "~";
var cwd = { cwd: root };
const commands = {
  help() {
    term.echo(`List of available commands: ${help}`, {
      delay: 2,
      typing: true,
    });
  },
  echo(...args) {
    if (args.length > 0) {
      term.echo(args.join(" "));
    }
  },
  cd(dir = null) {
    createCdCommand(term, directories, root, cwd)(dir);
  },
  ls(dir = null) {
    createLsCommand(term, directories, root, cwd)(dir);
  },
  cat() {
    createCatCommand(term, directories, root, cwd)();
  },
};

const formatter = new Intl.ListFormat("en", {
  style: "long",
  type: "conjunction",
});

const command_list = Object.keys(commands);
const formatted_list = command_list.map((cmd) => {
  return `<white class="command">${cmd}</white>`;
});
const help = formatter.format(formatted_list);

const user = "guest";
const server = "portfolio";

function prompt() {
  return `<green>${user}@${server}</green>:<blue>${cwd.cwd}</blue>$ `;
}

const term = $("body").terminal(commands, {
  greetings: false,
  checkArity: false,
  completion: true,
  prompt,
});
term.on("click", ".command", function () {
  const command = $(this).text();
  term.exec(command);
});
term.on("click", ".directory", function () {
  const dir = $(this).text();
  term.exec(`cd ~/${dir}`);
});

function rainbow(string) {
  return lolcat
    .rainbow(function (char, color) {
      char = $.terminal.escape_brackets(char);
      return `[[;${hex(color)};]${char}]`;
    }, string)
    .join("\n");
}

function hex(color) {
  return (
    "#" +
    [color.red, color.green, color.blue]
      .map((n) => {
        return n.toString(16).padStart(2, "0");
      })
      .join("")
  );
}

const re = new RegExp(`^\s*(${command_list.join("|")}) (.*)`);

$.terminal.new_formatter(function (string) {
  return string.replace(re, function (_, command, args) {
    return `<white>${command}</white> <aqua>${args}</aqua>`;
  });
});

$.terminal.xml_formatter.tags.green = (attrs) => {
  return `[[;#44D544;]`;
};
$.terminal.xml_formatter.tags.blue = (attrs) => {
  return `[[;#55F;;${attrs.class}]`;
};

figlet.parseFont("Standard", standard);

function render(text, cb) {
  const cols = term.cols();
  return figlet.text(
    text,
    {
      font: font,
      width: cols,
      whitespaceBreak: true,
    },
    cb,
  );
}

render("Md Samin Yasar Islam", (err, data) => {
  term
    .echo(() => rainbow(data))
    .echo(
      '<white>Type <orange class="command">help</orange> to find all the supported commands</white>',
    );
});
