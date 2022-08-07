import { Modal } from "antd";
import React from "react";
import PropTypes from "prop-types";

const BookingConfirmModal = ({ visible, onOk, onCancel }) => {
  return (
    <Modal
      title="Book a product"
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      okText="Yes"
      cancelText="No"
    >
      <p className="text-center">Your estimated price is $####</p>
      <p className="text-center">Do you want to procedure?</p>
    </Modal>
  );
};

BookingConfirmModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onOk: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default BookingConfirmModal;
