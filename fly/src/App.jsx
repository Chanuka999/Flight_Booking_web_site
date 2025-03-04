import "./main.scss";

import { HashRouter, Router } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Search from "./Components/search/Search";
import Support from "./Components/Support/Support";
import Info from "./Components/Info/Info";
import Lounge from "./Components/Lounge/Lounge";
import Travelers from "./Components/Travelers/Travelers";
import Subscribers from "./Components/Subscribers/Subscribers";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <HashRouter>
        <Router>
          <Navbar />
          <Home />
          <Search />
          <Support />
          <Info />
          <Lounge />
          <Travelers />
          <Subscribers />
          <Footer />
        </Router>
      </HashRouter>
    </div>
  );
};

export default App;
