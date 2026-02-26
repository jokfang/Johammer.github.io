import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import Tools from "./pages/Tools";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/outils",
        element: <Tools />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
