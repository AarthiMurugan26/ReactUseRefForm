import React, { useRef, useState } from 'react';
import './App.css';

function App() {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const dobRef = useRef('');
  const addressRef = useRef('');
  const [formValue, setForm] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    const tableData = {
      name: nameRef.current.value,
      emailId: emailRef.current.value,
      dob: dobRef.current.value,
      address: addressRef.current.value
    }
    setForm([...formValue, tableData])
    nameRef.current.value = '';
    emailRef.current.value = '';
    dobRef.current.value = '';
    addressRef.current.value = '';
  }
  return (
    <div className="App-header">

      <h1>FORM USING USEREF </h1>
      <form onSubmit={onSubmit}>
        <input type="text" ref={nameRef} placeholder='ENTER YOUR NAME' /> <br />
        <input type="email" ref={emailRef} placeholder='ENTER EMAIL ID' /><br />
        <input type="date" ref={dobRef} placeholder='ENTER DOB' /><br />
        <input type="text" ref={addressRef} placeholder='ENTER ADDRESS' /><br />
        <button type='submit'>SUBMIT</button><br />
      </form>
      <hr />
      <h1>FORM DATAS IN TABLE</h1>
      <table >
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {formValue.map((data, index) => {
            return <tr key={index}>
              <td>{data.name}</td>
              <td>{data.emailId}</td>
              <td>{data.dob}</td>
              <td>{data.address}</td>

            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default App;
