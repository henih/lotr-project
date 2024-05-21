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
    return element.name.toLowerCase().includes(char.toLowerCase()); // Case-insensitive match
  });

  // console.log("Characters component received props:", props); // Log received props

  return (
    <div className={styles.characterDashboard}>
      <label>
        {" "}
        Type in a character name
        <input
          autoFocus
          className={styles.characterSelect}
          type="text"
          placeholder="e.g. Gandalf"
          value={char}
          onChange={(e) => setChar(e.target.value)} // Update state on input change
        />
      </label>
      <div className={styles.mappedList}>
        {mappedList.length > 0 && // Only show the list if there are matches
          mappedList.map((character, index) => (
            <div key={index} className={styles.listItems}>
              <h2>{character.name}</h2>
              <p>
                <strong>Gender:</strong> {character.gender}
              </p>
              <p>
                <strong>Race:</strong> {character.race}
              </p>
              {character.height && (
                <p>
                  <strong>Height:</strong> {character.height}
                </p>
              )}{" "}
              {/* Conditionally render height */}
              <p>
                <strong> Wiki Link:</strong>{" "}
                <a href={character.wikiUrl} target="_blank">
                  {character.wikiUrl}
                </a>{" "}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
