export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Método no permitido" });
  }
  const { businessid, identityid } = req.query;

  try {
    const response = await fetch(
      `https://z5i64n32d6.execute-api.us-east-1.amazonaws.com/prod/documentqr?businessid=${businessid}&identityid=${identityid}`,
      {
        method: "GET",
      }
    );

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error al enviar la solicitud", error });
  }
}
