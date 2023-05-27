import MidImage from "../assets/Mid_Image.png";
import person1 from "../assets/ester.png";
import person2 from "../assets/cody.png";
import person3 from "../assets/brooklyn.png";

const Info = () => {
  return (
    <div className="border-4 border-orange-600 ">
      <div className="border-4 border-pink-400 m-32">
        //todo Div için ekranların ayarlamalarını yap
        <h1 className="text-5xl font-manrope">Who we are</h1>
        <p className="text-3xl font-manrope">
          We love what we do and create partnerships with our clients to ensure
          their digital transformation is positioned for long-term success.We
          believe that the human dimensions essential to start any successful
          project and that this is where splendid emotional relationships
          between the company and people are born.
        </p>
      </div>
      <div className="h-[629px] w-auto flex items-center justify-center">
        <img src={MidImage} alt="mid" className="border-4 border-pink-400" />
      </div>
      <div>
        <div className="bg-white py-24 sm:py-32 border-cyan-400 border-4 p-16">
          <div className=" ">
            <div className="  text-center mb-28 w-full text-center  ">
              <h2 className="text-3xl font-bold  text-gray-900 sm:text-4xl ">
                Meet the heroes behind the magic
              </h2>
            </div>
            <ul className="grid  gap-x-20 gap-y-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-y-8 xl:col-span-3 lg:flex xl:flex  font-manrope text-cardBlack border-yellow-400 border-4 justify-around">
              <li className=" h-auto w-auto p-2 shadow-[1px_1px_6px_0px_#4a5568] max-w-md flex items-center justify-center lg:w-[324px] lg:h-[420px] xl:w-[433px] xl:h-[560px] ">
                //todo li elementlerinin genişliğini md ekranlarda kontrol et
                <div className="items-center gap-x-2">
                  <img
                    className="  sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-[376px] xl:h-[394px]  "
                    src={person1}
                    alt=""
                  />
                  <div className="mt-11">
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-2xl ">
                      Ester Howard
                    </h3>
                    <p className="text-sm font-semibold leading-6  opacity-50 mt-2.5 ">
                      Founder
                    </p>
                  </div>
                </div>
              </li>
              <li className="p-2 shadow-[1px_1px_6px_0px_#4a5568] max-w-md flex items-center justify-center ">
                <div className=" items-center gap-x-6">
                  <img
                    className=" sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-[376px] xl:h-[394px] "
                    src={person2}
                    alt=""
                  />
                  <div className="mt-11">
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-2xl ">
                      Cody Fisher
                    </h3>
                    <p className="text-sm font-semibold leading-6  opacity-50 mt-2.5 ">
                      Developer
                    </p>
                  </div>
                </div>
              </li>
              <li className="p-2 shadow-[1px_1px_6px_0px_#4a5568] max-w-md flex items-center justify-center ">
                <div className=" items-center gap-x-6">
                  <img
                    className=" sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-[376px] xl:h-[394px] "
                    src={person3}
                    alt=""
                  />
                  <div className="mt-11">
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-2xl ">
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
