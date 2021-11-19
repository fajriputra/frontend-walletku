import { useState } from "react";

import Button from "components/Button";
import Layout from "components/Layout";
import Balance from "components/parts/Home/Dashboard/Balance";
import History from "components/parts/Home/Dashboard/History";
import Statistic from "components/parts/Home/Dashboard/Statistic";
import TransactionHistory from "components/parts/Home/Dashboard/TransactionHistory";
import Sidebar from "components/Sidebar";

export default function Dashboard(props) {
  const [handleShowHistory, setHandleShowHistory] = useState(false);

  const handleClickShow = () => {
    alert("testt");
    console.log("test");
  };

  return (
    <Layout pageTitle="Dashboard">
      <section className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-3">
              <Sidebar />
            </div>

            <div className="col-12 col-lg-9">
              {handleShowHistory ? (
                <TransactionHistory />
              ) : (
                <>
                  <Balance />

                  <div className="row">
                    <div className="col-12 col-lg-7">
                      <Statistic />
                    </div>

                    <div className="col-12 col-lg-5">
                      <div className="dashboard__history--card">
                        <div className="dashboard__history--card--head">
                          <h6 className="text__transaction">
                            Transaction History
                          </h6>
                          <Button
                            className="btn text__seeall p-0"
                            // onClick={handleClickShow}
                            onClick={handleClickShow}
                          >
                            See all
                          </Button>
                        </div>

                        <History />
                      </div>
                    </div>
                  </div>
                </>
              )}

              <button
                className="btn text__seeall p-0"
                // onClick={handleClickShow}
                onClick={handleClickShow}
              >
                See all
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
