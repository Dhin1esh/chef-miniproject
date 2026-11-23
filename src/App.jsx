
import { BrowserRouter, Routes, Route } from "react-router";
import Dashboardlayout from "./components/layouts/dashboardlayout";
import Landingpage from "./components/pages/landingpage";
import Mealcard from "./components/pages/mealcard";
import Mealcreate from "./components/pages/mealcreate";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Dashboardlayout />}>
          <Route path="/" element={<Mealcard />} />
          <Route path="/dashboard" element={<Landingpage />} />
          <Route path="/meal-list" element={<Mealcard />} />
          <Route path="/meal-create" element={<Mealcreate />} />
        </Route>

      </Routes>

    </BrowserRouter>

  );
};
