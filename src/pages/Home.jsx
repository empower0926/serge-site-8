import React, { Component } from "react";
import Cookies from "universal-cookie";
import Cookie_Accept from "./cookie_accept_panel";

const cookies = new Cookies();

const nextYear = new Date();
nextYear.setFullYear(new Date().getFullYear() + 10);
class Home extends React.Component {
  constructor(props) {
    super(props);
    if (cookies.get("FlashXchenger") === "fx") {
      this.state = {
        cookieAccept: "",
      };
    } else {
      this.state = {
        cookieAccept: <Cookie_Accept set={this.setcookie} />,
      };
    }
  }
  setcookie = () => {
    this.setState({ cookieAccept: " " });
    cookies.set("FlashXchenger", "fx", { expires: nextYear });
  };
  selectpack(id) {
    let packs = ["Standard", "Premium", "Gold", "Elite"];
    packs.forEach((element) => {
      if (element == id) {
        document.getElementById(element).style.background =
          "linear-gradient(206.27deg, #368C9F 15.28%, rgba(42, 66, 141, 0) 68.37%)";
      } else {
        document.getElementById(element).style.background = "#000231";
      }
    });
  }
  render() {
    return (
      <div>
        <div className="ui-back d-none d-md-block">
          <img
            src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619854345/flashxchanger/ui_back_fjbnj2.svg"
            alt=""
          />
        </div>
        <div className="ui-back-mobile d-block d-md-none">
          <img
            src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619856250/flashxchanger/ui-back-mobile_jry94p.svg"
            alt=""
          />
        </div>

        <div className="container mt-4">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img
                  src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619891536/flashxchanger/logo_zbnr8l.svg"
                  alt=""
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                  <img
                    src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619851175/flashxchanger/menu_icon_pniof7.svg"
                    alt=""
                  />
                </span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="https://trade.flashxchanger.com">
                      Sign In
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link sign-up"
                      href="https://trade.flashxchanger.com">
                      Sign Up
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <section className="top">
          <div className="bg"></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="intro">
                  <div data-aos="fade-down" data-aos-duration="1200">
                    See the ads you need
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400">
                    & get paid doing just that!
                  </div>
                </div>

                <div className="contact-us">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="800"
                    className="contact-intro">
                    Any question? Reach out to us and we’ll get back to you
                    shortly.
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="1200">
                    <a
                      className="a-btn"
                      target="_blank"
                      href="https://discord.gg/PrH2uMdKmw">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="coin-details">
          <div className="container">
            <div className="row ">
              <div className="col-md-4 ">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                  className="coin">
                  <div className="coin-data">
                    <span className="coin-image">
                      <img
                        src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619874803/flashxchanger/OZTG_vwr5kt.svg"
                        alt=""
                      />
                    </span>
                    <span className="coin-name">OZTG/USDT</span>
                  </div>
                  <div>
                    <div className="coin-value" id="coin-value1">
                      $ 0.137
                    </div>
                  </div>
                  <span className="usdt" id="usdt1">
                    00, 000, 000
                  </span>
                  <div className="percent" id="percent1">
                    + 0.00%
                  </div>
                  <div className="chart">
                    <canvas id="live_chart_1"></canvas>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  className="coin">
                  <div className="coin-data">
                    <span className="coin-image">
                      <img
                        src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619874803/flashxchanger/BTC_ahcpqq.svg"
                        alt=""
                      />
                    </span>
                    <span className="coin-name">BTC/USDT</span>
                  </div>
                  <div>
                    <div className="coin-value" id="coin-value2">
                      $ 0.137
                    </div>
                  </div>
                  <span className="usdt" id="usdt2">
                    00, 000, 000
                  </span>
                  <div className="percent" id="percent2">
                    + 0.00%
                  </div>
                  <div className="chart">
                    <canvas id="live_chart_2"></canvas>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                  className="coin">
                  <div className="coin-data">
                    <span className="coin-image">
                      <img
                        src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619874803/flashxchanger/ETH_pwcvls.svg"
                        alt=""
                      />
                    </span>
                    <span className="coin-name">ETH/USDT</span>
                  </div>
                  <div>
                    <div className="coin-value" id="coin-value3">
                      $ 0.137
                    </div>
                  </div>
                  <span className="usdt" id="usdt3">
                    00, 000, 000
                  </span>
                  <div className="percent" id="percent3">
                    + 0.00%
                  </div>
                  <div className="chart">
                    <canvas id="live_chart_3"></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="why">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 data-aos="fade-up" data-aos-duration="1200">
                  Why is FlashXChanger Different?
                </h2>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1200"
                  data-aos-delay="900"
                  className="pie">
                  <img
                    src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619811322/flashxchanger/pie_qibdeq.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-6 points">
                <div className="row point">
                  <div className="col-2">
                    <div
                      data-aos="zoom-in"
                      data-aos-duration="600"
                      data-aos-delay="200">
                      <img
                        src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619805409/flashxchanger/point-1_wrkk9y.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-10">
                    <div
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="400">
                      <span>50%</span> of exchange fees are reinvested in the
                      company’s coin in order to raise the Intrinsic value.
                    </div>
                  </div>
                </div>
                <div className="row point">
                  <div className="col-2">
                    <div
                      data-aos="zoom-in"
                      data-aos-duration="600"
                      data-aos-delay="600">
                      <img
                        src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619805409/flashxchanger/point-2_x0zyuu.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-10">
                    <div
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="800">
                      <span>30%</span> of the exchange fees goes to our
                      affiliate program instead of spending it on expensive
                      Marketing campaigns with very little return!
                    </div>
                  </div>
                </div>
                <div className="row point">
                  <div className="col-2">
                    <div
                      data-aos="zoom-in"
                      data-aos-duration="600"
                      data-aos-delay="1000">
                      <img
                        src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619805409/flashxchanger/point-3_r2wbsi.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-10">
                    <div
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="1200">
                      <span>20%</span> of exchange fees goes to the company to
                      cover operations costs.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row try">
              <div className="col text-center">
                <div data-aos="flip-left" data-aos-duration="800">
                  <a
                    className="a-btn"
                    target="_blank"
                    href="https://trade.flashxchanger.com/">
                    Let’s Try
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="features-desktop">
          <div className="container">
            <div className="row">
              <div className="col">
                <h2 data-aos="fade-up" data-aos-duration="1200">
                  Flash Platform Features
                </h2>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-md-5">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  className="feature purple-card">
                  <div className="feature-image">
                    <img
                      src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619861441/flashxchanger/feature_01_w9f3fi.svg"
                      alt=""
                    />
                  </div>
                  <div className="feature-name">Exchange</div>
                  <div className="feature-desc">
                    Flash offers the most liquid order book in his segment of
                    "tangible asset based exchange". Users can usually exchange
                    asset-pegged / Backed and any Coin with a value link to a
                    tangible asset. Historical Coins such as BTC and ETH will be
                    the only assetless coin be listed.
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                  className="feature">
                  <div className="feature-image">
                    <img
                      src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619861441/flashxchanger/feature_02_reqluw.svg"
                      alt=""
                    />
                  </div>
                  <div className="feature-name">Order Types</div>
                  <div className="feature-desc">
                    Flash offers a suite of order types to give traders the
                    tools they need for every scenario. Discover more about our
                    most advanced Algoritmic orders types.
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                  className="feature">
                  <div className="feature-image">
                    <img
                      src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619861441/flashxchanger/feature_03_kgsigt.svg"
                      alt=""
                    />
                  </div>
                  <div className="feature-name">Customizable Interface</div>
                  <div className="feature-desc">
                    Organize your workspace according to your needs: Compose
                    your layout, choose between themes, set up notifications and
                    data preferences.
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="600"
                  className="feature blue-card">
                  <div className="feature-image">
                    <img
                      src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619861441/flashxchanger/feature_04_umfzsv.svg"
                      alt=""
                    />
                  </div>
                  <div className="feature-name">Security</div>
                  <div className="feature-desc">
                    Security of user information and funds is our first
                    priority. Contact us to know more about our security
                    features and integrations.
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="800"
                  className="feature purple-card">
                  <div className="feature-image">
                    <img
                      src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619861441/flashxchanger/feature_05_fexxzj.svg"
                      alt=""
                    />
                  </div>
                  <div className="feature-name">Community</div>
                  <div className="feature-desc">
                    Join our Growing global community that believes in the power
                    of Cryptocurrency link to tangible asset.
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="1000"
                  className="feature">
                  <div className="feature-image">
                    <img
                      src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619861441/flashxchanger/feature_06_mpywbk.svg"
                      alt=""
                    />
                  </div>
                  <div className="feature-name">Industry Leading API</div>
                  <div className="feature-desc">
                    Our websocket feed lets you easily gain access to real-time
                    market data, while our trading API lets you develop secure,
                    programmatic trading bots.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="stable-coin">
          <div className="container">
            <div className="row d-md-none d-block">
              <div className="col-sm-12 mb-2">
                <h2 data-aos="fade-up" data-aos-duration="1200">
                  Asset Pegged Coin
                </h2>
              </div>
            </div>
            <div className="row stable-coin-image-mobile d-block d-md-none">
              <div className="col-md-12">
                <div>
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="1200"
                    data-aos-delay="800"
                    src="https://res.cloudinary.com/dmeppscpx/image/upload/v1620227628/flashxchanger/coin_elements_emwjwp.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-md-6 my-auto">
                <div className="row d-md-block d-none">
                  <div className="col-sm-12 mb-2">
                    <h2 data-aos="fade-down" data-aos-duration="1200">
                      Stable Coin
                    </h2>
                  </div>
                </div>
                <div className="point row">
                  <span className="col-2">
                    <img
                      data-aos="zoom-in"
                      data-aos-duration="1200"
                      data-aos-delay="200"
                      src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619808975/flashxchanger/stable-coin-point-1_v6ik0p.svg"
                      alt=""
                    />
                  </span>
                  <span
                    className="col-10"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200">
                    OZTG is a tradable Coin with a core valuation based on 1/20
                    value of the grain, which is a subdivision of the gold
                    metric (therefore linked indirectly with gold collateral).
                  </span>
                </div>
                <div className="point row mt-5">
                  <span className="col-2">
                    <img
                      data-aos="zoom-in"
                      data-aos-duration="1200"
                      data-aos-delay="400"
                      src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619808975/flashxchanger/stable-coin-point-2_sf0plf.svg"
                      alt=""
                    />
                  </span>
                  <span
                    className="col-10"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="600">
                    The Coin relative value is subject to the market's "Bid and
                    Ask" mechanism, which will impact the coin's global core
                    value.
                  </span>
                </div>
              </div>

              <div className="col-md-6 stable-coin-image-desktop d-none d-md-block">
                <div>
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="1200"
                    data-aos-delay="800"
                    src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619810890/flashxchanger/coin_elements_os4osk.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="trade">
          <div className="container">
            <div className="row">
              <div data-aos="fade-up" data-aos-duration="1200">
                <h2 className="d-block d-md-none h-moblie">Trade on the Go</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 d-flex justify-content-center">
                <div className="my-auto">
                  <img
                    src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619818602/flashxchanger/trade-on-the-go_plzjto.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-md-6 d-flex">
                <div className="trade-desc my-auto">
                  <h2
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    className="d-none d-md-block">
                    Trade on the Go
                  </h2>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200">
                    Our platform is optimized for trading on any device. And you
                    don’t need to download any additional applications. All the
                    power of Flash cryptocurrency exchange in the palm of your
                    hand.
                  </div>
                  <div className="mt-3">
                    <a
                      data-aos="zoom-in"
                      data-aos-duration="1200"
                      data-aos-delay="800"
                      className="a-btn"
                      target="_blank"
                      href="https://trade.flashxchanger.com/">
                      Let’s Try
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="start-now">
          <div className="container">
            <div className="row">
              <div>
                <h2>Start Trading Now</h2>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 text-center">
                <a href="https://trade.flashxchanger.com">Sign Up</a>
                <a href="https://trade.flashxchanger.com/" className="trading">
                  Start Trading
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <ul>
                  <li>
                    <a target="_blank" href="">
                      Platform
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://blog.flashgroup.io/">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://flashxchanger.com/founder">
                      Founder
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://t.me/FLASHMONI_ANNOUNCEMENTS">
                      Announcements
                    </a>
                  </li>
                </ul>
                <span className="d-block d-md-none">
                  <img
                    src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619857968/flashxchanger/line_onnuau.svg"
                    alt=""
                  />
                </span>
              </div>
              <div className="col-md-6">
                <ul>
                  <li>
                    <a target="_blank" href="/terms">
                      Term & Conditions
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="/privacy">
                      Privacy policy
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="/cookie">
                      Cookie Policy
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://discord.com/invite/PrH2uMdKmw">
                      Support
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://trade.flashxchanger.com/graphql">
                      GraphQL
                    </a>
                  </li>
                </ul>
                <span className="d-block d-md-none">
                  <img
                    src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619857968/flashxchanger/line_onnuau.svg"
                    alt=""
                  />
                </span>
              </div>
              {/* <div className="col-md-4">
                <ul>
                  <li>
                    <a target="_blank" href="">
                      API
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="">
                      Trade API (Public)
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="">
                      Documentations
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="">
                      API (Loged IN)
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="">
                      Currency Details
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>

            <div className="row mt-5">
              <div className="col-sm-2">
                <div className="text-center">
                  <img
                    className="footer-img"
                    src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619891536/flashxchanger/logo_zbnr8l.svg"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-12 col-md-10">
                <div className="row socials mt-5 mt-md-0 justify-content-center">
                  <div className="col-3 col-md-1">
                    <a
                      target="_blank"
                      href="https://www.reddit.com/r/Flashmoni/">
                      <img
                        src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619858528/flashxchanger/reddit_rd4uby.svg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="col-3 col-md-1">
                    <a target="_blank" href="https://discord.gg/PrH2uMdKmw">
                      <img
                        src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619858528/flashxchanger/discord_iurz4w.svg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="col-3 col-md-1">
                    <a target="_blank" href="">
                      <img
                        src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619858528/flashxchanger/git_duj0ir.svg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="col-3 col-md-1">
                    <a target="_blank" href="https://blog.flashgroup.io/">
                      <img
                        src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619858530/flashxchanger/medium_tqnwnv.svg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="col-3 mt-4 mt-md-0 col-md-1">
                    <a target="_blank" href="">
                      <img
                        src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619858528/flashxchanger/in_ayeut0.svg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="col-3 mt-4 mt-md-0 col-md-1">
                    <a target="_blank" href="">
                      <img
                        src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619858530/flashxchanger/instagram_s9i6s2.svg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="col-3 mt-4 mt-md-0 col-md-1">
                    <a target="_blank" href="https://twitter.com/Flashmoniltd">
                      <img
                        src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619858528/flashxchanger/twitter_oyrszp.svg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="col-3 mt-4 mt-md-0 col-md-1">
                    <a
                      target="_blank"
                      href="https://t.me/FLASHMONI_ANNOUNCEMENTS">
                      <img
                        src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619858528/flashxchanger/telegram_zyczcq.svg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col text-center">
                <span>2021 © All rights reserved</span>
              </div>
            </div>
          </div>
        </section>
        {this.state.cookieAccept}
      </div>
    );
  }
  componentDidMount() {
    const allRanges = document.querySelectorAll(".range-wrap-main");
    allRanges.forEach((wrap) => {
      const range = wrap.querySelector(".range");
      const bubble = wrap.querySelector(".bubble");
      range.value = 0;
      range.style.animation = "gradient 1s ease infinite";

      range.addEventListener("input", () => {
        setBubble(range, bubble);
      });

      setBubble(range, bubble);
    });

    function setBubble(range, bubble) {
      const val = range.value;
      const min = range.min ? range.min : 0;
      const max = range.max ? range.max : 100;
      const newVal = Number(((val - min) * 100) / (max - min));
      bubble.innerHTML = "$ " + val;

      const color =
        "linear-gradient(90deg, #2B468E 0%, #2B468E " +
        newVal +
        "%, #A250D0" +
        newVal +
        "%)";
      range.style.background = color;

      // Sorta magic numbers based on size of the native UI thumb
      bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
    }  
  }
}
export default Home;
