import { Modal, Select, DatePicker, Space } from "antd";
import React from "react";
import PropTypes from "prop-types";
import { getRentalServices } from "../../services/rentalService";

const { Option } = Select;
const { RangePicker } = DatePicker;
import moment from "moment";
// eslint-disable-next-line arrow-body-style
const disabledDate = (current) => {
  // Can not select days before today and today
  return current && current < moment().endOf("day");
};

const BookingModal = ({
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
      <Space direction="horizontal">
        <RangePicker disabledDate={disabledDate} />
      </Space>
    </Modal>
  );
};

BookingModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onOk: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  title: PropTypes.string,
  okText: PropTypes.string,
  cancelText: PropTypes.string,
};

BookingModal.defaultProps = {
  title: "Book a product",
  okText: "Yes",
  cancelText: "No",
};

export default BookingModal;
