import "./App.css";
import FinalizePage from "./pages/finalize/FinalizePage";
import MainPage from "./pages/main/MainPage";
import ResultPage from "./pages/result/ResultPage";
import { Routes, Route } from "react-router-dom";
import "./Components/resetStyles/reset.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<MainPage />} />
        <Route index path="/Finalize/:id" element={<FinalizePage />} />
        <Route index path="/Result/:id" element={<ResultPage />} />
      </Routes>
    </div>
  );
}

export default App;
