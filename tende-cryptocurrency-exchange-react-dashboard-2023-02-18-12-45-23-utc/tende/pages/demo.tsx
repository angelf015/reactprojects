import { NextPage } from "next";
import Link from "next/dist/client/link";
const Demo: NextPage = () => {
  return (
    <div id="main-wrapper" className="show">
      <div className="header landing">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <nav className="navbar">
                <div className="brand-logo">
                  <Link href="/">
                    <a>
                      <img src="/images/logo.png" alt="" />
                    </a>
                  </Link>
                </div>
                <div className="header-right">
                  <div className="dark-light-toggle">
                    <span className="dark">
                      <i className="icofont-moon"></i>
                    </span>
                    <span className="light">
                      <i className="icofont-sun-alt"></i>
                    </span>
                  </div>
                  <a href="#" className="btn btn-primary">
                    Buy
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="intro bg-light" id="intro" data-scroll-index="0">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-6 col-md-6">
              <div className="intro-content my-5">
                <h1>
                  Tende - Crypto Exchange React Nextjs dashboard with TypeScript
                </h1>
                <p>
                  Tende is the complete UI Kit for cryptocurrency exchange. Sign
                  in, Signup, Phone and ID card verification, One time password
                  verify and add bank, debit card settings and profile etc pages
                  included.
                </p>
              </div>
            </div>
            <div className="col-xl-5 col-md-6 py-md-5">
              <div className="intro-demo_img">
                <img
                  src="./images/demo/portfolio.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="demo section-padding ">
        <div className="container">
          <div className="row py-lg-5 justify-content-center">
            <div className="col-xl-7">
              <div className="section-title text-center">
                <h2>Pages</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-4 col-sm-6">
              <div className="demo_img">
                <Link href="/">
                  <a target="_blank">
                    <div className="img-wrap">
                      <img
                        src="./images/demo/dashboard.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </a>
                </Link>
                <h4>Dashboard</h4>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 col-sm-6">
              <div className="demo_img">
                <Link href="/trade">
                  <a target="_blank">
                    <div className="img-wrap">
                      <img
                        src="./images/demo/trade.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </a>
                </Link>
                <h4>Trade</h4>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 col-sm-6">
              <div className="demo_img">
                <Link href="/wallet">
                  <a target="_blank">
                    <div className="img-wrap">
                      <img
                        src="./images/demo/wallet.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </a>
                </Link>
                <h4>Wallet</h4>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 col-sm-6">
              <div className="demo_img">
                <Link href="/profile">
                  <a target="_blank">
                    <div className="img-wrap">
                      <img
                        src="./images/demo/profile.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </a>
                </Link>
                <h4>Profile</h4>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 col-sm-6">
              <div className="demo_img">
                <Link href="/signin">
                  <a target="_blank">
                    <div className="img-wrap">
                      <img
                        src="./images/demo/signin.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </a>
                </Link>
                <h4>Sign in</h4>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 col-sm-6">
              <div className="demo_img">
                <Link href="/signup">
                  <a target="_blank">
                    <div className="img-wrap">
                      <img
                        src="./images/demo/signup.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </a>
                </Link>
                <h4>Sign up</h4>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 col-sm-6">
              <div className="demo_img">
                <Link href="/reset">
                  <a target="_blank">
                    <div className="img-wrap">
                      <img
                        src="./images/demo/reset.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </a>
                </Link>
                <h4>Reset</h4>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 col-sm-6">
              <div className="demo_img">
                <Link href="/verify-email">
                  <a target="_blank">
                    <div className="img-wrap">
                      <img
                        src="./images/demo/verify-email.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </a>
                </Link>
                <h4>Verify Email</h4>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 col-sm-6">
              <div className="demo_img">
                <Link href="/otp-1">
                  <a target="_blank">
                    <div className="img-wrap">
                      <img
                        src="./images/demo/verify-phone.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </a>
                </Link>
                <h4>Verify Phone</h4>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 col-sm-6">
              <div className="demo_img">
                <Link href="/otp-2">
                  <a target="_blank">
                    <div className="img-wrap">
                      <img
                        src="./images/demo/verify-code.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </a>
                </Link>
                <h4>Verify Code</h4>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 col-sm-6">
              <div className="demo_img">
                <Link href="/lock">
                  <a target="_blank">
                    <div className="img-wrap">
                      <img
                        src="./images/demo/lock.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </a>
                </Link>
                <h4>Lock</h4>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 col-sm-6">
              <div className="demo_img">
                <Link href="/settings-profile">
                  <a target="_blank">
                    <div className="img-wrap">
                      <img
                        src="./images/demo/profile-edit.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </a>
                </Link>
                <h4>Profile Edit</h4>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 col-sm-6">
              <div className="demo_img">
                <Link href="/settings-application">
                  <a target="_blank">
                    <div className="img-wrap">
                      <img
                        src="./images/demo/application.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </a>
                </Link>
                <h4>Application</h4>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 col-sm-6">
              <div className="demo_img">
                <Link href="/settings-security">
                  <a target="_blank">
                    <div className="img-wrap">
                      <img
                        src="./images/demo/security.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </a>
                </Link>
                <h4>Security</h4>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 col-sm-6">
              <div className="demo_img">
                <Link href="/settings-activity">
                  <a target="_blank">
                    <div className="img-wrap">
                      <img
                        src="./images/demo/activity.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </a>
                </Link>
                <h4>Activity</h4>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 col-sm-6">
              <div className="demo_img">
                <Link href="/settings-payment-method">
                  <a target="_blank">
                    <div className="img-wrap">
                      <img
                        src="./images/demo/payment.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </a>
                </Link>
                <h4>Payment</h4>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 col-sm-6">
              <div className="demo_img">
                <Link href="/settings-api">
                  <a target="_blank">
                    <div className="img-wrap">
                      <img
                        src="./images/demo/api.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </a>
                </Link>
                <h4>API</h4>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 col-sm-6">
              <div className="demo_img">
                <Link href="/settings-fees">
                  <a target="_blank">
                    <div className="img-wrap">
                      <img
                        src="./images/demo/fees.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </a>
                </Link>
                <h4>Fees</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="container">
          <div className="copyright text-center">
            <p>
              © Copyright {new Date().getFullYear()} <a href="#">Tende</a> I All
              Rights Reserved
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
