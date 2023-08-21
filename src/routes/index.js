import { Routes, Route, Link } from "react-router-dom";
import NotFound from '../pages/NotFound';
import Layout from '../components/Layout';
import ContentPage from "../pages/ContentPage";
import Template from "../pages/Tamplate";
import PageProperty from "../pages/Property";
import PageItem from "../pages/Item";

export function MainRouter() {
  return <Routes>
    <Route path="" element={<Template />} >
      <Route index element={<PageProperty />} />
      <Route path="/Item" element={<PageItem />} />
      <Route path="/2" element={<div>2</div>} />
      <Route path="/3" element={<div>3</div>} />
    </Route>
    <Route path="*" element={<NotFound />} />

  </Routes>
}
