export default function validation(values) {
    let errors = {}

    if(!values.username.trim()) {
        errors.username = "Username Required"
    }

    //Email
    if(!values.email) {
        errors.email = "Email Required"
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email address is Invalid"
    }
}