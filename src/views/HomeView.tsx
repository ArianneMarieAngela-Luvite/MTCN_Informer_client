// import { ForecastForm } from "@/components/ForecastForm";

const HomeView = () => {
  return (
    <div className="container mx-auto border">
      <div className="border border-yellow-400 flex flex-col justify-center items-center p-10 text-white">
        <div className="w-full">
            <h1 className="text-white text-center font-bold text-4xl mb-4">Water Level Prediction</h1>
            <p className="w-full mb-4 text-center px-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
            </p>
            <hr className="text-white " />
            <div className="flex flex-row">
              <div className="h-full w-full my-10 px-10 py-10 border">
                {/* for wl-a */}
                <div className="h-full w-full py-10 px-10 border">
                  container for files
                </div>
                <div className="h-full w-full mt-10 py-10 px-10 border">
                  results
                </div>
                {/* for wl-a */}
              </div>
              <div className="h-full w-full my-10 border">results</div>
            </div>
            
           {/* <ForecastForm /> */}
        </div>



      </div>
      
    </div>
  )
}

export default HomeView
