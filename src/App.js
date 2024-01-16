
// import { Component } from 'react';

import ButtonComponent from "./Components/ButtonComponent";
import ChildComponent from "./Components/ChildComponent";
import Forms from "./Components/Forms";
import Users from "./Components/ListConcepts/Users";
import Teachers from "./Components/PropsConcept/Teachers";
import SubComponent from "./Components/SubComponent";
import UseEffectExample from "./UseEffectConcept";

// import { createElement } from "react"

// class HelloWorld extends Component {
//   render(name = "SRK") {
//     return (
//       <h1>hello {name} from class based components</h1>
//     )
//   }
// }

// export default HelloWorld;

//  function HelloWorld(){
//   let name="SRK Functional :)"
//   return(
//     <h1> Hello {name} from Functional based components </h1>

//   )
// }
// export default HelloWorld;


// const HelloWorld = () => {
//   return(
//     <h1> Hello from Functional ES6 based components </h1>
//   )
// }
// export default HelloWorld;


// const HelloWorld = () => {
//   return createElement(
//     "div",
//     {className:"hello", id:"content"},
//     <p>Hello from Functional Component with createElement syntax</p>
//   );
// }
// export default HelloWorld;

/// Nexted components in ReactJS

function CommonComponont() {
  return (
    <p>this is common paragaraph component share across !!</p>
  )
}


function App() {
  return (
    <div>
      <h1>Hello from h1</h1>
      {/* <CommonComponont /> */}
      {/* <SubComponent />
      <ChildComponent /> */}

      {/* <Teachers></Teachers> */}

      {/* <Users></Users> */}

      {/* <Forms></Forms> */}

      <UseEffectExample></UseEffectExample>

    </div>

  )
}
export default App;


/// State and useState Hooks 
