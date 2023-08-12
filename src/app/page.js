import Image from "next/image";
import styles from "./page.module.css";
import Box1 from "./components/box1";
import Box2 from "./components/box2";
import Box3 from "./components/box3";

export default function Home() {
  return <main className={styles.main}>
    {/* <Box1></Box1> */}
    {/* <Box2></Box2> */}
    <Box3></Box3>
  </main>;
}
