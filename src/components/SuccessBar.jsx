const SuccesBar = () => {
  return (
    <>
      <div className="border-2 border-yellow-400 bg-blackCustom h-60 px-24 py-14 content-center">
        <div className=" border-2 border-red-500 flex justify-between font-manrope ">
          <div>
            <p className="text-7xl text-amber-400  ">350 + </p>
            <p className="text-3xl text-white	">Clients Worldwide</p>
          </div>
          <div>
            <p className="text-7xl text-amber-400  ">20 + </p>
            <p className="text-3xl text-white	">Team Members</p>
          </div>
          <div>
            <p className="text-7xl text-amber-400  ">100 + </p>
            <p className="text-3xl text-white	">Projects Completed</p>
          </div>
          <div>
            <p className="text-7xl text-amber-400  ">85M + </p>
            <p className="text-3xl text-white	">Revenue Generated</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccesBar;
