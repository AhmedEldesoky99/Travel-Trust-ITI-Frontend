import Table from "../../components/History/Table";

const historyLog =[{date:'Wednesday, 24 May, 2023',logs:[{time:'12:30',title:'2 nights in cairo',isFavorite:false},{time:'12:30',title:'Alexandria is awesome',isFavorite:true},{time:'12:30',title:'Dahab is a must visit',isFavorite:false}]}];

const History = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-medium mb-11">Your history</h1>
        {/* component */}
        <div className="flex flex-col w-full justify-center items-center gap-9">
             {historyLog.map(log => (
            <Table key={log.date} date={log.date} rows={log.logs} />
          ))}
        </div>
      </div>
    </>
  );
};
export default History;
