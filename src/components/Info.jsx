import MidImage from "../assets/Mid_Image.png";
import person1 from "../assets/ester.png";
import person2 from "../assets/cody.png";
import person3 from "../assets/brooklyn.png";

const Info = () => {
  return (
    <div>
      <div>
        <h1>Who we are</h1>
        <p>
          We love what we do and create partnerships with our clients to ensure
          their digital transformation is positioned for long-term success.We
          believe that the human dimensions essential to start any successful
          project and that this is where splendid emotional relationships
          between the company and people are born.
        </p>
      </div>
      <div>
        <img src={MidImage} alt="mid" />
      </div>
      <div>
        <div className="bg-white py-24 sm:py-32 border-orange-600 border-4 ">
          <div className="max-w-2xl border-pink-600 border-4">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet the heroes behind the magic
            </h2>
          </div>
          <div className="mx-auto grid max-w-screen-2xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3 border-orange-600 border-4">
            <ul className="grid gap-x-20 gap-y-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-y-8 xl:col-span-3 border-teal-600 border-4 font-manrope text-cardBlack ">
              <li className="border-teal-300 border-4 p-5">
                <div className="items-center gap-x-2">
                  <img
                    className="  sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-[376px] xl:h-[394px]  "
                    src={person1}
                    alt=""
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight ">
                      Ester Howard
                    </h3>
                    <p className="text-sm font-semibold leading-6  opacity-5 ">
                      Founder
                    </p>
                  </div>
                </div>
              </li>
              <li className="border-teal-300 border-4 p-5">
                <div className=" items-center gap-x-6">
                  <img
                    className=" sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-[376px] xl:h-[394px] "
                    src={person2}
                    alt=""
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight ">
                      Cody Fisher
                    </h3>
                    <p className="text-sm font-semibold leading-6  opacity-5 ">
                      Developer
                    </p>
                  </div>
                </div>
              </li>
              <li className="border-teal-300 border-4 p-5">
                <div className=" items-center gap-x-6">
                  <img
                    className=" sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-[376px] xl:h-[394px] "
                    src={person3}
                    alt=""
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight ">
                      Brooklyn Simmons
                    </h3>
                    <p className="text-sm font-semibold leading-6  opacity-5 ">
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
