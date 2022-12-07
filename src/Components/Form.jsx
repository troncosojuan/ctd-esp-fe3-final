import React from "react";
import { useRef } from "react";

const validateUsername = (username) => {
  return username.length > 5;
};

const validateEmail = (email) => {
  return email.length > 3 && email.includes("@") && email.includes(".") && email.indexOf("@") < email.lastIndexOf(".");
};

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const nameRef = useRef(null);
  const emailRef = useRef(null);


  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;

    if (validateUsername(name) && validateEmail(email)) {
      alert(`Gracias por registrarte: ${name}`);
    }
    else {
      alert("Por favor verifique su información nuevamente");
    };
  };

  return (
    <div>
      <form>
        <input type="text" placeholder="Nombre" ref={nameRef} />
        <input type="email" placeholder="Email" ref={emailRef} />
        <button onClick={handleSubmit}>Enviar</button>
      </form>
    </div>
  );
};


export default Form;

