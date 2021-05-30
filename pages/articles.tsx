import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useRequireLogin } from "../hooks/useRequireLogin";
import useSWR from "swr";
import { Article } from "../types/article";

import fetchApi from "../utils/fetchApi";
import { ArticleList } from "../organisms/ArticleList";
import { Paginate } from "../components/paginate/Paginate";
import { useRouter } from "next/router";

type ArticleResponse = {
  articles: Article[];
  articlesCount: number;
};

export const ArticlesPage = (): JSX.Element => {
  const router = useRouter();
  useRequireLogin();

  const pageLimit = 24;

  const fetcher = async (
    url: string,
    page: number | undefined,
    pageLimit: number
  ): Promise<ArticleResponse | undefined> => {
    if (page == undefined) {
      return undefined;
    }
    const response = await fetchApi<ArticleResponse>(url, "GET", undefined, {
      limit: pageLimit,
      offset: page * pageLimit,
    });
    return response.data;
  };

  // NextJSは初回レンダリング時、router.paramsの値がundefinedになるのでrouter.isReadyがtrueになった段階で値をセットするようにする
  const [pageNumber, setPageNumber] = useState<number>();
  const [totalPage, setTotalPage] = useState(1);

  const { data, error } = useSWR(["/articles", pageNumber, pageLimit], fetcher);

  useEffect(() => {
    if (data == undefined) {
      return;
    }
    let totalPage = data.articlesCount / pageLimit;
    if (data.articlesCount == 0 || data.articlesCount % pageLimit != 0) {
      totalPage++;
    }
    setTotalPage(totalPage);
  }, [data]);

  useEffect(() => {
    if (router.isReady) {
      console.log("router.ready");
      const initPageStr = router.query["page"];
      let initPage = Number(initPageStr);
      if (isNaN(initPage)) {
        initPage = 0;
      } else {
        initPage--;
      }
      setPageNumber(initPage);
    }
    // router.isReady更新時のみrouter.queryの値をsetPageNumberする
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  const onPageChanged = async (selectedItem: { selected: number }) => {
    await router.push(
      {
        path: "/articles",
        query: { ...router.query, page: String(selectedItem.selected + 1) },
      },
      undefined,
      { shallow: true }
    );
    setPageNumber(selectedItem.selected);
  };

  return (
    <>
      <Layout title="記事一覧">
        {data != undefined && (
          <div>
            <ArticleList articleList={data.articles} />
            <div className="flex justify-center mt-4">
              <Paginate pageCount={totalPage} onPageChange={onPageChanged} initialPage={pageNumber ?? 0} />
            </div>
          </div>
        )}
      </Layout>
    </>
  );
};

export default ArticlesPage;
