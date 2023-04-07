import '@/styles/globals.css'
import {Poppins} from "next/font/google"
const poppins = Poppins({subsets: ["devanagari"], weight : ["100","200", "300","400", "500","600", "700"]})
import Navbar from "@/Components/Navbar";
import {Provider} from "react-redux";
import store from "@/store/app";
import {Toaster} from "react-hot-toast";


export default function App({ Component, pageProps }) {
  return <Provider store={store}>
    <main className={poppins.className}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </main>
  </Provider>
}
