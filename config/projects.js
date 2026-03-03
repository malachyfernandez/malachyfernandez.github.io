// Project showcase configuration
const projectShowcaseConfig = {
  // Project sections with their titles and descriptions
  sections: [
    {
      title: "Hackathon Projects",
      subtext: "Built in 24 hours or less at various hackathons—fast, fun, and furious.",
      projects: [
        {
          name: "Biasly",
          type: "Chrome Extension",
          description: "AI‑powered bias detection for articles—think Grammarly for ideological slants.",
          icon: "fas fa-brain",
          award: "🏆 Hack@UNCP 2025 Best Education Project",
          buttons: [
            {
              text: "GitHub",
              icon: "fab fa-github",
              link: "https://github.com/dmavendano/biasly",
              target: "_blank"
            },
            {
              text: "DevPost",
              icon: "fas fa-code",
              link: "https://devpost.com/software/baisly",
              target: "_blank"
            }
          ]
        },
        {
          name: "InstaChef",
          type: "Web App",
          description: "A minimal recipe platform focusing on step‑by‑step guidance over fluff.",
          icon: "fas fa-utensils",
          award: "🏆 Hack@Davidson 2025 Best AI Project",
          buttons: [
            {
              text: "GitHub",
              icon: "fab fa-github",
              link: "https://github.com/ZaraTek/InstaChef",
              target: "_blank"
            },
            {
              text: "DevPost",
              icon: "fas fa-code",
              link: "https://devpost.com/software/instachef",
              target: "_blank"
            }
          ]
        },
        {
          name: "LocalVoice",
          type: "Web App",
          description: "Enter your address to find local election candidates with basic info & photos.",
          icon: "fas fa-bullhorn",
          award: "🥈 Hack NC 2nd Place Beginner Project",
          buttons: [
            {
              text: "GitHub",
              icon: "fab fa-github",
              link: "https://github.com/ZaraTek/LocalVoice",
              target: "_blank"
            },
            {
              text: "DevPost",
              icon: "fas fa-code",
              link: "https://devpost.com/software/local-elections-matter",
              target: "_blank"
            }
          ]
        }
      ]
    },
    {
      title: "Web Apps & Games",
      subtext: "Interactive web applications and games I've built for various purposes.",
      projects: [
        {
          name: "Minecraft Gradient",
          type: "Web App",
          description: "A highly customizable, visually interactive Minecraft block gradient generator.",
          icon: "fas fa-th-large",
          buttons: [
            {
              text: "GitHub",
              icon: "fab fa-github",
              link: "https://github.com/malachyfernandez/MinecraftGradient",
              target: "_blank"
            },
            {
              text: "Try It Live",
              icon: "fas fa-external-link-alt",
              link: "https://malachyfernandez.github.io/minecraftGradient/",
              target: "_blank"
            }
          ]
        },
        {
          name: "Gerrymander The Game",
          type: "Puzzle Game",
          description: "Redraw district lines to win elections with a minority in this puzzle.",
          icon: "fas fa-map",
          buttons: [
            {
              text: "GitHub",
              icon: "fab fa-github",
              link: "https://github.com/malachyfernandez/GerrymanderTheGame",
              target: "_blank"
            },
            {
              text: "Play Game",
              icon: "fas fa-gamepad",
              link: "https://malachyfernandez.github.io/GerrymanderTheGame/",
              target: "_blank"
            }
          ]
        },
        {
          name: "THE HUNT: An Educator's Amygdala",
          type: "Game for ED204",
          description: "A text-based game created for ED204 that explores implicit bias in education through a metaphorical hunting experience.",
          icon: "fas fa-graduation-cap",
          buttons: [
            {
              text: "GitHub",
              icon: "fab fa-github",
              link: "https://github.com/malachyfernandez/ED204-game",
              target: "_blank"
            },
            {
              text: "Play Game",
              icon: "fas fa-gamepad",
              link: "https://ed204.malachyf.com/",
              target: "_blank"
            }
          ]
        }
      ]
    },
    {
      title: "Chrome Extensions",
      subtext: "Browser extensions I've built to solve everyday problems and enhance productivity.",
      projects: [
        {
          name: "SkipScroll",
          type: "Chrome Extension",
          description: "Instantly jump to real Google search results using just your keyboard.",
          icon: "fas fa-mouse-pointer",
          buttons: [
            {
              text: "GitHub",
              icon: "fab fa-github",
              link: "https://github.com/malachyfernandez/SkipScroll",
              target: "_blank"
            },
            {
              text: "Web Store",
              icon: "fab fa-chrome",
              link: "https://chrome.google.com/webstore/detail/skipscroll-navigate-googl/feocoenjkpofbmnoiglchhmiofogkgbn",
              target: "_blank"
            }
          ]
        },
        {
          name: "GeminiStrip",
          type: "Chrome Extension",
          description: "A Chrome extension that strips away inline source citations on Google Gemini for a cleaner reading experience.",
          icon: "fas fa-magic",
          buttons: [
            {
              text: "GitHub",
              icon: "fab fa-github",
              link: "https://github.com/malachyfernandez/GeminiStrip",
              target: "_blank"
            },
            {
              text: "Web Store",
              icon: "fab fa-chrome",
              link: "https://chromewebstore.google.com/detail/geministrip/lnjlllkngckpdmbmiiclpemhdamdbleo?authuser=0&hl=en",
              target: "_blank"
            }
          ]
        },
        {
          name: "NewsBreaker",
          type: "Chrome Extension",
          description: "Bypass News & Observer ad-blocker detection screens to read articles without disabling your ad blocker.",
          icon: "fas fa-newspaper",
          buttons: [
            {
              text: "GitHub",
              icon: "fab fa-github",
              link: "https://github.com/malachyfernandez/NewsBreaker",
              target: "_blank"
            },
            {
              text: "Web Store",
              icon: "fab fa-chrome",
              link: "https://chromewebstore.google.com/detail/newsbreaker/ohnaemhiocoddblelihkedcpacjdelgg?authuser=0&hl=en",
              target: "_blank"
            }
          ]
        },
        {
          name: "TikGrab",
          type: "Chrome Extension",
          description: "A powerful Chrome extension that lets you download TikTok videos instantly with one click.",
          icon: "fab fa-tiktok",
          buttons: [
            {
              text: "GitHub",
              icon: "fab fa-github",
              link: "https://github.com/malachyfernandez/TikGrab",
              target: "_blank"
            },
            {
              text: "Web Store",
              icon: "fab fa-chrome",
              link: "https://chromewebstore.google.com/detail/tikgrab/meodmenhnplokhmaddipllledkimnche?authuser=0&hl=en",
              target: "_blank"
            }
          ]
        }
      ]
    }
  ]
};
