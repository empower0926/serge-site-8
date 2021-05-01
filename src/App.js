import "./App.css";
import Home from "./pages/Home.jsx";
import { BrowserRouter} from 'react-router-dom';
import Routes from "./Routes";
function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <Routes />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
