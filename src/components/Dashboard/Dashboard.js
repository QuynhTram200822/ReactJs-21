import React, { useRef, useState, useEffect } from "react";
import "./Dashboard.css";

import { PlusOutlined } from "@ant-design/icons";
import {
  Table,
  Tabs,
  Alert,
  Switch,
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Rate,
  Select,
  Slider,
  TreeSelect,
  Upload,
} from "antd";

function Dashboard() {
  const dataSource = [
    {
      key: "1",
      name: "Tram",
      age: 22,
      address: "10 Downing Street",
    },
    {
      key: "1",
      name: "Tram",
      age: 22,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  const [componentDisabled, setComponentDisabled] = useState(true);
  const { RangePicker } = DatePicker;
  const { TextArea } = Input;
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const [visible, setVisible] = useState(true);
  const handleClose = () => {
    setVisible(false);
  };
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Tab 1",
      children: (
        <>
          {visible && (
            <Alert
              message="Alert Message Text"
              type="success"
              closable
              afterClose={handleClose}
            />
          )}
          <p>click the close button to see the effect</p>
          <Switch onChange={setVisible} checked={visible} disabled={visible} />
        </>
      ),
    },
    {
      key: "2",
      label: "Tab 2",
      children: (
        <>
          <Checkbox
            checked={componentDisabled}
            onChange={(e) => setComponentDisabled(e.target.checked)}
          >
            Form disabled
          </Checkbox>
          <Form
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout="horizontal"
            disabled={componentDisabled}
            style={{
              maxWidth: 600,
            }}
          >
            <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
              <Checkbox>Checkbox</Checkbox>
            </Form.Item>
            <Form.Item label="Radio">
              <Radio.Group>
                <Radio value="apple"> Apple </Radio>
                <Radio value="pear"> Pear </Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Input">
              <Input />
            </Form.Item>
            <Form.Item label="Select">
              <Select>
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="TreeSelect">
              <TreeSelect
                treeData={[
                  {
                    title: "Light",
                    value: "light",
                    children: [
                      {
                        title: "Bamboo",
                        value: "bamboo",
                      },
                    ],
                  },
                ]}
              />
            </Form.Item>
            <Form.Item label="Cascader">
              <Cascader
                options={[
                  {
                    value: "zhejiang",
                    label: "Zhejiang",
                    children: [
                      {
                        value: "hangzhou",
                        label: "Hangzhou",
                      },
                    ],
                  },
                ]}
              />
            </Form.Item>
            <Form.Item label="DatePicker">
              <DatePicker />
            </Form.Item>
            <Form.Item label="RangePicker">
              <RangePicker />
            </Form.Item>
            <Form.Item label="InputNumber">
              <InputNumber />
            </Form.Item>
            <Form.Item label="TextArea">
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item label="Switch" valuePropName="checked">
              <Switch />
            </Form.Item>
            <Form.Item
              label="Upload"
              valuePropName="fileList"
              getValueFromEvent={normFile}
            >
              <Upload action="/upload.do" listType="picture-card">
                <button
                  style={{
                    border: 0,
                    background: "none",
                  }}
                  type="button"
                >
                  <PlusOutlined />
                  <div
                    style={{
                      marginTop: 8,
                    }}
                  >
                    Upload
                  </div>
                </button>
              </Upload>
            </Form.Item>
            <Form.Item label="Button">
              <Button>Button</Button>
            </Form.Item>
            <Form.Item label="Slider">
              <Slider />
            </Form.Item>
            <Form.Item label="ColorPicker">
              <ColorPicker />
            </Form.Item>
            <Form.Item label="Rate">
              <Rate />
            </Form.Item>
          </Form>
        </>
      ),
    },
    {
      key: "3",
      label: "Tab 3",
      children: <Table dataSource={dataSource} columns={columns} />,
    },
  ];
  return (
    <div className="App ">
      <div className="grid">
        <div className="col-6 col-offset-3  ">
          <div className=" flex justify-content-center mb-4  ">
            <h2>Ant Design</h2>
          </div>
          {/* Demo Tabs */}
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
