import { useState } from "react";


const initialFormValues = {
    name: '',
    email: '',
    password: ''
}

const Forms = () => {

    const [inputForm, setInputForm] = useState(initialFormValues);


    function handelOnChange(event) {
        //console.log(event.target);

        setInputForm({
            ...inputForm,
            [event.target.name]: event.target.value
        })
    }
    console.log(inputForm)

    function handleSubmitForm(event) {
        event.preventDefault();
        //console.log(inputForm);
    }

    return (
        <div>
            <h3> Forms Example </h3>
            <form onSubmit={handleSubmitForm}>
                <input name="name"
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={inputForm["name"]}
                    onChange={handelOnChange} />

                <input name="email"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={inputForm["email"]}
                    onChange={handelOnChange} />

                {/* unmasked pwd can be seen at the inspect tool how to resolve? */}
                <input name="password"
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={inputForm["password"]}
                    onChange={handelOnChange} />

                <input type="submit" name="submit"
                    id="submit"
                    value="submit"
                />
            </form>
        </div>
    );
}

export default Forms;