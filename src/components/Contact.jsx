import ContactPerson from "../assets/Contact.png";
const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-col items-center xl:flex-row justify-between  py-12 px-6 sm:py-48 sm:px-24">
      <div className=" w-full sm:w-full md:w-full lg:w-[751px] lg:min-w-[751px] flex-row  xl:min-w-[751px] h-auto text-blackCustom font-manrope ">
        <div className="text-3xl sm:text-5xl mb-8 mr-12 ">
          <p className="text-right">
            We'd love to hear <span className="block">from you</span>
          </p>
        </div>
        <div>
          <form className="px-8 py-8 sm:px-12 sm:py-12  ">
            <div className="mb-4 flex flex-col space-y-4 ">
              <input
                className="appearance-none border border-black w-full py-3 px-4 text-blackCustom placeholder-blackCustom leading-tight focus:outline-none focus:shadow-outline md:h-24"
                id="name"
                type="text"
                placeholder="Name*"
              />
              <input
                className="appearance-none border border-black w-full py-2 px-3 text-blackCustom placeholder-blackCustom leading-tight focus:outline-none focus:shadow-outline md:h-24"
                id="email"
                type="email"
                placeholder="Email*"
              />
              <input
                className="appearance-none border border-black w-full py-2 px-3 text-blackCustom placeholder-blackCustom leading-tight focus:outline-none focus:shadow-outline md:h-24"
                id="url"
                type="text"
                placeholder="Website URL*"
              />
              <textarea
                className="appearance-none border border-black w-full py-2 px-3 text-blackCustom placeholder-blackCustom leading-tight focus:outline-none focus:shadow-outline h-48"
                id="username"
                type="text"
                placeholder="Project Details*"
              ></textarea>
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-blackCustom hover:bg-gray-600 text-white font-bold py-3 px-6  focus:outline-none focus:shadow-outline w-full md:h-24 "
                type="button"
              >
                Send Proposal
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className=" w-full  h-[600px] md:w-[622px] md:h-[891px] bg-orange-100 p-4   ">
        <img
          className="w-full h-full object-contain"
          src={ContactPerson}
          alt="contact_person"
        />
      </div>
    </div>
  );
};

export default Contact;
