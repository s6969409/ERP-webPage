import { Button, Table } from "antd";

export default function UI() {

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
            onClick={() => console.log(record)}
            size="large"
          >
            編輯
          </Button>
        </>
      )
    },
  ];
  //#endregion
  const rdData = [{name:'n1',type:'url'}];

  return <>
    <Table
      rowClassName={() => 'editable-row'}
      bordered
      dataSource={rdData}
      columns={columns}
      className="custom-table"
    />
  </>
}