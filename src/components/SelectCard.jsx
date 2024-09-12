import React, { useState } from "react";
import { cards } from "@/constants/cards";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import TableUser from "./TableUser";
import TableBusiness from "./TableBusiness";

const SelectCard = () => {
  const [card, setCard] = useState("");

  const handleChange = (e) => {
    setCard(e.target.value);
  };
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel
          id="demo-simple-select-label"
          style={{
            fontFamily: "Montserrat",
          }}
        >
          Seleccionar
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={card}
          defaultValue=""
          label="Seleccionar"
          onChange={(e) => handleChange(e)}
          sx={{
            fontFamily: "Montserrat",
            fontWeight: 500,
          }}
        >
          {cards.map((item, index) => (
            <MenuItem
              value={item.title}
              key={index}
              style={{
                fontWeight: 500,
                fontFamily: "Montserrat",
                padding: 10,
              }}
            >
              {item.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {card === "Usuarios registrados" && <TableUser />}
      {card === "Negocios registrados" && <TableBusiness />}
    </div>
  );
};

export default SelectCard;
