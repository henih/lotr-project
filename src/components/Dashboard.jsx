import { useState } from "react";
import styles from "./dashboard.module.css";
import Options from "./Options";
import useFetchData from "../hooks/useFetchData";
import Characters from "./Characters";
import Movies from "./Movies";
import Books from "./Books";
import Loader from "./Loader";

export default function Dashboard() {
  const [selection, setSelection] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const { data, loading, error } = useFetchData(selection);

  function onClickHandler(clickedButton) {
    return () => {
      console.log("Button clicked:", clickedButton);
      setSelection(clickedButton);
    };
  }
  const dataRender = {
    character: <Characters data={data?.docs?.map((doc) => doc.name) || []} />, // Pass array of names
    book: <Books data={data?.docs?.map((doc) => doc.name) || []} />, // Pass array of names
    movie: <Movies data={data?.docs?.map((doc) => doc.name) || []} />, // Pass array of names
  };

  console.log("Current selection:", selection); // Log current selection
  console.log("Fetched data in Dashboard:", data); // Log fetched data

  return (
    <div className={styles.dashboard}>
      <div className={styles.layout}>
        <h1>Lord Of The Rings Info</h1>
        <Options selection={selection} setSelection={onClickHandler} />
        {loading && <Loader />}
        {error && <div>Error: {error}</div>}
        {selection && !loading && data && dataRender[selection]}{" "}
        {/* Ensure all conditions are met */}
      </div>
    </div>
  );
}
