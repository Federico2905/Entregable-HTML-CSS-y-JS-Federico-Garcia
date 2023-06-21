const validateform = (event) => {
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
        Name=${person.name}
        Last name=${person.lastname}
        Email=${person.email}
        Company=${person.company}
        Country=${person.country}
        Phone=${person.phone}
        Message=${person.message}
    `)
}