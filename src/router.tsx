import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import RootLayout from "@/pages/layout/Root";
import Homepage from "@/pages/Homepage";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Projects from "@/pages/Projects";
import Blog from "@/pages/Blog";
import ContactUs from "@/pages/ContactUs";
import NotFound from "@/pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

export default router;
