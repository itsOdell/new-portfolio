import '../styles/globals.css'
import "../styles/animations.css"
import Layout from "../components/Layout"
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import {AnimatePresence} from "framer-motion"
import Transition from "../common/Transition";
config.autoAddCss = false;

function MyApp({ Component, pageProps }: any) {
  return (
    <AnimatePresence>
      <Transition transition={1}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Transition>    
    </AnimatePresence>
  )
}

export default MyApp
