import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Home, CreatePost, Login} from "./pages";
import { Navbar } from "./components";
import { useAuthContext } from "./hooks/useAuthContext";

const App = () => {
  const { user } = useAuthContext();
  return (
    <BrowserRouter>
      <Navbar />
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/create-post"
            element={user ? <CreatePost /> : <Navigate to="/login" />}
          ></Route>
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          ></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
