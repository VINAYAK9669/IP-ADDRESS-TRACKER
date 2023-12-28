import HeroInput from "./components/HeroInput";
import TrackerDetails from "./components/TrackerDetails";
import Map from "./components/Map";
import { useState } from "react";

function App() {
  const [ipAddress, setIpAddress] = useState("8.8.8.8");
  const [ipLocation, setIpLocation] = useState({});

  return (
    <>
      <div className="relative flex h-dvh w-dvw flex-col overflow-hidden">
        <HeroInput setIp={setIpAddress} />
        <div className="absolute left-[50%] top-[25%] z-10  flex  min-w-[300px] translate-x-[-50%] items-center justify-center rounded-md border  border-slate-300 bg-white p-3 md:top-[20%] ">
          <TrackerDetails ipAddress={ipAddress} setIpLocation={setIpLocation} />
        </div>
        <div className="flex h-full w-full items-center justify-center">
          <Map ipLocation={ipLocation} />
        </div>
        <div className="absolute bottom-0 flex w-full items-center justify-center">
          <p>
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              rel="noreferrer"
            >
              Frontend Mentor
            </a>
            . Coded by <a href="#">Vinayak Kittad</a>.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
