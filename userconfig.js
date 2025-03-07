const palette = frappe;

const default_config = {
  overridestorage: true,
  temperature: {
    location: "Surabaya",
    scale: "C",
 },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "",
  openLastVisitedTab: false,
  tabs: [
    {
      name: "自分",
      background_url: "src/img/banners/cbg-15.gif",
      categories: [
        {
          name: "メディア",
          links: [
            {
              name: "mastodon",
              url: "https://mastodon.social",
              icon: "brand-mastodon",
              icon_color: palette.green,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/",
              icon: "brand-reddit",
              icon_color: palette.peach,
            },
            {
              name: "youtube",
              url: "https://www.youtube.com/",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
            {
              name: "twitch",
              url: "https://www.twitch.tv/",
              icon: "brand-twitch",
              icon_color: palette.blue,
            },
            {
              name: "lemmy",
              url: "https://lemmy.ml/",
              icon: "users",
              icon_color: palette.sky,
            },
          ],
        },
        {
          name: "職場",
          links: [
            {
              name: "mail",
              url: "https://mail.proton.me",
              icon: "brand-campaignmonitor",
              icon_color: palette.green,
            },
            {
              name: "calendar",
              url: "https://calendar.proton.me",
              icon: "calendar-filled",
              icon_color: palette.peach,
            },
            {
              name: "vault",
              url: "https://vault.bitwarden.com",
              icon: "lock",
              icon_color: palette.red,
            },
            {
              name: "drive",
              url: "https://drive.proton.me",
              icon: "cloud",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "大学生",
          links: [
            {
              name: "aules",
              url: "https://aules.edu.gva.es/semipresencial/my/index.php?lang=es",
              icon: "school",
              icon_color: palette.green,
            },
            {
              name: "outlook",
              url: "https://outlook.office.com/mail/",
              icon: "inbox",
              icon_color: palette.peach,
            },
            {
              name: "aws",
              url: "https://awsacademy.instructure.com/",
              icon: "brand-aws",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "仕事",
          links: [
            {
              name: "linkedin",
              url: "https://www.linkedin.com/",
              icon: "brand-linkedin",
              icon_color: palette.green,
            },
          ],
        },
        {
          name: "サービス",
          links: [
            {
              name: "portainer",
              url: "http://127.0.0.1:9000",
              icon: "brand-docker",
              icon_color: palette.green,
            },
            {
              name: "syncthing",
              url: "http://127.0.0.1:8384/",
              icon: "refresh",
              icon_color: palette.peach,
            },
            {
              name: "stirling-pdf",
              url: "http://127.0.0.1:7896/",
              icon: "pdf",
              icon_color: palette.red,
            },
            {
              name: "vercel",
              url: "https://vercel.com/dashboard",
              icon: "brand-vercel",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "開発者",
      background_url: "src/img/banners/retro-mario.png",
      categories: [
        {
          name: "メディア",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "dev-community",
              url: "https://dev.to/",
              icon: "article",
              icon_color: palette.peach,
            },
            {
              name: "wakatime",
              url: "https://wakatime.com",
              icon: "24-hours",
              icon_color: palette.red,
            },
            {
              name: "dotfyle",
              url: "https://dotfyle.com/",
              icon: "puzzle",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "学ぶ",
          links: [
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: palette.green,
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.peach,
            },
            {
              name: "w3schools",
              url: "https://www.w3schools.com/",
              icon: "school",
              icon_color: palette.red,
            },
            {
              name: "exercism",
              url: "https://exercism.org/",
              icon: "calculator",
              icon_color: palette.blue,
            },
          ],
        },
