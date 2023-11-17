import React from "react";
import coding from "../assets/images/png/codingImg.avif";
import ReverseSlider from "./ReverseSlider";
const HoverShow = () => {
  return (
    <div>
      <div className="container mx-auto max-w-[1440px] bg-fixed bg-sky-300">
        <div className="flex flex-wrap items-center group">
          <div className="w-6/12">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              nihil, corporis exercitationem quisquam, adipisci ut sint tenetur
              earum provident illo dolores quasi reiciendis tempora rerum,
              aspernatur quam voluptates facilis saepe nisi maxime! Sapiente
              velit cum soluta, quod temporibus laboriosam sit dicta ab veniam,
              perferendis iusto repellendus quo voluptatum sequi. Aliquid
              laudantium autem dignissimos quibusdam, ipsum, praesentium quam
              animi dolore possimus rerum fuga adipisci. Officiis, facere. Atque
              rem dicta modi voluptate temporibus accusantium iure dolorum hic
              culpa libero saepe, placeat rerum quisquam unde perspiciatis
              cupiditate molestiae officiis facere ipsa quia adipisci id
              eligendi aliquam. Aliquam sed eligendi harum rerum repellendus a!
            </p>
          </div>
          <div className="w-6/12">
            <div className=" h-0 group-hover:h-[600px] overflow-hidden transition-all ease-in-out duration-700 group-hover:opacity-100 w-full opacity-0">
              <ReverseSlider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverShow;
