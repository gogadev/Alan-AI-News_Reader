import React, { useState, useEffect, createRef } from "react";

import classNames from "classnames";

import "./news-card.style.css";

const NewsCard = ({
  article: { description, publishedAt, source, title, url, urlToImage },
  i,
  activeArticle,
}) => {
  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  useEffect(() => {
    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);

  useEffect(() => {
    if (i === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [i, activeArticle, elRefs]);

  return (
    <div
      ref={elRefs[i]}
      className={classNames(
        "card-body",
        activeArticle === i ? "activeCard" : null
      )}
    >
      <div className="card-body">
          <img
            src={
              urlToImage ||
              "https://specials-images.forbesimg.com/imageserve/1050049486/960x0.jpg?fit=scale"
            }
            alt=""
          />
        <div className="card-text">
          <h4 className="date">{new Date(publishedAt).toDateString()}</h4>
          <h3 className="source">{source.name}</h3>
          <h4 className="title">{title}</h4>
          <p className="description">{description}</p>
        </div>
        <button className="button">
          <a href={url} target="_blank">
            Learn More
          </a>
        </button>
        <div className="text-secondary">
          <h5>{i + 1}</h5>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
