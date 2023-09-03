import { Button, Table } from "antd";
import { apiGet as PropertiesGet } from "../Property/api";
import { useEffect, useState } from "react";

export default function () {
  const [editData, setEditData] = useState();
  const [rdData, setRdData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [addDataDefault, setaAddDataDefault] = useState({});
  useEffect(() => {
    PropertiesGet().then(e => {
      const ps = e.data.data.map(p => {
        return {
          title: <div style={{ textAlign: 'center' }}>{p.name}</div>,
          dataIndex: p.name,
          render: (data) => <div style={{ textAlign: 'center' }}>{data}</div>
        }
      });

      setColumns([...ps, {
        title: <div style={{ textAlign: 'center' }}>編輯</div>,
        dataIndex: 'operation',
        align: 'center',
        render: (_, record) => (
          <>
            <Button
              onClick={() => setEditData(record)}
              size="large"
            >
              編輯
            </Button>
          </>
        )
      }])

      const dataDefalut = {}
      e.data.data.forEach(d => {
        dataDefalut[d.name] = d.type;
      })
      setaAddDataDefault(dataDefalut)
    });
  }, [])

  const addData = () => {
    setRdData([...rdData,addDataDefault])
  }
  return <>
    <Button type="primary" onClick={addData}>Add data</Button>
    <Table
      rowClassName={() => 'editable-row'}
      bordered
      dataSource={rdData}
      columns={columns}
      className="custom-table"
    />
  </>
}