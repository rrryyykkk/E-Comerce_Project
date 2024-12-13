import Register from "./Register";
import Banner from "./banner";
import CategoryShowCase from "./CategoryShowCase";
import HomeCategory from "./HomeCategory";
import Location from "./Location";
import AboutUs from "./AboutUs";
import AppSection from "./AppSection";
import Sponsor from "./Sponsor";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeCategory />
      <CategoryShowCase />
      <Register />
      <Location />
      <AboutUs />
      <AppSection />
      <Sponsor />
      <Footer />
    </div>
  );
};

export default Home;
