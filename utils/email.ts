import emailjs from "@emailjs/browser"

const email = async (form: HTMLFormElement) => {
    try {
        const service = String(process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE)
        const email_template = String(process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE)
        const key = String(process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY)
        let res = await emailjs.sendForm(service, email_template, form, key);
        return "Message sent!"
    } catch (error: unknown) {
            throw "Error: please email me at abduladilsunnat@gmail.com"
    }

}

export default email;