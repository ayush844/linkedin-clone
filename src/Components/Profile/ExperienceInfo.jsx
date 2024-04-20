import React from 'react'

import './ExperienceInfo.css'

import EditIcon from '@mui/icons-material/Edit';

const ExperienceInfo = () => {
  return (
    <div className='ExperienceInfo'>
        <div className="ExperienceInfoPost">
            <div className="imgBox">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png" alt="post" />
            </div>
            <div className="jobDescription">
                <div className="jobTitle">
                    <h3>Recruitment Associate</h3>
                    <h6>Zomato</h6>
                    <p>Nov 2018 - April 2023 ● 4years 5months</p>
                    <p>Gurgaon, India</p>
                </div>
                <div className="jobDetailDescription">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut velit repellat, ipsam mollitia debitis odio asperiores odit vel. Repellendus, aperiam sunt! Sapiente consectetur corrupti ad molestiae minima, iure nesciunt veniam consequuntur soluta error aperiam accusamus est reiciendis excepturi dignissimos ex. Odio repellendus numquam debitis magni natus blanditiis amet fuga aperiam odit obcaecati, placeat repudiandae quod architecto esse maiores voluptates voluptate, inventore iure eveniet ipsa repellat necessitatibus culpa? Modi, expedita ratione! Obcaecati voluptatibus perspiciatis quidem neque iusto ex autem quo modi, ipsam animi! Magni voluptatum maxime doloremque quos quaerat consequuntur ratione, in voluptates nisi adipisci, totam nam voluptatibus ipsum debitis veritatis.</p>
                </div>
            </div>
            <div className="editBtn">
                <EditIcon  style={{fontSize: '2rem'}}/>
            </div>
        </div>
    </div>
  )
}

export default ExperienceInfo