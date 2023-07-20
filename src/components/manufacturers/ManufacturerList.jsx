import React, { Component } from "react";
import { Button, Image, Space, Table, Tag } from "antd";
import Column from "antd/es/table/Column";
import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

class ManufacturerList extends Component {
  render() {
    const { dataSource, onEdit, onDeleteConfirm } = this.props;
    return (
      <Table dataSource={dataSource} size="small" rowKey="id">
        <Column
          title="Logo"
          key="logo"
          dataIndex="logo"
          width={90}
          align="center"
          render={(_, record) => (
            <Space size={"middle"}>
              <Image width="100%" src={record.log}></Image>
            </Space>
          )}
        ></Column>
        <Column
          title="ID"
          key="id"
          dataIndex="id"
          width={40}
          align="center"
        ></Column>
        <Column title="Name" key="name" dataIndex="name"></Column>
        <Column
          title="Action"
          key="action"
          width={150}
          align="center"
          render={(_, record) => (
            <Space size="middle">
              <Button
                key={record.key}
                type="primary"
                size="small"
                onClick={() => onEdit(record)}
              >
                <EditOutlined style={{ marginRight: 8 }}></EditOutlined>Edit
              </Button>
              <Button
                key={record.key}
                type="primary"
                danger
                size="small"
                onClick={() => onDeleteConfirm(record)}
              >
                <DeleteOutlined style={{ marginRight: 8 }}></DeleteOutlined>{" "}
                Delete
              </Button>
            </Space>
          )}
        ></Column>
      </Table>
    );
  }
}

export default ManufacturerList;
