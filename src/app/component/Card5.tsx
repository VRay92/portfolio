import * as React from "react";
import { Carousel } from "flowbite-react";

interface ICard5Props {
  imageUrl: string;
  title: string;
  projectUrl: string;
  children: string;
}

const Card5: React.FunctionComponent<ICard5Props> = (props) => {
  const [openModal, setOpenModal] = React.useState(false);
  console.log("open modal", openModal);

  return (
    <div className="min-w-[300px]">
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center  bg-black bg-opacity-50 backdrop-blur-sm backdrop-filter">
          <div className={`h-[550px] w-[470px] relative`}>
            <Carousel slide={false}>
              <img
                className="h-full object-contain"
                src="money-tracker1.png"
                alt="moneytracker1"
              />
              <img
                className="h-full object-contain"
                src="money-tracker2.png"
                alt="moneytracker2"
              />
              <img
                className="h-full object-contain"
                src="money-tracker3.png"
                alt="moneytracker3"
              />
              <img
                className="h-full object-contain"
                src="money-tracker4.png"
                alt="moneytracker4"
              />
              <img
                className="h-full object-contain"
                src="money-tracker5.png"
                alt="moneytracker5"
              />
            </Carousel>
            <button
              className="absolute -top-5 right-5 size-14 rounded-full bg-black border-2 border-white text-white font-semibold text-xl"
              onClick={() => setOpenModal(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
      <div className="relative group" onClick={() => setOpenModal(true)}>
        <img
          src={props.imageUrl}
          alt="cardimage"
          className="rounded-lg w-full"
        />
        <div className="group absolute inset-0 flex justify-center items-center rounded-lg bg-black bg-opacity-0 hover:bg-opacity-50 hover:cursor-pointer duration-500 ">
          <h1 className="text-white duration-500 opacity-0 group-hover:opacity-100 font-bold">
            Visit Page
          </h1>
        </div>
      </div>
      <div className="text-white m-4 md:m-8 font-extrabold">
        <h1 className="text-xl">{props.title}</h1>
        <p> {props.children}</p>
      </div>
    </div>
  );
};

export default Card5;
