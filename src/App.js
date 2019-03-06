import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="wrapper">
          <div id="header-wrapper">
            <header id="header">
              <div className="5grid-layout">
                <div className="row">
                  <div className="12u" id="logo">
                    <h1>
                      <a href="#" className="mobileUI-site-name">
                        proud of Saudi Arabia
                      </a>
                    </h1>
                  </div>
                </div>
              </div>
              <div className="5grid-layout">
                <div className="row">
                  <div className="12u" id="menu">
                    <div id="menu-wrapper">
                      <nav className="mobileUI-site-nav">
                        <ul>
                          <li className="current_page_item">
                            <a href="index.html">Homepage</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>
          <div id="page-wrapper" className="5grid-layout">
            <div className="5grid-layout">
              <div className="row">
                <div className="12u">
                  <div id="banner">
                    <a href="#">
                      <img
                        src="https://pbs.twimg.com/media/DytDLpmX4AAPyky.jpg"
                        alt=""
                        style={{ width: "100%", top: "-0px" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="5grid-layout">
              <div className="row">
                <div className="6u">
                  <div id="content">
                    <section>
                      <div className="post">
                        <h2 style={{ color: "white" }}>sultan</h2>
                        <a href="#">
                          <div className="img-alignleft">
                            <img
                              src="https://pbs.twimg.com/media/DtzSC7XWoAAmmT0.jpg"
                              alt=""
                              style={{ width: "300px", width: "400px" }}
                            />
                          </div>
                        </a>

                        <strong>The Kingdom</strong>
                        <p>
                          will launch its 16th satellite into space on Tuesday:
                          The Saudi Geostationary Satellite 1 (SGS-1). It will
                          provide telecommunications capabilities, stronger
                          internet connectivity, TV and secure communications in
                          the Middle East, North Africa and Europe. Developed by
                          a team from King Abdul Aziz City for Science and
                          Technology (KACST), it will be launched in French
                          Guiana by Arianespace, which provides launch services
                          for all types of satellites.
                        </p>
                        <p>
                          KACST, a government institution that supports and
                          enhances applied research, collaborated with Lockheed
                          Martin to manufacture the SGS-1. Etiam neque. The
                          institution has so far launched 15 satellites into the
                          low Earth orbit, said the SGS-1 program director from
                          KACST, Dr. Badr Al-Suwaidan. KACST has collaborated
                          with China in the Chang’e 4 mission to explore the far
                          side of the moon; provided advanced services for
                          remote-sensing systems; and participated in the launch
                          of an advanced system for maritime monitoring and
                          tracking with satellite data, which includes daily
                          coverage of 30,000 vessels worldwide.
                        </p>

                        <p className="button-style">
                          <a href="http://www.arabnews.com/node/1447201/saudi-arabia">
                            for original article{" "}
                          </a>
                        </p>
                      </div>
                    </section>
                    <section>
                      <div className="post" />
                    </section>
                  </div>
                </div>
                <div className="3u" id="sidebar1">
                  <section>
                    <ul className="style1" />
                  </section>
                  <section>
                    <h2>Quick INFO</h2>
                    <ul className="style1">
                      <li>
                        <a href="#">
                          The SGS-1 provides secure satellite communication on
                          the Ks-band for the government of Saudi Arabia.{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          The agreement of the launch services between
                          Arianespace, Arabsat and KACST was announced in 2015.{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          There will be more “space achievements under the new
                          Saudi space authorities,” and under “the leadership of
                          the first Arab astronaut, Prince Sultan bin Salman,”.
                        </a>
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div className="5grid-layout">
            <div className="row" id="footer-content">
              <div className="6u" id="box1">
                <section>
                  <div />
                </section>
              </div>
              <div className="3u" id="box2">
                <section>
                  <ul className="style4" />
                </section>
              </div>
              <div className="3u" id="box3">
                <section>
                  <h2>By Sultan Alshahrani</h2>
                  <ul className="style4">
                    <li className="first">
                      <a href="#">we will get better</a>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
        <div id="copyright" className="5grid-layout">
          <section>
            <p>
              &copy; Your Site Name | Images:{" "}
              <a href="http://fotogrph.com/">Fotogrph</a> | Design:{" "}
              <a href="http://templated.co/">TEMPLATED</a>
            </p>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
