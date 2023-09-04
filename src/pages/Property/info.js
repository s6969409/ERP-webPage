import { Button, Col, Form, Input, Row, Select } from "antd"
import { apiAdd, apiRemove, apiUpdate } from "./api";
import { useState } from "react";

export const validateRequire = {
  validator: (sender, value) => {
    if (typeof (value) != 'boolean' && !value) return Promise.reject('此欄位必填!');
    return Promise.resolve();
  }, required: true
}
export const FormListAdapter = ({ params }) => {
  const { fields, operation, errors, getDatas, validator, label } = params
  const [isEdit, setIsEdit] = useState(false)
  const getValues = () => {
    const values = getDatas()?.join(',')
    return values == '' ? { value: '無資料', style: { border: '1px red solid' } } : { value: values }
  }
  return <>
    <Form.Item label={label} noStyle>
      <Row justify={isEdit ? 'end' : 'space-between'} align='middle' wrap={false}>
        <Col flex={!isEdit ? 'auto' : ''}>{isEdit ? <Button type="dashed" onClick={() => operation.add()}>新增項目</Button> : <Input disabled {...getValues()} />}</Col>
        <Col><Button type="dashed" onClick={() => setIsEdit(!isEdit)}>{isEdit ? '結束編輯' : '編輯'}</Button></Col>
      </Row>
    </Form.Item>
    {isEdit && fields.map((field, index) => (
      <Form.Item key={field.key} noStyle>
        <Row justify='space-between' wrap={false}>
          <Col flex='auto'>
            <Form.Item {...field} {...validator} style={{ marginBottom: 0 }}><Input /></Form.Item>
          </Col>
          <Col flex='none'>
            <Button type="dashed" onClick={() => operation.remove(field.name)}>移除</Button>
          </Col>
        </Row>
      </Form.Item>
    ))}
  </>
}

export default function ({ data, closeCmd }) {
  const isAdd = data._id == undefined
  const [form] = Form.useForm()
  const [showSelections, setShowSelections] = useState(data.type == "selection")

  const onFinish = async (values) => {
    const result = isAdd ? {} : { ...data }
    for (let key in values) {
      if (values[key] !== undefined) {
        result[key] = values[key];
      }
    }

    result.selections = getSelections()
    
    if (isAdd) {
      await apiAdd(result).then(e => closeCmd())
    } else {
      await apiUpdate(result).then(e => closeCmd())
    }

  }
  const deleteCmd = async () => {
    apiRemove(data.name).then(e => closeCmd())
  }
  const onTypeSelect = (value, option) => {
    setShowSelections(value == "selection")
  }
  const getSelections = () => form.getFieldValue('selections')?.filter(item => item != undefined && item != '')
  return <>
    <Form form={form} layout="horizontal" onFinish={onFinish}>
      <Form.Item label="屬性名稱" name="name" initialValue={data.name} rules={[validateRequire]} hasFeedback={true}>
        <Input />
      </Form.Item>
      <Form.Item label="類型" name="type">
        <Select defaultValue={data.type/* || 'string'*/} onSelect={onTypeSelect}>
          <Select.Option value="string">string</Select.Option>
          <Select.Option value="number">number</Select.Option>
          <Select.Option value="url">url</Select.Option>
          <Select.Option value="selection">selection</Select.Option>
        </Select>
      </Form.Item>
      {showSelections &&
        <Form.Item label="選擇項目">
          <Form.List name="selections" initialValue={data.selections ? data.selections : []}>
            {(fields, operation) => <FormListAdapter params={{ fields, operation, getDatas: getSelections, marginBottom: 0 }} />}
          </Form.List>
        </Form.Item>}

    </Form>
    <Row justify='end' gutter={10}>
      {!isAdd && <Col ><Button type="primary" onClick={deleteCmd} danger>Delete</Button></Col>}
      <Col ><Button type="primary" onClick={form.submit}>OK</Button></Col>
      <Col ><Button onClick={closeCmd}>Cancel</Button></Col>
    </Row>
  </>
}