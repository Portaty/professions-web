import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const MultipleSelect = ({ select, setSelect }) => {
  return (
    <div
      style={{
        width: 200,
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{`Filtrar`}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={select}
          label="Filtro"
          onChange={(e) => setSelect(e.target.value)}
        >
          <MenuItem value={`Todos`}>Todos</MenuItem>
          <MenuItem value={`VEN`}>Venezuela</MenuItem>
          <MenuItem value={`COL`}>Colombia</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default MultipleSelect;
