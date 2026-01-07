import styles from "./index.module.css";

export default function Heading(props) {
  console.log(props);
  return (
    <div>
      <h1 className={styles.heading}>{props.text}</h1>
      {props.children}
      <br />
      <br />
    </div>
  );
}
