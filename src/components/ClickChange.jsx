import React, { useState } from "react";
import { selectData } from "./common/Helper";

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
            {selectData.map((select, i) => {
              return (
                <p
                  onClick={() => setInputData(select.name)}
                  key={i}
                  className="cursor-pointer inline fs-5 text-white py-1 my-1 px-3 border-white border-2"
                >
                  {select.name}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClickChange;
