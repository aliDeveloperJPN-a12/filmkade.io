function Navbar() {
  return (
    <div dir="rtl">
      <style jsx>{`
        /* وقتی اندازه صفحه کمتر از 500 پیکسل شد */
        @media only screen and (max-width: 1300px) {
          .t {
            display: none;
          }
        }
        .a:hover {
          background-color: rgba(251, 255, 0, 0.37);
          border-radius: 5px;
        }
        img:hover {
          background-color: rgba(251, 255, 0, 0.37);
          border-radius: 5px;
        }

        .navbar {
          margin-top: -25px;
          position: fixed;
          z-index: 11;
          width: 100%;
          box-shadow: 0px 10px 20px lightblue;
        }
      `}</style>
      ;
      {/* ----------------------------- navbar ------------------------------ */}
      <nav className="navbar navbar-expand-lg navbar-light bg-dark pt-3">
        <div className="container-fluid">
          {/* logo search */}
          <div class="col-auto"></div>
          <a href="#" className="a">
            <img src="https://img.icons8.com/ios/30/FFFFFF/search--v1.png" />
          </a>
          <input
          style={{width:"300px",marginRight:"10px",borderRadius:"5px"}}
            type="password"
            id="inputPassword6"
            class="form-control"
            aria-describedby="passwordHelpInline"
          />
          <a className="navbar-brand text-light a" href="/">
            Funny-Movie.com
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a
                className="nav-link active text-light a"
                aria-current="page"
                href="/"
              >
                خانه
              </a>
              <a className="nav-link text-light a" href="#">
                جدیدترین ها
              </a>
              <a className="nav-link text-light a" href="#">
                اخبار داغ
              </a>
              <a className="nav-link text-light a" href="/profile/profile">
                تماس با من
              </a>
            </div>
          </div>
        </div>
        <div style={{ width: "250px", paddingLeft: "10px" }} className="t">
          <a href="#" style={{ textDecoration: "none" }}>
            {" "}
            <img
              src="https://img.icons8.com/ios/25/FFFFFF/instagram.png"
              style={{ marginLeft: "10px" }}
            />
          </a>
          <a href="#" style={{ textDecoration: "none" }}>
            {" "}
            <img
              src="https://img.icons8.com/ios/25/FFFFFF/telegram-app.png"
              style={{ marginLeft: "10px" }}
            />
          </a>
          <a href="#" style={{ textDecoration: "none" }}>
            {" "}
            <img
              src="https://img.icons8.com/ios/25/FFFFFF/twitter--v1.png"
              style={{ marginLeft: "10px" }}
            />
          </a>
          <a href="#" style={{ textDecoration: "none" }}>
            {" "}
            <img
              src="https://img.icons8.com/ios/25/FFFFFF/github--v1.png"
              style={{ marginLeft: "10px" }}
            />
          </a>
          <a href="#" style={{ textDecoration: "none" }}>
            <img src="https://img.icons8.com/ios/25/FFFFFF/linkedin.png" />
          </a>
        </div>
      </nav>
      {/* ----------------------------- navbar ------------------------------ */}
    </div>
  );
}
export default Navbar;
