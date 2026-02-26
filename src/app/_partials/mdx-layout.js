import Image from "next/image";
import styles from "../page.module.css";

export default function MdxLayout({ children }) {
  // Create any shared layout or styles here
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <main className="container">{children}</main>
      </div>
    </div>
  )
}