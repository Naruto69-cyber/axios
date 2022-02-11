// import logo from './logo.svg';
// import './App.css';
// import PersonList from './components/PersonList';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import PersonList from './components/PersonList.js';
import React,{ Component } from 'react';
 import PersonAdd from './components/PersonAdd.js';
 import PersonRemove from './components/PersonRemove.js';
function App() {
  return (
    <div ClassName="App">
      <PersonList/>
      <PersonAdd/>
      <PersonRemove/>
    </div>
  )
  }
  export default App;
