import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info";
import RSVP from "./pages/RSVP";
import FAQ from "./pages/FAQ";
import Preview from "./pages/Preview";

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Preview />} />
      <Route path="/home" element={<Home />} />
      <Route path="/info" element={<Info />} />
      <Route path="/rsvp" element={<RSVP />} />
      <Route path="/faq" element={<FAQ />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
