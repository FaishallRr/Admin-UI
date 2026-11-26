import "./App.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Signup from "./pages/SignUp";
import Signin from "./pages/SignIn";
import ErrorPage from "./pages/error";

import PageDashboard from "./latihan/pages/PageDashboard";

function App() {
  // const myRouter = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: (
  //       <div className="flex justify-center items-center min-h-screen">
  //         <Link to="/login" className="p-2 m-5 bg-primary text-white">
  //           Login
  //         </Link>
  //         |
  //         <Link to="/register" className="p-2 m-5 bg-primary text-white">
  //           Register
  //         </Link>
  //       </div>
  //     ),
  //     errorElement: <ErrorPage />,
  //   },
  //   {
  //     path: "/login",
  //     element: <Signin />,
  //   },
  //   {
  //     path: "/register",
  //     element: <Signup />,
  //   },
  // ]);

  return (
    <>
      {/* <RouterProvider router={myRouter} /> */}

      <PageDashboard />
    </>
  );
}

export default App;
