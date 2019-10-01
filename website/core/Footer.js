const React = require("react");

const siteConfig = require(process.cwd() + "/siteConfig.js");

class Footer extends React.Component {
  render() {
    const {
      baseUrl,
      copyright,
      colors: { secondaryColor }
    } = this.props.config;
    const docsUrl = `${baseUrl}docs/`;
    return (
      <footer
        className="nav-footer"
        id="footer"
        style={{ backgroundColor: secondaryColor }}
      >
        <section className="sitemap">
          {this.props.config.footerIcon && (
            <a href={this.props.config.baseUrl} className="nav-home">
              <img
                src={`${this.props.config.baseUrl}${this.props.config.footerIcon}`}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            </a>
          )}
          <div>
            <h5>Overview</h5>
            <a href={`${docsUrl}bsp.html`}>Specification</a>
          </div>
          <div>
            <h5>Social</h5>
            <a href="https://github.com/scalameta/metals" target="_blank">
              <img src="https://img.shields.io/github/stars/scalacenter/bsp.svg?color=%23087e8b&label=stars&logo=github&style=social" />
            </a>
            <a href="https://gitter.im/scalameta/metals" target="_blank">
              <img src="https://img.shields.io/gitter/room/scalacenter/bsp.svg?logo=gitter&style=social" />
            </a>
          </div>
        </section>
        <section className="copyright">{copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
