import "./App.css";
import Header from "./components/Header";
import AddStudent from "./components/AddStudent";
import AllStudensts from "./components/AllStudents";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/auth/landing";
import SignUp from "./components/auth/SIgnUp";
import Login from "./components/auth/Login";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
      {/* <Landing /> */}
        {/* <Header /> */}
        <Route path="/" exact component={Landing} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/login" exact component={Login} />
        <Route path="/home" exact component={HomePage} />
        <Route path="/add" exact component={AddStudent} />HomePage
        
        {/* <Route path="/" exact component={AllStudensts} /> */}
      </div>
    </Router>
  );
}

export default App;
