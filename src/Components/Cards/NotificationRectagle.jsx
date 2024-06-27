import React from 'react'
import './NotificationRectangle.css'

const NotificationRectagle = () => {


  return (
    <div className='notificationRectangle'>
        <div className="notificationInfo">
            <div className="notificationRectangleImage">
                <img src="https://images.pexels.com/photos/3363304/pexels-photo-3363304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="notification Avatar" />
            </div>
            <div className="notificationBox">
                <div className="notificationMessage">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus sint nihil ut saepe, totam earum sapiente officiis laboriosam commodi corporis sed voluptatem quidem atque in quaerat ab inventore perferendis cum aliquam consequatur error. Sed alias facere repellat, quasi voluptatibus nam quam autem tenetur, hic modi qui cum quas, quidem sit.</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default NotificationRectagle