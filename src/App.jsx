import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesList from "./routes";

export default function App() {
  return (
    <BrowserRouter basename="/">
      <RoutesList />
    </BrowserRouter>
  );
}
