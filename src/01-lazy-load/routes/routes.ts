import React, { lazy } from "react";

interface Route {
  to: string;
  path: string;
  Component: React.FC;
  name: string;
}

const lazyPage1 = lazy(() => import("../components/Lazy1"));
const lazyPage2 = lazy(() => import("../components/Lazy2"));
const lazyPage3 = lazy(() => import("../components/Lazy3"));

export const routes: Route[] = [
  {
    name: "home",
    path: "home",
    to: "/home",
    Component: lazyPage3,
  },
  {
    name: "about",
    path: "about",
    to: "/about",
    Component: lazyPage1,
  },
  {
    name: "users",
    path: "users",
    to: "/users",
    Component: lazyPage2,
  },
];
