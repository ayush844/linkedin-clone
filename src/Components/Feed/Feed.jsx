import React from 'react'
import './Feed.css'
import Post from './Post'
import OthersPost from './OthersPost'

const Feed = () => {
  return (
    <div className='feed-section'>
        <Post />
        <div className="divider"></div>
        <OthersPost name="Anam Rafi" message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem ut, dolorum officia delectus quas ipsa cum error mollitia corporis pariatur sapiente, inventore provident quam commodi. Iusto ea fugit deleniti provident eveniet assumenda totam molestias quibusdam in? Blanditiis reiciendis possimus obcaecati ullam ducimus in ipsam inventore, fugit tenetur harum provident nesciunt." description="doctor || dog lover || that's it nothing else" avatar="https://images.pexels.com/photos/3209120/pexels-photo-3209120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <OthersPost name="Nidhi Tanwar" message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem ut, dolorum officia delectus quas ipsa cum error mollitia corporis pariatur sapiente, inventore provident quam commodi. Iusto ea fugit deleniti provident eveniet assumenda totam molestias quibusdam in? Blanditiis reiciendis possimus obcaecati ullam ducimus in ipsam inventore, fugit tenetur harum provident nesciunt." description="dentist || cat lover || that's it nothing else" avatar="https://images.pexels.com/photos/3781875/pexels-photo-3781875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <OthersPost name="Parul" message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem ut, dolorum officia delectus quas ipsa cum error mollitia corporis pariatur sapiente, inventore provident quam commodi. Iusto ea fugit deleniti provident eveniet assumenda totam molestias quibusdam in? Blanditiis reiciendis possimus obcaecati ullam ducimus in ipsam inventore, fugit tenetur harum provident nesciunt." description="scientist || ayush lover || that's it nothing else" avatar="https://images.pexels.com/photos/1839940/pexels-photo-1839940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <OthersPost name="Anjali Sharma" message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem ut, dolorum officia delectus quas ipsa cum error mollitia corporis pariatur sapiente, inventore provident quam commodi. Iusto ea fugit deleniti provident eveniet assumenda totam molestias quibusdam in? Blanditiis reiciendis possimus obcaecati ullam ducimus in ipsam inventore, fugit tenetur harum provident nesciunt." description="engineer || living the life || that's it nothing else" avatar="https://images.pexels.com/photos/1853047/pexels-photo-1853047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <OthersPost name="Shweta" message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem ut, dolorum officia delectus quas ipsa cum error mollitia corporis pariatur sapiente, inventore provident quam commodi. Iusto ea fugit deleniti provident eveniet assumenda totam molestias quibusdam in? Blanditiis reiciendis possimus obcaecati ullam ducimus in ipsam inventore, fugit tenetur harum provident nesciunt." description="korean girl || living the life || that's it nothing else" avatar="https://images.pexels.com/photos/1844139/pexels-photo-1844139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
    </div>
  )
}

export default Feed