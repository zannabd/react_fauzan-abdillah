import Header from "../../components/Header/Header";
import Address from "../../components/LandingPage/Address";
import Footer from "../../components/LandingPage/Footer";
import Main from "../../components/LandingPage/Main";
import Subscribe from "../../components/LandingPage/Subscribe";

function LandingPage() {
  return (
    <>
      <Header />
      <Main />
      <Subscribe />
      <Address />
      <Footer />
    </>
  );
}

export default LandingPage;
