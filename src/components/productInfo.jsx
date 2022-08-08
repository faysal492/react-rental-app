import React from "react";
import PropTypes from "prop-types";

const ProductInfo = ({ product }) => {
  return (
    <table className="table table-borderless border w-75">
      <tbody>
        <tr>
          <th scope="row">Name</th>
          <td className="text-right">{product?.name}</td>
        </tr>
        <tr>
          <th scope="row">M. Rental Period</th>
          <td className="text-right">{product?.minimum_rent_period}</td>
        </tr>
        <tr>
          <th scope="row">Mileage</th>
          <td className="text-right">{product.mileage ? "True" : "N/A"}</td>
        </tr>
        <tr>
          <th scope="row">Repair Needed</th>
          <td className="text-right">
            {product.needing_repair ? "True" : "N/A"}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

ProductInfo.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductInfo;
