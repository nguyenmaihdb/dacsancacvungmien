import React from 'react';
// Import necessary dependencies
import {Routes, Route } from 'react-router-dom';
import Home from './container/Home'; // Replace with your actual component
import Login from './container/user/Login';
import Register from './container/user/Register';


// Your main App component
function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={Login} /> 
        <Route path="/register" element={Register}/>
        {/* Add more routes as needed */}
      </Routes>
  );
}

export default App;






// import React from 'react';
// import {Routers, Route, iseNavigate} from 'react-router-dom';

// import Home from './container/Home';
// const App = () => {
//     return(
//        <Routes>
//             <Route path="/*" element = {<Home />} />
//        </Routes>
//     )
// }
    

// export default App;

