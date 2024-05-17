import { useState } from "react";
import styles from "./characters.module.css";

export default function Characters(props) {
  const { data } = props;
  const [char, setChar] = useState("");

  // Filter the list based on the input value
  const mappedList = data.filter((element) => {
    if (char === "") {
      return false; // Don't show any list if the input is empty
    }
    return element.toLowerCase().includes(char.toLowerCase()); // Case-insensitive match
  });

  console.log("Characters component received props:", props); // Log received props

  return (
    <div className={styles.characterDashboard}>
      <input
        autoFocus
        className={styles.characterSelect}
        placeholder="e.g. Gandalf"
        value={char}
        onChange={(e) => setChar(e.target.value)} // Update state on input change
      />
      <div className={styles.listContainer}>
        {mappedList.length > 0 && // Only show the list if there are matches
          mappedList.map((char, index) => (
            <div key={index} className={styles.listItem}>
              <h2>{char}</h2>
            </div>
          ))}
      </div>
    </div>
  );
}
