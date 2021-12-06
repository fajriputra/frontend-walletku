import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ArrowRightSVG, PencilSVG } from "components/SVG";
import Button from "components/Button";
import Figure from "components/Figure";
import axios from "helpers/axios";
import { getUserById } from "stores/user/actions";
import { toast } from "react-toastify";

export default function Profile(props) {
  const dispatch = useDispatch();
  const target = useRef(null);

  const { userById } = useSelector((state) => state.user);
  // const [data, setData] = useState({
  //   image: null,
  // });
  const [image, setImage] = useState({ image: null });

  // useEffect(() => {
  //   dispatch(getUserById(userById.id)).then((res) => {
  //     setData({
  //       ...data,
  //       image: res.value.data.data.image,
  //     });
  //   });
  // }, []);

  const handleImage = () => {
    if (!image.image) {
    } else {
      const formData = new FormData();

      for (const data in image) {
        formData.append(data, image[data]);
      }

      axios
        .patch(`/user/image/${userById.id}`, formData)
        .then((res) => {
          toast.success(res.data.msg);

          dispatch(getUserById(userById.id));
        })
        .catch(
          (err) => err.response.data.msg && toast.error(err.response.data.msg)
        );
    }
  };

  useEffect(() => {
    handleImage();
  }, [image]);

  return (
    <div className="profile__card">
      <div className="profile__card--content">
        <div className="profile__card--content--head">
          <div className="wrapper__image">
            <Figure
              srcImage={
                userById.image
                  ? `${process.env.API_HOST}/uploads/${userById.image}`
                  : "/images/default.png"
              }
              altImage="Profile Image"
              className="profile__card--content--head--image mx-auto"
              imageClass="img-cover border-inherit"
            />

            <input
              type="file"
              name="image"
              ref={target}
              style={{ display: "none" }}
              onChange={(e) => setImage({ image: e.target.files[0] })}
            />
          </div>

          <Button
            className="btn btn__edit p-0"
            onClick={() => target.current.click()}
          >
            <PencilSVG
              width="13"
              height="13"
              className="me-2"
              stroke="#7A7886"
            />
            Edit
          </Button>

          <h5>{`${userById.firstName} ${userById.lastName}`}</h5>
          <p>{userById.noTelp ? `+62${userById.noTelp}` : ""}</p>
        </div>

        <div className="profile__card--content--body">
          <div
            className="profile__card--content--body--inner"
            onClick={props.personalClicked}
          >
            <h6>Personal Information</h6>
            <ArrowRightSVG
              width="28"
              height="28"
              className="icon__arr--right"
              stroke="#7E7D84"
            />
          </div>
          <div
            className="profile__card--content--body--inner"
            onClick={props.changePassClicked}
          >
            <h6>Change Password</h6>
            <ArrowRightSVG
              width="28"
              height="28"
              className="icon__arr--right"
              stroke="#7E7D84"
            />
          </div>
          <div
            className="profile__card--content--body--inner"
            onClick={props.changePinClicked}
          >
            <h6>Change PIN</h6>
            <ArrowRightSVG
              width="28"
              height="28"
              className="icon__arr--right"
              stroke="#7E7D84"
            />
          </div>
          <div
            className="profile__card--content--body--inner"
            onClick={props.phoneClicked}
          >
            <h6>Add Phone Number</h6>
            <ArrowRightSVG
              width="28"
              height="28"
              className="icon__arr--right"
              stroke="#7E7D84"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
