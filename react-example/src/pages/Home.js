import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card'
import { Modal } from "react-bootstrap";


function Login(props) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const mobileno = useFormInput('');
  const passwd = useFormInput('');
  const [modalShow, setShow] = useState(false);
  
  async function handleLogin(){
    console.log("sdsd")
    let result =   await fetch('https://huber-usa.sarci.in:5002/auth/1/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ mobileno:"3333300051", passwd: "mypassword27" })
      // body: JSON.stringify({ mobileno:mobileno.value, passwd: passwd.value })
    });
    result = await result.json();
    if(result.result){
    }
    console.log(result)
  };

  function AlertDismissibleExample() {
    const [show, setShow] = useState(false);
    if (show) {
          return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
              <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
              <p>
                Change this and that and try again. Duis mollis, est non commodo
                luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                Cras mattis consectetur purus sit amet fermentum.
              </p>
            </Alert>
          );
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
  };
  
  return (
    <Card  bg= 'Primary' style={{ width: '18rem', height:'300px' }}>
      <Card.Text>
        <div >Login<br /><br />
          <div>mobile no<br />
            <input type="text"  {...mobileno} autoComplete="new-password"/></div>
          <div style={{ marginTop: 10 }}>Password<br />
            <input type="password"  {...passwd}  autoComplete="new-password"  /></div>
          {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
          <Button variant="primary"  onClick={handleLogin}   href="/contact">login </Button>
        </div>
      </Card.Text>
      <div>
        <Button onClick={() => setShow(true)}>Show modal</Button>{" "}
        <Modal size="sm"show={modalShow}onHide={() => setShow(false)}
          aria-labelledby="example-modal-sizes-title-sm">
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              This is dialog  title
            </Modal.Title>
          </Modal.Header>
            <Modal.Body>dialog body</Modal.Body>
        </Modal>
      </div>
    </Card>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;