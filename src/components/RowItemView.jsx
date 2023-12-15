import React from "react";

const RowItemView = ({product, price, quantity}) => {
  return (
    <>
      <tr>
        <td>{product}</td>
        <td>{price}</td>
        <td>{quantity}</td>
      </tr>
    </>
  );
};

export default RowItemView;
