import * as React from "react";
import { Carousel } from "flowbite-react";

interface ICard4Props {
  imageUrl: string;
  title: string;
  children: string;
  projectUrl: string;
}

const Card4: React.FunctionComponent<ICard4Props> = (props) => {
  const [openModal, setOpenModal] = React.useState(false);
  console.log("open modal", openModal);

  return (
    <div className="min-w-[300px]">
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center  bg-black bg-opacity-50 backdrop-blur-sm backdrop-filter">
          <div className="h-[800px] w-[1500px] relative">
            <Carousel slide={false}>
              <img src="YOLO1.png" alt="..." />
              <img src="YOLO2.png" alt="..." />
              <img src="YOLO3.png" alt="..." />
              <img src="YOLO4.png" alt="..." />
              <img src="YOLO6.png" alt="..." />
              <img src="YOLO7.png" alt="..." />
              <img src="YOLO10.png" alt="..." />
              <img src="YOLO11.png" alt="..." />
            </Carousel>
            <button
              className="absolute top-5 -right-7 size-14 rounded-full bg-black border-2 border-white text-white font-semibold text-xl"
              onClick={() => setOpenModal(false)}
            >
              X
            </button>
          </div>
          {/* <div className="w-[300px] h-[300px] rounded-lg bg-slate-400 flex items-center justify-center">
            <button onClick={() => setOpenModal(false)}>Close Modal</button>
          </div> */}
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
        <p>{props.children}</p>
      </div>
    </div>
  );
};

export default Card4;
