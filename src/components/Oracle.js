import React, { useState, useEffect } from "react";


import Header from "./Header";

const getOraclesUrl = "http://localhost:5000/oracles/random";

function Oracle() {
  
  const [userData, setUserData] = useState(null);
  
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
     
      {userData && <div>{userData}</div>}
    </>
  ); 
}

export default Oracle;
