import React, { useState } from "react";
import { useRouter } from "next/router";
import { formatRp } from "helpers/formatRp";
import Button from "components/Button";
import { CheckSVG, CloseSVG, DownloadSVG } from "components/SVG";
import UserProfile from "components/UserProfile";
import axios from "helpers/axios";
import { toast } from "react-toastify";

export default function Status({ data, isSuccess }) {
  const router = useRouter();

  // console.log(data);
  const [loading, setLoading] = useState(false);

  const handlePdf = () => {
    setLoading(true);
    axios
      .get(`/export/transaction/${data.idTransaction}`)
      .then((res) => {
        window.open(`${res.data.data.url}`, "_blank", "noopener noreferrer");
      })
      .catch((err) => {
        err.response.data.msg && toast.error(err.response.data.msg);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="confirmation__card">
      <div className="row justify-content-center" style={{ marginBottom: 40 }}>
        <div
          className={`confirmation__card--status ${
            isSuccess ? "success" : "failed"
          } rounded-circle`}
        >
          {isSuccess ? (
            <CheckSVG />
          ) : (
            <CloseSVG width="25" height="25" stroke="#ffffff" />
          )}
        </div>

        <h5 className="status__success">
          Transfer {isSuccess ? "Success" : "Failed"}
        </h5>

        <p className="text__display--error">
          {!isSuccess && (
            <>
              We can’t transfer your money at the moment, we recommend you to
              check{" "}
              <span className="d-block">
                your internet connection and try again.
              </span>
            </>
          )}
        </p>
      </div>

      <div className="confirmation__card--amount">
        <p className="confirmation__card--amount--title">Amount</p>
        <h5 className="confirmation__card--amount--subtitle">
          {formatRp(data.amount)}
        </h5>
      </div>
      <div className="confirmation__card--amount">
        <p className="confirmation__card--amount--title">Balance Left</p>
        <h5 className="confirmation__card--amount--subtitle">
          {formatRp(data.balanceLeft)}
        </h5>
      </div>
      <div className="confirmation__card--amount">
        <p className="confirmation__card--amount--title">Date & Time</p>
        <h5 className="confirmation__card--amount--subtitle">{data.date}</h5>
      </div>
      <div className="confirmation__card--amount" style={{ marginBottom: 40 }}>
        <p className="confirmation__card--amount--title">Notes</p>
        <h5 className="confirmation__card--amount--subtitle">{data.notes}</h5>
      </div>

      <div className="confirmation__card--transfer">
        <h6 className="text__heading">Transfer to</h6>
      </div>

      <UserProfile
        imageSrc={
          data.image
            ? `${process.env.API_HOST}/uploads/${data.image}`
            : "/images/default.png"
        }
        name={`${data.firstName} ${data.lastName}`}
        sub={data.noTelp ? `+62${data.noTelp}` : ""}
        className="card__shadow"
      />

      <div className="d-flex justify-content-end flex-column flex-md-row">
        {isSuccess ? (
          <>
            <Button
              className="btn btn__download mb-3 me-md-3 mb-md-0"
              onClick={handlePdf}
              isLoading={loading}
            >
              <DownloadSVG className="me-3" />
              Download PDF
            </Button>
            <Button
              className="btn btn__home"
              onClick={() => router.push("/dashboard")}
            >
              Back To Home
            </Button>
          </>
        ) : (
          <Button
            className="btn btn__home"
            onClick={() => router.push("/dashboard")}
          >
            Try again
          </Button>
        )}
      </div>
    </div>
  );
}
