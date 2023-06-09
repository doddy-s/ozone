import React from 'react'

export const CommunitySearchBox = () => {
  return (
    <>
      <form className="w-full md:w-1/2 flex items-center justify-between border-2 p-2 rounded-xl bg-white">
        <input
          type="text"
          placeholder="Search"
          className="outline-none w-full"
        />
        <button type="submit">
          <img
            src="https://cdn.discordapp.com/attachments/1126661998063652924/1127434995414347886/search.svg"
            alt="Search Icon"
          />
        </button>
      </form>
    </>
  )
}
