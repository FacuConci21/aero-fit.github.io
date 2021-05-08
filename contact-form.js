const mainForm = document.getElementById("mainform");
const sendButton = document.getElementById("send");
const deleteButton = document.getElementById("delete");
const formElements = mainForm.elements;

function resetFormContent(e) {

  formElements.fullname.value = "";
  formElements.email.value = "";
  formElements.asunto.value = "";
  formElements.consult.value = "";
  
}

const validateFullname = (e) => {
  if (formElements.fullname.value) {
    const names = formElements.fullname.value.split(" ");
    
    if (names.length < 2) {
      alert("Completa el campo de nombre y apellido con tu nombre completo.");
      e.preventDefault();
      return 0;
    }
    
    return 1;

  } else {
    alert("Completa el campo de nombre y apellido con tu nombre completo.");
    e.preventDefault();
    return 0;
  }
};

const validateEmail = (e) => {
  if (formElements.email.value) {
    const email = formElements.email.value;

    if (!email.includes("@")) {
      alert("El email es invalido.");
      e.preventDefault();
      return 0;
    }

    return 1;

  } else {
    alert("Completa el campo de email.");
    e.preventDefault();
    return 0;
  }
};

const validateConsult = (e) => {

  if (formElements.consult.value) {
    if (formElements.consult.value.length > 200) {
      alert("Consulta demasiado larga (mas de 200 caracteres).");
      e.preventDefault();
      return 0;
    }

    return 1;

  } else {
    alert("La consulta esta vacia.");
    e.preventDefault();
    return 0;
  }
};

const validateAsunto = (e) => {

  if (formElements.asunto.value == "") {
    alert("El campo asunto esta vacio.");
    e.preventDefault();
    return 0;
  }

  return 1;
};

const validations = (e) => {
  e.preventDefault();
  if (validateFullname(e) && validateEmail(e) && validateConsult(e) && validateAsunto(e)) {
    alert("Mensaje enviado!");
    resetFormContent(e);
  }
};

sendButton.addEventListener("click", validations);
deleteButton.addEventListener("click", resetFormContent);