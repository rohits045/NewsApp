import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        country : 'in',
        pageSize : 6 ,
        category : 'general'
    }

  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string
  } 
    constructor() {
        super();
        console.log("construtor form news");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        };
    }

    async componentDidMount() {
        console.log("cdm");
        let url =
          `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2d154eaee37c4c6aae0fbd6ce984c18a&page=1&pageSize=${this.props.pageSize}`;
       
         this.setState({ loading: true });
          let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, 
            totalResults: parsedData.totalResults,
        loading:false
     });
    }

    handlePrevBtn = async () => {
        console.log("hanle prev");

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2d154eaee37c4c6aae0fbd6ce984c18a&page=${
          this.state.page - 1}&pageSize=${this.props.pageSize}`;

           this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles });

        this.setState({
            page: this.state.page - 1,
            loading:false
        });

    }
    handleNextBtn = async () => {
        console.log("handle next");

        if (this.state.page + 1 > Math.ceil(this.state.totalResults /this.props.pageSize)) {

        }
        else {
           let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2d154eaee37c4c6aae0fbd6ce984c18a&page=${
             this.state.page + 1}&pageSize=${this.props.pageSize}`;

            this.setState({loading:true})
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({ articles: parsedData.articles });

            this.setState({
                page: this.state.page + 1,
                loading:false
            });
        }

    }

    render() {
      
        console.log("render");
        return (
          <div className="container my-4">
            <h2 className="text-center">
              NewsKatta - Top Headlines
            </h2>
            {this.state.loading && <Spinner /> }
            <div className="row">
              {this.state.articles.map((ele) => {
                return (
                  <div className="col-md-4" key={ele.url}>
                    <NewsItem
                      title={ele.title ? ele.title : ""}
                      desc={ele.description ? ele.description : ""}
                      imgurl={ele.urlToImage}
                      newsUrl={ele.url}
                      author={ele.author}
                      date={ele.publishedAt}
                    />
                  </div>
                );
              })}
            </div>
            <div className="container d-flex justify-content-between">
              <button
                disabled={this.state.page <= 1}
                type="button"
                className="btn btn-dark"
                onClick={this.handlePrevBtn}
              >
                &larr; Previous
              </button>
              <button
                disabled={
                  this.state.page + 1 > Math.ceil(this.state.totalResults /this.props.pageSize)
                }
                type="button"
                className="btn btn-dark"
                onClick={this.handleNextBtn}
              >
                &rarr; Next
              </button>
            </div>
          </div>
        );
    }
}

export default News