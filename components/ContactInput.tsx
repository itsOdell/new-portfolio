import styles from "../styles/Contact.module.css";

const ContactInput: React.FC<any> = ({placeholder, type = "input", name})=> {
  return (
    <div className={styles.inputContainer}>
        {type == "input" ? 
        <input type="text" placeholder={placeholder} className={styles.input} name={name}/>
         : <textarea placeholder={placeholder} className={styles.textarea} name={name}/>}
    </div>
  )
}

export default ContactInput