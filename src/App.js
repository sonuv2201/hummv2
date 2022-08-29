import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from './pages/Home';
import Header from "./componant/Auth/Header";
import Footer from "./componant/Auth/Footer";
import ProfilePage from "./pages/ProfilePage";
function App() {
  return ( 
    <div className="font-body">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
