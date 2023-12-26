import { useEffect, useState } from "react";
import { getInvoice, calculateTotal } from "./services/getInvoice";
import ClientView from "./components/ClientView";
import CompanyView from "./components/CompanyView";
import InvoiceView from "./components/InvoiceView";
import ListItemsView from "./components/ListItemsView";
import TotalView from "./components/TotalView";
import FormItemsView from "./components/FormItemsView";

const invoiceInitial = {
  id: 0,
  name: "",
  client: {
    name: "",
    lastName: "",
    address: {
      country: "",
      city: "",
      street: "",
      number: 0,
    },
  },
  company: {
    name: "",
    fiscalNumber: 12345,
  },
  items: [],
};

const InvoiceApp = () => {

  const [ activeForm, setAtiveForm] = useState(false);

  const [total, setTotal] = useState(0);
  const [counter, setCounter] = useState(4);

  const [invoice, setInvoice] = useState(invoiceInitial);

  const [items, setItems] = useState([]);

  const { id, name, client, company } = invoice;

  useEffect(() => {
    const data = getInvoice();
    console.log(data);
    setInvoice(data);
    setItems(data.items);
  }, []);

  useEffect(() => {
    //console.log("El counter cambio!");
  }, [counter]);

  
  useEffect(() => {
    setTotal(calculateTotal(items));
    //console.log("Los items cambiron!");
  }, [items]);

  const handerAddItems = ({product, price, quantity}) => {
    setItems([
      ...items,
      {
        id: counter,
        product: product.trim(),
        price: price.trim(),
        quantity: quantity.trim(),
      },
    ]);
    setCounter(counter + 1);
  };

  const onActiveForm = () =>{
    setActiveForm(!activeForm);
  };

  return (
    <>
      <div className="container my-3">
        <div className="card my-3">
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
            <button className="btn btn-secondary" onClick={onActiveForm}>{ !activeForm? 'Agregar Item' : 'Cerrar Form' }</button>
            { !activeForm || <FormItemsView handler={handerAddItems}/>}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceApp;
