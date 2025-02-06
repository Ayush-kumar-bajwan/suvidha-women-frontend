import Aboutpage from "./Pages/About";
import Homepage from "./Pages/Home";
import FAQS from "./Pages/FAQS";
import {createBrowserRouter,RouterProvider} from 'react-router-dom';

let approuter=createBrowserRouter([
  {path:"/",element:<Homepage />},
  {path:"/Aboutus",element:<Aboutpage />},
  {path:"/faqs",element:<FAQS/>}
]);

const App = () => {
  return (
    <>
      <RouterProvider router={approuter} />
    </>
  );
};

export default App;
 