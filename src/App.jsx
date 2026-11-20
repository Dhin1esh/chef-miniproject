
import { BrowserRouter, Routes, Route } from "react-router";
import Dashboardlayout from "./components/layouts/dashboardlayout";
import Landingpage from "./components/pages/landingpage";
import Mealcard from "./components/pages/mealcard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Dashboardlayout />}>
          <Route path="/" element={<Landingpage />} />
          <Route path="/dashboard" element={<Landingpage />} />
          <Route path="/meal-list" element={<Mealcard />} />
        </Route>

      </Routes>

    </BrowserRouter>

  );
};
