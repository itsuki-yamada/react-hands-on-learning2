import React from "react";
import { Route, Routes } from "react-router";
import {
  About,
  Contact,
  Events,
  History,
  Home,
  Location,
  Products,
  Services,
  Whoops404,
} from "./pages";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="services" element={<Services />} />
          <Route path="history" element={<History />} />
          <Route path="location" element={<Location />} />
        </Route>
        <Route path="/events" element={<Events />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </div>
  );
}
