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
  required,
  rows,
  children,
  onBlur,
  error,
  touched,
  height = "2rem",
  fontSize = "1em",
  selectFontSize = "1em",
  className,
}) => {
  const [textfieldBorderColor, setTextfieldBorderColor] = useState("#ffb400");
  const [labelColor, setLabelColor] = useState("#666666");
  const [iconColor, setIconColor] = useState("#ffb400");
  const [menuItemBg, setMenuItemBg] = useState("red");
  const [requiredColor, setRequiredColor] = useState("red");
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

  const borderColor = touched && error ? "red" : textfieldBorderColor;
  const labelErrorColor = touched && error ? "red" : labelColor;

  return (
    <TextField
      fullWidth
      label={label}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      select={select}
      onBlur={onBlur}
      multiline={multiline}
      rows={rows}
      autoComplete="off"
      margin="normal"
      className={className}
      required={required}
      sx={{
        "& .MuiOutlinedInput-root": {
          backgroundColor: bodyBg,
          "& fieldset": {
            borderColor: borderColor,
            borderRadius: "1.8rem",
            paddingLeft: "1.2rem",
          },
          "&:hover fieldset": {
            borderColor: borderColor,
          },
          "&.Mui-focused fieldset": {
            borderColor: borderColor,
          },
          "& input": {
            color: labelErrorColor,
            backgroundColor: bodyBg,
            paddingLeft: "1.2rem",
            height: height,
            fontSize: fontSize,
            lineHeight: height,
          },
          "& .MuiSelect-select": {
            color: labelErrorColor,
            paddingLeft: "1.2rem",
            height: height,
            fontSize: fontSize,
            lineHeight: height,
          },
          "& .MuiInputBase-inputMultiline": {
            color: labelErrorColor,
            paddingLeft: "1.2rem",
            height: height,
            fontSize: fontSize,
            lineHeight: height,
          },
          "& input:-webkit-autofill": {
            boxShadow: `0 0 0 1000px ${bodyBg} inset`,
            WebkitTextFillColor: labelErrorColor,
          },
        },
        "& .MuiInputLabel-root": {
          color: labelErrorColor,
          paddingLeft: "1.2rem",
          fontSize: fontSize,
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: labelErrorColor,
        },
        "& .MuiInputLabel-asterisk": {
          color: requiredColor, // Style the required asterisk
        },
        "& .MuiSelect-icon": {
          color: iconColor,
        },
        "& .MuiPaper-root": {
          backgroundColor: menuItemBg,
        },
        "& .MuiMenuItem-root": {
          color: menuItemColor,
          fontSize: selectFontSize,
        },
      }}
    >
      {children}
    </TextField>
  );
};
