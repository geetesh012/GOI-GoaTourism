import { Navigate } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Highlight from "./pages/Highlight";
import { destinations } from "./data/content";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    entry: "src/Layout.jsx",
    children: [
      { index: true, element: <Home /> },
      {
        path: "destinations/:slug",
        element: <Project />,
        // tells vite-react-ssg which real URLs to prerender for this
        // dynamic route — pulled straight from content.js, so adding a
        // new destination there automatically gets its own static page
        getStaticPaths: () => destinations.map((d) => `destinations/${d.slug}`),
      },
      {
        path: "destinations/:slug/:highlightSlug",
        element: <Highlight />,
        getStaticPaths: () =>
          destinations.flatMap((d) =>
            d.highlights.map((h) => `destinations/${d.slug}/${h.slug}`)
          ),
      },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
];