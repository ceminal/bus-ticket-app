import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
import HomePageBanner from "./_partials/HomePageBanner";
import { Fragment } from "react";
import HomePageSlider from "./_partials/HomePageSlider";

const HomePage = () => {
  return (
    <Fragment>
      <Header/>
        <HomePageBanner />
        <HomePageSlider />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
