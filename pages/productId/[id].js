import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import SpinnerLoading from "../SpinnerLoading/SpinnerLoading";
export default function Id() {
  const router = useRouter();
  const { Id } = router.query;
  const [data, setData] = useState(null);
  let [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (Id) {
      // get products
      axios.get("/api/product").then((res) => {
        // find product of products
        setData(res.data.find((item) => item.id == Id));
      });
    }
    // time sleep for sppiner
    function sleep(time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    }
    sleep(1500).then(() => {
      setIsLoading(true);
    });
    // dependence set on "id"
  }, [Id]);
  let content = <SpinnerLoading />;
  if (isLoading) {
    content = (
      <div>
        {" "}
        <Navbar />
        {/* <div>title : {data ? data.title : null}</div>
      <div>description : {data ? data.description : null}</div>
      <div>duration : {data ? data.duration : null}</div>
      <div>src : {data ? data.src : null}</div> */}
        <style jsx>{`
          // ------------------------------------------- comment page ----------------------------------

          /* برای گوشی های موبایل */
          @media only screen and (max-width: 480px) {
            .wi {
              margin-top: 45px !important;
            }
          }

          /* برای تبلت ها در حالت عمودی و گوشی های موبایل کمی بزرگتر */
          @media only screen and (min-width: 768px) {
            .wi {
              margin-top: 200px !important;
            }
          }

          /* برای لپ تاپ ها و تبلت ها بصورت افقی */
          @media only screen and (min-width: 992px) {
            .wi {
              margin-top: 180px !important;
            }
          }

          /* برای صفحه نمایش های بزرگ مثه کامپیوتر و بالاتر */
          @media only screen and (min-width: 1200px) {
            .wi {
              margin-top: 180px !important;
            }
          }

          body {
            background-color: #eee;
          }

          .bdge {
            height: 21px;
            background-color: orange;
            color: #fff;
            font-size: 11px;
            padding: 8px;
            border-radius: 4px;
            line-height: 3px;
          }

          .comments {
            text-decoration: underline;
            text-underline-position: under;
            cursor: pointer;
          }

          .dot {
            height: 7px;
            width: 7px;
            margin-top: 3px;
            background-color: #bbb;
            border-radius: 50%;
            display: inline-block;
          }

          .hit-voting:hover {
            color: blue;
          }

          .hit-voting {
            cursor: pointer;
          }

          // ------------------------------------------- comment page ----------------------------------
          @import url(https://fonts.googleapis.com/css?family=Lato:400,300,700);
          @import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);
          *,
          *:before,
          *:after {
            box-sizing: border-box;
          }
          body {
            background: #43423e;
          }
          a {
            text-decoration: none;
            color: #5c7fb8;
          }
          a:hover {
            text-decoration: underline;
          }
          .movie-card {
            font: 14px/22px "Lato", Arial, sans-serif;
            color: #a9a8a3;
            padding: 40px 0;
          }
          .container {
            margin: 0 auto;
            width: 780px;
            height: 640px;
            background: #f0f0ed;
            border-radius: 5px;
            position: relative;
          }
          .hero {
            height: 342px;
            margin: 0;
            position: relative;
            overflow: hidden;
            z-index: 1;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
          }
          .hero:before {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            overflow: hidden;
            top: 0;
            left: 0;

            background-size: cover;
            z-index: -1;
            transform: skewY(-2.2deg);
            transform-origin: 0 0;
            -webkit-backface-visibility: hidden;
          }
          .cover {
            position: absolute;
            top: 160px;
            left: 40px;
            z-index: 2;
          }
          .details {
            padding: 190px 0 0 280px;
          }
          .details .title1 {
            color: white;
            font-size: 44px;
            margin-bottom: 13px;
            position: relative;
          }
          .details .title1 span {
            position: absolute;
            top: 3px;
            margin-left: 12px;
            background: #c4af3d;
            border-radius: 5px;
            color: #544c21;
            font-size: 14px;
            padding: 0px 4px;
          }
          .details .title2 {
            color: #c7c1ba;
            font-size: 23px;
            font-weight: 300;
            margin-bottom: 15px;
          }
          .details .likes {
            margin-left: 24px;
          }
          .details .likes:before {
            content: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/icon_like.png");
            position: relative;
            top: 2px;
            padding-right: 7px;
          }
          .description {
            bottom: 0px;
            height: 200px;
            font-size: 16px;
            line-height: 26px;
            color: #b1b0ac;
          }
          .column1 {
            padding-left: 50px;
            padding-top: 120px;
            width: 220px;
            float: left;
            text-align: center;
          }
          .tag {
            background: white;
            border-radius: 10px;
            padding: 3px 8px;
            font-size: 14px;
            margin-right: 4px;
            line-height: 35px;
            cursor: pointer;
          }
          .tag:hover {
            background: #ddd;
          }
          .column2 {
            padding-left: 41px;
            padding-top: 30px;
            margin-left: 20px;
            width: 480px;
            float: left;
          }
          .avatars {
            margin-top: 23px;
          }
          .avatars img {
            cursor: pointer;
          }
          .avatars img:hover {
            opacity: 0.6;
          }
          .avatars a:hover {
            text-decoration: none;
          }
          fieldset,
          label {
            margin: 0;
            padding: 0;
          }
          /****** Style Star Rating Widget *****/
          .rating {
            border: none;
            float: left;
          }
          .rating > input {
            display: none;
          }
          .rating > label:before {
            margin: 5px;
            margin-top: 0;
            font-size: 1em;
            font-family: FontAwesome;
            display: inline-block;
            content: "\f005";
          }
          .rating > .half:before {
            content: "\f089";
            position: absolute;
          }
          .rating > label {
            color: #ddd;
            float: right;
          }
          /***** CSS Magic to Highlight Stars on Hover *****/
          .rating > input:checked ~ label,
          .rating:not(:checked) > label:hover,
          .rating:not(:checked) > label:hover ~ label {
            /* show gold star when clicked */
            /* hover current star */
            color: #ffd700;
          }
          /* hover previous stars in list */
          .rating > input:checked + label:hover,
          .rating > input:checked ~ label:hover,
          .rating > label:hover ~ input:checked ~ label,
          .rating > input:checked ~ label:hover ~ label {
            /* hover current star when changing rating */
            /* lighten current selection */
            color: #ffed85;
          }
          a[data-tooltip] {
            position: relative;
          }
          a[data-tooltip]::before,
          a[data-tooltip]::after {
            position: absolute;
            display: none;
            opacity: 0.85;
          }
          a[data-tooltip]::before {
            /*
         * using data-tooltip instead of title so we 
         * don't have the real tooltip overlapping
         */
            content: attr(data-tooltip);
            background: #000;
            color: #fff;
            font-size: 13px;
            padding: 5px;
            border-radius: 5px;
            /* we don't want the text to wrap */
            white-space: nowrap;
            text-decoration: none;
          }
          a[data-tooltip]::after {
            width: 0;
            height: 0;
            border: 6px solid transparent;
            content: "";
          }
          a[data-tooltip]:hover::before,
          a[data-tooltip]:hover::after {
            display: block;
          }
          /** positioning **/
          /* top tooltip */
          a[data-tooltip][data-placement="top"]::before {
            bottom: 100%;
            left: 0;
            margin-bottom: 40px;
          }
          a[data-tooltip][data-placement="top"]::after {
            border-top-color: #000;
            border-bottom: none;
            bottom: 50px;
            left: 20px;
            margin-bottom: 4px;
          }
        `}</style>
        {/* ------------------------------------------------------------- */}
        <div className="movie-card mt-5" style={{ height: "900px" }}>
          <div className="container with" style={{ height: "800px" }}>
            <div
              className="hero"
              style={{
                backgroundImage: `url(${data ? data.src : null})`,
                backgroundSize: "cover",
              }}
            >
              <div className="details">
                <div className="title1">{data ? data.title : null}</div>
                <div className="title2"></div>
                <fieldset className="rating">
                  <input
                    type="radio"
                    id="star5"
                    name="rating"
                    defaultValue={5}
                  />
                  <label
                    className="full"
                    htmlFor="star5"
                    title="Awesome - 5 stars"
                  />
                  <input
                    type="radio"
                    id="star4half"
                    name="rating"
                    defaultValue="4 and a half"
                  />
                  <label
                    className="half"
                    htmlFor="star4half"
                    title="Pretty good - 4.5 stars"
                  />
                  <input
                    type="radio"
                    id="star4"
                    name="rating"
                    defaultValue={4}
                    defaultChecked
                  />
                  <label
                    className="full"
                    htmlFor="star4"
                    title="Pretty good - 4 stars"
                  />
                  <input
                    type="radio"
                    id="star3half"
                    name="rating"
                    defaultValue="3 and a half"
                  />
                  <label
                    className="half"
                    htmlFor="star3half"
                    title="Meh - 3.5 stars"
                  />
                  <input
                    type="radio"
                    id="star3"
                    name="rating"
                    defaultValue={3}
                  />
                  <label
                    className="full"
                    htmlFor="star3"
                    title="Meh - 3 stars"
                  />
                  <input
                    type="radio"
                    id="star2half"
                    name="rating"
                    defaultValue="2 and a half"
                  />
                  <label
                    className="half"
                    htmlFor="star2half"
                    title="Kinda bad - 2.5 stars"
                  />
                  <input
                    type="radio"
                    id="star2"
                    name="rating"
                    defaultValue={2}
                  />
                  <label
                    className="full"
                    htmlFor="star2"
                    title="Kinda bad - 2 stars"
                  />
                  <input
                    type="radio"
                    id="star1half"
                    name="rating"
                    defaultValue="1 and a half"
                  />
                  <label
                    className="half"
                    htmlFor="star1half"
                    title="Meh - 1.5 stars"
                  />
                  <input
                    type="radio"
                    id="star1"
                    name="rating"
                    defaultValue={1}
                  />
                  <label
                    className="full"
                    htmlFor="star1"
                    title="Sucks big time - 1 star"
                  />
                  <input
                    type="radio"
                    id="starhalf"
                    name="rating"
                    defaultValue="half"
                  />
                  <label
                    className="half"
                    htmlFor="starhalf"
                    title="Sucks big time - 0.5 stars"
                  />
                </fieldset>
                <span className="likes">109 likes</span>
              </div>{" "}
              {/* end details */}
            </div>{" "}
            {/* end hero */}
            <div className="description">
              <div className="column1">
                <span className="tag">action</span>
                <span className="tag">fantasy</span>
                <span className="tag">adventure</span>
              </div>{" "}
              {/* end column1 */}
              <div className="column2">
                <p dir="rtl">{data ? data.description : null}</p>
                <div className="avatars">
                  <Link href="#" data-tooltip="Person 1" data-placement="top">
                    <picture>
                      <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar1.png"
                        alt="avatar1"
                      />
                    </picture>
                  </Link>
                  <Link href="#" data-tooltip="Person 2" data-placement="top">
                    <picture>
                      <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar2.png"
                        alt="avatar2"
                      />
                    </picture>
                  </Link>
                  <Link href="#" data-tooltip="Person 3" data-placement="top">
                    <picture>
                      <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar3.png"
                        alt="avatar3"
                      />
                    </picture>
                  </Link>
                </div>{" "}
                {/* end avatars */}
              </div>{" "}
              {/* end column2 */}
            </div>{" "}
            {/* end description */}
            <button className="btn btn-dark mt-5 wi">دانلود و تماشا</button>
          </div>{" "}
          {/* end container */}
        </div>{" "}
        {/* end movie-card */}
        {/* ------------------------------------------------------------- */}
        {/* ------------------------------comment page------------------------------- */}
        <div
          className="container mt-5 mb-5"
          dir="rtl"
          style={{ height: "1300px" }}
        >
          <div
            className="d-flex justify-content-center"
            style={{ height: "1300px" }}
          >
            <div
              className="d-flex flex-column col-md-8 mt-4"
              style={{ height: "1300px" }}
            >
              <div className="coment-bottom bg-white p-2 px-4">
                <div className="d-flex flex-row add-comment-section mt-4 mb-4">
                  <input
                    type="text"
                    className="form-control mr-3"
                    placeholder="اضافه کردن نظر"
                  />
                  <button className="btn btn-primary me-2" type="button">
                    ارسال
                  </button>
                </div>
                <div className="commented-section mt-2">
                  <div className="d-flex flex-row align-items-center commented-user">
                    <h5 className="mr-2">مهدی</h5>
                    <span className="dot mb-1" />
                    <span className="mb-1 ml-2">4 ساعت پیش</span>
                  </div>
                  <div className="comment-text-sm">
                    <span>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                      و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
                      شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
                      بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
                      درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
                      طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                      ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی
                      ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
                      موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                      زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی
                      سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
                      قرار گیرد.
                    </span>
                  </div>
                  <div className="reply-section">
                    <div className="d-flex flex-row align-items-center voting-icons">
                      <i className="fa fa-sort-up fa-2x mt-3 hit-voting" />
                      <i className="fa fa-sort-down fa-2x mb-3 hit-voting" />
                      <span className="ml-2">10</span>
                      <span className="dot ml-2" />
                      <h6 className="ml-2 mt-1">پاسخ</h6>
                    </div>
                  </div>
                </div>
                <div className="commented-section mt-2">
                  <div className="d-flex flex-row align-items-center commented-user">
                    <h5 className="mr-2">سارا</h5>
                    <span className="dot mb-1" />
                    <span className="mb-1 ml-2">5 ساعت پیش</span>
                  </div>
                  <div className="comment-text-sm">
                    <span>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                      و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
                      شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
                      بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
                      درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
                      طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                      ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی
                      ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
                      موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                      زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی
                      سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
                      قرار گیرد.
                    </span>
                  </div>
                  <div className="reply-section">
                    <div className="d-flex flex-row align-items-center voting-icons">
                      <i className="fa fa-sort-up fa-2x mt-3 hit-voting" />
                      <i className="fa fa-sort-down fa-2x mb-3 hit-voting" />
                      <span className="ml-2">15</span>
                      <span className="dot ml-2" />
                      <h6 className="ml-2 mt-1">پاسخ</h6>
                    </div>
                  </div>
                </div>
                <div className="commented-section mt-2">
                  <div className="d-flex flex-row align-items-center commented-user">
                    <h5 className="mr-2">علی</h5>
                    <span className="dot mb-1" />
                    <span className="mb-1 ml-2">10 ساعت پیش</span>
                  </div>
                  <div className="comment-text-sm">
                    <span>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                      و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
                      شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
                      بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
                      درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
                      طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                      ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی
                      ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
                      موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                      زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی
                      سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
                      قرار گیرد.
                    </span>
                  </div>
                  <div className="reply-section">
                    <div className="d-flex flex-row align-items-center voting-icons">
                      <i className="fa fa-sort-up fa-2x mt-3 hit-voting" />
                      <i className="fa fa-sort-down fa-2x mb-3 hit-voting" />
                      <span className="ml-2">25</span>
                      <span className="dot ml-2" />
                      <h6 className="ml-2 mt-1">Reply</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------comment page------------------------------- */}
        <Footer />
      </div>
    );
  }
  return <div>{content}</div>;
}
