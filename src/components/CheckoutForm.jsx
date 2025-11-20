import { useState } from "react";

export default function CheckoutForm(props){
    const [formData, setFormData] = useState(
        {
            username: "",
            email: "",
            phone: "",
        }
    );

    function handleSubmit(event){
        event.preventDefault();
        props.handleCheckout(formData);
    }

    function handleChange(event){
        const inputName = event.target.name;
        const value = event.target.value;

        const newFormData = {...formData};
        newFormData[inputName] = value;
        setFormData(newFormData);
    }

    function clearForm(){
        setFormData({
            username: "",
            email: "",
            phone: "",
        })
    }

    return(
       <section>
        <h4>Ingresa tus datos personales</h4>
         <form className="checkout-form" onSubmit={handleSubmit}>
            <input
                value={formData.username}
                onChange={handleChange}
                name="username"
                placeholder="Nombre y apellido"
                type="text"
                required
            ></input>
            <input
                value={formData.email}
                onChange={handleChange}
                name="email"
                placeholder="Email"
                type="email"
                required
            ></input>
            <input
                value={formData.phone}
                onChange={handleChange}
                name="phone"
                placeholder="Teléfono"
                type="tel" required
            ></input>
            
            <div className="buttons">
                <button type="submit">Confirmar</button>
                <button onClick={clearForm} type="button">Limpiar Formulario</button>
            </div>
            
        </form>
       </section>
    )
}