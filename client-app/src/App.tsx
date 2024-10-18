import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
// import { ducks } from "./demo";
// import DuckItem from "./DuckItem";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/activities").then((response) => {
      console.log(response);
      setActivities(response.data);
    });
  }, []); //empty array dependency, only run once

  return (
    <div>
      <h1>Reactities</h1>
      <ul>
        {activities.map((activity: any) => (
          <li key={activity.id}>{activity.title}</li>
        ))}
      </ul>
      {/* {ducks.map((duck) => (
        <DuckItem key={duck.name} duck={duck} />
      ))} */}
    </div>
  );
}

export default App;
