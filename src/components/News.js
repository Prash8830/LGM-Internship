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
    async updatenews(){
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=80b3b64179964eba8bfd1042b964c75b&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
    }


    // life cycle method
    async componentDidMount() {
        this.updatenews();  
    }
    handleprev = async () => {
        this.setState({page:this.state.page-1});
        this.updatenews();
    }
    handlenext = async () => {
        this.setState({page:this.state.page+1});
        this.updatenews();
    }
    render() {
        return (
            <>
                <div className="container my-3">
                    <h1 className=" nav-link active special"><img src="https://raw.githubusercontent.com/Prash8830/NEWSTROM/main/src/components/card.png" alt="" width="40" height="40"/> Strom Cards  <img src="https://raw.githubusercontent.com/Prash8830/NEWSTROM/main/src/components/card.png" alt="" width="40" height="40"/> </h1>
                    
                    {this.state.loading && <Spinner />}
                    <div className="row">
                        {!this.state.loading && this.state.articles.map((element) => {
                            return <div className="col-md-4">
                                <NewsItem title={element.title ? element.title.slice(0, 200) + "..." : "NEWSTROM Headlines "} description={element.description ? element.description.slice(0, 200) + "..." : "NEWSTROM Details"} imageurl={element.urlToImage} url={element.url} />
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
