import React, { useRef } from 'react'
import './JobPreferenceModal.css'

import CloseIcon from '@mui/icons-material/Close';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';

const JobPreferenceModal = ({onClose}) => {

    const modalRef = useRef();

    const closeModal = (e)=>{
        if(modalRef.current === e.target){
            onClose();
        }
    }

  return (
    <div ref={modalRef} onClick={closeModal} className='jobPreferenceModal'>
        <div className="jobPreferenceModalBox">
            <div className="boxTop">
                <span>Preference</span>
                <div className="closeIconDiv" onClick={onClose}>
                    <CloseIcon className='closeIcon'/>
                </div>
            </div>
            <div className="boxMid">
                <ModeStandbyIcon className='targetIcon'/>
                <span>My Interests</span>
            </div>
            <div className="boxBottom">
                <span>Open To Work</span>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                </label>
            </div>
            

        </div>
    </div>
  )
}

export default JobPreferenceModal