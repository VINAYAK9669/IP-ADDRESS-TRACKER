/* eslint-disable react/prop-types */
import { useState } from "react";
import arrow from "../images/arrow.svg";

function HeroInput({ setIp }) {
  const [userInput, setUserInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setIp(userInput);
    setUserInput("");
  }
  return (
    <div className="mt-0 flex h-[25rem] flex-col items-center  gap-3 bg-hero-desktop bg-cover bg-center bg-no-repeat">
      <h1 className="mt-6  text-[1.8rem]  font-medium text-slate-50">
        IP Address Tracker
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="flex gap-x-[2px] p-1">
          <input
            placeholder="Search for any IP address or domain "
            className="placeholder:text_dark_grey w-[20rem] rounded-l-lg p-2 px-3 font-light text-Dark_Gray  placeholder:font-light focus:outline-none"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            required
          />

          <button
            className="rounded-r-lg bg-very_dark_gray p-2 px-4"
            type="submit"
          >
            <img src={arrow} alt="arrow_icon" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default HeroInput;
