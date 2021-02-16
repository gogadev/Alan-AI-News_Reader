import React from "react";

import NewsCard from "../news-card/NewsCard";

import MicIcon from "@material-ui/icons/Mic";
import LanguageIcon from "@material-ui/icons/Language";

import "./news-cards.style.css";

const infoCards = [
  {
    color: "grey",
    title: "Latest News",
    info:
      "All of the latest breaking local and international news stories",
    text: "Give me the latest news",
  },
  {
    color: "grey",
    title: "News by Categories",
    info:
      "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",
  },
  {
    color: "grey",
    title: "News by Terms",
    info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
    text: "What's up with PlayStation 5",
  },
  {
    color: "grey",
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from CNN",
  },
];

const NewsCards = ({ articles, activeArticle }) => {
  if (!articles.length) {
    return (
      <div className="news-card main">
        <div className="cards">
          {infoCards.map((infoCard) => (
            <div className="info-card" key={infoCard.title}>
              <h2 className="title">
                <i>{infoCard.title}</i>
              </h2>
              <LanguageIcon />
              {!infoCard.info ? (
                <h3>{infoCard.title.split(" ")[2]}</h3>
              ) : (
                <span>{infoCard.info}</span>
              )}
              <h4 className="text">
                <MicIcon />
                {infoCard.text}
              </h4>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="news-card">
      <div className="card">
        {articles.map((article, i) => (
          <NewsCard article={article} i={i} activeArticle={activeArticle} />
        ))}
      </div>
    </div>
  );
};

export default NewsCards;
