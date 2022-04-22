import logo from './logo.svg';
import './App.css';
import React from 'react';


const LAUNCHES_QUERY = `
{
  launchesPast(limit: 10) {
    mission_name
 		id
  
  }
}
`
  export default function App() {
     const [launches,setLaunches]= React.useState([]);
    React.useEffect(()=>{
      fetch('https://api.spacex.land/graphql/',{
        method:"POST",
        headers: {"content-type":"application/json"},
        body:JSON.stringify({query:LAUNCHES_QUERY})
      }).then(Response=> Response.json())
      .then(data=>setLaunches(data.data.launchesPast,console.log(data)))
    },[]);



  return (
    <div className="App">
      <ul>
       {launches.map(launch =>(
         <li key={launch.id}>{launch.mission_name}</li>
       ))}
      </ul>
    </div>
  );
}
