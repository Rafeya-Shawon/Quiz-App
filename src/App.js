import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main/Main";
import Home from "./components/Home/Home";
import Blogs from "./components/Blogs/Blogs";
import Statistics from "./components/Statictics/Statistics";
import Quistions from "./components/Questions/Quistions";
import NotFound from "./components/NotFound/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () =>
            fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home></Home>,
        },
        {
          path: "/home",
          loader: async () =>
            fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home></Home>,
        },
        {
          path: "/quiz/:lang",
          loader: async ({ params }) =>
            fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.lang}`
            ),
          element: <Quistions></Quistions>,
        },
        {
          path: "/statistics",
          loader: async () =>
            fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Statistics></Statistics>,
        },
        { path: "/blogs", element: <Blogs></Blogs> },
        {path: '/*', element: <NotFound></NotFound>}
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
