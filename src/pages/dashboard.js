import Button from "components/Button";
import Layout from "components/Layout";
import Balance from "components/parts/Home/Dashboard/Balance";
import History from "components/parts/Home/Dashboard/History";
import Statistic from "components/parts/Home/Dashboard/Statistic";
import TransactionHistory from "components/parts/Home/Dashboard/TransactionHistory";
import Sidebar from "components/Sidebar";

import { useState } from "react";

export default function Dashboard(props) {
  const [handleShowHistory, setHandleShowHistory] = useState(false);

  const handeShowClick = () => setHandleShowHistory(!handleShowHistory);

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
                            onClick={handeShowClick}
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
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
