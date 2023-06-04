import React from 'react'

export const Loader = () => {
  return (
    <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center bg-veryLightGray dark:bg-veryDarkBlue">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-darkBlue dark:border-white"></div>
    </div>
  )
}