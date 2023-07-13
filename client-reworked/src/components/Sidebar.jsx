import React from "react";
import { UserCard } from "./UserCard";
import { MenuCard } from "./MenuCard";

export const Sidebar = ({user}) => {
  return (
    <>
      <div className="h-full w-full flex flex-col items-center justify-start p-2">
        <UserCard user={user}/>
        <MenuCard
          menu="Home"
          to="/home"
          icon="https://cdn.discordapp.com/attachments/1126661998063652924/1127432254537355284/home.svg"
        />
        <MenuCard
          menu="Popular"
          to="/popular"
          icon="https://cdn.discordapp.com/attachments/1126661998063652924/1127432253941760161/popular.svg"
        />
        <MenuCard
          menu="Community"
          to="/community"
          icon="https://cdn.discordapp.com/attachments/1126661998063652924/1127432254235348992/community.svg"
        />
        <MenuCard
          menu="Marketplace"
          to="/marketplace"
          icon="https://cdn.discordapp.com/attachments/1126661998063652924/1127432253660745859/marketplace.svg"
        />
      </div>
    </>
  );
};
