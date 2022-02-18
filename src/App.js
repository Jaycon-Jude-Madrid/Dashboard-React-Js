
   
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from './Pages/Home/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from './Pages/UserList/UserList'
import User from "./Pages/User/User";
import RealtimeReports from "./Pages/RealtimeReports/RealtimeReports";
import ImageUpload from "./Pages/ImageUpload/ImageUpload";


function App() {
  return (
  
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
        <Route exact path="/" element={<Home />} />
         <Route  path="/users" element={<UserList />} />
         <Route  path="/user/:userId" element={<User/>} /> 
         <Route path="/realtime" element={<RealtimeReports />} />
         <Route path='/upload'  element={<ImageUpload />} />
        </Routes>
      </div>
    </Router>
  
  );
}

export default App;
