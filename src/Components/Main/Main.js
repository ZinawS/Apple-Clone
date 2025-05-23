import React from "react";
import appletv from "../../images/icons/apple-tv-logo.png";
import banker from "../../images/home/banker.png";
import series5 from "../../images/icons/watch-series5-logo.png";
import arcade from "../../images/icons/arcade.png";

function Main() {
  return (
    <div>
      <section className="alert-section top-50">
        <div className="container">
          <div className="alert-title">We're open for you.</div>
          <div className="alert-text">
            Our retail stores are closed, but you can buy our products here
            online and get fast, free delivery. If you need help finding the
            right product or have a question on your order, chat online with a
            Specialist or call 1-800-MY-APPLE.
            <br />
            For service and support, visit{" "}
            <a href="https://support.apple.com/" rel="noopener noreferrer">
              support.apple.com
            </a>
            .
          </div>
        </div>
      </section>

      <section className="first-hightlight-wrapper">
        <div className="container">
          <div className="new-alert">New</div>
          <div className="title-wraper bold black">iPad Pro</div>
          <div className="links-wrapper">
            <ul>
              <li>
                <a
                  href="https://www.apple.com/ipad-pro/"
                  rel="noopener noreferrer"
                >
                  Learn more
                </a>
              </li>
              <li>
                <a
                  href="https://www.apple.com/shop/buy-ipad/ipad-pro"
                  rel="noopener noreferrer"
                >
                  Order
                </a>
              </li>
            </ul>
          </div>
          <div className="ipod-caption row">
            <div className="col-sm-12 col-md-6 text-md-right">
              iPad Pro available starting 3.25
            </div>
            <div className="col-sm-12 col-md-6 text-md-left">
              Magic Keyboard coming in May
            </div>
          </div>
        </div>
      </section>

      <section className="second-hightlight-wrapper">
        <div className="container">
          <div className="new-alert">New</div>
          <div className="title-wraper bold black">MacBook Air</div>
          <div className="description-wrapper black">
            Twice the speed. Twice the storage.
          </div>
          <div className="price-wrapper grey">From $999.</div>
          <div className="links-wrapper">
            <ul>
              <li>
                <a
                  href="https://www.apple.com/macbook-air/"
                  rel="noopener noreferrer"
                >
                  Learn more
                </a>
              </li>
              <li>
                <a
                  href="https://www.apple.com/shop/buy-mac/macbook-air"
                  rel="noopener noreferrer"
                >
                  Buy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="third-hightlight-wrapper">
        <div className="container">
          <div className="title-wraper bold">iPhone 11 Pro</div>
          <div className="description-wrapper">
            Pro cameras. Pro display. Pro performance.
          </div>
          <div className="price-wrapper">
            From $24.95/mo. or $599 with trade‑in.
          </div>
          <div className="links-wrapper">
            <ul>
              <li>
                <a
                  href="https://www.apple.com/iphone-11-pro/"
                  rel="noopener noreferrer"
                >
                  Learn more
                </a>
              </li>
              <li>
                <a
                  href="https://www.apple.com/shop/buy-iphone/iphone-11-pro"
                  rel="noopener noreferrer"
                >
                  Buy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="fourth-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="title-wraper">iPhone 11</div>
                <div className="description-wraper">
                  Just the right amount of everything.
                </div>
                <div className="price-wrapper">
                  From $18.70/mo. or $499 with trade‑in.<sup>1</sup>
                </div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a
                        href="https://www.apple.com/iphone-11/"
                        rel="noopener noreferrer"
                      >
                        Learn more
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.apple.com/shop/buy-iphone/iphone-11"
                        rel="noopener noreferrer"
                      >
                        Apply now
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <div className="title-wraper white">
                  Get the latest CDC response to COVID-19.
                </div>
                <div className="links-wrapper white">
                  <ul>
                    <li>
                      <a
                        href="https://www.cdc.gov/coronavirus/2019-ncov/index.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Watch the PSA
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fifth-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="top-logo-wrapper">
                  <div className="logo-wrapper">
                    <img src={appletv} alt="Apple TV Logo" />
                  </div>
                </div>
                <div className="tvshow-logo-wraper">
                  <img src={banker} alt="The Banker show" />
                </div>
                <div className="watch-more-wrapper">
                  <a href="https://tv.apple.com/" rel="noopener noreferrer">
                    Watch now on the Apple TV App
                  </a>
                </div>
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <div className="top-logo-wrapper">
                  <div className="logo-wrapper">
                    <img src={series5} alt="Apple Watch Series 5" />
                  </div>
                </div>
                <div className="description-wraper">
                  With the Always-On Retina display.
                  <br />
                  You've never seen a watch like this.
                </div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a
                        href="https://www.apple.com/apple-watch-series-5/"
                        rel="noopener noreferrer"
                      >
                        Learn more
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.apple.com/shop/buy-watch/apple-watch"
                        rel="noopener noreferrer"
                      >
                        Buy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sixth-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="top-logo-wrapper">
                  <div className="logo-wrapper">
                    <img src={arcade} alt="Apple Arcade" />
                  </div>
                </div>
                <div className="description-wraper white">
                  Agent 8 is a small hero on a big mission.
                </div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a
                        href="https://www.apple.com/apple-arcade/"
                        rel="noopener noreferrer"
                      >
                        Play now<sup>2</sup>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.apple.com/apple-arcade/"
                        rel="noopener noreferrer"
                      >
                        Learn about Apple Arcade
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <div className="title-wraper">
                  Apple Card Monthly Installments
                </div>
                <div className="description-wraper">
                  Pay for your next iPhone over time, interest-free with Apple
                  Card.
                </div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a
                        href="https://www.apple.com/apple-card/monthly-installments/"
                        rel="noopener noreferrer"
                      >
                        Learn more
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://card.apple.com/apply/start"
                        rel="noopener noreferrer"
                      >
                        Apply now
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
