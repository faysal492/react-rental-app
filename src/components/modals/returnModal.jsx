import { Modal, Select, Input } from "antd";
import React from "react";
import PropTypes from "prop-types";
import { getRentalServices } from "../../services/rentalService";

const { Option } = Select;

const ReturnModal = ({
  visible,
  onOk,
  onCancel,
  title,
  okText,
  cancelText,
}) => {
  const rentalService = getRentalServices();

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value) => {
    console.log("search:", value);
  };
  return (
    <Modal
      title={title}
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      okText={okText}
      cancelText={cancelText}
    >
      <Select
        showSearch
        placeholder="Select a product"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        className="mb-3"
      >
        {rentalService.map((item) => (
          <Option key={item.code} value={item.code}>
            {item.name}
          </Option>
        ))}
      </Select>
      <Input
        placeholder="Used mileage"
        onChange={() => console.log("basic uses test")}
      />
    </Modal>
  );
};

ReturnModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onOk: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  title: PropTypes.string,
  okText: PropTypes.string,
  cancelText: PropTypes.string,
};

ReturnModal.defaultProps = {
  title: "Return a product",
  okText: "Yes",
  cancelText: "No",
};

export default ReturnModal;
