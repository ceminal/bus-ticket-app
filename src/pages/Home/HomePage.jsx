import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
import HomePageBanner from "./_partials/HomePageBanner";
import { Fragment } from "react";
import HomePageSlider from "./_partials/HomePageSlider";
import TicketBuyResult from "../Ticket-Buy-Result/TicketBuyResult";

const HomePage = () => {
  return (
    <Fragment>
      <Header />
        <HomePageBanner />
        <HomePageSlider />
        <TicketBuyResult />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
