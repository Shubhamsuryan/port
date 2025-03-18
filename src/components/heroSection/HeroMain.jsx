import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMain = () => {
  return (
    <div className=" pt-40 pb-16">
      <div className="bg-brown bg-opacity-25 flex md:flex-row sm:flex-col  max-w-[1200px] mx-auto justify-between items-center relative pl-4">
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
};

export default HeroMain;
