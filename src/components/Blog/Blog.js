import React from 'react';
import { useDispatch } from 'react-redux';
import { ADD_BOOKMARK } from '../../store/reducers/blogs.slice';
import './Blog.css'



const Blog = (props) => {
    const dispatch = useDispatch();
    const {title, image, publishedAt, url,description,source} = props.blog
    console.log(props.blog);
    return (
        //! jahid vai er design change if don't like the look
        // <div className="col-md-4">
        //     <div className="card m-3" style={{width: '18rem'}}>
        //         <img style={{height: '12rem'}} src={image} className="card-img-top" alt="..." />
        //         <div className="card-body" style={{height: '11rem'}}>
        //             <h5 className="card-title">{title}</h5>
        //             <p classNameName="text-secondary">{publishedAt}</p>
        //         </div>
        //         <div className="card-body">
        //         <a href={`${url}`} target="blank">...Continue Reading</a>
        //         </div>
        //         <div className="card-footer">
        //            <button className="btn btn-sm" onClick={() => dispatch(ADD_BOOKMARK(props.blog))}>Bookmark</button>
        //         </div>
        //     </div>
        // </div>

//! Ahanaf's Design change if don't like
<div className="row pb-4">
 <div className="col-md-5">
   <img className="blog-img" src={image} alt={title} />
 </div>
 <div className="col-md-6  ">
   <div>
       <h4 className="blog-title" >{title} </h4>
       <p> <small>Collected <a href={source.url} > {source.name} </a> </small> </p>
   
       <p className="blog-description "> {description }  <a href={`${url}`} target="blank">...Continue Reading</a> </p>
   </div>
      <div className="card-footer ">
       <button className="btn btn-sm" onClick={() => dispatch(ADD_BOOKMARK(props.blog))}>Bookmark</button>
      </div>
 </div>
</div>


    );
};

export default Blog;