import HeroInput from "./components/HeroInput";
import TrackerDetails from "./components/TrackerDetails";
import Map from "./components/Map";
import { useEffect, useState } from "react";

function App() {
  const [ipAddress, setIpAddress] = useState();

  const [ipLocation, setIpLocation] = useState({});

  const [error, setError] = useState(false);
  // * ---- On initial load access the user ip address
  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => setIpAddress(data.ip))
      .catch((error) => console.log(error));
  }, []);
  if (ipAddress === undefined || ipAddress === null) {
    return (
      <>
        <div className="flex h-dvh items-center justify-center">
          <p>Loading...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="relative flex h-dvh w-dvw flex-col overflow-hidden">
        <HeroInput setIp={setIpAddress} />
        <div className="absolute left-[50%] top-[25%] z-10  flex  min-w-[300px] translate-x-[-50%] items-center justify-center rounded-md border  border-slate-300 bg-white p-3 md:top-[20%] ">
          <TrackerDetails
            ipAddress={ipAddress}
            setIpLocation={setIpLocation}
            setError={setError}
            error={error}
          />
        </div>
        <div className="flex h-full w-full items-center justify-center">
          <Map
            ipLocation={ipLocation}
            ipAddress={ipAddress}
            setError={setError}
            error={error}
          />
        </div>
        <div className="absolute bottom-0 flex w-full items-center justify-center">
          <p className="text-slate-800">
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600"
            >
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a href="#" className="text-blue-600">
              Vinayak Kittad
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
