/* eslint-disable react/prop-types */
import styles from "./options.module.css";

export default function Options(props) {
  const { selection, setSelection } = props;

  const questions = ["character", "movie", "book"];

  console.log("Selection value:", selection);

  return (
    <div className="button-container">
      {questions.map((question, index) => {
        return (
          <button
            onClick={setSelection(question)}
            className={styles.button}
            key={index}
          >
            {question.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
