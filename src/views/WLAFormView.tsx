import { useState } from "react";
import waterBlue from "../assets/blue.png"
import waterRed from "../assets/red.png"
import waterYellow from "../assets/yellow.png"
import waterBrown from "../assets/brown.png"
const WLAFormView = () => {

const [fileName, setFileName] = useState<string>('No file chosen');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };
  return (
    <div>
      <div className="flex flex-col gap-8 p-13 justify-center h-[500px] w-full rounded-2xl  bg-[#bac3d0]">

          <div className="grid w-full items-center gap-1.5 ">
            <label className="block text-lg font-medium text-[#0a234c] mb-3">Water Level - A</label>
            <div className="flex flex-row gap-2">
              <div className="flex w-5/6 items-center rounded-xl border bg-white border-[#0a234c] shadow-sm overflow-hidden">
                  <label className="bg-[#0a234c] text-sm text-white px-4 py-2 cursor-pointer hover:bg-[#0a234c]/85">
                  Choose File
                  <input
                      type="file"
                      accept=".csv, . xls, .xlsx"
                      onChange={handleFileChange}
                      className="hidden"
                  />
                  </label>
                  <span className="px-4 py-2 text-sm text-gray-700 truncate">
                  {fileName}
                  </span>
              </div>
              <button className="rounded-xl w-3/12 text-sm bg-[#0a234c] font-medium cursor-pointer hover:bg-[#0a234c]/85">Forecast</button>
            </div>
            <p className="text-xs text-gray-500 mt-1">
                EXCEL or CSV files only.
            </p>

        </div>
        <div className="border border-[#0a234c] rounded-md shadow-lg bg-white p-7  h-full w-full">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="w-full text-sm font-medium pb-30 text-[#0a234c]  ">
                  Prediction Results:

                
                  
              </div>
              <div className="flex flex-col ">
                <div className="w-full h-[10px] rounded-xl bg-blue-800"></div>
                <div className="flex flex-row">
                  <div className="flex flex-row justify-center  pt-2 gap-5  text-[13px] w-full text-black">
                    <div className="flex flex-row gap-2 justify-center items-center">
                      {/* <img src={waterBlue} className=" w-[20px] rounded-lg"/> */}
                      <div className="h-[8px] w-[8px] bg-blue-800"></div>
                      <div>Waterlevel</div>
                    </div>
                    <div className="flex flex-row gap-2 justify-center items-center">
                      {/* <img src={waterYellow} className=" w-[20px] rounded-lg"/> */}
                      <div className="h-[8px] w-[8px] bg-yellow-300"></div>
                      <div>Alertwl</div>
                    </div>
                    <div className="flex flex-row gap-2 justify-center items-center">
                      {/* <img src={waterBrown} className=" w-[20px] rounded-lg"/> */}
                      <div className="h-[8px] w-[8px] bg-yellow-800"></div>
                      <div>Alarmwl</div>
                    </div>
                    <div className="flex flex-row gap-2 justify-center items-center">
                      {/* <img src={waterRed} className=" w-[20px] rounded-lg"/> */}
                      <div className="h-[8px] w-[8px] bg-red-600"></div>
                      <div>Criticalwl</div>
                    </div>
                    
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default WLAFormView
