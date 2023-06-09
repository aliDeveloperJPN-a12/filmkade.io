import classes from "./header.module.css"
export default function Header() {
  return (
    <div style={{height:"600px",marginTop:"-23px"}}>
      <style jsx>{`
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
        body {
          height: 900px;
        }
        header {
          text-align: center;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-attachment: fixed;
          position: relative;
          overflow: hidden;
          border-radius: 0 0 85% 85% / 30%;
        }
        header .overlay {
          width: 100%;
          height: 100%;
          padding: 50px;
          color: #fff;
          text-shadow: 1px 1px 1px #333;
          background-image: linear-gradient(
            135deg,
            #9f05ff69 10%,
            #fd5e086b 100%
          );
        }

        h1 {
          font-family: "Dancing Script", cursive;
          font-size: 80px;
          margin-bottom: 30px;
        }

        h3,
        p {
          font-family: "Open Sans", sans-serif;
          margin-bottom: 30px;
        }

        button {
          border: none;
          outline: none;
          padding: 10px 20px;
          border-radius: 50px;
          color: #333;
          background: #fff;
          margin-bottom: 50px;
          box-shadow: 0 3px 20px 0 #0000003b;
        }
        button:hover {
          cursor: pointer;
        }
      `}</style>
      ;
      {/* ---------------------------HEADER--------------------------------- */}
      <header className={classes.backgorund}  style={{marginTop:"30px"}}>
        <div className="overlay">
          <p className={classes.h1}>جدیدترین ها باما</p>
          <h3> FULL HD دسترسی به هزاران فیلم زیرنویس فارسی </h3>
          <br />
          <button className="btn btn-dark">ثبت نام</button>
        </div>
      </header>
      {/* ---------------------------HEADER--------------------------------- */}
    </div>
  );
}
