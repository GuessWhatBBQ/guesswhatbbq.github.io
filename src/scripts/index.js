import "jquery.terminal/css/jquery.terminal.min.css";
import "../styles/index.css";
import terminal from "jquery.terminal";
terminal($);
import xml_formatting from "jquery.terminal/js/xml_formatting";
xml_formatting($);

// const lolcat = await import("isomorphic-lolcat");
// import "../../node_modules/isomorphic-lolcat/index.js";
// import "../index.js";
// import "https:cdn.jsdelivr.net/npm/isomorphic-lolcat";
// console.log(lolcat);

import { directories } from "./directories.js";
import {
  createLsCommand,
  createCdCommand,
  createCatCommand,
  createHelpCommand,
} from "./commands.js";
import { render } from "./figlet.js";

const root = "~";
var cwd = { cwd: root };
const commands = {
  help() {
    createHelpCommand(term, commands)();
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

const re = new RegExp(`^\s*(${Object.keys(commands).join("|")}) (.*)`);

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

render(
  "Md Samin Yasar Islam",
  (err, data) => {
    term
      .echo(() => rainbow(data))
      .echo(
        '<white>Type <orange class="command">help</orange> to find all the supported commands</white>',
      );
  },
  "Standard",
  term.cols(),
);
