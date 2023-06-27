import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const  News = (props) => {
    const apikeys=["f81fba9cd4b6493fb2f3e8c821373bec","0cc45d1cf8f640d584a62387db7856e4"];
    const [articles,setArtical] =useState([])
    const [loading,setloading]=useState(true)
    const [page,setpage] =useState(1)
    const [totalResults,setTotalResult]=useState(0)


    const capitalished = (string)=>{
        return (string.charAt(0).toUpperCase() + string.slice(1))
    }
    
    
    
    const UpdatePage = async () =>{
        const url1=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apikeys[1]}&page=${page}&pageSize=${props.pageSize}`;
        props.setprogress(10);
        setloading(loading.true)
        let data = await fetch(url1);
        props.setprogress(30);
        let parseData = await data.json();
        props.setprogress(60);
        setArtical(parseData.articles)
        setTotalResult(parseData.totalResults)
        setloading(false)
        props.setprogress(100);

    }
    useEffect(()=>{
        document.title = `${capitalished(props.category)}- sortnews`
        UpdatePage();
    },[])
   
  
    const fetchMoreData = async  () =>  {
         const url1=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apikeys[1]}&page=${page +1}&pageSize=${props.pageSize}`;
         setpage(page+1)
         console.log(props.category); 
         let data = await fetch(url1);
         let parseData = await data.json();
        setArtical(articles.concat(parseData.articles))
        setTotalResult(parseData.totalResults)
           
    };



    return (
        <>
            <h1 className='text-center text-light' style={{marginTop:'60px',marginBottom:'20px'}}>Today news sorts from {capitalished(props.category)} </h1>
               {/* {loading && <Spinner/>} */}
               <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length<=totalResults} loader={<Spinner/>} >
                <div className='container'>
                        <div className='row'>
                            {articles.map((element)=>{
                                return  <div className='col-md-4'  key={element.url}>
                                <NewsItem title={element.title?element.title.slice(0,30):""} description={element.description?element.description.slice(0,70):null} imgurl={element.urlToImage} newsUrl={element.url}  author={element.author} articaldate={element.publishedAt} content={element.content?element.content.slice(0,50):""} source={element.source.name} />
                        </div> 
                    })}  
                    </div>
                </div>
                </InfiniteScroll>
        </>
    )
}


News.defaultProps = {
    country:'in',
    pageSize:8,
    category:"general",
    server:0,
}
News.propTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
}

export default News