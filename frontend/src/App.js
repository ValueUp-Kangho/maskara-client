import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Header = lazy(() => import("./components/Header"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const Home = lazy(() => import("./pages/Home"));
const MapPage = lazy(() => import("./pages/MapPage"));
const QrScanPage = lazy(() => import("./pages/QrScanPage"));
const MyPage = lazy(() => import("./pages/MyPage/MyPage"));
const EditPage = lazy(() => import("./pages/MyPage/EditMyPage"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/qr" element={<QrScanPage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/edit" element={<EditPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
