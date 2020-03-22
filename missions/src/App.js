import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import MissionForm from './components/MissionForm';
import MissionList from './components/MissionList';

export default function App() {
  const [isFetchingData, setISFetchingData] = useState(false);
  const [error, setError] = useState("");
  const [misssions, setMissions] = useState([]);

  const getData = () => {
    setISFetchingData(true);
    axios
    .get("https://api.spacexdata.com/v3/missions")
    .then(res => {
      console.log(res);
      setISFetchingData(false);
      setMissions(res.data);
    })
    .catch(err => {
      console.error("error fetching data from api, err: ", err.message);
      setISFetchingData(false);
      setError(err.message);
    });
  };
  return (
    <div className="App">
      <h1>Space Missions</h1>
      <MissionForm getData={getData} isFetchingData={isFetchingdata} />
      <MissionList error={error} missions={missions} />
      
    </div>
  );
}


