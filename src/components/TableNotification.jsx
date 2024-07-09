import React, { useEffect, useState } from "react";
import * as queries from "@/graphql/custom/queries";
import { Auth, API } from "aws-amplify";
import { Button, Stack, Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { esES } from "@mui/material/locale";

const TableNotification = () => {
//   const [data, setData] = useState([]);
  const [table, setTable] = useState([]);

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    {
      field: "title",
      headerName: "Titulo",
      width: 150,
      editable: true,
    },
    {
      field: "message",
      headerName: "Mensaje",
      width: 150,
      editable: true,
    },
    {
      field: "date",
      headerName: "Fecha de registro",
      width: 200,
      editable: true,
      renderCell: (params) => {
        const fechaActual = new Date(params.row.createdAt);
        const opciones = {
          year: "numeric",
          month: "short",
          day: "numeric",
          timeZone: "America/Caracas",
        };
        const fechaFormateada = fechaActual.toLocaleDateString(
          "es-VE",
          opciones
        );
        return <div>{fechaFormateada}</div>;
      },
    },
  ];
  const fetchData = async () => {
    try {
      const fetchAll = async (nextToken, result = []) => {
        const response = await API.graphql({
          query: queries.listNotificationHistories,
          authMode: "AMAZON_COGNITO_USER_POOLS",
          variables: {
            nextToken,
          },
        });
        console.log(response);
        const items = response.data.listNotificationHistories.items;
        result.push(...items);

        if (response.data.listNotificationHistories.nextToken) {
          return fetchAll(
            response.data.listNotificationHistories.nextToken,
            result
          );
        }

        return result;
      };

      const list = await fetchAll();

      /* Orden por fecha */
      const datosOrdenados = list.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setTable(datosOrdenados);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      <Box sx={{ height: 380, width: 850 }}>
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
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
    </div>
  );
};

export default TableNotification;
