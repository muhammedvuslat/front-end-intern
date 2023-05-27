import MidImage from "../assets/Mid_Image.png";
import person1 from "../assets/ester.png";
import person2 from "../assets/cody.png";
import person3 from "../assets/brooklyn.png";
import SmImage1 from "../assets/Sm_Image1.png";
import SmImage2 from "../assets/Sm_Image2.png";
import SmImage3 from "../assets/Sm_Image3.png";

const Info = () => {
  return (
    <div className=" ">
      <div className=" m-8 sm:m-12 md:m-16 lg:m-24 xl:m-32">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-manrope">
          Who we are
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl font-manrope">
          We love what we do and create partnerships with our clients to ensure
          their digital transformation is positioned for long-term success. We
          believe that the human dimensions essential to start any successful
          project and that this is where splendid emotional relationships
          between the company and people are born.
        </p>
      </div>

      <div className="h-[629px] w-auto flex items-center justify-center hidden sm:hidden md:flex">
        <img src={MidImage} alt="mid" className="    " />
      </div>

      <div className="relative h-[240px] w-auto flex items-center justify-center sm:block md:hidden bg-amber-400 ">
        <div className="absolute top-[1px] left-4 ">
          <img src={SmImage1} alt="sm1" className=" w-auto h-60  " />
        </div>
        <div className="absolute bottom-[-2px] left-4 ">
          <img src={SmImage2} alt="sm2" className="   w-auto h-[250px]  " />
        </div>
        <div className="absolute bottom-[-2px] left-4 ">
          <img src={SmImage3} alt="sm3" className="   w-auto h-[250px]  " />
        </div>
      </div>

      <div>
        <div className="bg-white py-24 sm:py-32   p-16">
          <div className=" ">
            <div className="  text-center mb-28 w-full  ">
              <h2 className="text-3xl font-bold  text-gray-900 sm:text-4xl ">
                Meet the heroes behind the magic
              </h2>
            </div>
            <ul className="grid  gap-x-20 gap-y-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-y-8 xl:col-span-3 lg:flex xl:flex  font-manrope text-blackCustom justify-around">
              <li className=" h-auto w-auto p-2 shadow-[1px_1px_6px_0px_#4a5568] max-w-md flex items-center justify-center sm:w-[260px] sm:h-[336] lg:w-[324px] lg:h-[440px] xl:w-[433px] xl:h-[560px] ">
                <div className="items-center gap-x-2">
                  <img
                    className="  sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-[376px] xl:h-[394px]  "
                    src={person1}
                    alt=""
                  />
                  <div className="mt-11">
                    <h3 className="font-semibold leading-7 tracking-tight text-2xl ">
                      Ester Howard
                      {/* //todo fontları kontrol et  */}
                    </h3>
                    <p className="text-sm font-semibold leading-6  opacity-50 mt-2.5 ">
                      Founder
                    </p>
                  </div>
                </div>
              </li>
              <li className="h-auto w-auto p-2 shadow-[1px_1px_6px_0px_#4a5568] max-w-md flex items-center justify-center sm:w-[260px] sm:h-[336] lg:w-[324px] lg:h-[440px] xl:w-[433px] xl:h-[560px]">
                <div className=" items-center gap-x-6">
                  <img
                    className=" sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-[376px] xl:h-[394px] "
                    src={person2}
                    alt=""
                  />
                  <div className="mt-11">
                    <h3 className=" font-semibold leading-7 tracking-tight text-2xl ">
                      Cody Fisher
                    </h3>
                    <p className="text-sm font-semibold leading-6  opacity-50 mt-2.5 ">
                      Developer
                    </p>
                  </div>
                </div>
              </li>
              <li className="h-auto w-auto p-2 shadow-[1px_1px_6px_0px_#4a5568] max-w-md flex items-center justify-center sm:w-[260px] sm:h-[336] lg:w-[324px] lg:h-[440px] xl:w-[433px] xl:h-[560px]">
                <div className=" items-center gap-x-6">
                  <img
                    className=" sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-[376px] xl:h-[394px] "
                    src={person3}
                    alt=""
                  />
                  <div className="mt-11">
                    <h3 className=" font-semibold leading-7 tracking-tight text-2xl ">
                      Brooklyn Simmons
                    </h3>
                    <p className="text-sm font-semibold leading-6  opacity-50 mt-2.5 ">
                      Designer
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
