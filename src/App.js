import {BrowserRouter, Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Navbar from './components/Navbar';
import RootLayout from './Layouts/RootLayout';
import Home from './Pages/Home';
function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>}/>
      </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
