import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Form from "./components/Form/Form";
import { GlobalStyles } from "./GlobalStyles";
import Home from "./components/Home/Home";
import PageNotFound from "./components/PageNoteFound/PageNotFound";

function App() {
  let id;
  try {
    id = JSON.parse(localStorage.getItem("login")).lastActive;
  } catch (e) {}

  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Form />} />
        <Route exact path="/:id" element={<Home />} />
        <Route exact path="/" element={<Navigate to={`/${id || 1}`} />} />
        <Route exact path="/*" element={<PageNotFound />} />
        <Route exact path="/:id/*" element={<PageNotFound />} />
      </Routes>
      <GlobalStyles />
    </Router>
  );
}

export default App;
