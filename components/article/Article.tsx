import React from "react";
import { Article } from "../../types/article";

type ArticleCardProps = {
  article: Article;
};

export const ArticleCard = ({ article }: ArticleCardProps): JSX.Element => {
  return (
    <>
      <div className="w-96 h-full rounded overflow-hidden shadow-lg">
        <div className="w-96 h-52">
          <img className="w-full h-full  object-cover" src={article.thumbnail} alt="記事のサムネイル" />
        </div>
        <div className="px-6 py-4">
          <a rel="nofollow noopener noreferrer" href={article.url} target="_blank">
            <div className="font-bold text-xl mb-2 line-clamp-3 h-20">{article.title}</div>
          </a>
          <p className="text-gray-700 text-base line-clamp-4">{article.description}</p>
        </div>
      </div>
    </>
  );
};
