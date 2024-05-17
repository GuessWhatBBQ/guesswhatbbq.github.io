export function createCommands(terminal) {
  const commands = {
    help() {
      terminal.echo(`List of available commands: ${help}`, {
        delay: 10,
        typing: true,
      });
    },
    echo(...args) {
      if (args.length > 0) {
        terminal.echo(args.join(" "));
      }
    },
  };
  return commands;
}

function printDirs(terminal, directories) {
  const dirs = Object.keys(directories);
  terminal.echo(
    dirs
      .map((dir) => {
        return `<blue class="directory">${dir}</blue>`;
      })
      .join("\n"),
  );
}

export function createLsCommand(
  terminal,
  directories,
  rootDirectory,
  globalDirectoryState,
) {
  const { cwd } = globalDirectoryState;
  function ls(dir) {
    if (dir) {
      if (dir.startsWith("~/")) {
        const path = dir.substring(2);
        const dirs = path.split("/");
        if (dirs.length > 1) {
          terminal.error("Invalid directory");
        }
      } else if (cwd === rootDirectory) {
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
    } else if (cwd === rootDirectory) {
      printDirs(terminal, directories);
    }
  }
  return ls;
}

export function createCdCommand(
  terminal,
  directories,
  rootDirectory,
  globalDirectoryState,
) {
  function cd(dir) {
    const currentDirectory = globalDirectoryState.cwd;
    if (dir === null || (dir === ".." && currentDirectory !== rootDirectory)) {
      globalDirectoryState.cwd = rootDirectory;
    } else if (
      dir.startsWith("~/") &&
      directories.hasOwnProperty(dir.substring(2))
    ) {
      globalDirectoryState.cwd = dir;
    } else if (directories.hasOwnProperty(dir)) {
      globalDirectoryState.cwd = rootDirectory + "/" + dir;
    } else {
      terminal.error("Wrong directory");
    }
  }
  return cd;
}

export function createCatCommand(
  terminal,
  directories,
  rootDirectory,
  globalDirectoryState,
) {
  function cat() {
    const { cwd } = globalDirectoryState;
    if (cwd !== rootDirectory) {
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
