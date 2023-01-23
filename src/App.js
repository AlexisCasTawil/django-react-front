import './App.css';
import React from 'react';
import AppRoutes from './components/routes';
import { NavBar } from './components/navbar';
// import { getData } from './components/services/api_rest';

function App() {
  return (
    <div className="bg-black bg-gradient">
      {/* <Header /> */}
      <NavBar />
      {/* {console.log(getData())} */}
      <AppRoutes />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
