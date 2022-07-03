import DataTable from "./DataTable";


// TODO: refactor this to pick a visualization in a more programmatical way
const Visualization = ({currentVisual, data}) => {
  if (currentVisual=='table') {
    return (
    <div>
        <DataTable data={data}/>
      </div>)
  }
}

export default Visualization