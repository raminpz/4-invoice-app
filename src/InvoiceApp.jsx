import { useState } from "react";
import { getInvoice } from "./services/getInvoice";
import ClientView from "./components/ClientView";
import CompanyView from "./components/CompanyView";
import InvoiceView from "./components/InvoiceView";
import ListItemsView from "./components/ListItemsView";
import TotalView from "./components/TotalView";

const InvoiceApp = () => {
  const {
    total,
    id,
    name,
    client,
    company,
    items: itemsInitial,
  } = getInvoice();

  const [productValue, setProductValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [quantityValue, setQuantityValue] = useState("");

  const [items, setItems] = useState(itemsInitial);

  const [counter, setCounter] = useState(4);

  const onProductChange = ({ target }) => {
    console.log(target.value);
    setProductValue(target.value);
  };

  const onPriceChange = ({ target }) => {
    console.log(target.value);
    setPriceValue(target.value);
  };

  const onQuantityChange = ({ target }) => {
    console.log(target.value);
    setQuantityValue(target.value);
  };

  const onInvoiceItemsSubmit = (event) => {
    event.preventDefault();

    if (productValue.trim().length <= 1) return;
    if (priceValue.trim().length <= 1) {
      alert("Error el precio no es un numero");
      return;
    }
    if (isNaN(priceValue.trim())) return;
    if (quantityValue.trim().length < 1) {
      alert("Error la cantidad no es un numero");
      return;
    }
    if (isNaN(quantityValue.trim())) {
      alert("Error la cantidad no es un numero");
      return;
    }

    setItems([
      ...items,
      {
        id: counter,
        product: productValue.trim(),
        price: priceValue.trim(),
        quantity: quantityValue.trim(),
      },
    ]);
    setProductValue("");
    setPriceValue("");
    setQuantityValue("");
    setCounter(counter + 1);
  };

  return (
    <>
      <div className="container my-3">
        <div className="card">
          <div className="card-header">Ejemplo Factura - Proyecto Final</div>
          <div className="card-body">
            <InvoiceView id={id} name={name} />

            <div className="row my-3">
              <div className="col">
                <ClientView title="Datos del Cliente" client={client} />
              </div>

              <div className="col">
                <CompanyView title="Datos de la empresa" company={company} />
              </div>
            </div>

            <ListItemsView title="Productos de la Factura" items={items} />
            <TotalView total={total} />

            <form className="w-50" onSubmit={onInvoiceItemsSubmit}>
              <input
                type="text"
                name="product"
                value={productValue}
                placeholder="Producto"
                className="form-control m-3"
                onChange={onProductChange}
              />
              <input
                type="number"
                name="preci"
                value={priceValue}
                placeholder="Precio"
                className="form-control m-3"
                onChange={(event) => onPriceChange(event)}
              />
              <input
                type="number"
                value={quantityValue}
                name="quantity"
                placeholder="Cantidad"
                className="form-control m-3"
                onChange={onQuantityChange}
              />

              <button type="submit" className="btn btn-primary m-3">
                Nuevo Item
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceApp;
