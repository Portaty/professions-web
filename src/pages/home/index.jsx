import React, { useState, useEffect } from "react";
import { API, withSSRContext } from "aws-amplify";
import Navbar from "../../components/Navbar";

export async function getServerSideProps({ query, req }) {
  const SSR = withSSRContext({ req });

  const api = "api-portaty";
  const path = "/admin/getUsers";
  const params = {
    headers: {}, // OPTIONAL
    response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
    queryStringParameters: {
      limit: 10,
      nextToken: null,
    },
  };

  try {
    const response = await SSR.API.get(api, path, params);
    console.log("response: ", response.data.data);
    return {
      props: {
        data: response.data.data,
      },
    };
  } catch (error) {
    console.error(error.response.data);
    return {
      props: {
        data: null,
      },
    };
  }
}

const Home = ({ data }) => {
  // const fecthGetUsers = async () => {
  //   try {
  //     const api = "api-portaty";
  //     const path = "/admin/getUsers";
  //     const params = {
  //       headers: {}, // OPTIONAL
  //       response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
  //       queryStringParameters: {
  //         limit: 10,
  //       },
  //     };

  //     const response = await API.get(api, path, params);
  //     console.log("RESPUESTA: ", response);
  //   } catch (error) {
  //     console.error("ERROR A BUSCAR USUARIOS: ", error.response);
  //   }
  // };
  console.log(data);
  useEffect(() => {
    // fecthGetUsers();
  }, []);

  return (
    <div style={{}}>
      <Navbar />
    </div>
  );
};

export default Home;
