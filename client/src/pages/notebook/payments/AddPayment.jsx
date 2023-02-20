import axios from "axios";
import { Card } from "components";
import { useContext, useState } from "react";

import styles from "./payments.module.css";
import { PaymentContext } from "../../../contexts/PaymentContext";

export const AddPayment = () => {
  const { getPayments } = useContext( PaymentContext );
  const [newPayment, setNewPayment] = useState( {
    week: 0,
    paid: false,
    date: "",
    late: false,
  } );

  const handleSubmit = event => {
    event.preventDefault();
    axios( {
      url: "/api/payments",
      method: "POST",
      data: newPayment,
    } )
      .then( response => {
        getPayments();
        setNewPayment( { week: 0, paid: false, date: "", late: false } );
      } )
      .catch( error => {
        console.log( "Error: " + error );
      } );
  };

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setNewPayment( newPayment => ( { ...newPayment, [name]: value } ) );
  };

  return (
    <Card className={ styles.form }>
      <form className="ui form" onSubmit={ handleSubmit }>
        <div className="four fields">
          <div className="field">
            <label htmlFor="week">Week</label>
            <input
              name="week"
              type="number"
              min="1"
              max="52"
              placeholder="Week #"
              onChange={ handleChange }
              value={ newPayment.week }
            />
          </div>
          <div className="field">
            <label htmlFor="paid">Paid?</label>
            <select
              name="paid"
              className="ui fluid dropdown"
              onChange={ handleChange }
              value={ newPayment.paid }
            >
              <option value=""></option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="date">Date</label>
            <input
              name="date"
              type="text"
              placeholder="Date Paid"
              onChange={ handleChange }
              value={ newPayment.date }
            />
          </div>
          <div className="field">
            <label htmlFor="late">Paid Late?</label>
            <select
              name="late"
              className="ui fluid dropdown"
              onChange={ handleChange }
              value={ newPayment.late }
            >
              <option value=""></option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
        </div>
        <div className="centered">
          <button className="circular ui icon button">
            <i className="plus icon"></i>
          </button>
        </div>
      </form>
    </Card>
  );
};
