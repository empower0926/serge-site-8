import React, { Component } from "react";
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cookieAccept: "",
    };
  }
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
        <section class="top">
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
                    <a class="a-btn" target="_blank" href="/contact">
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
                        src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619804531/flashxchanger/oztg-coin_v3eppt.svg"
                        alt=""
                      />
                    </span>
                    <span class="coin-name">OZTG/USDT</span>
                  </div>
                  <div>
                    <div class="coin-value">$ 0.137</div>
                  </div>
                  <span class="usdt">00, 000, 000</span>
                  <div class="percent">+ 0.00%</div>
                  <div class="chart"><canvas id="live_chart_1" ></canvas></div>
                </div>
              </div>
              <div class="col-md-4">
                <div data-aos="fade-up" data-aos-duration="1200" class="coin">
                  <div class="coin-data">
                    <span class="coin-image">
                      <img
                        src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619804531/flashxchanger/btc-coin_porirf.svg"
                        alt=""
                      />
                    </span>
                    <span class="coin-name">BTC/USDT</span>
                  </div>
                  <div>
                    <div class="coin-value">$ 0.137</div>
                  </div>
                  <span class="usdt">00, 000, 000</span>
                  <div class="percent">+ 0.00%</div>
                  <div class="chart"><canvas id="live_chart_2" ></canvas></div>
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
                        src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619804531/flashxchanger/oztg-coin_v3eppt.svg"
                        alt=""
                      />
                    </span>
                    <span class="coin-name">ETH/USDT</span>
                  </div>
                  <div>
                    <div class="coin-value">$ 0.137</div>
                  </div>
                  <span class="usdt">00, 000, 000</span>
                  <div class="percent">+ 0.00%</div>
                  <div class="chart"><canvas id="live_chart_3" ></canvas></div>
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
                  <a class="a-btn" target="_blank" href="/try">
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
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  class="feature purple-card">
                  <div class="feature-image">
                    <img src="" alt="" />
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
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                  class="feature">
                  <div class="feature-image">
                    <img src="" alt="" />
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
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                  class="feature">
                  <div class="feature-image">
                    <img src="" alt="" />
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
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  data-aos-delay="600"
                  class="feature blue-card">
                  <div class="feature-image">
                    <img src="" alt="" />
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
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="800"
                  class="feature purple-card">
                  <div class="feature-image">
                    <img src="" alt="" />
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
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  data-aos-delay="1000"
                  class="feature">
                  <div class="feature-image">
                    <img src="" alt="" />
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
                  Stable Coin
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
                    src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619810890/flashxchanger/coin_elements_os4osk.png"
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
                      <span>5,000</span>
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
                      <span class="d-block d-md-none select mt-2 mr-0">
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
                      <span>25,000</span>
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
                      <span class="d-block d-md-none select mt-2 mr-0">
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
                      <span>100,000</span>
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
                      <span class="d-block d-md-none select mt-2 mr-0">
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
                      <span>500,000</span>
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
                        class="d-none d-md-block select mt-3">
                        Select
                      </span>
                      <span class="d-block d-md-none select mt-2 mr-0">
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

        <section class="range mt-5">
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
                      href="/try">
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
            <div class="row mt-4 justify-content-center">
              <div class="col-2">
                <div>
                  <a
                    data-aos="fade-down"
                    data-aos-duration="1200"
                    target="_blank"
                    href="/sign-up">
                    Sign Up
                  </a>
                </div>
              </div>
              <div class="col-2">
                <div>
                  <a
                    data-aos="fade-down"
                    data-aos-duration="1200"
                    data-aos-delay="300"
                    class="trading"
                    target="_blank"
                    href="/start-trading">
                    Start Trading
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
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
        "linear-gradient(90deg, #360066 0%, var(--main-color) " +
        newVal +
        "%, var(--main-light) " +
        newVal +
        "%)";
      range.style.background = color;

      // Sorta magic numbers based on size of the native UI thumb
      bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
    }
  }
}
export default Home;
