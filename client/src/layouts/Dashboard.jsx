import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import style from "../assets/css/Dashboard.module.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <div className={style.container}>
        <div className={style.containerHeader}>
          <Header />
        </div>

        <div className={style.mainContainer}>
          <div className={style.containerSidebar}>
            <Sidebar />
          </div>
          <div className={style.containerOutlet}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export function dashboarLoader() {
  return "dashboardLoaderDatas";
}
