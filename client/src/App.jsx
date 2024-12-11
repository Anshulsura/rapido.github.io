import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chooseoption from "./pages/Chooseoption";
import Captainform from "./pages/Captainform";
import Passengerform from "./pages/Passengerform";
import Passengerlogin from "./pages/Passengerlogin";
import Forgotpassword from "./pages/Forgotpassword";
const App = () => {
  const navMenu = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/chooseoption",
      element: <Chooseoption />,
    },
    {
      path: "/passenger",
      element: <Passengerform />,
    },
    {
      path: "/captain",
      element: <Captainform />,
    },

    {
      path: "/passengerlogin",
      element: <Passengerlogin />,
    },
    {
      path: "/forgotpassword",
      element: <Forgotpassword />,
    },
  ];

  return (
    <Router>
      <Routes>
        {navMenu.map((item, index) => {
          return <Route path={item.path} element={item.element} key={index} />;
        })}
      </Routes>
    </Router>
  );
};

export default App;
