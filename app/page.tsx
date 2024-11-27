//import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Main></Main>

      <Footer propds={1} >
       
      </Footer>
    </div>
  );
}
function Main() {
  return (<main className={styles.main}></main>);
}

type TFooterProps = {
  children?: React.ReactNode;
  propds: number;
};
function Footer(props: TFooterProps) {
  console.log(props)
  return (
    <footer className={styles.footer}>
      
        {props.children}
        {props.propds}
      
    </footer>
  );
}
