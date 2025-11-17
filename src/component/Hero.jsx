// import { Images } from "react-icons/im";
import readingbook from "./readingbook.webp";
function Hero() {
  return (
    <div className="flex justify-between items-center mt-10 mx-20">
      <div className="font-semibold mx-10">
        <h1 className="text-6xl font-semibold my-2 ">welcome to our website</h1>
        <p className="text-[#658aae] text-2xl my-5">this is a example text</p>
        <button className="bg-blue-600 rounded-2xl text-white py-2 px-4">
          OrderNow
        </button>
      </div>
      <div className="mr-20 w-[500px] h-[500px] ">
        <img
          src={readingbook}
          alt="Image of a reading book"
          className="w-full h-full object-cover rounded-sm"
        />{" "}
      </div>
    </div>
  );
}

export default Hero;
