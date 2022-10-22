import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Userinfo from './Userinfo';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Userinfo/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
