import { BrowserRouter, Route, Routes } from "react-router-dom";

import RangeIterator from "./Components/RangeIterator";
import RangeGenerator from "./Components/RangeGenerator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RangeIterator />} />
        {/* <Route path="/" element={<RangeGenerator />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
