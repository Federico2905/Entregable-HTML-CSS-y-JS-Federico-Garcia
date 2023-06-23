/*const validateform = (event) => {
    event.preventDefault()
    const form = new FormData(event.target)
    let person = {
        name: form.get("name"),
        lastname: form.get("last_name"),
        email: form.get("email"),
        company: form.get("company"),
        country: form.get("country"),
        phone: form.get("phone"),
        message: form.get("message")
    }
    console.log(person)
    if (person.message === "") {
        person.message = "No hay un mensaje"
    }
    return alert(`
        Name:${person.name}
        Last name:${person.lastname}
        Email:${person.email}
        Company:${person.company}
        Country:${person.country}
        Phone:${person.phone}
        Message:${person.message}
    `)
}*/
/**/
/**/
/* El codigo de arriba muestra los datos en una alert*/
/**/
/**/
const modal = document.getElementById("modal");
console.log(modal);
const background=document.querySelector(".background")

const closemodal = () => {
    modal.classList.add("hidden");
    background.classList.add ("hidden")
  };
const validateformmodal = (event) => {
  event.preventDefault();
  const form = new FormData(event.target);
  let person = {
    name: form.get("name"),
    lastname: form.get("last_name"),
    email: form.get("email"),
    company: form.get("company"),
    country: form.get("country"),
    phone: form.get("phone"),
    message: form.get("message"),
  };
  console.log(person);
  if (person.message === "") {
    person.message = "No hay un mensaje";
  }
  modal.innerHTML = `
    <div class="modal">
    <div class="closer"><i class="fa-solid fa-xmark fa-2xl"></i></div>
    <h3> Your information has been successfully registered </h2>
    <p> <b>Name:</b>${person.name} </p>
    <p> <b>Last name:</b>${person.lastname} </p>
    <p> <b>Email:</b>${person.email} </p>
    <p> <b>Company:</b>${person.company} </p>
    <p> <b>Country:</b>${person.country} </p>
    <p> <b>Phone:</b>${person.phone} </p>
    <p> <b>Message:</b>${person.message} </p>
    </div>
    `;
  modal.classList.remove("hidden");
  background.classList.remove("hidden")
  const cross = document.querySelector(".closer");
  cross.addEventListener("click", closemodal)
};
/**/
/**/
/* El codigo de arriba muestra los datos en un modal*/
/**/
/**/
