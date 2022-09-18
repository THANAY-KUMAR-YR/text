import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Roadmap from "./components/Roadmap";
import Populatediv from "./components/Populatediv";
import About from "./components/About";
import Cards from "./components/Cards";
import TermCards from "./components/TermCards";
import Cardsection from "./components/Cardsection";
import { Routes, Route } from "react-router-dom";
import MyProvider from "./components/MyProvider";
import ErrorBoundary from "./components/ErrorBoundary";
import AboutLink from "./components/AboutLink";
import Nft from './components/Nft'
import "./App.css";
import Faq from "./components/Faq";
import Vision from "./components/Vision";
import Tokonomics from "./components/Tokonomics";
import Comingsoon from './components/Comingsoon'
function App() {
  setTimeout(() => {
    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    if (vw < 1000) {
      window.onload = function () {
        if (!window.location.hash) {
          window.location = window.location + '#/';
          window.location.reload();
        }
      }
      let roadmap = document.getElementById("roadmap");
      roadmap.style.display = "none";
      let populate = document.getElementById("Populate").style;
      populate.display = "block";
    } else {
      let roadmap = document.getElementById("roadmap").style;
      roadmap.display = "block";
      let populate = document.getElementById("Populate").style;
      populate.display = "none";
    }
  }, 10);

  return (
    <ErrorBoundary>
      <MyProvider>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Navbar />
                <Main />
                <AboutLink />
                <TermCards />
                <Nft />
                <Cards />
                <Tokonomics />
                <Roadmap />
                <Populatediv />
                <Faq />
                <Vision />
                <Footer />
              </>
            }
          />
          <Route exact path="/Roadmap" element={<>
            {/* <Navbar /> */}
            <Roadmap />
          </>
          } />
          <Route exact path="/About" element={<>
            {/* <Navbar /> */}
            <About />
          </>
          }
          />
          <Route
            exact
            path="/Cardsection/*"
            element={
              <>
                {/* <Navbar /> */}
                <Cardsection />
              </>
            }
          ></Route>
          <Route
            exact
            path="/Comingsoon"
            element={
              <>
                {/* <Navbar /> */}
                <Comingsoon />
              </>
            }
          ></Route>
        </Routes>
      </MyProvider>
    </ErrorBoundary>
  );
}
export default App;
