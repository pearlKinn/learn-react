import useDocumentTitle from "@/hooks/useDocumentTitle";

function Contact() {
  useDocumentTitle('contact')
  
  return (
    <div>
      <h1 className="text-emerald-500">Contact</h1>
    </div>
  );
}

export default Contact;