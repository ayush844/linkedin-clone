import React from 'react'
import ConnectionsDropdown from '../Components/Dropdown/ConnectionsDropdown'

import './MyConnections.css'
import MyConnectionRectangle from '../Components/Cards/MyConnectionRectangle'

const MyConnections = () => {
  return (
    <div className="myConnectionsPage">
    <div className='myConnectionBox'>
        <h3>526 Connections</h3>
        <div className="connectionSelectionOptions">
            <div className="ConnectionSorting">
                <p>Sort by:</p>
                <ConnectionsDropdown />
            </div>
            <input className='findConnectionInput' type="text" placeholder='Search by name' />
        </div>
        <div className="divider"></div>
        <div className="allConnectionsBox">
            <MyConnectionRectangle />
            <MyConnectionRectangle />
            <MyConnectionRectangle />
            <MyConnectionRectangle />
            <MyConnectionRectangle />
            <MyConnectionRectangle />
            <MyConnectionRectangle />
            <MyConnectionRectangle />
            <MyConnectionRectangle />
            <MyConnectionRectangle />
            <MyConnectionRectangle />
            <MyConnectionRectangle />
            <MyConnectionRectangle />
            <MyConnectionRectangle />
            <MyConnectionRectangle />
            <MyConnectionRectangle />
            <MyConnectionRectangle />
            <MyConnectionRectangle />
        </div>

    </div>
    </div>
  )
}

export default MyConnections