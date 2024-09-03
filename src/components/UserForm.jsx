import React from "react";
import { MenuItem, Container } from "@mui/material";
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
  let { bodyBg } = useSelector((state) => state.iconBg);
  const isDarkMode = bodyBg === "#111111";

  const formikInitialValues = {
    username: "",
    useremail: "",
    userrole: "",
    comments: "",
  };

  const formikOnsubmit = async (values, { resetForm }) => {
    const { username, useremail, userrole } = values;

    try {
      if (!username || !useremail || !userrole) {
        toast.error("Please fill required fields.", {
          className:
            "bg-toast-error text-toast-text rounded-toast p-toast shadow-toast",
        });
        return;
      }

      const { data } = await axios.get(
        "https://my-portfolio-backend-liart.vercel.app/users"
      );
      const emailExists = data.some((user) => user.useremail === useremail);

      if (emailExists) {
        toast.error("Email already exists!!!", {
          className:
            "bg-toast-error text-toast-text rounded-toast p-toast shadow-toast",
        });
        return;
      }

      await axios.post(
        "https://my-portfolio-backend-liart.vercel.app/users",
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const emailResult = await emailjs.sendForm(
        "@DPShetty811",
        "@DPShetty811",
        "#portfolioForm",
        "oXrmZhom4uak5Kfp1"
      );
      toast.success("Form submitted successfully!", {
        className:
          "bg-toast-success text-toast-text rounded-toast p-toast shadow-toast",
      });
      resetForm();
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
    const { username, useremail, userrole } = values;
    if (!username) errors.username = "Username is required";
    if (!useremail) {
      errors.useremail = "Email is required";
    } else if (!emailRegex.test(useremail)) {
      errors.useremail = "Invalid email format";
    }
    if (!userrole) errors.userrole = "Role is required";
    return errors;
  };

  const formik = useFormik({
    initialValues: formikInitialValues,
    onSubmit: formikOnsubmit,
    validate: formikValidate,
  });

  const { handleBlur, handleChange, handleSubmit, touched, errors, values } =
    formik;
  const { username, useremail, userrole, comments } = values;

  return (
    <Container>
      <form
        onSubmit={handleSubmit}
        id="portfolioForm"
        className="flex flex-col items-center"
        noValidate
      >
        <div className="flex flex-col justify-center items-center w-full">
          <div className="w-full flex flex-col items-center">
            <TextFieldComponent
              label="Name"
              name="username"
              value={username}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              error={touched.username && errors.username}
              touched={touched.username}
              height="1.2rem"
              fontSize="0.875rem"
              required={true}
            />
          </div>

          <div className="w-full flex flex-col items-center">
            <TextFieldComponent
              label="Email"
              name="useremail"
              value={useremail}
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              error={touched.useremail && errors.useremail}
              touched={touched.useremail}
              height="1.2rem"
              fontSize="0.875rem"
              required={true}
            />
          </div>
        </div>

        <TextFieldComponent
          select
          label="Who you are"
          name="userrole"
          value={userrole}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.userrole && errors.userrole}
          touched={touched.userrole}
          height="1.2rem"
          fontSize="0.875rem"
          selectFontSize="0.875rem"
          required={true}
        >
          <MenuItem value="interviewer">INTERVIEWER</MenuItem>
          <MenuItem value="visiter">VISITER</MenuItem>
          <MenuItem value="contributor">OPEN-SOURCE CONTRIBUTOR</MenuItem>
        </TextFieldComponent>

        <TextFieldComponent
          label="Comments"
          name="comments"
          value={comments || ""}
          onChange={handleChange}
          multiline
          rows={4}
          required={false}
        />

        <p
          className={`text-sm ${
            isDarkMode ? "text-about-value-light" : "text-about-value-dark"
          }`}
        >
          Fields marked with (<span className="text-red-600">*</span>), are
          required fields.
        </p>

        <PortfolioButton
          text="SUBMIT THE FORM"
          icon={TelegramIcon}
          className={`border-2 border-solid border-pfp-yellow w-2/3 text-center h-12 rounded-1.7rem flex items-center justify-between mb-7 bg-transparent hover:bg-bgpfp-yellow hover:transition-all hover:duration-bg-transition mt-3 ${
            isDarkMode ? "text-about-value-light" : "text-about-value-dark"
          }`}
          iconClassName={`${isDarkMode ? "text-white" : "text-white"}`}
          type={"submit"}
        />
      </form>
      <Toaster
        toastOptions={{
          duration: 5000,
        }}
      />
    </Container>
  );
};

export default UserForm;
