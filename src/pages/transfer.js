import Layout from "components/Layout";
import Amount from "components/parts/Home/Transfer/Amount";
import Confirmation from "components/parts/Home/Transfer/Confirmation";
import SearchReceiver from "components/parts/Home/Transfer/SearchReceiver";
import Status from "components/parts/Home/Transfer/Status";
import Sidebar from "components/Sidebar";

export default function Transfer(props) {
  return (
    <Layout pageTitle="Transfer">
      <section className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-3">
              <Sidebar />
            </div>

            <div className="col-12 col-lg-9">
              {/* <SearchReceiver /> */}

              <Amount />

              {/* <Confirmation /> */}

              {/* <Status /> */}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
