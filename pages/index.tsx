import Layout from "../components/Layout";
import React, { useEffect, useState } from "react";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { Article } from "../types/article";
import { ArticleList } from "../organisms/ArticleList";
import useSWR from "swr";
import { PrimaryButtonRef } from "../components/button/PrimaryButton";
import Link from "next/link";

const IndexPage = (): JSX.Element => {
  const { isLogin, currentUser } = useCurrentUser();
  const [article, setArticle] = useState<JSX.Element>();
  const fetcher = async (url: string): Promise<Article[]> => {
    const response = await fetch(url);
    const data = await response.json();
    return data.articles;
  };

  const { data, error } = useSWR(isLogin ? "/api/articles?limit=20" : null, fetcher);

  useEffect(() => {
    if (isLogin && data) {
      setArticle(
        <div className="mt-4 mx-4">
          <ArticleList articleList={data} />
        </div>
      );
    } else {
      setArticle(undefined);
    }
  }, [isLogin, data]);

  return (
    <>
      <Layout>
        {article}
        {isLogin && (
          <div className="flex justify-center mt-4">
            <Link href="/articles" passHref>
              <PrimaryButtonRef className="my-2 w-96">もっと見る...</PrimaryButtonRef>
            </Link>
          </div>
        )}
      </Layout>
    </>
  );
};

export default IndexPage;
