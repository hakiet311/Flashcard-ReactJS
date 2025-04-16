import data from "../data";

const Header = () => {
  return (
    <header>
      <div className="flex justify-center">
        <h1 className="font-bold text-2xl text-white border-y-2 border-white inline-block px-6 py-1  ">
          FLASH CARD
        </h1>
      </div>

      <p className=" text-center italic text-white">
        Flash card này dành tặng cho anh Huy, chúc anh học vui vẻ 🥰
      </p>
      <p className="my-3 text-center italic text-white">
        Hiện tại có {data.length} từ vựng tiếng Trung cơ bản
      </p>
    </header>
  );
};

export default Header;
