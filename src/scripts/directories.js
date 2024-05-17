export const directories = {
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
