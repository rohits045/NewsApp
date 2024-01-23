import React, { Component } from "react";

export class NewsItem extends Component {

 

    render() {

      
        let { title, desc, imgurl, newsUrl, author, date, source } = this.props;
        return (
          <div className="card my-5">
            <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%' ,zIndex:'1'}}>
              {source}
            </span>
            <img
              src={
                !imgurl
                  ? "https://cdn.mos.cms.futurecdn.net/g8ryaWkwWHnAMzqSPsorYV-1200-80.jpg"
                  : imgurl
              }
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{title} </h5>
              <p className="card-text">{desc}...</p>
              <p className="card-text">
                <small className="text-muted">
                  By {!author ? "Unknown" : author} on{" "}
                  {new Date(date).toGMTString()}{" "}
                </small>
              </p>
              <a
                href={newsUrl}
                target="_blank"
                className="btn btn-sm btn-dark"
                rel="noreferrer"
              >
                Read More
              </a>
            </div>
          </div>
        );
    }
}

export default NewsItem;
