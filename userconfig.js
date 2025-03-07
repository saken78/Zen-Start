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
