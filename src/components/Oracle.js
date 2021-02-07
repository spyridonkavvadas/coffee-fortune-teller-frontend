import React, { useState, useEffect } from "react";


import Header from "./Header";

const getOraclesUrl = "http://localhost:5000/oracles";

function Oracle() {
  
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getOraclesWithFetch();
  }, []);

  const getOraclesWithFetch = async () => {
    const response = await fetch(getOraclesUrl);
    const jsonData = await response.json();
    setUserData(jsonData);
    console.log(jsonData);

  };



  return (
    <>
      <Header />
        <div>This is the oracle page
        <h5>{userData.id}</h5>
        <h5>{userData.predictions}</h5>
        <h5>{userData.category}</h5>
        <h5>{userData.kindof}</h5>
        </div>

           
        
    </>
  );
}

export default Oracle;
