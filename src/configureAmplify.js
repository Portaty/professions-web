
import { Amplify, Hub } from "aws-amplify";
import config from "./aws-exports";

Amplify.configure({
    ...config,
    API: {
        endpoints: [
            {
                name: "api-portaty",
                endpoint: "https://z5i64n32d6.execute-api.us-east-1.amazonaws.com/prod",
            },
        ],
    }, ssr: true
});