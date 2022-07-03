const Form = ({ vizOptions, currentVisual, handleVisual }) => {
  const title = "Data Visualization";

  

  return (
    <div id="form">
      <h1 className="title">{title}</h1>

      <label>Choose a visualization: </label>

      <select name="pulldown" id="viz-pulldown" onChange={handleVisual}>
        {vizOptions.map((option) => {
          return (
            <option key={option.label} value={option.label}>
              {" "}
              {option.label}{" "}
            </option>
          );
        })}
      </select>

      <p>
        This page contains data visualizations produced using D3.js. The webpage
        application is developed using React, and is deployed using Glitch (for
        demonstration purposes).
      </p>
    </div>
  );
};

export default Form;
