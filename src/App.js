import Home from './components/pages/home.js'
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      {/*<Router>
          <Routes>
            <Route exact path="/" element={<Home/>} />
          </Routes>
  </Router>*/}
      <Home />
    </>
  );
}

export default App;