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
