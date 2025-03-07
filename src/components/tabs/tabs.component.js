class Links extends Component {
  constructor() {
    super();
  }

  static getIcon(link) {
    const defaultColor = CONFIG.palette.base;

    return link.icon
      ? `<i class="ti ti-${link.icon} link-icon"
            style="color: ${link.icon_color ?? defaultColor}"></i>`
      : "";
  }

  static getAll(tabName, tabs) {
    const { categories } = tabs.find((f) => f.name === tabName);

    return `
      ${categories
        .map(({ name, links }) => {
          return `
          <li>
            <h1>${name}</h1>
              <div class="links-wrapper">
              ${links
                .map(
                  (link) => `
                  <div class="link-info">
                    <a href="${link.url}">
                      ${Links.getIcon(link)}
                      ${link.name ? `<p class="link-name">${link.name}</p>` : ""}
                    </a>
                </div>`,
                )
                .join("")}
            </div>
          </li>`;
        })
        .join("")}
    `;
  }
}

class Category extends Component {
  constructor() {
    super();
  }

  static getBackgroundStyle(url) {
    return `style="background: url(${url}) no-repeat; background-size: contain;"`;
  }

  static getAll(tabs) {
    return `
      ${tabs
        .map(({ name, background_url }, index) => {
          return `<ul class="${name}" ${Category.getBackgroundStyle(background_url)} ${index == 0 ? "active" : ""}>
            <div class="links">${Links.getAll(name, tabs)}</div>
          </ul>`;
        })
        .join("")}
    `;
  }
}

class Tabs extends Component {
  refs = {};

  constructor() {
    super();
    this.tabs = CONFIG.tabs;
  }

  imports() {
    return [
      this.resources.icons.material,
      this.resources.icons.tabler,
      this.resources.fonts.raleway,
      this.resources.libs.awoo,
    ];
  }

  style() {
    return `
      status-bar {
          bottom: -50px;
          height: 32px;
          background: ${CONFIG.palette.base};
          border-radius: 10px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.50);
      }

      #panels, #panels ul,
      #panels .links {
          position: absolute;
      }

      .nav {
          color: #cad3f5;
      }

      #panels {
          border-radius: 10px;
          width: 90%;
          height: 75%;
          right: 0;
          left: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.50);
          background: ${CONFIG.palette.base};
      }

      .categories {
          width: 100%;
          height: 100%;
          overflow: hidden;
          position: relative;
          border-radius: 10px;
      }

      .categories ul {
          --panelbg: transparent;
          --flavour: var(--accent);
          width: 106%;
          height: 100%;
          right: 100%;
          background: ${CONFIG.palette.base} url("../img/bg-1.gif") repeat left;
          transition: all .3s;
          # animation: scroll 25s ease-in-out infinite;
      }

      @keyframes scroll {
          50% {
              background-position-x: -240px;
          }
      }

      .categories ul:nth-child(1) {
          --flavour: ${CONFIG.palette.lavender};
      }

      .categories ul:nth-child(2) {
          --flavour: ${CONFIG.palette.mauve};
      }

      .categories ul:nth-child(3) {
          --flavour: ${CONFIG.palette.peach};
      }

      .categories ul:nth-child(4) {
          --flavour: ${CONFIG.palette.rosewater};
      }

      .categories ul:nth-child(5) {
          --flavour: ${CONFIG.palette.pink};

      }
      .categories ul:nth-child(6) {
          --flavour: ${CONFIG.palette.blue};
      }

      .categories ul[active] {
          right: 0;
          z-index: 1;
      }

      .categories .links {
          right: 0;
          width: 70%;
          height: 100%;
          background: ${CONFIG.palette.base};
          padding: 2%;
          flex-wrap: wrap;
          box-sizing: content-box;
      }

      .categories .links li {
          list-style: none;
      }

      .categories ul .links a {
          color: ${CONFIG.palette.text};
          text-decoration: none;
          font: 700 18px JetBrainsMono Nerd Font;
          src: url(../fonts/jetbrains-mono.ttf);
          transition: all .1s;
          display: inline-flex;
          align-items: center;
          padding: .4em .7em;
          background: ${CONFIG.palette.mantle};
          box-shadow: 0 4px ${CONFIG.palette.mantle}, 0 5px 10px rgb(0 0 0 / 40%);
          border-radius: 10px;
          margin-bottom: .7em;
      }

      .categories .link-info {
          display: inline-flex;
      }

      .categories .link-info:not(:last-child) { margin-right: .5em; }

      .categories ul .links a:hover {
          transform: translate(0, 4px);
          box-shadow: 0 0 rgba(0, 0, 0, 0.25), 0 0 0 rgba(0, 0, 0, .5), 0 -0px 5px rgba(0, 0, 0, .1);
          color: var(--flavour);
      }

      .categories ul::after {
          content: attr(class);
          position: absolute;
          display: flex;
          text-transform: uppercase;
          overflow-wrap: break-word;
          width: 25px;
          height: 250px;
          padding: 1em;
          margin: auto;
          margin-left: 20px;
          border-radius: 10px;
          box-shadow: inset 0 0 0 2px var(--flavour);
          left: calc(15% - 42.5px);
          bottom: 0;
          top: 0;
          background: linear-gradient(to top, rgb(50 48 47 / 90%), transparent);
          color: var(--flavour);
          letter-spacing: 1px;
          font: 700 24px JetBrainsMono Nerd Font;
          src: url(../fonts/jetbrains-mono.ttf);
          text-align: center;
          flex-wrap: wrap;
          word-break: break-all;
          align-items: center;
          backdrop-filter: blur(10px);
      }

      .categories .links li:not(:last-child) {
          box-shadow: 0 2.5px 0 ${CONFIG.palette.surface0};
          padding: 0 0 .5em 0;
          margin-bottom: 1.5em;
      }

      .categories .links li h1 {
          color: ${CONFIG.palette.text};
          opacity: 0.5;
          font-size: 13px;
          margin-bottom: 1em;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          font: 700 14px JetBrainsMono Nerd Font;
          src: url(../fonts/jetbrains-mono.ttf);
      }

      .categories .link-icon {
          font-size: 27px;
          color: ${CONFIG.palette.text};
      }

      .categories .link-icon + .link-name {
          margin-left: 10px;
      }

      .categories .links-wrapper {
          display: flex;
          flex-wrap: wrap;
      }

      .ti {
          animation: fadeInAnimation ease .5s;
          animation-iteration-count: 1;
          animation-fill-mode: forwards;
          height: 27px;
          width: 27px;
      }

      @keyframes fadeInAnimation {
          0% {
              opacity: 0;
          }
          100% {
              opacity: 1;
          }
      }
    `;
  }

  template() {
    return `
      <div id="links" class="-">

        <div id="panels">
          <div class="categories">
            ${Category.getAll(this.tabs)}
          </div>
          <status-bar class="!-"></status-bar>
        </div>
      </div>
    `;
  }

  connectedCallback() {
    this.render();
  }
}
