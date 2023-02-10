import { ReactElement, useState } from "react"
import Button from "./UI/button"

interface ContactFormProps {}

const ContactForm = ({}: ContactFormProps) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const [nameError, setNameError] = useState("")
  const [emailError, setEmailError] = useState("")
  const [subjectError, setSubjectError] = useState("")
  const [messageError, setMessageError] = useState("")

  const [sending, setSending] = useState(false)
  const [sentStatus, setSentStatus] = useState<null | boolean>(null)
  const [sentMessage, setSentMessage] = useState("")

  const verifyName = (): boolean => {
    if (name.trim() == "") {
      setNameError("Le nom est requis")
      return false
    }
    setNameError("")
    return true
  }

  const verifyEmail = (): boolean => {
    if (email.trim() == "") {
      setEmailError("L'email est requis")
      return false
    } else if (
      !new RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ).test(email)
    ) {
      setEmailError("Veuillez entrer un email valide")
      return false
    }
    setEmailError("")
    return true
  }

  const verifySubject = (): boolean => {
    if (subject.trim() == "") {
      setSubjectError("Le sujet est requis")
      return false
    }
    setSubjectError("")
    return true
  }

  const verifyMessage = (): boolean => {
    if (message.trim() == "") {
      setMessageError("Le message est requis")
      return false
    }
    setMessageError("")
    return true
  }

  const sendEmail = async () => {
    setSentStatus(null)
    setSending(true)
    try {
      if (
        !(verifyName() && verifyEmail() && verifySubject() && verifyMessage())
      ) {
        throw new Error("Veuillez vérifier votre formulaire")
      }
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          fullname: name,
          subject: subject,
          message: message,
        }),
      })
      if (res.status != 200) {
        throw new Error("Une erreur s'est produite. Veuillez réessayer.")
      }
      setSentMessage("Message envoyé avec succès.")
      setSentStatus(true)
      setName("")
      setEmail("")
      setSubject("")
      setMessage("")
    } catch (err: any) {
      setSentMessage(err.message)
      setSentStatus(false)
    } finally {
      setSending(false)
    }
  }

  return (
    <form className="block" action="#">
      <div className="mb-8">
        <label htmlFor="name" className="block mb-4 text-lg">
          Nom <span className="text-red-500">*</span>
        </label>
        <input
          className="w-full px-4 py-3 rounded bg-gr-900 text-lg"
          name="name"
          type={"text"}
          placeholder="Nom"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
          onBlur={verifyName}
        />
        {nameError != "" && (
          <small className="block text-sm text-red-500">{nameError}</small>
        )}
      </div>
      <div className="mb-8">
        <label htmlFor="email" className="block mb-4 text-lg">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          className="w-full px-4 py-3 rounded bg-gr-900 text-lg"
          name="email"
          type={"email"}
          placeholder="Votre adresse email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          onBlur={verifyEmail}
        />
        {emailError != "" && (
          <small className="block text-sm text-red-500">{emailError}</small>
        )}
      </div>
      <div className="mb-8">
        <label htmlFor="subject" className="block mb-4 text-lg">
          Sujet <span className="text-red-500">*</span>
        </label>
        <input
          className="w-full px-4 py-3 rounded bg-gr-900 text-lg"
          name="subject"
          type={"text"}
          placeholder="Sujet"
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value)
          }}
          onBlur={verifySubject}
        />
        {subjectError != "" && (
          <small className="block text-sm text-red-500">{subjectError}</small>
        )}
      </div>
      <div className="mb-8">
        <label htmlFor="contact" className="block mb-4 text-lg">
          Contenu <span className="text-red-500">*</span>
        </label>
        <textarea
          className="w-full px-4 py-3 rounded bg-gr-900 text-lg"
          name="content"
          rows={5}
          placeholder="Contenu de votre message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value)
          }}
          onBlur={verifyMessage}
        ></textarea>
        {messageError != "" && (
          <small className="block text-sm text-red-500">{messageError}</small>
        )}
      </div>
      <Button
        ariaLabel="send-message-button"
        WFull={true}
        onClick={(e) => {
          e.preventDefault()
          sendEmail()
        }}
        loading={sending}
      >
        <>Envoyer</>
      </Button>
      <p
        className={`mt-4 text-lg font-bold ${
          sentStatus ? "text-green-500" : "text-red-500"
        } ${sentStatus == null && "opacity-0"}`}
      >
        {sentMessage}
      </p>
    </form>
  )
}

export default ContactForm
