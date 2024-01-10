import "./App.css";
import FinalizePage from "./pages/finalize/FinalizePage";
import MainPage from "./pages/main/MainPage";
import ResultPage from "./pages/result/ResultPage";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Components/resetStyles/reset.css";

function App() {
  const [tests, setTests] = useState([]);
  const [sites, setSites] = useState([]);
  const [value, setValue] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3100/tests");
        const response2 = await fetch(" http://localhost:3100/sites");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const tests = await response.json();
        const sites = await response2.json();
        setTests(tests);
        setSites(sites);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(true);
      }
    };

    fetchData();
  }, []);

  const filteredData = tests.filter((test) =>
    test.name.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <div className="App">
      <Routes>
        <Route
          index
          path="/"
          element={
            <MainPage
              sites={sites}
              tests={tests}
              loading={loading}
              filteredData={filteredData}
              value={value}
              setValue={setValue}
            />
          }
        />
        <Route
          index
          path="/Finalize/:id"
          element={<FinalizePage tests={tests} sites={sites} />}
        />
        <Route
          index
          path="/Result/:id"
          element={<ResultPage tests={tests} sites={sites} />}
        />
      </Routes>
    </div>
  );
}

export default App;
