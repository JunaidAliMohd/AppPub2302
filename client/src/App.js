import './App.css';
import { useState } from "react";

function App() {

  

  let keyCounter = 0;

  let [employees, setEmployees] = useState([]);

  let getEmployees = async () => {


    let reqOptions = {
      method: "GET",
    }

    let JSONData = await fetch("/getEmployees", reqOptions);
    let JSOData = await JSONData.json();
    console.log(JSOData);
    setEmployees(JSOData);
  };
  return (
    <div className="App">
      <button onClick={() => {
        getEmployees()
      }}>Get Employees</button>
      <div className='MainTable'>
        <table>
          <thead>
            <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>MobileNo</th>
            <th>Email</th>
            <th>Age</th>
            <th>Department</th>
            <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((team) => {
              keyCounter++;
            return <tr key={keyCounter}>          
              <td key={keyCounter}>{team.name}</td>
              <td key={keyCounter}>{team.gender}</td>
              <td key={keyCounter}>{team.mobileNo}</td>
              <td key={keyCounter}>{team.email}</td>
              <td key={keyCounter}>{team.age}</td>
              <td key={keyCounter}>{team.department}</td>
              <td key={keyCounter}>{team.location}</td>
            </tr>
            })}
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </div>
  );
}

export default App;
