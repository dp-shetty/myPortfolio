import React, { useEffect, useRef } from "react";
import { MenuItem, Button, Container } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import "../SCSS/UserForm.scss";
import { useSelector } from "react-redux";
import { TextFieldComponent } from "./Common/TextFieldComponent";
import { useFormik } from "formik";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import PortfolioButton from "./Common/Portfolio Button/PortfolioButton";
import emailjs from "emailjs-com";

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
      await axios.post(
        "https://my-portfolio-backend-liart.vercel.app/users",
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("Form submitted successfully!", {
        className:
          "bg-toast-success text-toast-text rounded-toast p-toast shadow-toast",
      });
      emailjs.sendForm(
        "@DPShetty811", // Replace with your EmailJS service ID
        "@DPShetty811", // Replace with your EmailJS template ID
        "#portfolioForm", // Form ID (use form ID selector)
        "oXrmZhom4uak5Kfp1" // Replace with your EmailJS user ID
      )
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit the form.", {
        className:
          "bg-toast-error text-toast-text rounded-toast p-toast shadow-toast",
      });
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
      <form onSubmit={handleSubmit} id="portfolioForm" className="userForm flex flex-col justify-center">
        <div className="name-email-textfield mob:w-full flex flex-col justify-center items-center">
          <div className="w-full flex flex-col items-center">
            <TextFieldComponent
              label="Name"
              name="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              error={touched.username && errors.username}
              touched={touched.username}
              height="1.2rem"
              fontSize="0.875rem"
            />
            {touched.username && errors.username && (
              <div className="nameError text-red-600 text-sm">
                {errors.username}
              </div>
            )}
          </div>

          <div className="w-full flex flex-col items-center">
            <TextFieldComponent
              label="Email"
              name="useremail"
              value={values.useremail}
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              error={touched.useremail && errors.useremail}
              touched={touched.useremail}
              height="1.2rem"
              fontSize="0.875rem"
            />
            {touched.useremail && errors.useremail && (
              <div className="emailError text-red-600 text-sm">
                {errors.useremail}
              </div>
            )}
          </div>
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
          height="1.2rem"
          fontSize="0.875rem"
          selectFontSize="0.875rem"
        >
          <MenuItem value="interviewer">INTERVIEWER</MenuItem>
          <MenuItem value="visiter">VISITER</MenuItem>
          <MenuItem value="contributor">OPEN-SOURCE CONTRIBUTOR</MenuItem>
        </TextFieldComponent>
        {touched.userrole && errors.userrole && (
          <div className="flex justify-center items-center text-red-600 text-sm">
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

        <PortfolioButton
          text="SEND THE MESSAGE"
          type="submit"
          icon={TelegramIcon}
          pRef={sendMsgRef}
          className='submit-btn w-1/3 m-auto h-12 flex justify-between items-center px-3 bg-transparent outline-none rounded-full border border-solid border-defaultYellow mt-3'
          iconClassName={`rounded-full ${bodyBg === "#111111" ? "text-white" : "text-gray-600"}`}
        />
      </form>
      <Toaster />
    </Container>
  );
};

export default UserForm;
