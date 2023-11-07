import React,{useEffect, useState}  from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
 const News =(props) => {
  const [articles,setArticles] = useState([])
  const [loading,setLoading] = useState(true)
  const [page,setPage] = useState(1)
  const [totalResult,setTotalResult] = useState(0)
    // 
 const capitaliseFirstLetter =(string)=>{
    return  string.charAt(0).toUpperCase() + string.slice(1)
  }

 const  updateNews = async ()=>{
    props.setProgress(10);
   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(parsedData.articles)
    setTotalResult( parsedData.totalResults)
    setLoading(false)
  props.setProgress(100);
  }
  useEffect(()=>{
    document.title = `${capitaliseFirstLetter(props.category)} - NewsFor`;
    updateNews();
  },[]
  )
  /*  const handlepreviousclick= async()=>{
    console.log("previous")
    setPage(page-1)
    updateNews();
  }
 const handlenextclick = async()=>{
    console.log("next")
       setPage(page+1)
       updateNews();
    } */
  const  fetchMoreData = async () => {
setPage(page+1)
const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
let data = await fetch(url);
let parsedData = await data.json();
setArticles(articles.concat(parsedData.articles));
setTotalResult(parsedData.totalResults);
    };
    return (
  
   <div>
    <h1 className="text-center" style={{marginTop:'90px'}}>NewsFor -Top {capitaliseFirstLetter(props.category)} HeadLines</h1>
          {loading &&<Spinner/>}
       <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !==totalResult}
          loader= {loading &&<Spinner/>}
        >
    
          <div className="container">
   <div className="row">
   {/*     !loading&&   */  articles.map((element)=>{
   return <div className="col-md-4" key={element.url}>
    <Newsitem  title = {element.title?element.title.slice(0,45):""} discription = {element.description?element.description.slice(0,88):""} imageurl= {element.urlToImage} newsurl={element.url} author= {element.author} date= {element.publishedAt} source= {element.source.name}/>
    </div>

   })}
        </div>
        </div>
        </InfiniteScroll>

        {/*   =======  this code for previous and next buttons  ====== */}

       {/*     <div className="container d-flex justify-content-between">
        <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlepreviousclick}> &larr;Previous</button>
        <button disabled={page +1 > Math.ceil(totalResult/props.pageSize)} type="button" className="btn btn-dark" onClick={handlenextclick}>Next &rarr;</button>
        </div>    */}
        </div>
    )
  
}
News.propTypes={
  country:'in'  ,
  pageSize: 9 ,
  category:'general',  
}
News.defaultProps={
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category:  PropTypes.string,
}
export default News