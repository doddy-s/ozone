import React from "react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export const Dashboard = () => {
  return (
    <>
      <div className="h-screen w-screen flex flex-col overflow-hidden">
        <nav className="h-28">
          <Header />
        </nav>
        <main className="h-full w-full flex">
          <aside className="h-full w-80">
            <Sidebar />
          </aside>
          <div className="h-full w-full bg-gray-900">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};
