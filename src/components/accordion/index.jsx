import { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(id) {
    setSelected(id === selected ? null : id);
  }

  function handleMultiSelection(id) {
    //copy from the state
    let copyMultiple = [...multiple];
    //check if id is present in array
    const findIndexOfCurrentId = copyMultiple.indexOf(id);
    if (findIndexOfCurrentId === -1) copyMultiple.push(id); //add to arrray
    else copyMultiple.splice(findIndexOfCurrentId, 1); //remove from array
    setMultiple(copyMultiple);
  }

  return (
    <div className="wrapper">
      {/* this toggles the button */}
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable multi-selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="items">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : (currentId) => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
