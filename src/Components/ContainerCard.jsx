import FlashCard from "./FlashCard";
import data from "../data";

const ContainerCard = () => {
  return (
    <div className="grid grid-cols-12 gap-3">
      {data.map((da, index) => {
        return <FlashCard flashcardObj={da} key={index}></FlashCard>;
      })}
    </div>
  );
};

export default ContainerCard;
