import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import HomePage from "./pages/Homepage";
import BusList from "./pages/BusList";
import TicketDetails from "./pages/ticketDetails";
import ErrorPage from "./pages/error-page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}  errorElement={<ErrorPage />}/>
          <Route path="/buslist" element={<BusList />} errorElement={<ErrorPage />}/>
          <Route path="/ticket-details" element={<TicketDetails />} errorElement={<ErrorPage />}/>
          <Route path="/admin/login" element={<Login />} errorElement={<ErrorPage />}/>
          <Route path="/admin/register" element={<Register />} errorElement={<ErrorPage />}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
