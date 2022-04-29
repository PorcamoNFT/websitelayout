import styles from "../styles/Comments.module.css";
export default function Comments() {
  return (
    <section className={styles.card}>
      <h2> Comment</h2>
      <div className={styles.Comments}>
        <p> Write comments </p>
      </div>
    </section>
  );
}
