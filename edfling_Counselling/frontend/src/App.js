import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";

import { useState } from "react";


import Expert from './components/UI/expertsList/expertList.jsx';
import Login from './components/UI/signup/signup.jsx';
import Home from './components/UI/Home/home.jsx';
import IdExpert from "./components/UI/ID_Expert/idExpert.jsx";
import ChatPage from "./components/UI/chatPage/chatPage.jsx";

import './app.css';
import DataProvider from "./context/DataProvider.jsx";


const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate replace to="/login" />
  );
};


function App() {

  const [isAuthenticated, isUserAuthenticated] = useState(false);

  return (
      <DataProvider>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={ <Login isUserAuthenticated={isUserAuthenticated} /> } />
            <Route path="/" element={ <Home /> }/>
              <Route path="/experts" element={ <Expert /> } />
              <Route path="/expert/:id" element={ <IdExpert />} />
              <Route path='/chat' element={ <ChatPage />} />

            {/* <Route path="/" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            </Route>            
            <Route path="/experts" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            </Route>
            <Route path="/expert/:id" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            </Route>
            <Route path="/chat" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            </Route> */}
            
          </Routes>
        </BrowserRouter>
        </div>
      </DataProvider>
    
  );
}

export default App;
