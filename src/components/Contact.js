// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";
import contacts from '../data/contacts.json'

const Contact = (props) => {
  const { name, phone, email, src } = props;
  return (
    <>
      <div className="card">
        <img src={src ? src : contacts[3].photo} className="picture" alt="contact_photo" />
        <div className="contact_info">
          <p className="name">{name ? name : contacts[0].name}</p>
          <i>{phone ? phone : contacts[2].phone}</i>
          <p>{email ? email : contacts[1].email}</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
