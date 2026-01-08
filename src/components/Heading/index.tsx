import styles from "./style.module.css";

type HeadingProps = {
  children: React.ReactNode;
};

export default function Heading(props: HeadingProps) {
  const { children } = props;
  return (
    <div>
      <h1 className={styles.heading}>{children}</h1>
    </div>
  );
}
