import React, { useState, useEffect } from "react";

const FlashCard = (props) => {
  const [flipped, setFlipped] = useState(false);
  const obj = props.flashcardObj;
  const { word, viet, pronouce } = obj;
  // Auto flip back after 10s
  useEffect(() => {
    let timer;
    if (flipped) {
      timer = setTimeout(() => {
        setFlipped(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [flipped]);

  return (
    <div
      className="col-span-12 md:col-span-4 lg:col-span-3 h-60 [perspective:1000px] cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        } hover:-translate-y-2`}
      >
        {/* Front Face */}
        <div className="absolute inset-0 bg-linear-to-r from-cyan-500 to-blue-500 text-white rounded-xl flex items-center justify-center [backface-visibility:hidden]">
          <h1 className="text-6xl">{word}</h1>
        </div>

        <div className="absolute inset-0 bg-linear-to-t from-sky-500 to-indigo-500 text-white rounded-xl flex flex-col gap-3 items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <h1 className="text-2xl">{word}</h1>
          <p className="font-bold italic">{viet}</p>
          <p className="text-xl">{pronouce}</p>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
