import "jquery.terminal/css/jquery.terminal.min.css";
import "../styles/index.css";
import terminal from "jquery.terminal";
terminal($);
import xml_formatting from "jquery.terminal/js/xml_formatting";
xml_formatting($);

import { directories } from "./directories.js";
import {
  createLsCommand,
  createCdCommand,
  createCatCommand,
  createHelpCommand,
  createBannerCommand,
} from "./commands.js";
import { setTheme, createPrompt } from "./theme.js";

var directoryInfo = { cwd: "~", root: "~" };
const commands = {
  help() {
    help();
  },
  cd(dir = null) {
    cd(dir);
  },
  ls(dir = null) {
    ls(dir);
  },
  cat() {
    cat();
  },
  banner() {
    banner();
  },
};

const term = $("body").terminal(commands, {
  greetings: false,
  checkArity: false,
  completion: true,
  prompt: createPrompt("guest", "portfolio", directoryInfo),
});

const help = createHelpCommand(term, commands),
  cd = createCdCommand(term, directories, directoryInfo),
  ls = createLsCommand(term, directories, directoryInfo),
  cat = createCatCommand(term, directories, directoryInfo),
  banner = createBannerCommand(term);

term.on("click", ".command", function () {
  const command = $(this).text();
  term.exec(command);
});
term.on("click", ".directory", function () {
  const dir = $(this).text();
  term.exec(`cd ~/${dir}`);
});

setTheme($, commands);

term.exec("banner", true);
