import React, { useEffect, useState } from "react";
import * as queries from "@/graphql/custom/queries";
import { Auth, API } from "aws-amplify";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Button, Stack, Box } from "@mui/material";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import { esES } from "@mui/x-data-grid/locales";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import { cards } from "@/constants/cards";
import Link from "next/link";
import MultipleSelect from "./MultipleSelect";
import GetAppIcon from "@mui/icons-material/GetApp";

const TableBusiness = () => {
  const [data, setData] = useState([]);
  const [table, setTable] = useState([]);
  const [selectCountry, setSelectCountry] = useState(`Todos`);
  const [selectedInfo, setSelectedInfo] = useState(1);

  const formattedRows = (datos) => {
    let nuevosDatos = [];
    datos.map((item) => {
      const fechaActual = new Date(item.createdAt);
      const opciones = {
        year: "numeric",
        month: "short",
        day: "numeric",
        timeZone: "America/Caracas",
      };
      const fechaFormateada = fechaActual.toLocaleDateString("es-VE", opciones);
      let act = JSON.parse(item.activity);
      return nuevosDatos.push({
        ...item,
        activity: act.sub,
        area: act.main,
        date: fechaFormateada,
      });
    });
    setTable(nuevosDatos);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    {
      field: "name",
      headerName: "Nombre",
      width: 150,
      editable: true,
    },
    {
      field: "email",
      headerName: "Correo",
      width: 300,
      editable: true,
    },
    {
      field: "phone",
      headerName: "Telefono",
      width: 150,
      editable: true,
    },
    {
      field: "address",
      headerName: "Ubicacion",
      width: 200,
      editable: true,
    },
    {
      field: "area",
      headerName: "Area",
      width: 200,
      editable: true,
    },
    {
      field: "activity",
      headerName: "Actividad",
      width: 200,
      editable: true,
    },
    {
      field: "favorites",
      headerName: "N de Favoritos",
      width: 200,
      editable: true,
    },
    {
      field: "views",
      headerName: "N de Visitas",
      width: 200,
      editable: true,
    },
    {
      field: "date",
      headerName: "Fecha de registro",
      width: 200,
      editable: true,
    },
    {
      field: "thumbnail",
      headerName: "Foto",
      width: 150,
      editable: true,
      renderCell: (params) => {
        return (
          <div>
            <Link href={params.row.thumbnail} target="_blank">
              Ver foto
            </Link>
          </div>
        );
      },
    },
  ];
  const fetchData = async () => {
    try {
      const fetchAll = async (from = 0, result = []) => {
        let fetchPage = from;
        const path = "/api/totalFilterbyCountry";
        const params = {
          headers: {},
          queryStringParameters: {
            country: selectCountry === "Todos" ? "" : selectCountry,
            fromTo: fetchPage,
            limit: 50,
          },
        };

        const url = `${path}?country=${params.queryStringParameters.country}&fromTo=${params.queryStringParameters.fromTo}&limit=${params.queryStringParameters.limit}`;

        const response = await fetch(url, {
          method: "GET",
          headers: params.headers,
        });

        const data = await response.json();

        const items = data.items;
        result.push(...items);
        if (result.length < data.total) {
          let number = fetchPage + 50;
          return fetchAll(number, result);
        }

        return result;
      };

      const list = await fetchAll();
      let meses = [
        {
          mes: "enero",
          valor: 1,
          registros: 0,
        },
        {
          mes: "febrero",
          valor: 2,
          registros: 0,
        },
        {
          mes: "marzo",
          valor: 3,
          registros: 0,
        },
        {
          mes: "abril",
          valor: 4,
          registros: 0,
        },
        {
          mes: "mayo",
          valor: 5,
          registros: 0,
        },
        {
          mes: "junio",
          valor: 6,
          registros: 0,
        },
        {
          mes: "julio",
          valor: 7,
          registros: 0,
        },
        {
          mes: "agosto",
          valor: 8,
          registros: 0,
        },
        {
          mes: "septiembre",
          valor: 9,
          registros: 0,
        },
        {
          mes: "octubre",
          valor: 10,
          registros: 0,
        },
        {
          mes: "noviembre",
          valor: 11,
          registros: 0,
        },
        {
          mes: "diciembre",
          valor: 12,
          registros: 0,
        },
      ];
      list.forEach((objeto) => {
        const fechaActual = new Date(objeto.createdAt);
        const opciones = {
          month: "numeric",
          timeZone: "America/Caracas",
        };
        const mes = fechaActual.toLocaleDateString("es-VE", opciones);
        const mesEnArray = meses.find((m) => m.valor === Number(mes));
        if (mesEnArray) {
          mesEnArray.registros += 1;
        }
      });

      setData(meses);
      const datosOrdenados = list.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      console.log(datosOrdenados);
      setTable(datosOrdenados);
      formattedRows(datosOrdenados);
    } catch (error) {
      console.error(error);
    }
  };

  /* Exportar  */

  const handleExport = async (rows, columns) => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Sheet 1");

    worksheet.addRow(columns.map((col) => col.headerName));

    rows.forEach((row) => {
      worksheet.addRow(columns.map((col) => row[col.field]));
    });

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, "lista_de_negocios_registrados.xlsx");
  };

  useEffect(() => {
    fetchData();
  }, [selectCountry]);

  return (
    <div
      style={{
        paddingTop: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        spacing={2}
        direction="row"
        sx={{
          marginBottom: 5,
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          sx={{
            fontSize: 12,
            padding: 2,
            backgroundColor: selectedInfo === 1 ? "#1f1f1f" : "#ffb703",
            "&:hover": {
              backgroundColor: "#1f1f1f",
            },
            fontFamily: "Montserrat",
          }}
          onClick={() => setSelectedInfo(1)}
        >
          Grafico
        </Button>
        <Button
          variant="contained"
          sx={{
            fontSize: 12,
            padding: 2,
            backgroundColor: selectedInfo === 2 ? "#1f1f1f" : "#ffb703",
            "&:hover": {
              backgroundColor: "#1f1f1f",
            },
          }}
          onClick={() => setSelectedInfo(2)}
        >
          Tabla
        </Button>
        <MultipleSelect
          select={selectCountry}
          setSelect={(e) => setSelectCountry(e)}
        />
      </Stack>
      <div>
        <p>
          {selectCountry == "Todos"
            ? `Total de negocios registrados : ${table.length}`
            : `Total de negocios registrados en ${
                selectCountry == "VEN" ? "Venezuela" : "Colombia"
              }: ${table.length}`}
        </p>
      </div>
      {selectedInfo === 1 ? (
        <LineChart width={850} height={350} data={data}>
          <CartesianGrid strokeDasharray="1" />
          <XAxis dataKey="mes" fontSize={12} fontWeight={600} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="registros"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      ) : (
        <Box sx={{ height: 380, width: 950 }}>
          <DataGrid
            rows={table}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[10]}
            density="compact"
            sx={{
              fontFamily: "Montserrat",
            }}
            showColumnVerticalBorder
            slots={{
              toolbar: () => (
                <CustomToolbar
                  handleExport={() => handleExport(table, columns)}
                />
              ),
            }}
            localeText={esES.components.MuiDataGrid.defaultProps.localeText}
          />
        </Box>
      )}
    </div>
  );
};

export default TableBusiness;

const CustomToolbar = ({ handleExport }) => (
  <GridToolbarContainer>
    <GridToolbarColumnsButton />
    <GridToolbarFilterButton />
    <GridToolbarDensitySelector />
    {/* <GridToolbarExport /> */}
    <Button
      variant="text"
      color="primary"
      startIcon={<GetAppIcon />}
      onClick={handleExport}
      style={{ marginLeft: "-5px", fontSize: 13 }}
    >
      EXPORTAR
    </Button>
  </GridToolbarContainer>
);
