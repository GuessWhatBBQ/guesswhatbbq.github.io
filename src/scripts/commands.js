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
  const { currentDirectory } = globalDirectoryState;
  function ls(dir) {
    if (dir) {
      if (dir.startsWith("~/")) {
        const path = dir.substring(2);
        const dirs = path.split("/");
        if (dirs.length > 1) {
          terminal.error("Invalid directory");
        }
      } else if (currentDirectory === rootDirectory) {
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
    } else if (currentDirectory === rootDirectory) {
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
