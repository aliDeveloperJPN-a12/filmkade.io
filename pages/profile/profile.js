import Link from "next/link";
import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import SpinnerLoading from "../SpinnerLoading/SpinnerLoading";

function Profile() {
  let [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    // time sleep for sppiner
    function sleep(time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    }
    sleep(1500).then(() => {
      setIsLoading(true);
    });
  }, []);

  let content = <SpinnerLoading />;
  if (isLoading) {
    content = (
      <div>
        <Navbar />
        {/* ---------------------------------------------------------- */}
        <div className="container mt-5">
          <div className="main-body">
            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" className="main-breadcrumb">
              <ol className="breadcrumb"></ol>
            </nav>
            {/* /Breadcrumb */}
            <div className="row gutters-sm">
              <div className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                      
                      <picture>
                        <img
                          src="https://alideveloperjpn-a12.github.io/privateProfile/images/avatar.jpg"
                          alt="Admin"
                          className="rounded-circle"
                          width={150}

                        />
                      </picture>
                      <div className="mt-3">
                        <h4>Ali Ghane Fard</h4>
                        <p className="text-secondary mb-1">
                          Front-End developer
                        </p>
                        <p className="text-muted font-size-sm">Iran , Mashad</p>
                        <button className="btn btn-primary b1">Follow</button>
                        <button className="btn btn-outline-primary">
                          Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mt-3">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-globe mr-2 icon-inline"
                        >
                          <circle cx={12} cy={12} r={10} />
                          <line x1={2} y1={12} x2={22} y2={12} />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                        Website
                      </h6>
                      <span className="text-secondary">
                        <Link href="https://alideveloperjpn-a12.github.io/privateProfile/">
                          https://alideveloperjpn-a12.github.io/privateProfile/
                        </Link>
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-github mr-2 icon-inline"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                        Github
                      </h6>
                      <span className="text-secondary">
                        <Link href="https://github.com/aliDeveloperJPN-a12">
                          https://github.com/aliDeveloperJPN-a12
                        </Link>
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-twitter mr-2 icon-inline text-info"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                        Twitter
                      </h6>
                      <span className="text-secondary">
                        <Link href="https://twitter.com/alighan42804476">
                          https://twitter.com/alighan42804476
                        </Link>
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-instagram mr-2 icon-inline text-danger"
                        >
                          <rect
                            x={2}
                            y={2}
                            width={20}
                            height={20}
                            rx={5}
                            ry={5}
                          />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                        Instagram
                      </h6>
                      <span className="text-secondary">
                        <Link href="https://www.instagram.com/ag062062zero/">
                          https://www.instagram.com/ag062062zero/
                        </Link>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Full Name</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        ali ghane fard
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Email</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        ag062062zero1375@gmail.com
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Phone</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">09927750043</div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Mobile</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">09374536382</div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Address</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        mashad - tos
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row gutters-sm">
                  <div className="col-sm-6 mb-3">
                    <div className="card h-100">
                      <div className="card-body">
                        <h6 className="d-flex align-items-center mb-3">
                          <i className="material-icons text-info mr-2"></i>
                          skills
                        </h6>
                        <small>javascript</small>
                        <div
                          className="progress mb-3"
                          style={{ height: "5px" }}
                        >
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            style={{ width: "80%" }}
                            aria-valuenow={80}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <small>reactjs</small>
                        <div
                          className="progress mb-3"
                          style={{ height: "5px" }}
                        >
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            style={{ width: "72%" }}
                            aria-valuenow={72}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <small>next js</small>
                        <div
                          className="progress mb-3"
                          style={{ height: "5px" }}
                        >
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            style={{ width: "72%" }}
                            aria-valuenow={72}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <small>css</small>
                        <div
                          className="progress mb-3"
                          style={{ height: "5px" }}
                        >
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            style={{ width: "89%" }}
                            aria-valuenow={89}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <small>html</small>
                        <div
                          className="progress mb-3"
                          style={{ height: "5px" }}
                        >
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            style={{ width: "55%" }}
                            aria-valuenow={55}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <small>bootstrap</small>
                        <div
                          className="progress mb-3"
                          style={{ height: "5px" }}
                        >
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            style={{ width: "66%" }}
                            aria-valuenow={66}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------------- */}
        <Footer />
      </div>
    );
  }

  return <div>{content}</div>;
}

export default Profile;
