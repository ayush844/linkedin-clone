import React, { useState } from 'react'
import './NewsSidebar.css'

const NewsSidebar = () => {

  const [news, setNews] = useState([]);

  const APIkey = "1b7080e21b82488e82512fd782f823e8";


  const getNews = async ()=>{
    await fetch(`https://newsapi.org/v2/everything?q=jobs&sortBy=publishedAt&apiKey=${APIkey}`).then((res) => res.json()).then((data) => setNews(data.articles));
  }

  getNews();

  return (
    <div className='rightSidebar'>
      <h3>LinkedIn News</h3>
      {news?.length > 0 ? 
          <div className="rightSidebarNews">
            <div className="rightSidebarNewsBox">
              <a href={news[0].url} target="_blank" rel="noreferrer"> ● {news[0].title} </a>
            </div>
            <div className="rightSidebarNewsBox">
              <a href={news[1].url} target="_blank" rel="noreferrer"> ● {news[1].title} </a>
            </div>
            <div className="rightSidebarNewsBox">
              <a href={news[2].url} target="_blank" rel="noreferrer"> ● {news[2].title} </a>
            </div>
            <div className="rightSidebarNewsBox">
              <a href={news[3].url} target="_blank" rel="noreferrer"> ● {news[3].title} </a>
            </div>
            <div className="rightSidebarNewsBox">
              <a href={news[4].url} target="_blank" rel="noreferrer"> ● {news[4].title} </a>
            </div>
            <div className="rightSidebarNewsBox">
              <a href={news[5].url} target="_blank" rel="noreferrer"> ● {news[5].title} </a>
            </div>
            <div className="rightSidebarNewsBox">
              <a href={news[6].url} target="_blank" rel="noreferrer"> ● {news[6].title} </a>
            </div>
            <div className="rightSidebarNewsBox">
              <a href={news[7].url} target="_blank" rel="noreferrer"> ● {news[7].title} </a>
            </div>
            <div className="rightSidebarNewsBox">
              <a href={news[8].url} target="_blank" rel="noreferrer"> ● {news[8].title} </a>
            </div>
          </div>
          :
          <div className="rightSidebarNews">
            <h5>news API limit reached for today 🥲, please visit after some time to get news </h5>
          </div>
      }

    </div>
  )
}

export default NewsSidebar