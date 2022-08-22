import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Header = lazy(() => import("./components/Header"));
const Home = lazy(() => import("./pages/Home"));
const MapPage = lazy(() => import("./pages/MapPage"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<MapPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
