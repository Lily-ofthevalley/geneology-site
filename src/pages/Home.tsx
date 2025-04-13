import HeroSection from "../components/HeroSection";
import About from "../components/Home/About";
import Help from "../components/Home/Help";
import Numbers from "../components/Home/Numbers";
import Today from "../components/Home/Today";

const Home = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <HeroSection />
      <div className="flex flex-row w-full mt-6">
        <About />
        <div className="w-1/3 flex flex-col">
          <Today />
          <Help />
        </div>
      </div>
      <Numbers />
    </div>
  );
};

export default Home;
