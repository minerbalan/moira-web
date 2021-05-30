import React from "react";
import { Article } from "../types/article";
import { ArticleCard } from "../components/article/Article";

type ArticleListProps = {
  articleList: Article[];
};

export const ArticleList = ({ articleList }: ArticleListProps): JSX.Element => {
  return (
    <>
      <div className="flex flex-wrap justify-around">
        {articleList.map((item) => (
          <div className="m-2" key={item.url}>
            <ArticleCard article={item} />
          </div>
        ))}
      </div>
    </>
  );
};
