import figlet from "figlet";
import standard from "figlet/importable-fonts/Standard";

figlet.parseFont("Standard", standard); // name should be the same one used in figlet.text

export function render(text, cb, font, cols) {
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
