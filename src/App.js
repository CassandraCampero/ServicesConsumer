import { useEffect, useState } from "react";
import {getTodos} from "./services/index";

function App(){
  const [serviceData, setServiceData] = useState();

useEffect(()=>{
  getTodos().then((res)=>setServiceData(res.data));
  console.log(serviceData);
},[]);

  return (
    <div className="App">
      <h1> SERVICE RESULT</h1>
      <hr></hr>

    <ul>
      {serviceData ? serviceData.map((data)=>(
        <li key={data.id}>
          title: {data.title}
          <br/>
          userId: {data.userId}
          <br />
          completed: {data.completed ? "true": "false"}
          <hr />
        </li>
      )): <h1>Sin información</h1>}
    </ul>

    </div>
  );
}

export default App;