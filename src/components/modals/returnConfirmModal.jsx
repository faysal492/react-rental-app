import { Modal } from "antd";
import React from "react";
import PropTypes from "prop-types";

const ReturnConfirmModal = ({ visible, onOk, title, okText }) => {
  return (
    <Modal
      title={title}
      visible={visible}
      onOk={onOk}
      okText={okText}
      cancelButtonProps={{
        style: {
          display: "none",
        },
      }}
    >
      <p className="text-center">Your total price is $####</p>
      <p className="text-center">Do you want to procedure?</p>
    </Modal>
  );
};

ReturnConfirmModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onOk: PropTypes.func.isRequired,
  title: PropTypes.string,
  okText: PropTypes.string,
};

ReturnConfirmModal.defaultProps = {
  title: "Return a product",
  okText: "Confirm",
};

export default ReturnConfirmModal;
