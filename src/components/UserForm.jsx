import React, { useEffect, useRef, useState } from "react";
import {
  TextField,
  MenuItem,
  Button,
  Container,
} from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import "../SCSS/UserForm.scss";
import { useSelector } from "react-redux";

const UserForm = () => {
  let { bodyBg } = useSelector((state) => state.iconBg);
  let sendMsgRef = useRef();

  useEffect(() => {
    if (bodyBg === "#111111") {
      sendMsgRef.current.style.color = "white";
    } else if (bodyBg === "#ffffff") {
      sendMsgRef.current.style.color = "#666666";
    }
  }, [bodyBg]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div className="name-email-textfield flex justify-center items-center gap-8">
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            fullWidth
            margin="normal"
          />
        </div>
        <TextField
          select
          label="who you are"
          name="role"
          value={formData.role}
          onChange={handleChange}
          fullWidth
          margin="normal"
        >
          <MenuItem value="interviewer">INTERVIEWER</MenuItem>
          <MenuItem value="visiter">VISITER</MenuItem>
          <MenuItem value="contributor">OPEN-SOURCE CONTRIBUTOR</MenuItem>
        </TextField>
        <TextField
          label="Comments"
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          multiline
          rows={4}
          fullWidth
          margin="normal"
        />
        <div>
          <div className="submit-btn-div">
            <Button
              type="submit"
              className="submit-btn"
              disableRipple
              sx={{
              backgroundColor: 'transparent',
              boxShadow: 'none',
              border: 'none',
              '&:hover': {
                backgroundColor: 'transparent',
                boxShadow: 'none',
                border: 'none',
              },
              '&:focus': {
                outline: 'none',
                backgroundColor: 'transparent',
                boxShadow: 'none',
                border: 'none', 
              },
              '&:active': {
                backgroundColor: 'transparent',
                boxShadow: 'none',
                border: 'none',
              },
            }}
            >
              <p ref={sendMsgRef}>SEND THE MESSAGE</p>
              <TelegramIcon />
            </Button>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default UserForm;
