import Home from "/src/pages/Home.jsx";
import ExplorePage from "/src/pages/ExplorePage.jsx";
import DetailsPage from "/src/pages/DetailsPage.jsx";
import SearchPage from "/src/pages/SearchPage.jsx";
import App from "/src/App.jsx";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "search",
        element: <SearchPage />
      },
      {
        path: ":explore/:id",
        element: <DetailsPage />
      },
      {
        path: ":explore",
        element: <ExplorePage />
      }
    ]
  }
]);


export default router;
