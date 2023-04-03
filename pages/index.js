import Navbar from "./navbar/navbar";
import Header from "./header/header";
import Footer from "./footer/footer";
import Products from "./products/products";
import Newproducts from "./newproducts/newproducts";
import SpinnerLoading from "./SpinnerLoading/SpinnerLoading";
import { useEffect, useState } from "react";
function HomePage() {
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
        <Header />
        <Products />
        <Newproducts />
        <Footer />
      </div>
    );
  }

  return <div>{content}</div>;
}
export default HomePage;
