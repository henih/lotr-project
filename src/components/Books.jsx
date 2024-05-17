import styles from "./books.module.css";

export default function Books(props) {
  const { data } = props;
  console.log("Books component received props:", props); // Log received props

  if (!data || data.length === 0) return <div>No data available</div>; // Handle empty data

  return (
    <div className={styles.booksDashboard}>
      {data.map((book, index) => (
        <div key={index}>
          <h2>{book}</h2>
        </div>
      ))}
    </div>
  );
}
