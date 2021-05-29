import React from 'react';
import { useDispatch } from 'react-redux';
import { ADD_BOOKMARK } from '../../store/reducers/blogs.slice';




const Blog = (props) => {
    const dispatch = useDispatch();
    const {title, image, publishedAt, url} = props.blog
    console.log(props.blog);
    return (
        <div className="col-md-4">
            <div className="card m-3" style={{width: '18rem'}}>
                <img style={{height: '12rem'}} src={image} className="card-img-top" alt="..." />
                <div className="card-body" style={{height: '11rem'}}>
                    <h5 className="card-title">{title}</h5>
                    <p classNameName="text-secondary">{publishedAt}</p>
                </div>
                <div className="card-body">
                <a href={`${url}`} target="blank">...Continue Reading</a>
                </div>
                <div className="card-footer">
                   <button className="btn btn-sm" onClick={() => dispatch(ADD_BOOKMARK(props.blog))}>Bookmark</button>
                </div>
            </div>
        </div>
    );
};

export default Blog;