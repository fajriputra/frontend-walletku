import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { topUp } from "stores/topup/actions";
import { formatRp } from "helpers/formatRp";
import { getAllUser } from "stores/user/actions";
import Layout from "components/Layout";
import Modal from "components/Modal";
import Amount from "components/parts/Home/Transfer/Amount";
import Confirmation from "components/parts/Home/Transfer/Confirmation";
import SearchReceiver from "components/parts/Home/Transfer/SearchReceiver";
import Status from "components/parts/Home/Transfer/Status";
import Sidebar from "components/Sidebar";
import axios from "helpers/axios";
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
  return { props: {} };
}

const initialState = {
  amount: "",
};

const stateReceiver = {
  page: 1,
  limit: 3,
  search: "",
  sort: "firstName ASC",
  data: [],
};

const passingState = {
  idTransaction: "",
  receiverId: "",
  firstName: "",
  lastName: "",
  image: null,
  noTelp: "",
  amount: "",
  notes: "",
  balanceLeft: "",
  date: "",
};

const stringPattern = (value) => {
  const re = /\s/g;

  if (value.length === 1) {
    return re.test(value);
  }
};

export default function Transfer(props) {
  const [steps, setSteps] = useState(0);
  const [data, setData] = useState(passingState);
  const stepsCloseModal = () => {
    setSteps(steps + 1);
    setShowModal(false);
  };

  const { userById } = useSelector((state) => state.user);
  const topup = useSelector((state) => state.topup);

  const [showModal, setShowModal] = useState(false);
  const [pin, setPin] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    message: "",
    isError: false,
  });
  const openModal = () => setShowModal(!showModal);
  const closeModal = () => setShowModal(false);
  const [receiver, setReceiver] = useState(stateReceiver);
  const [amount, setAmount] = useState(initialState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getAllUser(receiver.page, receiver.limit, receiver.search, receiver.sort)
    ).then((res) => {
      setReceiver({
        ...receiver,
        data: res.value.data.data,
      });
    });
  }, [pin]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAmount({ ...amount, [name]: value });
    setData({ ...data, [name]: value });
  };

  const addPin = (e) => {
    if (e.target.value) {
      const nextSibling = document.getElementById(
        `pin-${parseInt(e.target.name, 10) + 1}`
      );

      if (nextSibling !== null) {
        nextSibling.focus();
      }
    }

    setPin({ ...pin, [`pin${e.target.name}`]: e.target.value });
  };

  const handleTopUp = () => {
    if (!amount.amount) {
      return toast.error("Please input your amount to made topup");
    } else if (!amount.amount < 10000) {
      return toast.error(`Minimum top up balance is ${formatRp(10000)}`);
    }
    dispatch(topUp(amount))
      .then((res) => {
        toast.success(res.value.data.msg);

        setAmount(initialState);
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

  const nextSteps = (data) => {
    setData({
      ...data,
      idTransaction: data.idTransaction,
      receiverId: data.receiverId,
      firstName: data.firstName,
      lastName: data.lastName,
      image: data.image,
      noTelp: data.noTelp,
      amount: data.amount,
      notes: data.notes,
      balanceLeft: data.balanceLeft,
      date: data.date,
    });

    if (steps === 1) {
      if (!data.amount) {
        return toast.error("Please fill your amount");
      } else if (!data.notes) {
        return toast.error("Please make a notes to transfer");
      } else if (stringPattern(data.notes)) {
        return toast.error("Notes can't be white space");
      } else if (data.amount < 1000) {
        return toast.error(`Minimum ${formatRp(1000)} to transfer`);
      } else if (data.amount > userById.balance) {
        return toast.error("Not enought amount");
      }
    }

    setSteps(steps + 1);
  };

  const handleTransfer = () => {
    setLoading(true);

    const allPin =
      pin.pin1 + pin.pin2 + pin.pin3 + pin.pin4 + pin.pin5 + pin.pin6;

    axios
      .get(`/user/pin?pin=${allPin}`)
      .then(() => {
        const dataTransfer = {
          receiverId: data.receiverId,
          amount: data.amount,
          notes: data.notes,
        };

        axios
          .post("/transaction/transfer", dataTransfer)
          .then((res) => {
            toast.success(res.data.msg);

            setData({ ...data, idTransaction: res.data.data.id });

            // if (
            //   res.statusText === "OK" &&
            //   res.status >= 200 &&
            //   res.status < 300
            // ) {
            //   setError({
            //     ...error,
            //     message: toast.success(res.data.msg),
            //     isError: false,
            //   });
            // } else if (res.status) {
            //   setError({
            //     ...error,
            //     message: toast.error("Server cannot be reached"),
            //     isError: true,
            //   });
            // }

            stepsCloseModal();
          })
          .catch((err) => {
            err.response.status === 500 &&
              toast.error("Server cannot be reached");
          });
      })
      .catch((err) => {
        err.response.data.msg && toast.error(err.response.data.msg);
        setPin({
          ...pin,
          pin1: "",
          pin2: "",
          pin3: "",
          pin4: "",
          pin5: "",
          pin6: "",
        });
      })
      .finally(() => {
        setLoading(false);
        setPin({
          ...pin,
          pin1: "",
          pin2: "",
          pin3: "",
          pin4: "",
          pin5: "",
          pin6: "",
        });
      });
  };

  return (
    <Layout pageTitle="Transfer">
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
              {steps === 0 && receiver.data.length > 0 ? (
                <SearchReceiver
                  onClick={(item) => nextSteps(item)}
                  data={receiver.data}
                />
              ) : null}

              {steps === 1 ? (
                <Amount
                  handlePrev={() => setSteps(steps - 1)}
                  handleNext={(item) => nextSteps(item)}
                  onChange={handleChange}
                  amount={data.amount}
                  notes={data.notes}
                  data={data}
                  classAmount={
                    data.amount === null
                      ? "current"
                      : data.amount < 1000
                      ? "active"
                      : "current"
                  }
                  underValue={
                    data.amount === null
                      ? false
                      : data.amount < 1000
                      ? true
                      : false
                  }
                />
              ) : null}

              {steps === 2 ? (
                <>
                  <Confirmation
                    handlePrev={() => setSteps(steps - 1)}
                    showModal={openModal}
                    data={data}
                  />

                  <Modal
                    showModal={showModal}
                    setShowModal={setShowModal}
                    submit={handleTransfer}
                    onChange={(event) => addPin(event)}
                    isTransfer={true}
                    isLoading={loading}
                    pin1={pin.pin1}
                    pin2={pin.pin2}
                    pin3={pin.pin3}
                    pin4={pin.pin4}
                    pin5={pin.pin5}
                    pin6={pin.pin6}
                  />
                </>
              ) : null}

              {steps === 3 ? (
                error.isError === true ? (
                  <Status data={data} isSuccess={false} />
                ) : (
                  <Status data={data} isSuccess={true} />
                )
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
