import React, { useState, useEffect } from "react";


import Header from "./Header";

const getOraclesUrl = "http://localhost:5000/oracles";

function Oracle() {
  
  const [userData, setUserData] = useState([]);
  
  useEffect(() => {
    getOraclesWithFetch();
  }, []);

  const getOraclesWithFetch = async () => {
    const response = await fetch(getOraclesUrl);
    const jsonData = await response.json();
    setUserData(jsonData.data);
   //console.log(jsonData);

  };
  
  console.log(userData);
  
  return (
    <>
      <Header />
      <div>This is the oracle page </div>
      {userData.map(({ predictions, _id }) =><div key={_id}>{predictions}</div>)}
    </>
  );
}

export default Oracle;
