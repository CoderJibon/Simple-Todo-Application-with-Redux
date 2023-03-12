import cancelImage from "../assets/images/cancel.png";
import "./style.css";
export default function Todo(props) {
  const { name, id, complete } = props.name;
  const handleToDoRemove = props.handleToDoRemove;
  const handleToDocomplete = props.handleToDocomplete;

  return (
    <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
      <div className="rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 border-green-500 focus-within:border-green-500   ">
        <input
          onChange={() => handleToDocomplete(id)}
          type="checkbox"
          className="opacity-0 absolute rounded-full"
        />
        <svg
          className={`${
            complete === false ? "" : "hidden"
          }hidden fill-current w-3 h-3 text-green-500 pointer-events-none`}
          viewBox="0 0 20 20"
        >
          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </svg>
      </div>
      {/* line-through */}
      <div
        className={`select-none flex-1 ${
          complete === false ? "" : "line-through"
        }`}
      >
        {name}
      </div>

      <input
        id="greenid"
        type="radio"
        name="Color"
        className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 "
      ></input>

      <input
        id="yellowid"
        type="radio"
        name="Color"
        className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500"
      ></input>

      <input
        id="redid"
        type="radio"
        name="Color"
        className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 checked:bg-red-500"
      ></input>

      <img
        src={cancelImage}
        onClick={() => handleToDoRemove(id)}
        className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
        alt="Cancel"
      />
    </div>
  );
}
