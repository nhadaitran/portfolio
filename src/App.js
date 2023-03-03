import styles from "./styles/index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AppLayout from "./layouts/layout";
import Home from "./pages/index";
function App() {
  return (
    // <BrowserRouter>
    // <AppLayout>
    <Routes>
      <Route path="*" element={<Home />} />
    </Routes>
    //  </AppLayout>
    // </BrowserRouter>
  );
}

export default App;
