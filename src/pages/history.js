import Layout from "components/Layout";
import TransactionHistory from "components/parts/Home/Dashboard/TransactionHistory";
import Sidebar from "components/Sidebar";

export default function History(props) {
  return (
    <Layout pageTitle="Transaction">
      <section className="transaction">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-3">
              <Sidebar />
            </div>

            <div className="col-12 col-lg-9">
              <TransactionHistory />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
