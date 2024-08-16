import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { useSelector } from "react-redux";

export const TextFieldComponent = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  select = false,
  multiline = false,
  rows,
  children,
}) => {
  const [textfieldBorderColor, setTextfieldBorderColor] = useState("#ffb400");
  const [labelColor, setLabelColor] = useState("#666666");
  const [iconColor, setIconColor] = useState("#ffb400");
  const [menuItemBg, setMenuItemBg] = useState("red");
  const [menuItemColor, setMenuItemColor] = useState("#000000");
  let { bodyBg } = useSelector((state) => state.iconBg);

  useEffect(() => {
    if (bodyBg === "#111111") {
      setTextfieldBorderColor("#ffb400");
      setLabelColor("white");
      setIconColor("#ffb400");
      setMenuItemBg("#ffb400");
    } else if (bodyBg === "#ffffff") {
      setLabelColor("#666666");
      setIconColor("#ffb400");
      setMenuItemBg("#ffffff");
    }
  }, [bodyBg]);

  return (
    <TextField
      fullWidth
      label={label}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      select={select}
      multiline={multiline}
      rows={rows}
      autoComplete="off"
      margin="normal"
      sx={{
        "& .MuiOutlinedInput-root": {
          backgroundColor: bodyBg,
          "& fieldset": {
            borderColor: textfieldBorderColor,
            borderRadius: "1.8rem",
            paddingLeft: "1.2rem",
          },
          "&:hover fieldset": {
            borderColor: textfieldBorderColor,
          },
          "&.Mui-focused fieldset": {
            borderColor: textfieldBorderColor,
          },
          "& input": {
            color: labelColor,
            backgroundColor: bodyBg,
            paddingLeft: "1.2rem",
          },
          "& .MuiSelect-select": {
            color: labelColor,
            paddingLeft: "1.2rem",
          },
          "& .MuiInputBase-inputMultiline": {
            color: labelColor,
            paddingLeft: "1.2rem",
          },
          "& input:-webkit-autofill": {
            boxShadow: `0 0 0 1000px ${bodyBg} inset`,
            WebkitTextFillColor: labelColor,
          },
        },
        "& .MuiInputLabel-root": {
          color: labelColor,
          paddingLeft: "1.2rem",
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: labelColor,
        },
        "& .MuiSelect-icon": {
          color: iconColor,
        },
        "& .MuiPaper-root": {
          backgroundColor: menuItemBg,
        },
        "& .MuiMenuItem-root": {
          color: menuItemColor,
        },
      }}
    >
      {children}
    </TextField>
  );
};
