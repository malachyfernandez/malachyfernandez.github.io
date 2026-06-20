// Archive configuration
// A nested tree of older experiments, tools, and one-off pages.
// A node is a FOLDER if it has `children`, otherwise it's a LINK (needs `link`).
const archiveConfig = {
  title: "Archive",
  subtext: "Older experiments, tools, and one-off pages — the full back catalog.",
  tree: [
    {
      name: "Tools & Experiments",
      icon: "fas fa-wrench",
      children: [
        { name: "DOCX Date Editor", description: "Rewrite a doc's dates", link: "ChangeFileDate/index.html" },
        { name: "Text Humanizer", description: "Humanize / detect AI text", link: "Humanizer/index.html" },
        { name: "Knitting Architect", description: "Plan knit patterns", link: "KittingArchitect/index.html" },
        { name: "Minimal Partitioner", description: "Split long text", link: "TextSplitter/index.html" },
        { name: "MC Command Generator", description: "Build Minecraft commands", link: "commandGenerator/generator.html" }
      ]
    },
    {
      name: "NC By Train",
      icon: "fas fa-train",
      description: "Train schedule experiments",
      children: [
        { name: "Better Piedmont", description: "Piedmont line schedule", link: "NCByTrain/betterPiedmont.html" },
        { name: "Southbound", description: "Southbound departures", link: "NCByTrain/southbound.html" },
        { name: "Schedule Component", description: "Reusable widget", link: "NCByTrain/schedulecomponent.html" },
        { name: "Schedule Test", description: "Component test page", link: "NCByTrain/test.html" }
      ]
    },
    {
      name: "Odds & Ends",
      icon: "fas fa-archive",
      children: [
        { name: "THE HUNT (build)", description: "ED204 game, local copy", link: "ed204/game.html" },
        { name: "Certificate", description: "Saved certificate page", link: "Testing/test2.html" },
        { name: "Lifeguard Cert", description: "Saved record page", link: "Testing/test.html" }
      ]
    }
  ]
};
