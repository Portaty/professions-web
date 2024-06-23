import '../../public/styles/globals.css'
import '../../public/styles/font.css'
import '../configureAmplify'
import { useEffect } from 'react'
import { Hub, Auth } from "aws-amplify";

import { useRouter } from "next/navigation";


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
          router.push("/")
          break;
        default:
          break;
      }

    });
    checkUser()
    return unsubscribe;
  }, [])
  const checkUser = async () => {
    try {
      await Auth.currentAuthenticatedUser();
      router.push("/home")
    } catch (error) {
      router.push("/")
    }
  }
  return <Component {...pageProps} />;
}



export async function getServerSideProps({ req }) {
  console.log("BUENO AQUI TAMOS")

  return {
    props: {

    },
  };
}