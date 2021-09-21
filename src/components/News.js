import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'


export class News extends Component {

    static defaultProps = {
        pageSize:6,
        country:"in"
    }
    static propTypes ={
        country: PropTypes.string,
        pageSize: PropTypes.number
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,

        }
    }


    // life cycle method
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=80b3b64179964eba8bfd1042b964c75b&pagesize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
    }
    handleprev = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=80b3b64179964eba8bfd1042b964c75b&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }
    handlenext = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=80b3b64179964eba8bfd1042b964c75b&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
            this.setState({ loading: true });
            let data = await fetch(url);
            let parsedData = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }
    }
    render() {
        return (
            <>
                <div className="container my-3">
                    <h1 className="text-center">Fast Cards</h1>
                    {this.state.loading && <Spinner />}
                    <div className="row">
                        {!this.state.loading && this.state.articles.map((element) => {
                            return <div className="col-md-4">
                                <NewsItem title={element.title ? element.title.slice(0, 70) + "..." : "NEWSTROM Headlines "} description={element.description ? element.description.slice(0, 70) + "..." : "NEWSTROM Details"} imageurl={element.urlToImage} url={element.url} />
                            </div>
                        })}
                    </div>
                    <div className="Container d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handleprev}>&larr; Previous</button>
                        <button disabled={(this.state.page + 1) > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-primary" onClick={this.handlenext} >Next &rarr;</button>
                    </div>
                </div>
            </>
        )
    }
}

export default News
