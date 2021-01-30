import { useState, useEffect } from "react";
import axios from "axios";
const SubscribersList = () => {
  const [contacts, setContacts] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [dateAsc, setDateAsc] = useState(true);
  const [emailAsc, setEmailAsc] = useState(true);
  const [domains, setDomains] = useState();
  const [filteredContacts, setFilteredContacts] = useState();

  useEffect(() => {
    axios.get("/api/contacts.php").then((response) => {
      setContacts(response.data);
      mapFilterButtons(response.data);
    });
  }, [isDeleting]);

  const emailDeleteHandler = (id) => {
    if (isDeleting) return;
    setIsDeleting(true);
    axios.delete(`/api/contacts.php?del=${id}`).then(() => {
      setIsDeleting(false);
    });
  };
  const sortBy = (sortBy) => {
    const sortContacts = filteredContacts ? filteredContacts : contacts;
    // sortBy date
    if (sortBy === "date" && dateAsc) {
      const newContacts = sortContacts.sort(
        (a, b) => parseFloat(b.timeStamp) - parseFloat(a.timeStamp)
      );
      filteredContacts
        ? setFilteredContacts(newContacts)
        : setContacts(newContacts);
      setDateAsc(false);
      return;
    } else if (sortBy === "date" && !dateAsc) {
      const newContacts = sortContacts.sort(
        (a, b) => parseFloat(a.timeStamp) - parseFloat(b.timeStamp)
      ); // For ascending sort
      filteredContacts
        ? setFilteredContacts(newContacts)
        : setContacts(newContacts);
      setDateAsc(true);
      return;
    }
    // sortBy email
    if (sortBy === "email" && emailAsc) {
      const newContacts = sortContacts.sort(
        (a, b) => (a.email > b.email) - (a.email < b.email)
      );
      filteredContacts
        ? setFilteredContacts(newContacts)
        : setContacts(newContacts);
      setEmailAsc(false);
      return;
    } else if (sortBy === "email" && !emailAsc) {
      const newContacts = sortContacts.sort(
        (a, b) => (a.email < b.email) - (a.email > b.email)
      );
      filteredContacts
        ? setFilteredContacts(newContacts)
        : setContacts(newContacts);
      setEmailAsc(true);
      return;
    }
  };

  const mapFilterButtons = (contacts) => {
    let domainArr = [];
    contacts.map((contact) => {
      const domain = contact.email.split("@")[1].split(".")[0];
      domainArr.push(domain);
    });
    domainArr = [...new Set(domainArr)];
    setDomains(domainArr);
  };

  const filterByDomain = (domain) => {
    const newContacts = contacts.filter(
      (contact) => contact.email.split("@")[1].split(".")[0] === domain
    );
    setFilteredContacts(newContacts);
  };
  return (
    <>
      <div>
        <h3>Sort</h3>
        <button
          onClick={() => {
            sortBy("date");
          }}
        >
          Sort By Date
        </button>
        <button
          onClick={() => {
            sortBy("email");
          }}
        >
          Sort By Email
        </button>
      </div>
      <div>
        <h3>Filter By Email</h3>
        {domains &&
          domains.map((domain) => (
            <button
              onClick={() => {
                filterByDomain(domain);
              }}
            >
              {domain}
            </button>
          ))}
        <button
          onClick={() => {
            setFilteredContacts(undefined);
          }}
        >
          Reset Filters
        </button>
      </div>

      <table>
        <thead>
          <th>id</th>
          <th>email</th>
        </thead>
        <tbody>
          {contacts &&
            !filteredContacts &&
            contacts.map((contact) => {
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
          {contacts &&
            filteredContacts &&
            filteredContacts.map((contact) => {
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
    </>
  );
};

export default SubscribersList;
