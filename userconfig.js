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
      name: "personal",
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
