import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Book from "./Book"
import SignUp from "./SignUp"

const router=createBrowserRouter([
  {
    path: '/',
    element: <SignUp/>
  },
  {
    path: '/book',
    element: <Book/>
  }
])

function App() {
  return (
    <div>
    <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App