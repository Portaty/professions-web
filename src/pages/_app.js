import Layout from '../app/layout.js';
import '../../public/styles/globals.css'
import '../../public/styles/font.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout> 
  );
}

export default MyApp;