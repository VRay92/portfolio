import * as React from "react";
import { Carousel } from "flowbite-react";

interface ICard4Props {
  imageUrl: string;
  title: string;
  projectUrl: string;
  children: string;
}

const Card4: React.FunctionComponent<ICard4Props> = (props) => {
  const [openModal, setOpenModal] = React.useState(false);
  console.log("open modal", openModal);

  return (
    <div className="min-w-[300px]">
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center  bg-black bg-opacity-50 backdrop-blur-sm backdrop-filter">
          <div
            className={`w-full h-[300px] p-3 md:h-[800px] md:w-[1500px] relative`}
          >
            <Carousel slide={false}>
              <img src="YOLO1.png" alt="YOLO1" />
              <img src="YOLO2.png" alt="YOLO2" />
              <img src="YOLO3.png" alt="YOLO3" />
              <img src="YOLO4.png" alt="YOLO4" />
              <img src="YOLO6.png" alt="YOLO6" />
              <img src="YOLO7.png" alt="YOLO7" />
              <img src="YOLO10.png" alt="YOLO10" />
              <img src="YOLO11.png" alt="YOLO11" />
            </Carousel>
            <button
              className="absolute top-0 right-0 md:top-5 md:-right-7 size-8 md:size-14 rounded-full bg-black border-2 border-white text-white font-semibold text-sm md:text-xl"
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

export default Card4;
