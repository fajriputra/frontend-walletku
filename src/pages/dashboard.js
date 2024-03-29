import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "helpers/axios";
import Button from "components/Button";
import Layout from "components/Layout";
import Modal from "components/Modal";
import Balance from "components/parts/Home/Dashboard/Balance";
import History from "components/parts/Home/Dashboard/History";
import Statistic from "components/parts/Home/Dashboard/Statistic";
import TransactionHistory from "components/parts/Home/Dashboard/TransactionHistory";
import Sidebar from "components/Sidebar";
import { formatRp } from "helpers/formatRp";
import { topUp } from "stores/topup/actions";
import { toast } from "react-toastify";
import { getUserById } from "stores/user/actions";

import { getDataTransaction } from "stores/history/actions";
import { getDataCookie } from "middlewares/authorizationPage";

export async function getServerSideProps(context) {
  const dataCookie = await getDataCookie(context);
  if (!dataCookie.isLogin) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  const getDashboard = await axios
    .get(`/dashboard/${dataCookie.id}`, {
      headers: {
        Authorization: `Bearer ${dataCookie.token}`,
      },
    })
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return {
    props: {
      data: { dataCookie, getDashboard },
    },
  };
}

export const stateAmount = {
  amount: "",
};

const stateTransaction = {
  page: 1,
  limit: 5,
  filter: "WEEK",
  data: [],
};

export default function Dashboard(props) {
  const dispatch = useDispatch();

  const dashboard = props.data.getDashboard;

  const [amount, setAmount] = useState(stateAmount);
  const [transaction, setTransaction] = useState(stateTransaction);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(!showModal);
  const closeModal = () => setShowModal(false);

  const [handleShowHistory, setHandleShowHistory] = useState(false);
  const handleShowClick = () => setHandleShowHistory(!handleShowHistory);

  const topup = useSelector((state) => state.topup);
  const { userById } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserById(userById.id));
    dispatch(
      getDataTransaction(
        transaction.page,
        transaction.limit,
        transaction.filter
      )
    ).then((res) => {
      setTransaction({
        ...transaction,
        data: res.value.data.data,
      });
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAmount({ ...amount, [name]: value });
  };

  const handleTopUp = () => {
    if (!amount.amount) {
      return toast.error("Please input your amount to made topup");
    } else if (amount.amount < 10000) {
      return toast.error(`Minimum top up balance is ${formatRp(10000)}`);
    }
    dispatch(topUp(amount))
      .then((res) => {
        toast.success(res.value.data.msg);

        setAmount(stateAmount);
        closeModal();

        window.open(
          `${res.value.data.data.redirectUrl}`,
          "_blank",
          "noopener noreferrer"
        );
      })
      .catch((err) => {
        err.response.data.msg && toast.error(err.response.data.msg);
      });
  };

  return (
    <Layout pageTitle="Dashboard">
      <section className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-3">
              <Sidebar handleShow={openModal} />

              <Modal
                showModal={showModal}
                setShowModal={setShowModal}
                submit={handleTopUp}
                onChange={handleChange}
                value={amount.amount}
                name="amount"
                isLoading={topup.isLoading}
              />
            </div>

            <div className="col-12 col-lg-9">
              {handleShowHistory ? (
                <TransactionHistory data={transaction.data} />
              ) : (
                <>
                  <Balance
                    balance={formatRp(userById.balance)}
                    noTelp={userById.noTelp ? `+62${userById.noTelp}` : ""}
                    topup={openModal}
                  />

                  <div className="row">
                    <div className="col-12 col-lg-7">
                      <Statistic data={dashboard} />
                    </div>

                    <div className="col-12 col-lg-5">
                      <div className="dashboard__history--card">
                        <div className="dashboard__history--card--head">
                          <h6 className="text__transaction">
                            Transaction History
                          </h6>
                          <Button
                            className="btn text__seeall p-0"
                            onClick={handleShowClick}
                          >
                            See all
                          </Button>
                        </div>

                        <History data={transaction.data} />
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
