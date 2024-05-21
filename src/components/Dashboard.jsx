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
  const { data, loading, error } = useFetchData(selection);

  function onClickHandler(clickedButton) {
    return () => {
      // console.log("Button clicked:", clickedButton);
      setSelection(clickedButton);
    };
  }

  const dataRender = {
    character: <Characters data={data?.docs || []} />, // Pass the whole docs array
    book: <Books data={data?.docs || []} />,
    movie: <Movies data={data?.docs || []} />,
  };


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
