import { Modal } from "antd";
import React from "react";
import PropTypes from "prop-types";

const BookingConfirmModal = ({
  visible,
  onOk,
  onCancel,
  title,
  okText,
  cancelText,
  bookingPrice,
}) => {
  return (
    <Modal
      title={title}
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      okText={okText}
      cancelText={cancelText}
    >
      <p className="text-center">Your estimated price is ${bookingPrice}</p>
      <p className="text-center">Do you want to procedure?</p>
    </Modal>
  );
};

BookingConfirmModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onOk: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  title: PropTypes.string,
  okText: PropTypes.string,
  cancelText: PropTypes.string,
  bookingPrice: PropTypes.number.isRequired,
};

BookingConfirmModal.defaultProps = {
  title: "Book a product",
  okText: "Yes",
  cancelText: "No",
};

export default BookingConfirmModal;
