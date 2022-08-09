import { Modal, Select, Input } from "antd";
import React, { useState } from "react";

import PropTypes from "prop-types";
import _ from "lodash";
import { getRentalServices } from "../../services/rentalService";
import ProductInfo from "../productInfo";

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
  const [product, setProduct] = useState(null);

  const handleChange = (value) => {
    let product = _.find(rentalService, { code: value });
    setProduct(product);
  };

  const handleMilage = (mileage) => {
    console.log(mileage, "mileage");
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
        showSearch={false}
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

      <Input
        placeholder="Used mileage"
        onChange={(e) => handleMilage(e.target.value)}
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
