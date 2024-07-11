import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;