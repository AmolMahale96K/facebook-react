import './App.css';
import Facebook from "./Components/facebook/Facebook.js";
// import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Corrected import path

function App() {
  return (
    // Setting up routing with React Router
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Facebook />} />
    //     <Route path="/fb" element={<Facebook1 />} />
    //   </Routes>
    // </BrowserRouter>
    <Facebook />
  );
}

export default App;
