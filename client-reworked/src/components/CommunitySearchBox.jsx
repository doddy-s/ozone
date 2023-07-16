import React from 'react'

export const CommunitySearchBox = () => {
  return (
    <>
      <form className="w-full xl:w-1/3 flex items-center justify-between border-2 p-4 rounded-xl text-base text-neutral-600 font-normal bg-white">
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
