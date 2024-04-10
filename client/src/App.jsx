import {
  HomePage,
  ListPage,
  Layout,
  SinglePage,
  ProfilePage,
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
        },{
          path: "/profile",
          element: <ProfilePage />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App