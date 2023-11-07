import React from 'react'
const Newsitem= (props) =>{
    let {title, discription,imageurl, newsurl,author,date,source} =props;
    return (
<div className="my-3">
 <div className="card">
  <div>
  <span className="badge rounded-pil" style= {{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0', backgroundColor:'#101332', color:'#B02215'}}>{source}</span>
  </div>
 
  <img src={!imageurl?"https://ichef.bbci.co.uk/news/1024/branded_news/F532/production/_131007726_gettyimages-1242729309.jpg":imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{discription}...</p>
    <p className="card-text"><small className='' style={{color:'#F95019'}}>By {!author?"Unknown":author} On {new Date (date).toGMTString()}</small></p>
    <a href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read more...</a>
  </div>
</div>
</div>
    )
}

export default Newsitem
