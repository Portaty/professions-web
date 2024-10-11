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
import { Button, Stack, Box, Typography } from "@mui/material";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridPagination,
} from "@mui/x-data-grid";
import { esES } from "@mui/x-data-grid/locales";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import { cards } from "@/constants/cards";
import Link from "next/link";
import MultipleSelect from "./MultipleSelect";
import GetAppIcon from "@mui/icons-material/GetApp";
import MultipleSelectDate from "./MultipleSelectDate";

const TableBusiness = () => {
  const [data, setData] = useState([]);
  const [dataExcel, setDataExcel] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalTable, setTotalTable] = useState(0);
  const [table, setTable] = useState([]);
  const [pagination, setPagination] = useState(0);
  const [tableExcel, setTableExcel] = useState([]);
  const [selectCountry, setSelectCountry] = useState(`Todos`);
  const [selectRange, setSelectRange] = useState(`12M`);
  const [selectedInfo, setSelectedInfo] = useState(1);
  const [page, setPage] = useState(0);
  const pageSize = 10;
  const [loading, setLoading] = useState(false);

  const formattedRows = (datos) => {
    setLoading(true);

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
    let array = [...table, ...nuevosDatos];
    array.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    console.log(array);
    setTable(array);
    setLoading(false);
  };

  const fetchDocument = async (businessId, identityId) => {
    const path = "/api/documentQR";
    const params = {
      headers: {},
      queryStringParameters: {
        businessid: businessId,
        identityid: identityId,
      },
    };
    const url = `${path}?businessid=${params.queryStringParameters.businessid}&identityid=${params.queryStringParameters.identityid}`;
    const response = await fetch(url, {
      method: "GET",
    });
    const documentQR = await response.json();
    console.log(documentQR);

    const pdfUrl = documentQR.url;

    const pdfResponse = await fetch(pdfUrl);
    const blob = await pdfResponse.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "documentQR.pdf";
    link.click();

    // URL.revokeObjectURL(link.href);
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
    {
      field: "document",
      headerName: "QR",
      width: 150,
      editable: false,
      renderCell: (params) => {
        return (
          <div>
            <a
              onClick={() =>
                fetchDocument(params.row.id, params.row.identityID)
              }
              style={{
                color: "blue",
                cursor: "pointer",
              }}
            >
              Descargar QR
            </a>
          </div>
        );
      },
    },
  ];

  const fetchData = async () => {
    setLoading(true);
    /* Grafico */
    const path = "/api/totalBusinessGraphics";
    const params = {
      headers: {},
      queryStringParameters: {
        country: selectCountry === "Todos" ? "" : selectCountry,
        range: selectRange,
      },
    };
    const url = `${path}?country=${params.queryStringParameters.country}&range=${params.queryStringParameters.range}`;
    const response = await fetch(url, {
      method: "GET",
    });
    const dataGraphics = await response.json();

    /* Tabla */

    const pathTable = "/api/totalBusinessTable";
    const paramsTable = {
      headers: {},
      queryStringParameters: {
        country: selectCountry === "Todos" ? "" : selectCountry,
        range: selectRange,
        fromTo: pagination,
        limit: 10,
      },
    };

    const urlTable = `${pathTable}?country=${paramsTable.queryStringParameters.country}&range=${paramsTable.queryStringParameters.range}&fromTo=${paramsTable.queryStringParameters.fromTo}&limit=${paramsTable.queryStringParameters.limit}`;

    const responseTable = await fetch(urlTable, {
      method: "GET",
    });
    const dataTable = await responseTable.json();

    setData(dataGraphics?.data);
    formattedRows(dataTable?.items);
    setTotalTable(dataTable.total);
    setTotal(dataGraphics?.total);
    setPagination(pagination + 10);
    setLoading(false);
  };

  const fetchDataExcel = async () => {
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

      setDataExcel(meses);
      const datosOrdenados = list.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setTableExcel(datosOrdenados);
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

  /* Paginacion */
  const handleNextPage = () => {
    fetchData();
    setPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(totalTable / pageSize) - 1)
    );
    console.log(page);
  };

  const reset = () => {
    setPagination(0);
    setTable([]);
  };

  useEffect(() => {
    fetchData();
  }, [selectCountry, selectRange]);

  useEffect(() => {
    fetchDataExcel();
  }, []);

  return (
    <div
      style={{
        marginTop: 40,
        paddingBottom: 30,
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
          reset={() => reset()}
        />
        <MultipleSelectDate
          select={selectRange}
          setSelect={(e) => setSelectRange(e)}
          reset={() => reset()}
        />
      </Stack>
      <div>
        <p>
          {selectCountry == "Todos"
            ? `Total de negocios registrados : ${total}`
            : `Total de negocios registrados en ${
                selectCountry == "VEN" ? "Venezuela" : "Colombia"
              }: ${total}`}
        </p>
      </div>
      {selectedInfo === 1 ? (
        <LineChart width={1000} height={400} data={data}>
          <CartesianGrid strokeDasharray="1" />
          <XAxis dataKey="date" fontSize={12} fontWeight={600} />
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
        <Box sx={{ height: 500, width: 1000 }}>
          <DataGrid
            rows={table}
            columns={columns}
            hideFooterPagination={true}
            paginationMode="server"
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                  page: page,
                },
              },
            }}
            density="compact"
            sx={{
              fontFamily: "Montserrat",
            }}
            loading={loading}
            showColumnVerticalBorder
            slots={{
              toolbar: () => (
                <CustomToolbar
                  handleExport={() => handleExport(tableExcel, columns)}
                />
              ),
            }}
            localeText={esES.components.MuiDataGrid.defaultProps.localeText}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: 5,
            }}
          >
            <Typography variant="body2">
              {1}-{table.length} de {totalTable} negocios
            </Typography>
            <Button
              variant="contained"
              onClick={handleNextPage}
              disabled={loading || (page + 1) * pageSize >= totalTable}
              sx={{
                marginBottom: 3,
              }}
            >
              Cargar mas negocios
            </Button>
          </Box>
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
