import { ReactElement } from "react";
import Button from "./UI/button";

interface ContactFormProps {}

const ContactForm = ({}: ContactFormProps) => {
  return (
    <form className="block" action="#">
      <div className="mb-8">
        <label htmlFor="name" className="block mb-4 text-lg">
          Nom
        </label>
        <input
          className="w-full px-4 py-3 rounded bg-gr-900 text-lg"
          name="name"
          type={"text"}
          placeholder="Nom"
        />
      </div>
      <div className="mb-8">
        <label htmlFor="name" className="block mb-4 text-lg">
          Email
        </label>
        <input
          className="w-full px-4 py-3 rounded bg-gr-900 text-lg"
          name="email"
          type={"email"}
          placeholder="Votre adresse email"
        />
      </div>
      <div className="mb-8">
        <label htmlFor="name" className="block mb-4 text-lg">
          Nom
        </label>
        <textarea
          className="w-full px-4 py-3 rounded bg-gr-900 text-lg"
          name="content"
          rows={5}
          placeholder="Contenu de votre message"
        ></textarea>
      </div>
        <Button WFull={true}><>Envoyer</></Button>
    </form>
  );
};

export default ContactForm;
