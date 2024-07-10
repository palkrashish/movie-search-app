import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import SingleMovie from "./components/SingleMovie/SingleMovie";
import Error from "./Error";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movie/:id" element={<SingleMovie />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
