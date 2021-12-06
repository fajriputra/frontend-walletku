import React from "react";
import UserProfile from "components/UserProfile";
import { formatRp } from "helpers/formatRp";

export default function History({ data }) {
  return (
    <>
      {data.length === 0 ? (
        // eslint-disable-next-line react/no-unescaped-entities
        <p className="text-center">Oops, You haven't made a transaction</p>
      ) : (
        data?.map((item) => {
          return (
            <UserProfile
              name={`${item.firstName} ${item.lastName}`}
              sub={`${item.type}`}
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
                {item.type === "send" ? "-" : "+"}
                {formatRp(item.amount)}
              </p>
            </UserProfile>
          );
        })
      )}
    </>
  );
}
