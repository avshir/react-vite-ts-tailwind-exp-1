import { Route, Routes } from "react-router-dom";
import TailwindPage from "./pages/TailwindPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/tailwind" element={<TailwindPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
