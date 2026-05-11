import Intro from "../components/Intro";
import ContactForm from "../components/contact/ContactForm";
import ContactMap from "../components/contact/ContactMap";

export default function Contact(){
    return(
        <>
        <Intro title="Contact" href="/contact" />
        <ContactForm />
        <ContactMap />
        </>
    );
}