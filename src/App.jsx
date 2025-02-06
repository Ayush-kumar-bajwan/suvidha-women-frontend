import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import FAQS from "./Pages/FAQS";
import ContactSection from "./Pages/Contact";
import Events from './Pages/Events';
import Donate from './Pages/Donateus';

let approuter=createBrowserRouter([
  {path:"/",element:<Home /> },
  {path:"/Aboutus",element:<About />},
  {path:"/Contactus",element:<ContactSection />},
  {path:"/FAQS",element:<FAQS />},
  {path:"/Events",element:<Events />},
  {path:"/Donateus",element:<Donate />}
]);

const App = () => {
  return (
    <>
      <RouterProvider router={approuter} />
    </>
  );
}

export default App;
 