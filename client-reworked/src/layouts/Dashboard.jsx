import React from "react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export const Dashboard = () => {
  return (
    <>
      {/* Container Dashboard */}
      <div className="h-screen w-screen flex flex-col overflow-hidden">
        {/* Container Header */}
        <nav className="h-28">
          <Header />
        </nav>

        {/* container main */}
        <main className="h-full w-full flex">
          {/* container sidebar */}
          <aside className="h-full w-20 md:w-96">
            <Sidebar />
          </aside>
          {/* container content page */}
          <div className="h-full w-full bg-gray-200">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};
