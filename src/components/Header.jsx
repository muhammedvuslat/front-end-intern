import Bgshape from "../assets/images/Bg Shape.png";
import HandImage1 from "../assets/images/image_1.png";
import HandImage2 from "../assets/images/image_2.png";
import HandImage3 from "../assets/images/image_3.png";
import HandImage4 from "../assets/images/image_4.png";
import HandImage5 from "../assets/images/image_5.png";
import HandImage6 from "../assets/images/image_6.png";

const Header = () => {
  return (
    <div className="bg-yellow-400  h-screen flex flex-col justify-center items-center font-manrope">
      <div className="relative  max-w-screen-xl mx-auto overflow-hidden">
        <img src={Bgshape} alt="bg" className="w-full" />
      </div>
      <div className="absolute text-center top-1/3 left-0 right-0 p-10 justify-center flex ">
        <h1 className="font-bold text-3xl md:text-5xl lg:text-8xl  max-w-5xl">
          Let's create something great together
        </h1>
      </div>
      <div className=" absolute flex  bottom-0  justify-center ">
        <div className="flex">
          <img
            src={HandImage1}
            alt="hand1"
            className="w-20 h-24 md:w-36 md:h-56 lg:w-40 lg:h-64 xl:w-60 xl:h-96"
          />
          <img
            src={HandImage2}
            alt="hand2"
            className="w-20 h-24 md:w-36 md:h-56 lg:w-40 lg:h-64 xl:w-60 xl:h-96"
          />
          <img
            src={HandImage3}
            alt="hand3"
            className="w-20 h-24 md:w-36 md:h-56 lg:w-40 lg:h-64 xl:w-60 xl:h-96"
          />
        </div>
        <div className="flex">
          <img
            src={HandImage4}
            alt="hand4"
            className="w-20 h-24 md:w-36 md:h-56 lg:w-40 lg:h-64 xl:w-60 xl:h-96"
          />
          <img
            src={HandImage5}
            alt="hand5"
            className="w-20 h-24 md:w-36 md:h-56 lg:w-40 lg:h-64 xl:w-60 xl:h-96"
          />
          <img
            src={HandImage6}
            alt="hand6"
            className="w-20 h-24 md:w-36 md:h-56 lg:w-40 lg:h-64 xl:w-60 xl:h-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
