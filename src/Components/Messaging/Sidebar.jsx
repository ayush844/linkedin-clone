import React from 'react'

import './Sidebar.css'
import Conversation from './Conversation'

const Sidebar = () => {
  return (
    <div className='messagingSidebar'>
        <Conversation name={"Vaibhav Jha"} pic={"https://images.unsplash.com/photo-1513959663939-eb7424f0e121?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
        <Conversation name={"Akshat Kaushik"} pic={"https://images.unsplash.com/photo-1521166051189-96e872dfe077?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"} />
        <Conversation name={"Nitesh Jha"} pic={"https://images.unsplash.com/photo-1516446636564-c48e723868fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D"} />
        <Conversation name={"Himanshu Sharma"} pic={"https://images.unsplash.com/photo-1531311243148-d2653fa84700?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D"} />
        <Conversation name={"Prince Pandey"} pic={"https://images.unsplash.com/photo-1533844337338-73463945b347?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8"} />
        <Conversation name={"Anshul Kumar"} pic={"https://images.unsplash.com/photo-1492288991661-058aa541ff43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D"} />
        <Conversation name={"Ankit Kumar"} pic={"https://images.unsplash.com/photo-1584392010853-556ba0749381?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
        <Conversation name={"Shauryaman Saxena"} pic={"https://images.unsplash.com/photo-1556216009-b4503ebd4ccf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"} />
        <Conversation name={"Rahul Kumar"} pic={"https://images.unsplash.com/flagged/photo-1596479042555-9265a7fa7983?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"} />
    </div>
  )
}

export default Sidebar