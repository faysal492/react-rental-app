import { Modal, Select, DatePicker, Space } from "antd";
import React, { useState } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { getRentalServices } from "../../services/rentalService";
import { calBetweenDays } from "../../utils/dateFormatter";

const { Option } = Select;
const { RangePicker } = DatePicker;
import moment from "moment";
import ProductInfo from "../productInfo";
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
  onBookingPrice,
}) => {
  const rentalService = getRentalServices();
  const [product, setProduct] = useState(null);
  const [disableButton, setDisableButton] = useState(true);

  const handleChange = (value) => {
    let product = _.find(rentalService, { code: value });
    let disableStatus = product.minimum_rent_period === 1 ? false : true;
    setDisableButton(disableStatus);
    setProduct(product);
  };

  const handleRPickerChagne = (_dates, dateStrings) => {
    const { minimum_rent_period, price } = product;
    let days = calBetweenDays(dateStrings);
    if (minimum_rent_period > Number(days)) {
      setDisableButton(true);
      alert(`Please book at least ${minimum_rent_period} days`);
      return;
    } else {
      setDisableButton(false);
    }
    let total_price = Number(days) * price;
    onBookingPrice(total_price);
  };

  return (
    <Modal
      title={title}
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      okText={okText}
      cancelText={cancelText}
      okButtonProps={{
        disabled: disableButton,
      }}
    >
      <Select
        placeholder="Select a product"
        optionFilterProp="children"
        onChange={handleChange}
        className="mb-3"
      >
        {rentalService.map((item) => (
          <Option key={item.code} value={item.code}>
            {item.name}/{item.code}
          </Option>
        ))}
      </Select>
      {product && <ProductInfo product={product} />}
      <Space direction="horizontal">
        <RangePicker
          allowClear={false}
          disabled={product ? false : true}
          disabledDate={disabledDate}
          onChange={(dates, dateStrings) =>
            handleRPickerChagne(dates, dateStrings)
          }
        />
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
  onBookingPrice: PropTypes.func.isRequired,
};

BookingModal.defaultProps = {
  title: "Book a product",
  okText: "Yes",
  cancelText: "No",
};

export default BookingModal;
