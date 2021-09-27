import React from 'react'

const NewsItem = (props) => {


    let { title, description, imageurl, url } = props;
    return (
        <div className="my-3">
            <div className="card">
                <img src={imageurl ? imageurl : "https://raw.githubusercontent.com/Prash8830/NEWSTROM/main/public/favicon.png"} className="card-img-top" alt="..." height="200px" width="40px" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <div className="text-center">
                        <a href={url} className="btn btn-primary" target="_blank" rel="noreferrer">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default NewsItem
