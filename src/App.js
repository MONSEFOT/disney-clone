import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Login from "./pages/login";
import Home from "./pages/home";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
