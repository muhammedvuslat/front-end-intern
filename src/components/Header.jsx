import bgShape from "../assets/Bg Shape.png";
import handImage1 from "../assets/image_1.png";
import handImage2 from "../assets/image_2.png";
import handImage3 from "../assets/image_3.png";
import handImage4 from "../assets/image_4.png";
import handImage5 from "../assets/image_5.png";
import handImage6 from "../assets/image_6.png";

const Header = () => {
  return (
    <div className="bg-yellow-400 h-screen flex flex-col justify-center items-center">
      <div className="relative  max-w-screen-xl mx-auto overflow-hidden">
        <img src={bgShape} alt="bg" className="w-full" />
      </div>
      <div className="absolute text-center top-1/3 left-0 right-0 p-10 justify-center flex ">
        <h1 className="font-bold font-manrope text-3xl md:text-5xl lg:text-8xl  max-w-5xl">
          Let's create something great together
        </h1>
      </div>
      <div className=" absolute flex bottom-0  justify-center ">
        <div className="flex">
          <img
            src={handImage1}
            alt="hand1"
            className="w-20 h-24 md:w-36 md:h-56 lg:w-40 lg:h-64 xl:w-60 xl:h-96"
          />
          <img
            src={handImage2}
            alt="hand2"
            className="w-20 h-24 md:w-36 md:h-56 lg:w-40 lg:h-64 xl:w-60 xl:h-96"
          />
          <img
            src={handImage3}
            alt="hand3"
            className="w-20 h-24 md:w-36 md:h-56 lg:w-40 lg:h-64 xl:w-60 xl:h-96"
          />
        </div>
        <div className="flex">
          <img
            src={handImage4}
            alt="hand4"
            className="w-20 h-24 md:w-36 md:h-56 lg:w-40 lg:h-64 xl:w-60 xl:h-96"
          />
          <img
            src={handImage5}
            alt="hand5"
            className="w-20 h-24 md:w-36 md:h-56 lg:w-40 lg:h-64 xl:w-60 xl:h-96"
          />
          <img
            src={handImage6}
            alt="hand6"
            className="w-20 h-24 md:w-36 md:h-56 lg:w-40 lg:h-64 xl:w-60 xl:h-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
