import React, { useEffect, useRef } from "react";
import { MenuItem, Button, Container } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import "../SCSS/UserForm.scss";
import { useSelector } from "react-redux";
import { TextFieldComponent } from "./Common/TextFieldComponent";
import { useFormik } from "formik";
import axios from "axios";

const UserForm = () => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const formikInitialValues = {
    username: "",
    useremail: "",
    userrole: "",
    comments: "",
  };

  const formikOnsubmit = async (values) => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      const users = response.data;

      const newId =
        users.length > 0
          ? (
              Math.max(...users.map((user) => parseInt(user.id, 10))) + 1
            ).toString()
          : "1";

      const newUser = { ...values, id: newId };

      await axios.post("http://localhost:3000/users", newUser);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const formikValidate = (values) => {
    const errors = {};
    if (!values.username) errors.username = "username is required";
    if (!values.useremail) {
      errors.useremail = "email is required";
    } else if (!emailRegex.test(values.useremail)) {
      errors.useremail = "invalid email format";
    }
    if (!values.userrole) errors.userrole = "role is required";
    return errors;
  };

  const formik = useFormik({
    initialValues: formikInitialValues,
    onSubmit: formikOnsubmit,
    validate: formikValidate,
  });

  const { handleBlur, handleChange, handleSubmit, touched, errors, values } =
    formik;

  const { bodyBg } = useSelector((state) => state.iconBg);
  const sendMsgRef = useRef();

  useEffect(() => {
    if (bodyBg === "#111111") {
      sendMsgRef.current.style.color = "white";
    } else if (bodyBg === "#ffffff") {
      sendMsgRef.current.style.color = "#666666";
    }
  }, [bodyBg]);

  return (
    <Container className="formContainer p-0">
      <form onSubmit={handleSubmit} className="userForm">
        <div className="name-email-textfield flex justify-center items-center gap-8">
          <TextFieldComponent
            label="Name"
            name="username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            error={touched.username && errors.username}
            touched={touched.username}
          />
          <TextFieldComponent
            label="Email"
            name="useremail"
            value={values.useremail}
            onChange={handleChange}
            onBlur={handleBlur}
            type="email"
            error={touched.useremail && errors.useremail}
            touched={touched.useremail}
          />
        </div>
        <div className="nameEmailErrors flex w-full justify-center">
          {touched.username && errors.username && (
            <div className="nameError w-1/2 flex justify-center items-center text-red-600">
              {errors.username}
            </div>
          )}
          {touched.useremail && errors.useremail && (
            <div className="emailError w-1/2 flex justify-center items-center text-red-600">
              {errors.useremail}
            </div>
          )}
        </div>
        <TextFieldComponent
          select
          label="Who you are"
          name="userrole"
          value={values.userrole}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.userrole && errors.userrole}
          touched={touched.userrole}
        >
          <MenuItem value="interviewer">INTERVIEWER</MenuItem>
          <MenuItem value="visiter">VISITER</MenuItem>
          <MenuItem value="contributor">OPEN-SOURCE CONTRIBUTOR</MenuItem>
        </TextFieldComponent>
        {touched.userrole && errors.userrole && (
          <div className="flex justify-center items-center text-red-600">
            {errors.userrole}
          </div>
        )}
        <TextFieldComponent
          label="Comments"
          name="comments"
          value={values.comments || ""}
          onChange={handleChange}
          multiline
          rows={4}
        />
        <div>
          <div className="submit-btn-div">
            <Button
              type="submit"
              className="submit-btn"
              disableRipple
              sx={{
                backgroundColor: "transparent",
                boxShadow: "none",
                border: "none",
                "&:hover": {
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  border: "none",
                },
                "&:focus": {
                  outline: "none",
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  border: "none",
                },
                "&:active": {
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  border: "none",
                },
              }}
            >
              <p ref={sendMsgRef}>SEND THE MESSAGE</p>
              <TelegramIcon className="tele-icon" />
            </Button>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default UserForm;
