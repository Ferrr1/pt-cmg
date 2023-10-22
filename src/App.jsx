import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import HomeContent from "./components/HomeContent";
// import slides from "./Data/CarouselData.json";
import { items } from "./Data/CarouselData";
import { buttonItems } from "./components/ButtonCarouselData";
import "./style.css";
import Bussiness from "./components/Bussiness";

const App = () => {
  return (
    <>
      <div className="App">
        <Navbar />
        <Carousel data={items} Buttondata={buttonItems} />
        <HomeContent />
        <Bussiness />
      </div>
    </>
  );
};

export default App;
