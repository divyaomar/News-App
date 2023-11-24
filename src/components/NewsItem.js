import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, url, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span
              class="badge rounded-pill bg-success"
              style={{ left: "90%", zIndex: "1" }}
            >
              {source}
            </span>
          </div>
          {/* <img src={imageUrl} alt="..."/> */}
          <img
            src={
              !imageUrl
                ? "https://www.plasticstoday.com/sites/plasticstoday.com/files/styles/article_featured_retina/public/FTR-Breaking-News-AdobeStock_397269312.jpg?itok=eZwalMlV"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={url}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
