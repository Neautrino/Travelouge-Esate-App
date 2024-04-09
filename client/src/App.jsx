import {
  HomePage,
  ListPage,
  Layout,
  SinglePage,
} from "./pages/index.js"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },{
          path: "/list",
          element: <ListPage />
        },{
          path: "/:id",
          element: <SinglePage />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App