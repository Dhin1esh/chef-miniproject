
import { BrowserRouter, Routes, Route } from "react-router";
import Dashboardlayout from "./components/layouts/dashboardlayout";
import Landingpage from "./components/pages/landingpage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Dashboardlayout />}>
          <Route path="/" element={<Landingpage />} />
        </Route>

      </Routes>

    </BrowserRouter>

  );
};
