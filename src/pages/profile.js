import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Layout from "components/Layout";
import Modal from "components/Modal";
import AddPhone from "components/parts/Home/Profile/AddPhone";
import ChangePassword from "components/parts/Home/Profile/ChangePassword";
import ChangePin from "components/parts/Home/Profile/ChangePin";
import ManagePhone from "components/parts/Home/Profile/ManagePhone";
import PersonalInformation from "components/parts/Home/Profile/PersonalInformation";
import Profile from "components/parts/Home/Profile";
import Sidebar from "components/Sidebar";
import { topUp } from "stores/topup/actions";
import { toast } from "react-toastify";
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

export default function ProfilePage(props) {
  const [showProfile, setShowProfile] = useState(true);
  const [showPersonal, setShowPersonal] = useState(false);
  const [showChangePass, setShowChangePass] = useState(false);
  const [showChangePin, setShowChangePin] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [showManage, setShowManage] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { userById } = useSelector((state) => state.user);
  const topup = useSelector((state) => state.topup);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(initialState);

  const openModal = () => setShowModal(!showModal);
  const closeModal = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAmount({ ...amount, [name]: value });
  };

  const handleTopUp = () => {
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

  const handleShow = (e) => {
    if (e.target.innerText === "Personal Information") {
      setShowPersonal(true);
      setShowProfile(false);
    } else if (e.target.innerText === "Change Password") {
      setShowChangePass(true);
      setShowProfile(false);
    } else if (e.target.innerText === "Change PIN") {
      setShowChangePin(true);
      setShowProfile(false);
    } else if (e.target.innerText === "Add Phone Number") {
      setShowPhone(true);
      setShowProfile(false);
    }
  };

  const handleShowManage = () => {
    if (!userById.noTelp) {
      return toast.error("You haven't added phone number");
    } else {
      setShowProfile(false);
      setShowPersonal(false);
      setShowManage(true);
    }
  };

  const handleHidden = () => {
    setShowProfile(true);
    setShowPersonal(false);
    setShowChangePass(false);
    setShowChangePin(false);
    setShowPhone(false);
  };

  const handleHiddenManage = () => {
    setShowManage(false);
    setShowPersonal(true);
  };

  return (
    <Layout pageTitle="Profile">
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
              {showProfile ? (
                <Profile
                  personalClicked={handleShow}
                  changePassClicked={handleShow}
                  changePinClicked={handleShow}
                  phoneClicked={handleShow}
                />
              ) : null}

              {showPersonal ? (
                <PersonalInformation
                  manageClicked={handleShowManage}
                  handlePrev={handleHidden}
                />
              ) : null}

              {showManage ? (
                <ManagePhone handlePrev={handleHiddenManage} />
              ) : null}

              {showChangePass ? (
                <ChangePassword handlePrev={handleHidden} />
              ) : null}

              {showChangePin ? <ChangePin handlePrev={handleHidden} /> : null}

              {showPhone ? <AddPhone handlePrev={handleHidden} /> : null}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
