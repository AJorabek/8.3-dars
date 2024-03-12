import React, { useState } from "react";
import axios from "axios";

const App: React.FC = () => {
  const [ip, setIp] = useState<string>("");
  const [Data, setData] = useState<any>(null);

  const getIpDetails = async () => {
    try {
      const response = await axios.get(
        `https://geo.ipify.org/api/v2/country?apiKey=at_35lN5j93YucTWiizdpg4TM8CSW0MU&ipAddress=${ip}`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="app">
        <div className="container">
          <div className="hero">
            <h1 className="title">IP Address Tracker</h1>
            <div className="input-wrapper">
              <input
                className="input"
                type="text"
                value={ip}
                onChange={(e) => setIp(e.target.value)}
                placeholder="Search for any IP address or domain"
              />
              <button onClick={getIpDetails} className="btn">
                <img
                  src="./arr.svg"
                  width={6}
                  height={12}
                  style={{ background: "black" }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      {Data && (
        <div className="div_info">
          <p className="p">IP Address: {Data.ip}</p>
          <hr className="hr" />
          <p className="p">Location: {Data.location.country}</p>
          <hr className="hr" />
          <p className="p">Timezone: {Data.location.timezone} </p>
          <hr className="hr" />
          <p className="p">ISP: {Data.isp}</p>
        </div>
      )}
      <div className="ifr">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6131044.253373623!2d64.6085751!3d41.38116805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1710263901321!5m2!1sru!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default App;
