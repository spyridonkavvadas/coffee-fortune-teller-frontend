import React, {useState} from "react";
import "./App.css";
import Main from "./components/Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Oracle from "./components/Oracle";

const ORACLE_URL = "http://localhost:5000/oracles/random";
const defaultUserData = {
  name: '',
  birthday: '',
  gender: '',
  status: ''
}

function App() {
  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [oracle, setOracle] = useState(null);
  const [userData, setUserData] = useState(defaultUserData);

  const getOracle = async () => {
    const response = await fetch(ORACLE_URL);
    const jsonData = await response.json();
    setOracle(jsonData.data);
  };

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const onUpload = (file, pos) => {
    const fileUrl = URL.createObjectURL(file)
    if (pos === 1) {
      setImage(fileUrl)
    } else if (pos === 2) {
      setImage2(fileUrl)
    } else {
      setImage3(fileUrl)
    }
  }

  const checkMinimumOneImage = () => {
    if (image || image2 || image3) return true;
    return false
  }

  const checkCompulsoryFields = () => {
    if (userData.name 
      && userData.gender
      && userData.status
      && userData.birthday
    ) return true;
    return false;
  }
 
  const isButtonDisabled = () =>  {
    if (checkMinimumOneImage() && checkCompulsoryFields()) return false;
    return true;
  }

  console.log(userData)
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main
              onChangeInput={handleChange}
              images={[image, image2, image3]}
              onUpload={onUpload}
              getOracle={getOracle}
              isButtonDisabled={isButtonDisabled()}
            />
            <Oracle oracle={oracle} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
