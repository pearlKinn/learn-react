import useDocumentTitle from "@/hooks/useDocumentTitle";
import { Helmet } from "react-helmet-async";

function Contact() {
  useDocumentTitle("contact");

  return (
    <>
      <Helmet>
        <title>Contact - ReactBird</title>
      </Helmet>
      <div>
        <h1 className="text-emerald-500">Contact</h1>
      </div>
    </>
  );
}

export default Contact;
