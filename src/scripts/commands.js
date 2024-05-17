import { render } from "./figlet.js";

function printDirs(terminal, directories) {
  const dirs = Object.keys(directories);
  terminal.echo(
    dirs
      .map((dir) => {
        return `<blue class="directory">${dir}</blue>`;
      })
      .join("\n"),
    { delay: 10, typing: true },
  );
}

export function createLsCommand(terminal, directories, directoryInfo) {
  const { cwd, root } = directoryInfo;
  function ls(dir) {
    if (dir) {
      if (dir.startsWith("~/")) {
        const path = dir.substring(2);
        const dirs = path.split("/");
        if (dirs.length > 1) {
          terminal.error("Invalid directory");
        }
      } else if (cwd === root) {
        if (dir in directories) {
          terminal.echo(directories[dir].join("\n"));
        } else {
          terminal.error("Invalid directory");
        }
      } else if (dir === "..") {
        printDirs(terminal, directories);
      } else {
        terminal.error("Invalid directory");
      }
    } else if (cwd === root) {
      printDirs(terminal, directories);
    }
  }
  return ls;
}

export function createCdCommand(terminal, directories, directoryInfo) {
  function cd(dir) {
    const currentDirectory = directoryInfo.cwd;
    const { root } = directoryInfo;
    if (dir === null || (dir === ".." && currentDirectory !== root)) {
      directoryInfo.cwd = root;
    } else if (
      dir.startsWith("~/") &&
      directories.hasOwnProperty(dir.substring(2))
    ) {
      directoryInfo.cwd = dir;
    } else if (directories.hasOwnProperty(dir)) {
      directoryInfo.cwd = root + "/" + dir;
    } else {
      terminal.error("Wrong directory");
    }
  }
  return cd;
}

export function createCatCommand(terminal, directories, directoryInfo) {
  function cat() {
    const { cwd, root } = directoryInfo;
    if (cwd !== root) {
      const dir = cwd.substring(2);
      async function animation() {
        const prompt = terminal.get_prompt();
        terminal.set_prompt("");
        for (const string of directories[dir]) {
          await terminal.echo(string, { delay: 2, typing: true });
        }
        terminal.set_prompt(prompt);
      }
      animation();
    }
  }
  return cat;
}

export function createHelpCommand(terminal, commands) {
  function help() {
    const formatter = new Intl.ListFormat("en", {
      style: "long",
      type: "conjunction",
    });

    const formatted_list = Object.keys(commands).map((cmd) => {
      return `<white class="command">${cmd}</white>`;
    });
    const help = formatter.format(formatted_list);
    terminal.echo(`List of available commands: ${help}`, {
      delay: 2,
      typing: true,
    });
  }
  return help;
}

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

export function createBannerCommand(terminal) {
  function banner() {
    render(
      "Md Samin Yasar Islam",
      (err, data) => {
        terminal
          .echo(() => rainbow(data))
          .echo(
            '<white> Type <orange class="command">help</orange> to find all the supported commands, or simply click around since all commands \n and directory listings are clickable</white>',
            { delay: 2, typing: true },
          );
      },
      "Standard",
      terminal.cols(),
    );
  }
  return banner;
}
