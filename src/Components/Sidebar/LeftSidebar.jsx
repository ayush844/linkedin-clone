import React from 'react'
import './LeftSidebar.css'

const LeftSidebar = () => {

    const recentItems = (topic)=>{
        return(
            <div className="sidebar_recentItems">
                <span className="sidebar_hash">#</span>
                <p>{topic}</p>
            </div>
        )

    }

  return (
    <div className="leftSidebar">
        <div className="sidebar_top">
            <img src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="cover" />
            <div className="sidebar_avatar_div">
                <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt="avatar" />
            </div>
            <h2>Ayush Sharma</h2>
            <h4>Java programmer || DSA || full stack developer || let's connect</h4>
        </div>
        <div className="sidebar_stats">
            <div className="sidebar_stat"><p>Profile viewers: </p> <p className='sidebar_stat_number'>36</p></div>
            <div className="sidebar_stat"><p>Connections: </p><p className='sidebar_stat_number'>527</p></div>
        </div>
        <div className="sidebar_bottom">
            <p>Recent</p>
            <div className="divider"></div>
            {recentItems('Reactjs')}
            {recentItems('Blockchain')}
            {recentItems('Software')}
            {recentItems('google')}
            {recentItems('Recession')}
        </div>
    </div>
  )
}

export default LeftSidebar