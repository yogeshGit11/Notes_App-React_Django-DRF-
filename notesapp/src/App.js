import "./App.css";
import CreateNotes from "./Components/CreateNotes";
import GetNotes from "./Components/GetNotes";
import { Routes, Route } from "react-router-dom";
import UpdateNotes from "./Components/UpdateNotes";

function App() {
  return (
    <div>
      <div className="container">
        <Routes>
          <Route path="/" element={<GetNotes />} />
          <Route path="/CreateNotes" element={<CreateNotes />} />
          <Route path="/UpdateNotes" element={<UpdateNotes />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
