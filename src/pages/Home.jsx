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
          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <img
                  src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619891536/flashxchanger/logo_zbnr8l.svg"
                  alt=""
                />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon">
                  <img
                    src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619851175/flashxchanger/menu_icon_pniof7.svg"
                    alt=""
                  />
                </span>
              </button>
              <div
                class="collapse navbar-collapse justify-content-end"
                id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      aria-current="page"
                      href="https://trade.flashxchanger.com">
                      Sign In
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link sign-up"
                      href="https://trade.flashxchanger.com">
                      Sign Up
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <section class="top">
          <div className="bg"></div>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-8">
                <div class="intro">
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

                <div class="contact-us">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="800"
                    class="contact-intro">
                    Any question? Reach out to us and we’ll get back to you
                    shortly.
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="1200">
                    <a
                      class="a-btn"
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

        <section class="coin-details">
          <div class="container">
            <div class="row ">
              <div class="col-md-4 ">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                  class="coin">
                  <div class="coin-data">
                    <span class="coin-image">
                      <img
                        src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619874803/flashxchanger/OZTG_vwr5kt.svg"
                        alt=""
                      />
                    </span>
                    <span class="coin-name">OZTG/USDT</span>
                  </div>
                  <div>
                    <div class="coin-value" id="coin-value1">
                      $ 0.137
                    </div>
                  </div>
                  <span class="usdt" id="usdt1">
                    00, 000, 000
                  </span>
                  <div class="percent" id="percent1">
                    + 0.00%
                  </div>
                  <div class="chart">
                    <canvas id="live_chart_1"></canvas>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div data-aos="fade-up" data-aos-duration="1200" class="coin">
                  <div class="coin-data">
                    <span class="coin-image">
                      <img
                        src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619874803/flashxchanger/BTC_ahcpqq.svg"
                        alt=""
                      />
                    </span>
                    <span class="coin-name">BTC/USDT</span>
                  </div>
                  <div>
                    <div class="coin-value" id="coin-value2">
                      $ 0.137
                    </div>
                  </div>
                  <span class="usdt" id="usdt2">
                    00, 000, 000
                  </span>
                  <div class="percent" id="percent2">
                    + 0.00%
                  </div>
                  <div class="chart">
                    <canvas id="live_chart_2"></canvas>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                  class="coin">
                  <div class="coin-data">
                    <span class="coin-image">
                      <img
                        src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619874803/flashxchanger/ETH_pwcvls.svg"
                        alt=""
                      />
                    </span>
                    <span class="coin-name">ETH/USDT</span>
                  </div>
                  <div>
                    <div class="coin-value" id="coin-value3">
                      $ 0.137
                    </div>
                  </div>
                  <span class="usdt" id="usdt3">
                    00, 000, 000
                  </span>
                  <div class="percent" id="percent3">
                    + 0.00%
                  </div>
                  <div class="chart">
                    <canvas id="live_chart_3"></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="why">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h2 data-aos="fade-up" data-aos-duration="1200">
                  Why is FlashXChanger Different?
                </h2>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1200"
                  data-aos-delay="900"
                  class="pie">
                  <img
                    src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619811322/flashxchanger/pie_qibdeq.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-md-6 points">
                <div class="row point">
                  <div class="col-2">
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
                  <div class="col-10">
                    <div
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="400">
                      <span>50%</span> of exchange fees are reinvested in the
                      company’s coin in order to raise the Intrinsic value.
                    </div>
                  </div>
                </div>
                <div class="row point">
                  <div class="col-2">
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
                  <div class="col-10">
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
                <div class="row point">
                  <div class="col-2">
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
                  <div class="col-10">
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

            <div class="row try">
              <div class="col text-center">
                <div data-aos="flip-left" data-aos-duration="800">
                  <a
                    class="a-btn"
                    target="_blank"
                    href="https://trade.flashxchanger.com/">
                    Let’s Try
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="features-desktop">
          <div class="container">
            <div class="row">
              <div class="col">
                <h2 data-aos="fade-up" data-aos-duration="1200">
                  Flash Platform Features
                </h2>
              </div>
            </div>

            <div class="row justify-content-center">
              <div class="col-md-5">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  class="feature purple-card">
                  <div class="feature-image">
                    <img
                      src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619861441/flashxchanger/feature_01_w9f3fi.svg"
                      alt=""
                    />
                  </div>
                  <div class="feature-name">Exchange</div>
                  <div class="feature-desc">
                    Flash offers the most liquid order book in his segment of
                    "tangible asset based exchange". Users can usually exchange
                    asset-pegged / Backed and any Coin with a value link to a
                    tangible asset. Historical Coins such as BTC and ETH will be
                    the only assetless coin be listed.
                  </div>
                </div>
              </div>
              <div class="col-md-5">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                  class="feature">
                  <div class="feature-image">
                    <img
                      src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619861441/flashxchanger/feature_02_reqluw.svg"
                      alt=""
                    />
                  </div>
                  <div class="feature-name">Order Types</div>
                  <div class="feature-desc">
                    Flash offers a suite of order types to give traders the
                    tools they need for every scenario. Discover more about our
                    most advanced Algoritmic orders types.
                  </div>
                </div>
              </div>
              <div class="col-md-5">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                  class="feature">
                  <div class="feature-image">
                    <img
                      src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619861441/flashxchanger/feature_03_kgsigt.svg"
                      alt=""
                    />
                  </div>
                  <div class="feature-name">Customizable Interface</div>
                  <div class="feature-desc">
                    Organize your workspace according to your needs: Compose
                    your layout, choose between themes, set up notifications and
                    data preferences.
                  </div>
                </div>
              </div>
              <div class="col-md-5">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="600"
                  class="feature blue-card">
                  <div class="feature-image">
                    <img
                      src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619861441/flashxchanger/feature_04_umfzsv.svg"
                      alt=""
                    />
                  </div>
                  <div class="feature-name">Security</div>
                  <div class="feature-desc">
                    Security of user information and funds is our first
                    priority. Contact us to know more about our security
                    features and integrations.
                  </div>
                </div>
              </div>
              <div class="col-md-5">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="800"
                  class="feature purple-card">
                  <div class="feature-image">
                    <img
                      src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619861441/flashxchanger/feature_05_fexxzj.svg"
                      alt=""
                    />
                  </div>
                  <div class="feature-name">Community</div>
                  <div class="feature-desc">
                    Join our Growing global community that believes in the power
                    of Cryptocurrency link to tangible asset.
                  </div>
                </div>
              </div>
              <div class="col-md-5">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="1000"
                  class="feature">
                  <div class="feature-image">
                    <img
                      src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619861441/flashxchanger/feature_06_mpywbk.svg"
                      alt=""
                    />
                  </div>
                  <div class="feature-name">Industry Leading API</div>
                  <div class="feature-desc">
                    Our websocket feed lets you easily gain access to real-time
                    market data, while our trading API lets you develop secure,
                    programmatic trading bots.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="stable-coin">
          <div class="container">
            <div class="row d-md-none d-block">
              <div class="col-sm-12 mb-2">
                <h2 data-aos="fade-up" data-aos-duration="1200">
                  Asset Pegged Coin
                </h2>
              </div>
            </div>
            <div class="row stable-coin-image-mobile d-block d-md-none">
              <div class="col-md-12">
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

            <div class="row justify-content-center">
              <div class="col-md-6 my-auto">
                <div class="row d-md-block d-none">
                  <div class="col-sm-12 mb-2">
                    <h2 data-aos="fade-down" data-aos-duration="1200">
                      Stable Coin
                    </h2>
                  </div>
                </div>
                <div class="point row">
                  <span class="col-2">
                    <img
                      data-aos="zoom-in"
                      data-aos-duration="1200"
                      data-aos-delay="200"
                      src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619808975/flashxchanger/stable-coin-point-1_v6ik0p.svg"
                      alt=""
                    />
                  </span>
                  <span
                    class="col-10"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200">
                    OZTG is a tradable Coin with a core valuation based on 1/20
                    value of the grain, which is a subdivision of the gold
                    metric (therefore linked indirectly with gold collateral).
                  </span>
                </div>
                <div class="point row mt-5">
                  <span class="col-2">
                    <img
                      data-aos="zoom-in"
                      data-aos-duration="1200"
                      data-aos-delay="400"
                      src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619808975/flashxchanger/stable-coin-point-2_sf0plf.svg"
                      alt=""
                    />
                  </span>
                  <span
                    class="col-10"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="600">
                    The Coin relative value is subject to the market's "Bid and
                    Ask" mechanism, which will impact the coin's global core
                    value.
                  </span>
                </div>
              </div>

              <div class="col-md-6 stable-coin-image-desktop d-none d-md-block">
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

        <section class="packages">
          <div class="container">
            <div class="row">
              <div class="col-12 intro">
                <div>
                  <h2 data-aos="fade-up" data-aos-duration="1200">
                    OZTG Package
                  </h2>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300">
                  Select OZTG Package
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-3">
                <div
                  data-aos="fade-up"
                  id="Standard"
                  data-aos-duration="1200"
                  class="package">
                  <div class="row">
                    <div class="col-6 d-flex col-md-12">
                      <span class="package-icon">
                        <img
                          src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619815101/flashxchanger/standard_icon_xbsdfb.svg"
                          alt=""
                        />
                      </span>

                      <span class="package-name">Standard</span>
                    </div>

                    <div class="col-6 col-md-12 package-value">
                      <span class="number">5,000</span>
                    </div>
                  </div>

                  <div class="row mt-2">
                    <span class="rate col-4 col-md-12 yearprofit ">
                      869.31%
                    </span>
                    <span class="rate col-6 col-md-12 price">0.137</span>

                    <span class="col-2 col-md-12 p-0 select-btn">
                      <span
                        onClick={() => this.selectpack("Standard")}
                        class="d-none d-md-block select mt-3">
                        Select
                      </span>
                      <span
                        class="d-block d-md-none select mt-2 mr-0"
                        onClick={() => this.selectpack("Standard")}>
                        <img
                          class="mt-3"
                          src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619814212/flashxchanger/select_braxnn.svg"
                          alt=""
                        />
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div
                  data-aos="fade-up"
                  id="Premium"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                  class="package">
                  <div class="row">
                    <div class="col-6 d-flex col-md-12">
                      <span class="package-icon">
                        <img
                          src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619815101/flashxchanger/premium_icon_c63fu5.svg"
                          alt=""
                        />
                      </span>

                      <span class="package-name">Premium</span>
                    </div>

                    <div class="col-6 col-md-12 package-value">
                      <span class="number">25,000</span>
                    </div>
                  </div>

                  <div class="row mt-2">
                    <span class="rate col-4 col-md-12 yearprofit ">
                      874.06%
                    </span>
                    <span class="rate col-6 col-md-12 price">0.137</span>

                    <span class="col-2 col-md-12 p-0 select-btn">
                      <span
                        onClick={() => this.selectpack("Premium")}
                        class="d-none d-md-block select mt-3">
                        Select
                      </span>
                      <span
                        class="d-block d-md-none select mt-2 mr-0"
                        onClick={() => this.selectpack("Premium")}>
                        <img
                          class="mt-3"
                          src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619814212/flashxchanger/select_braxnn.svg"
                          alt=""
                        />
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div
                  data-aos="fade-up"
                  id="Gold"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                  class="package">
                  <div class="row">
                    <div class="col-6 d-flex col-md-12">
                      <span class="package-icon">
                        <img
                          src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619815101/flashxchanger/gold_icon_qcwaas.svg"
                          alt=""
                        />
                      </span>

                      <span class="package-name">Gold</span>
                    </div>

                    <div class="col-6 col-md-12 package-value">
                      <span class="number">100,000</span>
                    </div>
                  </div>

                  <div class="row mt-2">
                    <span class="rate col-4 col-md-12 yearprofit ">
                      885.91%
                    </span>
                    <span class="rate col-6 col-md-12 price">0.137</span>

                    <span class="col-2 col-md-12 p-0 select-btn">
                      <span
                        onClick={() => this.selectpack("Gold")}
                        class="d-none d-md-block select mt-3">
                        Select
                      </span>
                      <span
                        class="d-block d-md-none select mt-2 mr-0"
                        onClick={() => this.selectpack("Gold")}>
                        <img
                          class="mt-3"
                          src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619814212/flashxchanger/select_braxnn.svg"
                          alt=""
                        />
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div
                  data-aos="fade-up"
                  id="Elite"
                  data-aos-duration="1200"
                  data-aos-delay="600"
                  class="package">
                  <div class="row">
                    <div class="col-6 d-flex col-md-12">
                      <span class="package-icon">
                        <img
                          src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619815101/flashxchanger/elite_icon_lvbgnb.svg"
                          alt=""
                        />
                      </span>

                      <span class="package-name">Elite</span>
                    </div>

                    <div class="col-6 col-md-12 package-value">
                      <span class="number">500,000</span>
                    </div>
                  </div>

                  <div class="row mt-2">
                    <span class="rate col-4 col-md-12 yearprofit ">
                      902.50%
                    </span>
                    <span class="rate col-6 col-md-12 price">0.137</span>

                    <span class="col-2 col-md-12 p-0 select-btn">
                      <span
                        onClick={() => this.selectpack("Elite")}
                        class="d-none d-md-block select mt-3 ">
                        Select
                      </span>
                      <span
                        class="d-block d-md-none select mt-2 mr-0"
                        onClick={() => this.selectpack("Elite")}>
                        <img
                          class="mt-3"
                          src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619814212/flashxchanger/select_braxnn.svg"
                          alt=""
                        />
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="range mt-5 mb-3">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                <h6 class="mobile-center">Future OZTG Price</h6>
              </div>
              <div class="col-sm-12 mt-4 range-wrap">
                <input
                  id="range"
                  name="range"
                  class="range range-slider"
                  step="0.001"
                  type="range"
                  min="0.137"
                  max="1"
                />
                <output class="bubble"></output>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- yearly stats --> */}
        <section class="stats mt-5">
          <div class="container">
            <div
              id="reward-card-container"
              class="row seven-cols d-flex justify-content-center">
              {/* <!-- show your reward cards here --> */}

              {/* <!-- card --> */}
              <div class="col-6 col-md-1">
                <div class="stat-card">
                  <h6 id="days">10 DAYS</h6>
                  <p id="percentage" class="percentage">
                    72.43%
                  </p>
                  <div class="row">
                    <div class="col-xl-12 mb-4 d-flex justify-content-center">
                      <span style={{ fontSize: "14px" }}>PER YEAR</span>
                    </div>
                    <div class="col-xl-12" style={{ overflow: "hidden" }}>
                      <div style={{ float: "left" }}>Reward</div>
                      <div
                        id="reward"
                        style={{ float: "right" }}
                        class="card-text">
                        $2.18
                      </div>
                    </div>
                    <div class="col-xl-12 mt-2" style={{ overflow: "hidden" }}>
                      <div style={{ float: "left" }}>USDT</div>
                      <div
                        id="usdt"
                        style={{ float: "right" }}
                        class="card-text">
                        2.00
                      </div>
                    </div>
                    <div class="col-xl-12 mt-2" style={{ overflow: "hidden" }}>
                      <div style={{ float: "left" }}>OZTG</div>
                      <div
                        id="oztg"
                        style={{ float: "right" }}
                        class="card-text">
                        6.00
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- card --> */}
              <div class="col-6 col-md-1">
                <div class="stat-card">
                  <h6 id="days">30 DAYS</h6>
                  <p id="percentage" class="percentage">
                    72.43%
                  </p>
                  <div class="row">
                    <div class="col-xl-12 mb-4 d-flex justify-content-center">
                      <span style={{ fontSize: "14px" }}>PER YEAR</span>
                    </div>
                    <div class="col-xl-12" style={{ overflow: "hidden" }}>
                      <div style={{ float: "left" }}>Reward</div>
                      <div
                        id="reward"
                        style={{ float: "right" }}
                        class="card-text">
                        $2.18
                      </div>
                    </div>
                    <div class="col-xl-12 mt-2" style={{ overflow: "hidden" }}>
                      <div style={{ float: "left" }}>USDT</div>
                      <div
                        id="usdt"
                        style={{ float: "right" }}
                        class="card-text">
                        2.00
                      </div>
                    </div>
                    <div class="col-xl-12 mt-2" style={{ overflow: "hidden" }}>
                      <div style={{ float: "left" }}>OZTG</div>
                      <div
                        id="oztg"
                        style={{ float: "right" }}
                        class="card-text">
                        6.00
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- card --> */}
              <div class="col-6 col-md-1">
                <div class="stat-card">
                  <h6 id="days">60 DAYS</h6>
                  <p id="percentage" class="percentage">
                    72.43%
                  </p>
                  <div class="row">
                    <div class="col-xl-12 mb-4 d-flex justify-content-center">
                      <span style={{ fontSize: "14px" }}>PER YEAR</span>
                    </div>
                    <div class="col-xl-12" style={{ overflow: "hidden" }}>
                      <div style={{ float: "left" }}>Reward</div>
                      <div
                        id="reward"
                        style={{ float: "right" }}
                        class="card-text">
                        $2.18
                      </div>
                    </div>
                    <div class="col-xl-12 mt-2" style={{ overflow: "hidden" }}>
                      <div style={{ float: "left" }}>USDT</div>
                      <div
                        id="usdt"
                        style={{ float: "right" }}
                        class="card-text">
                        2.00
                      </div>
                    </div>
                    <div class="col-xl-12 mt-2" style={{ overflow: "hidden" }}>
                      <div style={{ float: "left" }}>OZTG</div>
                      <div
                        id="oztg"
                        style={{ float: "right" }}
                        class="card-text">
                        6.00
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- card --> */}
              <div class="col-6 col-md-1">
                <div class="stat-card">
                  <h6 id="days">90 DAYS</h6>
                  <p id="percentage" class="percentage">
                    72.43%
                  </p>
                  <div class="row">
                    <div class="col-xl-12 mb-4 d-flex justify-content-center">
                      <span style={{ fontSize: "14px" }}>PER YEAR</span>
                    </div>
                    <div class="col-xl-12" style={{ overflow: "hidden" }}>
                      <div style={{ float: "left" }}>Reward</div>
                      <div
                        id="reward"
                        style={{ float: "right" }}
                        class="card-text">
                        $2.18
                      </div>
                    </div>
                    <div class="col-xl-12 mt-2" style={{ overflow: "hidden" }}>
                      <div style={{ float: "left" }}>USDT</div>
                      <div
                        id="usdt"
                        style={{ float: "right" }}
                        class="card-text">
                        2.00
                      </div>
                    </div>
                    <div class="col-xl-12 mt-2" style={{ overflow: "hidden" }}>
                      <div style={{ float: "left" }}>OZTG</div>
                      <div
                        id="oztg"
                        style={{ float: "right" }}
                        class="card-text">
                        6.00
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- card --> */}
              <div class="col-6 col-md-1">
                <div class="stat-card">
                  <h6 id="days">180 DAYS</h6>
                  <p id="percentage" class="percentage">
                    72.43%
                  </p>
                  <div class="row">
                    <div class="col-xl-12 mb-4 d-flex justify-content-center">
                      <span style={{ fontSize: "14px" }}>PER YEAR</span>
                    </div>
                    <div class="col-xl-12" style={{ overflow: "hidden" }}>
                      <div style={{ float: "left" }}>Reward</div>
                      <div
                        id="reward"
                        style={{ float: "right" }}
                        class="card-text">
                        $2.18
                      </div>
                    </div>
                    <div class="col-xl-12 mt-2" style={{ overflow: "hidden" }}>
                      <div style={{ float: "left" }}>USDT</div>
                      <div
                        id="usdt"
                        style={{ float: "right" }}
                        class="card-text">
                        2.00
                      </div>
                    </div>
                    <div class="col-xl-12 mt-2" style={{ overflow: "hidden" }}>
                      <div style={{ float: "left" }}>OZTG</div>
                      <div
                        id="oztg"
                        style={{ float: "right" }}
                        class="card-text">
                        6.00
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- card --> */}
              <div class="col-6 col-md-1">
                <div class="stat-card">
                  <h6 id="days">270 DAYS</h6>
                  <p id="percentage" class="percentage">
                    72.43%
                  </p>
                  <div class="row">
                    <div class="col-xl-12 mb-4 d-flex justify-content-center">
                      <span style={{ fontSize: "14px" }}>PER YEAR</span>
                    </div>
                    <div class="col-xl-12" style={{ overflow: "hidden" }}>
                      <div style={{ float: "left" }}>Reward</div>
                      <div
                        id="reward"
                        style={{ float: "right" }}
                        class="card-text">
                        $2.18
                      </div>
                    </div>
                    <div class="col-xl-12 mt-2" style={{ overflow: "hidden" }}>
                      <div style={{ float: "left" }}>USDT</div>
                      <div
                        id="usdt"
                        style={{ float: "right" }}
                        class="card-text">
                        2.00
                      </div>
                    </div>
                    <div class="col-xl-12 mt-2" style={{ overflow: "hidden" }}>
                      <div style={{ float: "left" }}>OZTG</div>
                      <div
                        id="oztg"
                        style={{ float: "right" }}
                        class="card-text">
                        6.00
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- card --> */}
              <div class="col-6 col-md-1">
                <div class="stat-card">
                  <h6 id="days">360 DAYS</h6>
                  <p id="percentage" class="percentage">
                    72.43%
                  </p>
                  <div class="row">
                    <div class="col-xl-12 mb-4 d-flex justify-content-center">
                      <span style={{ fontSize: "14px" }}>PER YEAR</span>
                    </div>
                    <div class="col-xl-12" style={{ overflow: "hidden" }}>
                      <div style={{ float: "left" }}>Reward</div>
                      <div
                        id="reward"
                        style={{ float: "right" }}
                        class="card-text">
                        $2.18
                      </div>
                    </div>
                    <div class="col-xl-12 mt-2" style={{ overflow: "hidden" }}>
                      <div style={{ float: "left" }}>USDT</div>
                      <div
                        id="usdt"
                        style={{ float: "right" }}
                        class="card-text">
                        2.00
                      </div>
                    </div>
                    <div class="col-xl-12 mt-2" style={{ overflow: "hidden" }}>
                      <div style={{ float: "left" }}>OZTG</div>
                      <div
                        id="oztg"
                        style={{ float: "right" }}
                        class="card-text">
                        6.00
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="trade">
          <div class="container">
            <div class="row">
              <div data-aos="fade-up" data-aos-duration="1200">
                <h2 class="d-block d-md-none h-moblie">Trade on the Go</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 d-flex justify-content-center">
                <div class="my-auto">
                  <img
                    src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619818602/flashxchanger/trade-on-the-go_plzjto.png"
                    alt=""
                  />
                </div>
              </div>

              <div class="col-md-6 d-flex">
                <div class="trade-desc my-auto">
                  <h2
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    class="d-none d-md-block">
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
                  <div class="mt-3">
                    <a
                      data-aos="zoom-in"
                      data-aos-duration="1200"
                      data-aos-delay="800"
                      class="a-btn"
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

        <section class="start-now">
          <div class="container">
            <div class="row">
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
