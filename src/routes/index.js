import { Routes, Route, Link } from "react-router-dom";
import NotFound from '../pages/NotFound';
import Layout from '../components/Layout';
import ContentPage from "../pages/ContentPage";
import PageProperty from "../pages/PageProperty";
import Template from "../pages/Tamplate";

export function MainRouter() {
  return <Routes>
    <Route path="" element={<Template />} >
      <Route path="" element={<PageProperty />} />
    </Route>
    <Route path="*" element={<NotFound />} />
    
  </Routes>
}
