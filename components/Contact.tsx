import React, {useRef} from 'react';
import Head from "next/head";
import styles from "../styles/Contact.module.css";
import ContactInput from './ContactInput';
import email from "../common/email";

const ContactComp: React.FC = (): React.ReactElement => {
    const form = useRef<HTMLFormElement>(null)

    async function send(e: React.FormEvent) {
        e.preventDefault()
        let btn = (e.target as HTMLFormElement).lastChild;
        //@ts-ignore
        btn.disabled = btn.disabled = true
        try {
            let res = await email(form.current as HTMLFormElement);
            alert(res)
            //@ts-ignore
            btn.disabled = false
        } catch (error) {
            alert(error)
            //@ts-ignore
            btn.disabled = false
        }
    }
    
    return (
        <div className={styles.container}>  
            <Head>
                <title>Abduladil Sunnat | Contact</title>
            </Head>
            <form className={styles.contactContainer} ref={form} onSubmit={send}>
                <h1>Share your thoughts!</h1>
                <ContactInput placeholder={"Your Name"} name="from_name"/>
                <ContactInput placeholder={"Your Email"} name="from_email"/>
                <ContactInput placeholder={"Your Message"} type="textarea" name="message"/>
                <button className={styles.button}>Send</button>
            </form>
        </div>
    )
}

export default ContactComp