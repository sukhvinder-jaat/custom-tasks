import React, { useState } from "react";
const ClickChange = () => {
  const [inputData, setInputData] = useState("Select");
  const [height, setHeight] = useState(false);
  return (
    <>
      <div className="bg-black py-2 max-w-[80px] flex justify-center">
        <div className="flex flex-col items-start text-center">
          <p
            onClick={() => setHeight(!height)}
            className="cursor-pointer inline fs-5 text-white text-center"
          >
            {inputData}
          </p>
          <div
            className={`bg-black flex flex-col justify-start items-start ${
              height ? "h-full" : "h-0 overflow-hidden"
            }`}
            onClick={() => setHeight(false)}
          >
            <p
              onClick={() => setInputData("No 1")}
              className="cursor-pointer inline fs-5 text-white py-1 my-1 px-3 border-white border-2"
            >
              No 1
            </p>
            <p
              onClick={() => setInputData("No 2")}
              className="cursor-pointer inline fs-5 text-white py-1 my-1 px-3 border-white border-2"
            >
              No 2
            </p>
            <p
              onClick={() => setInputData("No 3")}
              className="cursor-pointer inline fs-5 text-white py-1 my-1 px-3 border-white border-2"
            >
              No 3
            </p>
            <p
              onClick={() => setInputData("No 4")}
              className="cursor-pointer inline fs-5 text-white py-1 my-1 px-3 border-white border-2"
            >
              No 4
            </p>
            <p
              onClick={() => setInputData("No 5")}
              className="cursor-pointer inline fs-5 text-white py-1 my-1 px-3 border-white border-2"
            >
              No 5
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClickChange;
