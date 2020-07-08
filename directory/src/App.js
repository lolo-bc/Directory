import React, { Component } from "react";
import Navbar from "./components/navbar/Navbar.js";
// import Directory from "./components/directorycontainer"
import EmployeeCard from "./components/EmployeeCard/EmployeeCard"
import Employees from "./employees.json"

class App extends Component {
  state = {
    Employees
  };

  sortFunc = (prop) => {
    return function(a, b) {    
        if (a[prop] > b[prop]) {    
            return 1;    
        } else if (a[prop] < b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
  };

  myFunction = () => {
    Employees.sort(sortFunc("first_name"));
    console.log(Employees)
  };

render() {
  return (
  <div>
    <Navbar />
    {this.state.Employees.map(Employees => (
          <EmployeeCard
          first_name={Employees.first_name}
          />
        ))}
  </div>
  )}
}

export default App;