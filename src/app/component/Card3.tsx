import * as React from "react";

interface ICard3Props {
  imageUrl: string;
  title: string;
  children: string;
  projectUrl: string;
}

const Card3: React.FunctionComponent<ICard3Props> = (props) => {
  return (
    <div className="min-w-[300px]">
      <a href={props.projectUrl} className="relative ">
        <img
          src={props.imageUrl}
          alt="cardimage"
          className="rounded-lg w-full"
        />
        <div className="group rounded-lg absolute inset-0 flex justify-center items-center bg-black bg-opacity-0 hover:bg-opacity-50 hover:cursor-pointer duration-500 ">
          <h1 className="text-white duration-500 opacity-0 group-hover:opacity-100 font-bold">
            Visit Page
          </h1>
        </div>
      </a>
      <div className="text-white m-4 md:m-8 font-extrabold">
        <h1 className="text-xl">{props.title}</h1>
        <p>{props.children}</p>
      </div>
    </div>
  );
};

export default Card3;
