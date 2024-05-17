export function createPrompt(user, server, globalDirectoryState) {
  function prompt() {
    const { cwd } = globalDirectoryState;
    return `<green>${user}@${server}</green>:<blue>${cwd}</blue>$ `;
  }
  return prompt;
}

export function setTheme(jQuery, commands) {
  const re = new RegExp(`^\s*(${Object.keys(commands).join("|")}) (.*)`);
  jQuery.terminal.new_formatter(function (string) {
    return string.replace(re, function (_, command, args) {
      return `<white>${command}</white> <aqua>${args}</aqua>`;
    });
  });

  jQuery.terminal.xml_formatter.tags.green = (attrs) => {
    return `[[;#44D544;]`;
  };
  jQuery.terminal.xml_formatter.tags.blue = (attrs) => {
    return `[[;#55F;;${attrs.class}]`;
  };
}
