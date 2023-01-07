import './App.css';
import App from './components/App/App';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function RootApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RootApp;
