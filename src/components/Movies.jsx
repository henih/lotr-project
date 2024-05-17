import styles from "./movies.module.css";

export default function Movies(props) {
  const { data } = props;
  console.log("Movies component received props:", props); // Log received props

  if (!data || data.length === 0) return <div>No data available</div>; // Handle empty data

  return (
    <div className={styles.movieDashboard}>
      {data.map((movie, index) => (
        <div key={index}>
          <h2>{movie}</h2>
        </div>
      ))}
    </div>
  );
}
