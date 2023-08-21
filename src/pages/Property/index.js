import { Button, Table } from "antd";
import { useEffect, useState } from "react";
import InfoUI from "./info";
import { apiGet } from "./api";

export default function () {
  const [editData, setEditData] = useState();
  const [rdData, setRdData] = useState([]);
  useEffect(() => {
    apiGet().then(e => {
      setRdData(e.data.data.map(d => { return { ...d, key: d._id } }))
    });
  }, [editData])

  //#region columns
  const columns = [
    {
      title: <div style={{ textAlign: 'center' }}>屬性名稱</div>,
      dataIndex: 'name',
      render: (data) => <div style={{ textAlign: 'center' }}>{data}</div>
    },
    {
      title: <div style={{ textAlign: 'center' }}>類型</div>,
      dataIndex: 'type',
      render: (data) => <div style={{ textAlign: 'center' }}>{data}</div>
    },
    {
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
    }
  ];
  //#endregion

  const addData = () => {
    setEditData({})
  }

  return <>
    {editData == undefined ?
      <>
        <Button type="primary" onClick={addData}>Add data</Button>
        <Table
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={rdData}
          columns={columns}
          className="custom-table"
        />
      </> :
      <InfoUI data={editData} closeCmd={() => setEditData(undefined)} />
    }
  </>
}