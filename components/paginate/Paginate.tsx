import React from "react";
import ReactPaginate from "react-paginate";

export type PaginateType = {
  pageCount: number;
  pageRangeDisplayed?: number;
  marginPagesDisplayed?: number;
  onPageChange?: (selectedItem: { selected: number }) => void;
  initialPage: number;
};

export const Paginate = (props: PaginateType): JSX.Element => {
  return (
    <>
      <ReactPaginate
        pageCount={props.pageCount}
        pageRangeDisplayed={props.pageRangeDisplayed ?? 3}
        marginPagesDisplayed={props.marginPagesDisplayed ?? 2}
        previousLabel={<i className="bi bi-arrow-left font-black" />}
        nextLabel={<i className="bi bi-arrow-right" />}
        previousClassName={"h-12 w-12 mr-1 flex justify-center items-center font-black"}
        nextClassName={"h-12 w-12 mr-1 flex justify-center items-center font-black"}
        onPageChange={props.onPageChange}
        containerClassName={"flex text-gray-700 text-lg"}
        pageClassName={
          "w-12 sm:flex justify-center items-center hidden select-none cursor-pointer leading-5 transition duration-150 ease-in border-t-2 border-gray"
        }
        pageLinkClassName={"w-full h-full flex justify-center items-center"}
        breakClassName={
          "w-12 sm:flex justify-center items-center hidden select-none cursor-pointer leading-5 transition duration-150 ease-in border-t-2 border-gray"
        }
        activeClassName={
          "w-12 sm:flex justify-center items-center hidden select-none cursor-pointer leading-5 transition duration-150 ease-in border-t-2 border-blue-600"
        }
        disabledClassName={"h-12 w-12 mr-1 flex justify-center items-center text-gray-400"}
        previousLinkClassName={"w-full h-full flex justify-center items-center"}
        nextLinkClassName={"w-full h-full flex justify-center items-center"}
        initialPage={props.initialPage}
      />
    </>
  );
};
