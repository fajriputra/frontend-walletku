import React, { useState } from "react";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import FormInput from "components/FormInput";
import { SearchSVG } from "components/SVG";
import UserProfile from "components/UserProfile";
import { getAllUser } from "stores/user/actions";

const initialState = {
  page: 1,
  limit: 3,
  search: "",
  sort: "firstName ASC",
};

export default function SearchReceiver({ data, onClick }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const [filtering, setFiltering] = useState(initialState);
  const [filtered, setFiltered] = useState(data);

  const { pageInfo } = useSelector((state) => state.user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFiltering({ ...filtering, [name]: value });
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setFiltering({
        ...filtering,
        search: e.target.value,
      });

      dispatch(
        getAllUser(1, filtering.limit, filtering.search, filtering.sort)
      ).then((res) => {
        router.push(`?search=${filtering.search}`);

        setFiltered(res.value.data.data);

        setFiltering({ ...filtering, search: "", page: 1 });
      });
    }
  };

  const handlePagination = (e) => {
    const selected = e.selected + 1;
    setFiltering({
      ...filtering,
      page: selected,
    });

    dispatch(
      getAllUser(selected, filtering.limit, filtering.search, filtering.sort)
    ).then((res) => {
      setFiltered(res.value.data.data);
      router.push(`?page=${selected}&limit=${filtering.limit}`);
    });
  };

  return (
    <div className="transfer__card">
      <div className="transfer__card--head">
        <h6 className="text__heading">Search Receiver</h6>
        <div className="form-group position-relative">
          <FormInput
            inputClassName="form__input--receiver"
            placeholder="Search receiver here..."
            name="search"
            value={filtering.search}
            onChange={handleChange}
            onKeyPress={handleEnter}
          />

          <SearchSVG width="24" height="24" className="icon__search" />
        </div>
      </div>

      {filtered.length > 0 ? (
        filtered.map((item) => {
          return (
            <UserProfile
              imageSrc={
                item.image
                  ? `${process.env.API_HOST}/uploads/${item.image}`
                  : "/images/default.png"
              }
              name={`${item.firstName} ${item.lastName}`}
              sub={item.noTelp ? `+62${item.noTelp}` : ""}
              className="card__shadow"
              onClick={() => onClick(item)}
              key={item.id}
            />
          );
        })
      ) : (
        <p className="text-center">
          User {router.query.search} cannot be found
        </p>
      )}

      <div className="d-flex justify-content-center align-items-center">
        <ReactPaginate
          previousLabel={false}
          nextLabel={false}
          breakLabel={"..."}
          forcePage={filtering.page - 1}
          pageCount={pageInfo.totalPage}
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
