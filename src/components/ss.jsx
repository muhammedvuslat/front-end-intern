import ContactPerson from "../assets/Contact.png";
const Contact = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between border-4 border-blue-400 py-12 px-6 sm:py-48 sm:px-24">
      <div className="mb-8 sm:mb-0">
        <div className="border-4 border-red-400 w-full sm:w-[622px] h-[400px] sm:h-[891px] bg-orange-100 p-4 sm:p-28">
          <img
            className="w-full h-full object-contain"
            src={ContactPerson}
            alt="contact_person"
          />
        </div>
      </div>
      <div className="border-4 border-red-400 w-full sm:w-[751px] h-auto text-blackCustom font-manrope ">
        <div className="text-3xl sm:text-5xl mb-8">
          <p className="text-right">
            We'd love to hear <span className="block">from you</span>
          </p>
        </div>
        <div>
          <form className="px-8 py-8 sm:px-12 sm:py-12 border-4 border-yellow-400">
            <div className="mb-4 flex flex-col space-y-4 ">
              <input
                className="appearance-none border border-black w-full py-3 px-4 text-blackCustom placeholder-blackCustom leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name*"
              />
            </div>
            <div className="mb-6">
              <input
                className="appearance-none border border-black w-full py-3 px-4 text-blackCustom placeholder-blackCustom leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email*"
              />
            </div>
            <div className="mb-6">
              <input
                className="appearance-none border border-black w-full py-3 px-4 text-blackCustom placeholder-blackCustom leading-tight focus:outline-none focus:shadow-outline"
                id="url"
                type="text"
                placeholder="Website URL*"
              />
            </div>
            <div className="mb-6">
              <textarea
                className="appearance-none border border-black w-full py-3 px-4 text-blackCustom placeholder-blackCustom leading-tight focus:outline-none focus:shadow-outline resize-none h-40"
                id="project-details"
                placeholder="Project Details*"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blackCustom hover:bg-gray-600 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline w-full"
                type="button"
              >
                Send Proposal
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
