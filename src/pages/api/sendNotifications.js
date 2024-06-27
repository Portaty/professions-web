// pages/api/send-notifications.js
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Método no permitido' });
    }

    const { title, message } = req.body;

    try {
        const response = await fetch('https://z5i64n32d6.execute-api.us-east-1.amazonaws.com/prod/dashboard/sendNotifications', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, message }),
        });

        const data = await response.json();
        res.status(response.status).json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error al enviar la solicitud', error });
    }
}
