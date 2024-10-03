import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const MultipleSelectDate = ({ select, setSelect, reset }) => {
  return (
    <div
      style={{
        width: 200,
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{`Filtrar por fecha`}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={select}
          label="Filtrar por fecha"
          onChange={(e) => {
            setSelect(e.target.value);
            reset();
          }}
        >
          <MenuItem value={`7D`}>Ultimos 7 dias</MenuItem>
          <MenuItem value={`30D`}>Ultimos 30 dias</MenuItem>
          <MenuItem value={`12M`}>Ultimos 12 meses</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default MultipleSelectDate;
