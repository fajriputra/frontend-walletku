import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import UserProfile from "components/UserProfile";
import { formatRp } from "helpers/formatRp";
import { getDataTransaction } from "stores/history/actions";
import ReactPaginate from "react-paginate";

const initialState = {
  page: 1,
  limit: 5,
  filter: "",
};

export default function TransactionHistory({ data }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const [filtering, setFiltering] = useState(initialState);
  const [filtered, setFiltered] = useState(data);

  const { pageInfo } = useSelector((state) => state.history);

  const handleFilter = (e) => {
    setFiltering({ ...filtering, filter: e.target.value, page: 1 });

    dispatch(getDataTransaction(1, filtering.limit, filtering.filter)).then(
      (res) => {
        setFiltered(res.value.data.data);

        router.push(
          `?page=1&limit=${filtering.limit}&filter=${e.target.value}`
        );
      }
    );
  };

  const handlePagination = (e) => {
    const selected = e.selected + 1;
    setFiltering({
      ...filtering,
      page: selected,
    });

    dispatch(
      getDataTransaction(filtering.page, filtering.limit, filtering.filter)
    ).then((res) => {
      setFiltered(res.value.data.data);
      router.push(
        `?page=${selected}&limit=${filtering.limit}${
          filtering.filter ? `&filter=${filtering.filter}` : ""
        }`
      );
    });
  };

  return (
    <div className="transaction__history--card" style={{ height: 678 }}>
      <div className="transaction__history--card--head">
        <h6 className="transaction__history--card--head--text">
          Transaction History
        </h6>
        <select className="form-select" onChange={handleFilter}>
          <option value="">All</option>
          <option value="WEEK">Week</option>
          <option value="MONTH">Month</option>
          <option value="YEAR">Year</option>
        </select>
      </div>

      {filtered.length === 0 ? (
        <p className="text-center">Oops, Data not found on this page</p>
      ) : (
        filtered?.map((item) => {
          return (
            <UserProfile
              name={`${item.firstName} ${item.lastName}`}
              sub={`${item.type} (${item.status})`}
              className="f-16"
              imageSrc={
                item.image
                  ? `${process.env.API_HOST}/uploads/${item.image}`
                  : "/images/default.png"
              }
              key={item.id}
            >
              <p
                className={`text__amount--transaction ${
                  item.type === "send" ? "transfer" : "topup"
                }`}
              >
                {" "}
                {item.type === "send" ? "-" : "+"}
                {formatRp(item.amount)}
              </p>
            </UserProfile>
          );
        })
      )}

      <div className="d-flex justify-content-center align-items-center">
        <ReactPaginate
          previousLabel={false}
          nextLabel={false}
          breakLabel={"..."}
          forcePage={filtering.page - 1}
          pageCount={pageInfo.totalData}
          onPageChange={handlePagination}
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          disabledClassName={"disabled"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
}
