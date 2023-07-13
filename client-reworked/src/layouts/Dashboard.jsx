import React from "react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import {
  useQuery,
  useQueryClient,
  QueryClientProvider,
} from "react-query";
import { getUserDetails } from "../api/user";

export const Dashboard = () => {
  const queryClient = useQueryClient();
  const { status, data, error, isFetching } = useQuery("user", getUserDetails);
  console.table(data);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="h-screen w-screen flex flex-col overflow-hidden">
          <nav className="h-auto">
            <Header />
          </nav>
          <main className="h-full w-full flex">
            <aside className="h-full md:w-60 w-20">
              <Sidebar user={data}/>
            </aside>
            <div className="h-full w-full bg-gray-200">
              <Outlet />
            </div>
          </main>
        </div>
      </QueryClientProvider>
    </>
  );
};
