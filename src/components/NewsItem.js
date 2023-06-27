import React from 'react'
import './NewsItem.css';


 const NewsItem = (props) =>  {
  
     let {title,description,imgurl,newsUrl,articaldate,author,content,source } = props;
    return (
      <>
        <div className="card text-dark my-2" >
          <img src={imgurl?imgurl:"https://res.9appsinstall.com/group3/M01/8F/16/4ZMEAFsX7byAWTJAAAAZ9kSHVwc254.png"} className="card-img-top" alt="..."/>
        <div className="card-body">
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'75%',zIndex:'1'}}>{source?source:"Unknown"}</span>
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description?description:content}...</p>
        </div>
        <ul className="list-group list-group-flush">
          {/* <li className="list-group-item">{}</li> */}
          <li className="list-group-item"><strong>Date : </strong>{new Date(articaldate).toGMTString()}</li>
          <li className="list-group-item"><strong>Author : </strong>{author?author:"Unknown"}</li>
        </ul>
        <div className="card-body">
          <a href={newsUrl} className="btn btn-success">More</a>
          {/* <a href="#" className="card-link">Another link</a> */}
        </div>
      </div>
    </>
    )
}

export default NewsItem