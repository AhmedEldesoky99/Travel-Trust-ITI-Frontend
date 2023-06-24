import { Table } from "antd";
import "./style.css";

const DataGrid = ({ data, columns, loading }) => {
  return (
    <>
      <div className="mt-10 ">
        <Table
          className="custom-table"
          rowSelection={{}}
          columns={columns}
          dataSource={data}
          loading={loading}
          size="middle"
          scroll={{
            x: "calc(700px + 50%)",
            // y: 240,
          }}
        />
      </div>
    </>
  );
};

export default DataGrid;
