import * as React from "react";

interface ICard2Props {
  title: string;
  company: string;
  description: string;
  date: string;
}

const Card2: React.FunctionComponent<ICard2Props> = (props) => {
  return (
    <div className="card2 text-base md:text-xl w-[500px] ">
      <h3>{props.title}</h3>
      <h4>{props.company}</h4>
      <h4 className="">{props.date}</h4>
      <br />
      <p>{props.description}</p>
    </div>
  );
};

export default Card2;
