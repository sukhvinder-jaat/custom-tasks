import "./App.css";
import HoverShow from "./components/HoverShow";
import ReverseSlider from "./components/ReverseSlider";
import SideBar from "./components/SideBar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReverseSwiper from "./components/ReverseSwiper";
import ReverseSplide from "./components/ReverseSplide";
// splide slider
// import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import ClickChange from "./components/ClickChange";
function App() {
  return (
    <>
      {/* <SideBar /> */}
      <HoverShow />
      <div className="max-w-[1440px] mx-auto pt-5">
        <ClickChange />
      </div>
      {/* <ReverseSlider /> */}
      {/* <ReverseSplide /> */}
    </>
  );
}

export default App;
