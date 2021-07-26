import "./App.css";
import Header from "./components/Header";
import AddStudent from "./components/AddStudent";
import AllStudensts from "./components/AllStudents";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/auth/landing";

function App() {
  return (
    <Router>
      <div className="App">
      <Landing />
        <Header />
        <Route path="/add" exact component={AddStudent} />
        <Route path="/" exact component={AllStudensts} />
      </div>
    </Router>
  );
}

export default App;
