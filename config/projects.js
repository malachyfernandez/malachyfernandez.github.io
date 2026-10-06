// Project showcase configuration
const projectShowcaseConfig = {
  // Project sections with their titles and descriptions
  sections: [
    {
      title: "Hackathon Projects",
      subtext: "Built in 24 hours or less at various hackathons.",
      // At 2 columns each highlight owns a full row, so only 1 row shows
      // before the fold — 3- and 1-column layouts keep the usual 2 rows.
      twoColFoldRows: 1,
      projects: [
        {
          name: "Biasly",
          type: "Chrome Extension",
          description: "AI‑powered bias detection for articles—think Grammarly for ideological slants.",
          icon: "fas fa-brain",
          backgroundImage: "cover-images/biasly.jpg",
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
          backgroundImage: "cover-images/instant-chef.jpg",
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
          backgroundImage: "cover-images/local-voice.jpg",
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
      title: "Apps & Games",
      subtext: "Interactive applications and games I've built for various purposes.",
      // 2 highlights each own a full row — show both before the fold
      foldRows: 2,
      projects: [
        {
          name: "Minecraft Gradient",
          type: "Web App",
          description: "A highly customizable, visually interactive Minecraft block gradient generator.",
          icon: "fas fa-th-large",
          backgroundImage: "cover-images/mc-gradient-cover-img.jpg",
          highlight: true,
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
              link: "https://malachyfernandez.github.io/MinecraftGradient/",
              target: "_blank"
            }
          ]
        },
        {
          name: "Paper",
          type: "Web App",
          description: "Snap handwritten notes and turn them into clean Markdown and LaTeX with AI-powered recognition.",
          icon: "fas fa-file-alt",
          backgroundImage: "cover-images/paper.jpg",
          highlight: true,
          buttons: [
            {
              text: "GitHub",
              icon: "fab fa-github",
              link: "https://github.com/malachyfernandez/Paper",
              target: "_blank"
            },
            {
              text: "Try It Live",
              icon: "fas fa-external-link-alt",
              link: "https://paper.malachyf.com",
              target: "_blank"
            }
          ]
        },
        {
          name: "Bedrock Schematic Maker",
          type: "Web App",
          description: "A powerful web-based tool for creating Minecraft Bedrock Edition schematics with smart shape generation and real-time preview.",
          icon: "fas fa-cube",
          backgroundImage: "cover-images/mc-schematic.jpg",
          buttons: [
            {
              text: "GitHub",
              icon: "fab fa-github",
              link: "https://github.com/malachyfernandez/Bedrock-Schematic-Maker",
              target: "_blank"
            },
            {
              text: "Try It Live",
              icon: "fas fa-external-link-alt",
              link: "https://malachyfernandez.github.io/Bedrock-Schematic-Maker/",
              target: "_blank"
            }
          ]
        },
        {
          name: "KeyRemapper",
          type: "macOS App",
          description: "Change what any key on your Mac types. Click a key, type its new output, done.",
          icon: "fas fa-keyboard",
          backgroundImage: "cover-images/keyremapper.jpg",
          buttons: [
            {
              text: "GitHub",
              icon: "fab fa-github",
              link: "https://github.com/malachyfernandez/KeyRemapper",
              target: "_blank"
            },
            {
              text: "Download",
              icon: "fas fa-download",
              link: "KeyRemapper/",
              target: "_blank"
            }
          ]
        },
        {
          name: "Gerrymander The Game",
          type: "Puzzle Game",
          description: "Redraw district lines to win elections with a minority in this puzzle.",
          icon: "fas fa-map",
          backgroundImage: "cover-images/Gerrymander.jpg",
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
          name: "Blend In",
          type: "Web Party Game",
          description: "Inspired by Chameleon. Everyone knows the secret word except the Imposter. Try to blend in.",
          icon: "fas fa-user-secret",
          backgroundImage: "cover-images/chameleon.jpg",
          buttons: [
            {
              text: "GitHub",
              icon: "fab fa-github",
              link: "https://github.com/malachyfernandez/Chameleon",
              target: "_blank"
            },
            {
              text: "Play Game",
              icon: "fas fa-gamepad",
              link: "https://malachyfernandez.github.io/Chameleon/",
              target: "_blank"
            }
          ]
        },
        {
          name: "THE HUNT: An Educator's Amygdala",
          type: "Game for ED204",
          description: "A text-based game created for ED204 that explores implicit bias in education through a metaphorical hunting experience.",
          icon: "fas fa-graduation-cap",
          backgroundImage: "cover-images/the-hunt.jpg",
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
        },
        {
          name: "AI Photo Editor",
          type: "Web App",
          description: "A powerful, browser-based photo editor with layer-based editing and AI-powered transformations using Google Gemini.",
          icon: "fas fa-image",
          backgroundImage: "cover-images/photo-editor.jpg",
          buttons: [
            {
              text: "GitHub",
              icon: "fab fa-github",
              link: "https://github.com/malachyfernandez/ImageEditor",
              target: "_blank"
            },
            {
              text: "Try It Live",
              icon: "fas fa-external-link-alt",
              link: "https://image-editor-five-beta.vercel.app/",
              target: "_blank"
            }
          ]
        }
        // {
        //   name: "Lingo Max",
        //   type: "Web App",
        //   description: "AI-powered language tutor with an expressive talking SVG face. Bring your own OpenRouter key.",
        //   icon: "fas fa-language",
        //   backgroundImage: "cover-images/lingo-max.jpg",
        //   buttons: [
        //     {
        //       text: "GitHub",
        //       icon: "fab fa-github",
        //       link: "https://github.com/malachyfernandez/Ai-Duolingo-Max",
        //       target: "_blank"
        //     },
        //     {
        //       text: "Try It Live",
        //       icon: "fas fa-external-link-alt",
        //       link: "https://malachyfernandez.github.io/Ai-Duolingo-Max/",
        //       target: "_blank"
        //     }
        //   ]
        // }
      ]
    },
    {
      title: "Browser Extensions",
      subtext: "Browser extensions I've built to solve everyday problems and enhance productivity.",
      projects: [
        {
          name: "SkipScroll",
          type: "Chrome Extension",
          description: "Instantly jump to real Google search results using just your keyboard.",
          icon: "fas fa-mouse-pointer",
          backgroundImage: "cover-images/skip-scroll.jpg",
          highlight: true,
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
          name: "Gmail Peek",
          type: "Zen Browser Mod",
          description: "Arc-style inbox preview when hovering a pinned Gmail tab. Uses Gmail's Atom feed — no API key needed.",
          icon: "fas fa-inbox",
          backgroundImage: "cover-images/Gmail-Peak.jpg",
          highlight: true,
          buttons: [
            {
              text: "GitHub",
              icon: "fab fa-github",
              link: "https://github.com/malachyfernandez/gmail-peek",
              target: "_blank"
            },
            {
              text: "Sine Store",
              icon: "fas fa-store",
              link: "https://sineorg.github.io/store/",
              target: "_blank"
            }
          ]
        },
        {
          name: "GeminiStrip",
          type: "Chrome Extension",
          description: "A Chrome extension that strips away inline source citations on Google Gemini for a cleaner reading experience.",
          icon: "fas fa-magic",
          backgroundImage: "cover-images/gemini-strip.jpg",
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
          backgroundImage: "cover-images/news-breaker.jpg",
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
          backgroundImage: "cover-images/tiktok-grab.jpg",
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
