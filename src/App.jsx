import HomePage from "./routes/homePage/homePage.jsx";
import Listpage from "./routes/listPage/listpage.jsx";
import { createBrowserRouter,RouterProvider,Route,Link } from "react-router-dom";
import Layout from "./routes/layout/layout.jsx";
import SinglePage from "./routes/singlePage/singlePage.jsx";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<HomePage/>
        },
        {
          path:"/list",
          element:<Listpage/>
        },
        {
          path:"/:id",
          element:<SinglePage/>
        }
      ]
    }
  ])

  return (
    // <div className="layout">
    //   <div className="navbar">
    //     <Navbar />
    //   </div>
    //   <div className="content">
    //     <Homepage />
    //   </div>
    // </div>
    <RouterProvider router={router}/>

  );
}

export default App;
