import React from 'react'
import './Feed.css'
import Post from './Post'
import OthersPost from './OthersPost'

const Feed = () => {
  return (
    <div className='feed-section'>
        <Post />
        <div className="divider"></div>
        <OthersPost name="Nitesh Jha" message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem ut, dolorum officia delectus quas ipsa cum error mollitia corporis pariatur sapiente, inventore provident quam commodi. Iusto ea fugit deleniti provident eveniet assumenda totam molestias quibusdam in? Blanditiis reiciendis possimus obcaecati ullam ducimus in ipsam inventore, fugit tenetur harum provident nesciunt." description="doctor || dog lover || that's it nothing else" avatar="https://images.unsplash.com/photo-1591258739299-5b65d5cbb235?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <OthersPost name="Ankit" message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem ut, dolorum officia delectus quas ipsa cum error mollitia corporis pariatur sapiente, inventore provident quam commodi. Iusto ea fugit deleniti provident eveniet assumenda totam molestias quibusdam in? Blanditiis reiciendis possimus obcaecati ullam ducimus in ipsam inventore, fugit tenetur harum provident nesciunt." description="dentist || cat lover || that's it nothing else" avatar="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <OthersPost name="Parul" message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem ut, dolorum officia delectus quas ipsa cum error mollitia corporis pariatur sapiente, inventore provident quam commodi. Iusto ea fugit deleniti provident eveniet assumenda totam molestias quibusdam in? Blanditiis reiciendis possimus obcaecati ullam ducimus in ipsam inventore, fugit tenetur harum provident nesciunt." description="scientist || ayush lover || that's it nothing else" avatar="https://images.pexels.com/photos/1839940/pexels-photo-1839940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <OthersPost name="Anjali Sharma" message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem ut, dolorum officia delectus quas ipsa cum error mollitia corporis pariatur sapiente, inventore provident quam commodi. Iusto ea fugit deleniti provident eveniet assumenda totam molestias quibusdam in? Blanditiis reiciendis possimus obcaecati ullam ducimus in ipsam inventore, fugit tenetur harum provident nesciunt." description="engineer || living the life || that's it nothing else" avatar="https://images.pexels.com/photos/1853047/pexels-photo-1853047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <OthersPost name="Shweta" message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem ut, dolorum officia delectus quas ipsa cum error mollitia corporis pariatur sapiente, inventore provident quam commodi. Iusto ea fugit deleniti provident eveniet assumenda totam molestias quibusdam in? Blanditiis reiciendis possimus obcaecati ullam ducimus in ipsam inventore, fugit tenetur harum provident nesciunt." description="korean girl || living the life || that's it nothing else" avatar="https://images.pexels.com/photos/1844139/pexels-photo-1844139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
    </div>
  )
}

export default Feed