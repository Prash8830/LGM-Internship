import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const updatenews = async () => {
        props.setProgress(35);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(50);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }


    useEffect(() => {
        updatenews();
    }, [])

    const fetchMoreData = async () => {
        setPage(page + 1 );
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=80b3b64179964eba8bfd1042b964c75b&page=${page}&pagesize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults)
    };

    return (
        <>
            <h1 className="  special"><img src="https://raw.githubusercontent.com/Prash8830/NEWSTROM/main/src/components/card.png" alt="" width="40" height="40" /> Top Cards <img src="https://raw.githubusercontent.com/Prash8830/NEWSTROM/main/src/components/card.png" alt="" width="40" height="40" /></h1>

            {/* {loading && <Spinner />} */}
            <InfiniteScroll
                dataLength={articles.length}
                next ={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4">
                                <NewsItem title={element.title ? element.title.slice(0, 200) + "..." : "NEWSTROM Headlines "} description={element.description ? element.description.slice(0, 200) + "..." : "NEWSTROM Details"} imageurl={element.urlToImage} url={element.url} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )

}

News.defaultProps = {
    pageSize: 6,
    country: "in"
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number
}
export default News
