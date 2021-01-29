import { useState, useEffect } from "react";
import axios from "axios";
const SubscribersList = () => {
  const [contacts, setContacts] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    axios.get("/api/contacts.php").then((response) => {
      setContacts(response.data);
    });
  }, [isDeleting]);

  const emailDeleteHandler = (id) => {
    if (isDeleting) return;
    setIsDeleting(true);
    axios.delete(`/api/contacts.php?del=${id}`).then(() => {
      setIsDeleting(false);
    });
  };

  return (
    <table>
      <thead>
        <th>id</th>
        <th>email</th>
      </thead>
      <tbody>
        {contacts.map((contact) => {
          return (
            <tr>
              <td>{contact.id}</td>
              <td>{contact.email}</td>
              <td>
                <button
                  onClick={() => {
                    emailDeleteHandler(contact.id);
                  }}
                >
                  delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SubscribersList;
