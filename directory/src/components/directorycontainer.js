import React from "react";
import Employees from "../employees.json"

function ResultList() {

    const sortFunc = (prop) => {
       return function(a, b) {    
           if (a[prop] > b[prop]) {    
               return 1;    
           } else if (a[prop] < b[prop]) {    
               return -1;    
           }    
           return 0;    
       }    
     }
   
     const myFunction = () => {
       Employees.sort(sortFunc("first_name"));
       console.log(Employees)
     }
   
     return (
       <div>
       <button onClick={myFunction}>Try it</button>
       <ul>
           {Employees.map(dude => (
           <li key={dude.id}>
               {dude.first_name} {dude.last_name}
           </li>
           ))}
       </ul>
       </div>
     );
   }
   
   
export default ResultList;