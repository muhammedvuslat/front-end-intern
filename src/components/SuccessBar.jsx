const SuccesBar = () => {
  return (
    <>
      <div className=" bg-blackCustom h-auto px-6 py-4 md:px-12 md:py-8 lg:px-24 lg:py-14 content-center font-manrope ">
        <div className=" flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 lg:w-auto md:flex-none md:flex-initial lg:mx-2">
            <p className="text-5xl md:text-7xl text-amber-400">350 +</p>
            <p className="text-2xl md:text-3xl text-white">Clients Worldwide</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-auto md:flex-none md:flex-initial lg:mx-2">
            <p className="text-5xl md:text-7xl text-amber-400">20 +</p>
            <p className="text-2xl md:text-3xl text-white">Team Members</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-auto md:flex-none md:flex-initial lg:mx-2">
            <p className="text-5xl md:text-7xl text-amber-400">100 +</p>
            <p className="text-2xl md:text-3xl text-white">
              Projects Completed
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-auto md:flex-none md:flex-initial lg:mx-2">
            <p className="text-5xl md:text-7xl text-amber-400">85M +</p>
            <p className="text-2xl md:text-3xl text-white">Revenue Generated</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccesBar;
