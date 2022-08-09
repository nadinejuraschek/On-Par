// REACT
// import { useState } from 'react';

// NPM PACKAGES
// import axios from 'axios';

// STYLES
import styles from './payments.module.css';

const PaymentEntry = ({ paymentid, payment, deletePayment, getPayments }) => {
  // const [show, setShow] = useState(false);
  // const [updatedPayment, setUpdatedPayment] = useState({});

  /* const showEdit = () => {
    show === true ? setShow(false) : setShow(true);
  };

  const handleEdit = event => {
    event.preventDefault();
    // console.log('Updated payment to send to DB: ' + updatedPayment);
    axios
      .put('/api/payments/' + paymentid, updatedPayment)
      .then(res => {
        console.log('Updated payment in DB: ' + res.data);
        getPayments();
        show === true ? setShow(false) : setShow(true);
      })
      .catch(error => {
        console.log('Error: ' + error.response);
      });
  };

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setUpdatedPayment(updatedPayment => ({ ...updatedPayment, [name]: value }));
  }; */

  return (
    <>
      <div className={styles.listItem}>
        <div className={styles.itemWeek}>{payment.week}</div>
        <div
          className={`${styles.itemDate} ${
            payment.late ? styles.paidLate : ''
          }`}
        >
          {payment.date}
        </div>
        <div className={styles.itemDue}>
          {payment.late ? (
            <i className='icon light checkmark'></i>
          ) : (
            <i className='icon dark close'></i>
          )}
        </div>
        <div className={styles.actions}>
          {/* <button
            type='button'
            className='no-style-button'
            onClick={() => showEdit()}
          >
            <i className='edit outline icon'></i>
          </button> */}
          <button
            type='button'
            className='no-style-button'
            onClick={() => deletePayment(paymentid)}
          >
            <i class='trash alternate outline icon'></i>
          </button>
        </div>
      </div>


      {/* <tr className={show === true ? '' : 'hide'}>
        <td colSpan='4'>
          <form className='ui mini form' onSubmit={handleEdit}> */}
      {/* <div className='field'>
              <label>Paid?</label>
              <select
                name='paid'
                className='ui fluid dropdown'
                onChange={handleChange}
              >
                <option value=''>Choose One</option>
                <option value='true'>Yes</option>
                <option value='false'>No</option>
              </select>
            </div>
            <div className='field'>
              <label>Late?</label>
              <select
                name='late'
                className='ui fluid dropdown'
                onChange={handleChange}
              >
                <option value='' placeholder='Late?'>
                  Choose One
                </option>
                <option value='false'>No</option>
                <option value='true'>Yes</option>
              </select>
            </div>
            <div className='field'>
              <label>Date</label>
              <input
                type='text'
                name='date'
                placeholder={payment.date}
                onChange={handleChange}
              />
            </div>
            <div className='field centered'>
              <button className='ui button'>Edit</button>
            </div>
          </form> */}
    </>
  );
};

export default PaymentEntry;
