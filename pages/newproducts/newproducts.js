import axios from "axios";
import { useEffect, useState } from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Newproducts() {
  const [data, setData] = useState(null);
  useEffect(() => {
    AOS.init();
    axios.get("/api/newproducts").then((res) => {
      setData(res.data);
    });
  }, []);
  
  return (
    <div dir="rtl">
      <style jsx>{`
        /* برای گوشی های موبایل */
        @media only screen and (max-width: 576px) {
          .marginr {
            margin-right: 100px !important;
          }
        }

        /* برای تبلت ها در حالت عمودی و گوشی های موبایل کمی بزرگتر */
        @media only screen and (min-width: 768px) {
          .marginr {
            margin-right: 200px;
          }
        }

        /* برای لپ تاپ ها و تبلت ها بصورت افقی */
        @media only screen and (min-width: 992px) {
          .marginr {
            margin-right: 160px;
          }
        }

        /* برای صفحه نمایش های بزرگ مثه کامپیوتر و بالاتر */
        @media only screen and (min-width: 1200px) {
          .marginr {
            margin-right: 100px;
          }
        }
        /* برای صفحه نمایش های بزرگ مثه کامپیوتر و بالاتر */
        @media only screen and (min-width: 1300px) {
          .marginr {
            margin-right: 0px;
          }
        }
      `}</style>
      <br />
      <br />
      <br />
      <p style={{ color: "white", marginRight: "50px", fontSize: "20px" }}>
        جدیترین
      </p>
      <hr style={{ color: "white", width: "700px", height: "5px" }} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: "30px",
          marginLeft: "50px",
          marginTop: "60px",
        }}
      >
        {/* -----------------------------products----------------------------------- */}
        <div className="d-flex flex-wrap marginr" data-aos="fade-up">
          {data
            ? data.map((item) => (
                <div style={{ margin: "10px" }} key={item.id}>
                  <div className="card" style={{ width: "18rem" }} dir="rtl">
                    <img
                      src={item.src}
                      className="card-img-top"
                      alt="..."
                      style={{ width: "286px", height: "200px" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.description}</p>
                      <p>{item.duration}</p>
                      <a href={`/productId/${item.id}`}  className="btn btn-dark">
                        دیدن
                      </a>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>

        {/* -----------------------------products----------------------------------- */}
      </div>
    </div>
  );
}
