import { BrowserRouter as Router, Route, Routes } from "react-router";
import Home from "./pages/Home";
import FamilyTree from "./pages/FamilyTree";
import Graves from "./pages/Graves";
import Media from "./pages/Media";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<SidebarLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/familytree" element={<FamilyTree />} />
            <Route path="/graves" element={<Graves />} />
            <Route path="/media" element={<Media />} />
            <Route path="/search" element={<Search />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
