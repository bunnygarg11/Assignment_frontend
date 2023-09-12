import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import DetailScreen from "./components/DetailScreen";
import { AppContext } from './context.js'; 

function App() {

  const [ data, setDetails] = useState();

  const dispatchDetailsEvent = (actionType , payload) => {
    switch(actionType) {
      case 'GET_DETAILS': 
        setDetails(payload);
        return;
      default:
          return;
    }
  }

  return (
    <AppContext.Provider value={{ data, dispatchDetailsEvent }}>
      <Router>
        <Sidebar />
        <Routes>
            <Route path='/details/:id' element={<DetailScreen />} />
            <Route path='/' element={<HomeScreen />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;

