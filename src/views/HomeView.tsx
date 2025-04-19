// import { ForecastForm } from "@/components/ForecastForm";

import WLAFormView from "./WLAFormView"
import WLCFormView from "./WLCFormView"

const HomeView = () => {
  return (
    <div className="container mx-auto">
      <div className="h-[100vh] flex flex-col justify-center items-center p-10 text-white">
        <div className="w-full">
            <h1 className="text-white text-center font-bold text-4xl mb-4 pt-5">Water Level Prediction</h1>
            <p className="w-full text-center px-10 pb-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
            </p>
            <hr className="text-white " />
            {/* file uploads */}
            <div className="flex flex-row">
              <div className="h-full w-full my-10 pr-10 border border-l-0 border-t-0 border-b-0">
                <WLAFormView />
              </div>
              <div className="h-full w-full my-10 pl-10 ">
                <WLCFormView />
              </div>
            </div>
        </div>



      </div>
      
    </div>
  )
}

export default HomeView
