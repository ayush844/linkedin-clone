import React from 'react'
import LeftSidebar from '../Components/Sidebar/LeftSidebar'
import Feed from '../Components/Feed/Feed'
import NewsSidebar from '../Components/Sidebar/NewsSidebar'


const Home = () => {
  return (
    <>
        <LeftSidebar />
        <Feed />
        <NewsSidebar />
    </>
  )
}

export default Home