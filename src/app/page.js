import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/Navbar";
import MainBody from "../components/MainBody";
import { loadESLint } from "eslint";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";

/** 
 * // build the lld
// Header
// -logo
// -Nav items
Body
-search
-restraunt container
-Restraunt Card
-img
name of res,star rating,cuisines,del time

footer
-copyright
-links
*/

export default function Home() {
  return (
    <div className="main-conatiner">
      <Navbar/>
      <MainBody />
    </div>
  );
}
