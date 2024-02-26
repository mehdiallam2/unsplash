import Header from "../components/Header";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <Header />
        <Gallery />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
