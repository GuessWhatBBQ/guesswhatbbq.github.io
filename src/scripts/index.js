import "jquery.terminal/css/jquery.terminal.min.css";
import "../styles/index.css";
import terminal from "jquery.terminal";
terminal($);
import figlet from "figlet";
import standard from "figlet/importable-fonts/Standard";
import xml_formatting from "jquery.terminal/js/xml_formatting";
xml_formatting($);

const font = "Standard";
figlet.parseFont(font, standard); // name should be the same one used in figlet.text

function print_dirs() {
  term.echo(
    dirs
      .map((dir) => {
        return `<blue class="directory">${dir}</blue>`;
      })
      .join("\n"),
  );
}

const root = "~";
let cwd = root;
const directories = {
  education: [
    "<white>education</white>",

    '* <a href="https://www.iutoic-dhaka.edu">Islamic University of Technology</a> <yellow>"Bsc in Software Engineering"</yellow> 2020-2024',
    '* <a href="https://scholasticabd.com/">Scholastica</a> 2003-2019',
  ],
  projects: [
    "<white>Open Source projects</white>",
    [
      [
        "FantechX9ThorDriver",
        "https://github.com/GuessWhatBBQ/FantechX9ThorDriver",
        "open-source driver for the Fantech X9 Thor RGB gaming mouse targeted for linux systems",
      ],
      ["N/A", "web.site", "N/A"],
    ].map(([name, url, description = ""]) => {
      return `* <a href="${url}">${name}</a> &mdash; <white>${description}</white>`;
    }),
  ].flat(),
  skills: [
    "<white>languages</white>",

    ["JavaScript", "Python", "SQL", "C#", "Bash"].map(
      (lang) => `* <yellow>${lang}</yellow>`,
    ),
    "<white>libraries</white>",
    ["React.js", "Redux", "Jest"].map((lib) => `* <green>${lib}</green>`),
    "<white>tools</white>",
    ["Docker", "git", "GNU/Linux"].map((lib) => `* <blue>${lib}</blue>`),
  ].flat(),
};
const dirs = Object.keys(directories);
const commands = {
  help() {
    term.echo(`List of available commands: ${help}`, {
      delay: 10,
      typing: true,
    });
  },
  echo(...args) {
    if (args.length > 0) {
      term.echo(args.join(" "));
    }
  },
  cd(dir = null) {
    if (dir === null || (dir === ".." && cwd !== root)) {
      cwd = root;
    } else if (dir.startsWith("~/") && dirs.includes(dir.substring(2))) {
      cwd = dir;
    } else if (dirs.includes(dir)) {
      cwd = root + "/" + dir;
    } else {
      this.error("Wrong directory");
    }
  },
  ls(dir = null) {
    if (dir) {
      if (dir.startsWith("~/")) {
        const path = dir.substring(2);
        const dirs = path.split("/");
        if (dirs.length > 1) {
          this.error("Invalid directory");
        } else {
          const dir = dirs[0];
          this.echo(directories[dir].join("\n"));
        }
      } else if (cwd === root) {
        if (dir in directories) {
          this.echo(directories[dir].join("\n"));
        } else {
          this.error("Invalid directory");
        }
      } else if (dir === "..") {
        print_dirs();
      } else {
        this.error("Invalid directory");
      }
    } else if (cwd === root) {
      print_dirs();
    } else {
      const dir = cwd.substring(2);
      this.echo(directories[dir].join("\n"));
    }
  },
  cat() {
    if (cwd !== root) {
      const dir = cwd.substring(2);
      let term = this;
      async function animation() {
        const prompt = term.get_prompt();
        term.set_prompt("");
        for (const string of directories[dir]) {
          console.log(string);
          await term.echo(string, { delay: 10, typing: true });
        }
        term.set_prompt(prompt);
      }
      animation();
      console.log("Done");
      // this.echo(directories[dir].join("."), { delay: 10, typing: true });
    }
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
  return `<green>${user}@${server}</green>:<blue>${cwd}</blue>$ `;
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
