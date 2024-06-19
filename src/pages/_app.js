import '../../public/styles/globals.css'
import '../../public/styles/font.css'
import { useEffect } from 'react'
import { Amplify, Hub } from "aws-amplify";
import config from "../aws-exports.js";
import { useRouter } from "next/navigation";

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

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    // crear subscripcion
    const unsubscribe = Hub.listen("auth", ({ payload: { event, data } }) => {
      console.log("HUB: ", event)
      switch (event) {
        case "signIn":
          console.log("USER SIGNIN")
          router.push('/home')
          break;
        case "signIn_failure":
          break;
        case "signOut":
          console.log("USER SIGNOUT")
          break;
        default:
          break;
      }

    });

    return unsubscribe;
  }, [])
  return <Component {...pageProps} />;
}