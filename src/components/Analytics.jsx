const Analytics = () => {
  return (
    <div className="bg-gradient-to-b from-cyan-200 to-white h-3/4 w-full flex justify-evenly p-2  ">
      <div className="grid grid-cols-2 h-[100%]">
        <div className="pt-14 pl-8 pr-10 ">
          <span className="text-black text-3xl font-bold ">
            We Have It All !
          </span>
          <div className="flex p-1 gap-6 font-bold">
            <div className="border-t border-b border-black ">
              <span>
                <span className="text-blue-600 text-3xl h-10 w-10 mr-2">
                  100+
                </span>
                <div className="text-xs py-1">Trusted Colleges</div>
              </span>
            </div>

            <div className="border-t border-b border-black">
              <div className="border-l border-black">
                <span>
                  <span className=" ml-2 pl-2 text-blue-600 text-3xl  ">
                    ANALYTICS
                  </span>
                  <div className=" ml-2 pl-2 text-xs py-1">
                    TCutting Edge Data Analysics
                  </div>
                </span>
              </div>
            </div>
          </div>

          <div className="py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ad
            dolor, temporibus quasi repellat quibusdam eius in commodi assumenda
            minus pariatur similique cupiditate, ab ut! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quam ad dolor, temporibus quasi
            repellat quibusdam eius in commodi assumenda minus pariatur
            similique cupiditate, ab ut!
          </div>
          <div className="py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ad
            dolor, temporibus quasi repellat quibusdam eius in commodi assumenda
            minus pariatur similique cupiditate, ab ut! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quam ad dolor, temporibus quasi
            repellat quibusdam eius in commodi assumenda minus pariatur
            similique cupiditate, ab ut!
          </div>
          <div className="py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ad
            dolor, temporibus quasi repellat quibusdam eius in commodi assumenda
            minus pariatur similique cupiditate, ab ut! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quam ad dolor, temporibus quasi
            repellat quibusdam eius in commodi assumenda minus pariatur
            similique cupiditate, ab ut!
          </div>

          <div className="bg-black text-white w-36 h-15 px-2 rounded-md">
            <div className="pt-2">We Shape</div>
            <div className="pb-2">A Brighter Future</div>
          </div>
        </div>

        <div className="h-[100%] relative overflow-hidden flex flex-row">
          <div className="absolute inset-0 flex flex-wrap items-center justify-center">
            <div className="w-1/3 p-1">
              <img
                src="public/05.png"
                className="rounded-md w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="flex w-1/3 p-1">
              <img
                src="public/03.png"
                className="rounded-md w-1/2 h-full object-cover"
                alt=""
              />
              <img
                src="public/04.png"
                className="rounded-md 1/2 h-full object-cover "
                alt=""
              />
            </div>
            <div className="flex w-1/3 p-1">
              <img
                src="public/02.png"
                className=" rounded-md w-full h-full object-cover 
          "
                alt=""
              />
              <img
                src="public/mobile-app-template.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
