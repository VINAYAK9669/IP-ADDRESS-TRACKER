/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function TrackerDetails({ ipAddress, setIpLocation }) {
  const URL = "https://geo.ipify.org/api/v2/country,city";
  const KEY = "at_UtrUSw6tu0hkjzJkQSHKTd6nqYpWA";
  const [ipData, setIpData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getIpData() {
      try {
        setLoading(true);
        const res = await fetch(`${URL}?apiKey=${KEY}&ipAddress=${ipAddress}`);
        const data = await res.json();
        setIpData(data);
        setIpLocation(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    getIpData();
  }, [ipAddress]);

  if (ipData?.location?.country == "zz" || ipData.code === 422) {
    return (
      <p className="bg-red text-red-500">
        Something Went Wrong. Use valid IP Address
      </p>
    );
  }
  if (loading) return <p>Loading...</p>;

  const subDiv =
    "col-span-1 flex  flex-col gap-1 text-center md:text-left  border-Dark_Gray last:border-none md:border-Dark_Gray md:border-r-[1px] px-5 ";

  const styleP = "text-sm uppercase text-Dark_Gray ";

  return (
    <div>
      <div className="grid grid-cols-1 gap-4  px-4 md:w-[750px]  md:grid-cols-4 md:gap-5 md:py-[2rem]  lg:w-[900px] lg:grid-cols-4 ">
        {!loading ? (
          <>
            <div className={subDiv}>
              <p className={styleP}>IP Address</p>
              <h2 className=" no-scrollbar overflow-auto text-sm uppercase">
                {ipData?.ip}
              </h2>
            </div>
            <div className={subDiv}>
              <p className={styleP}>Location</p>
              <h2 className="no-scrollbar overflow-auto text-sm uppercase">
                {ipData?.location?.city}
                {ipData?.location?.country}
                <br></br>
                {ipData?.location?.region}
              </h2>
            </div>
            <div className={subDiv}>
              <p className={styleP}>TimeZone</p>
              <h2 className="no-scrollbar overflow-auto uppercase">
                {ipData?.location?.timezone}
              </h2>
            </div>
            <div className={subDiv}>
              <p className={styleP}>ISP</p>
              <h2 className="no-scrollbar overflow-auto uppercase">
                {ipData?.isp}
              </h2>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default TrackerDetails;
