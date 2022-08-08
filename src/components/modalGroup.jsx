import React, { useState } from "react";
import { Button } from "antd";

import BookingModal from "./modals/bookingModal";
import ReturnModal from "./modals/returnModal";
import BookingConfirmModal from "./modals/bookingConfirmModal";
import ReturnConfirmModal from "./modals/returnConfirmModal";

const ModalGroup = () => {
  const [isBModalVisible, setIsBModalVisible] = useState(false);
  const [isBCModalVisible, setIsBCModalVisible] = useState(false);
  const [isRModalVisible, setIsRModalVisible] = useState(false);
  const [isRCModalVisible, setIsRCModalVisible] = useState(false);
  const [bookingPrice, setBookingPrice] = useState(0);

  const handleBooking = () => {
    setIsBModalVisible(true);
  };

  const handleBookingOk = () => {
    setIsBModalVisible(false);
    setIsBCModalVisible(true);
  };

  const handleBookingPrice = (price) => {
    setBookingPrice(price);
  };

  const handleBookingCancel = () => {
    setIsBModalVisible(false);
  };

  const handleBookingConfirmOk = () => {
    setIsBCModalVisible(false);
  };

  const handleBookingConfirmCancel = () => {
    setIsBCModalVisible(false);
  };

  const handleReturn = () => {
    setIsRModalVisible(true);
  };

  const handleReturnOk = () => {
    setIsRModalVisible(false);
    setIsRCModalVisible(true);
  };

  const handleReturnCancel = () => {
    setIsRModalVisible(false);
  };

  const handleReturnConfirmOk = () => {
    setIsRCModalVisible(false);
  };

  return (
    <React.Fragment>
      <div className="float-right mb-4">
        <Button className="mr-2" onClick={handleBooking} size="middle">
          Book
        </Button>
        <Button onClick={handleReturn} size="middle">
          Return
        </Button>
      </div>
      <BookingModal
        visible={isBModalVisible}
        onOk={handleBookingOk}
        onCancel={handleBookingCancel}
        onBookingPrice={(price) => handleBookingPrice(price)}
      />
      <BookingConfirmModal
        visible={isBCModalVisible}
        onOk={handleBookingConfirmOk}
        onCancel={handleBookingConfirmCancel}
        bookingPrice={bookingPrice}
      />
      <ReturnModal
        visible={isRModalVisible}
        onOk={handleReturnOk}
        onCancel={handleReturnCancel}
      />
      <ReturnConfirmModal
        visible={isRCModalVisible}
        onOk={handleReturnConfirmOk}
      />
    </React.Fragment>
  );
};

export default ModalGroup;
