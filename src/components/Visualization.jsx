import DataTable from "./DataTable";


const Visualization = ({visual, data}) => {
  if (visual) {
    return (
    <div>
        <DataTable data={data}/>
      </div>)
  }
}

export default Visualization