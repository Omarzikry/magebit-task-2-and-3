import { useState, useEffect } from "react";
import axios from "axios";
const SubscribersList = () => {
  const [contacts, setContacts] = useState([]);
  const [emailDeleted, setEmailDeleted] = useState(1);
  const [isDeleting, setIsDeleting] = useState(false);
  const [dateAsc, setDateAsc] = useState(true);
  const [emailAsc, setEmailAsc] = useState(true);
  const [domains, setDomains] = useState();
  const [filteredContacts, setFilteredContacts] = useState();

  useEffect(() => {
    // use axios to get contacts from php rest api
    axios.get("/api/contacts.php").then((response) => {
      setContacts(response.data);
      mapFilterButtons(response.data);
    });

    // add is deleting variable so use effect runs every time element deletes
  }, [emailDeleted]);

  // handle delete email
  const emailDeleteHandler = (id) => {
    if (isDeleting) return;
    setIsDeleting(true);
    axios.delete(`/api/contacts.php?del=${id}`).then(() => {
      setEmailDeleted(emailDeleted + 1);
      setIsDeleting(false);
    });
  };

  const sortBy = (sortBy) => {
    const sortContacts = filteredContacts ? filteredContacts : contacts;

    let newContacts;

    // sortBy date
    if (sortBy === "date" && dateAsc) {
      newContacts = sortContacts.sort(
        (a, b) => parseFloat(b.timeStamp) - parseFloat(a.timeStamp)
      );
      setNewContactsHandler(newContacts);
      setDateAsc(false);
      return;
    } else if (sortBy === "date" && !dateAsc) {
      newContacts = sortContacts.sort(
        (a, b) => parseFloat(a.timeStamp) - parseFloat(b.timeStamp)
      ); // For ascending sort
      setNewContactsHandler(newContacts);
      setDateAsc(true);
      return;
    }

    // sortBy email
    if (sortBy === "email" && emailAsc) {
      newContacts = sortContacts.sort(
        (a, b) => (a.email > b.email) - (a.email < b.email)
      );
      setNewContactsHandler(newContacts);
      setEmailAsc(false);
      return;
    } else if (sortBy === "email" && !emailAsc) {
      newContacts = sortContacts.sort(
        (a, b) => (a.email < b.email) - (a.email > b.email)
      );
      setNewContactsHandler(newContacts);
      setEmailAsc(true);
      return;
    }
  };

  const setNewContactsHandler = (newContacts) => {
    filteredContacts
      ? setFilteredContacts(newContacts)
      : setContacts(newContacts);
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
    // check if email domain match the picked domain
    const newContacts = contacts.filter(
      (contact) => contact.email.split("@")[1].split(".")[0] === domain
    );
    setFilteredContacts(newContacts);
  };

  // convert timestamp to date

  // const timeConverter = (timestamp) => {
  //   var a = new Date(timestamp * 1000);
  //   var months = [
  //     "Jan",
  //     "Feb",
  //     "Mar",
  //     "Apr",
  //     "May",
  //     "Jun",
  //     "Jul",
  //     "Aug",
  //     "Sep",
  //     "Oct",
  //     "Nov",
  //     "Dec",
  //   ];
  //   var year = a.getFullYear();
  //   var month = months[a.getMonth()];
  //   var date = a.getDate();
  //   var hour = a.getHours();
  //   var min = a.getMinutes();
  //   var sec = a.getSeconds();
  //   var time =
  //     date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
  //   return time;
  // };
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
          <th>date</th>
        </thead>
        <tbody>
          {contacts &&
            !filteredContacts &&
            contacts.map((contact) => {
              return (
                <tr>
                  <td>{contact.id}</td>
                  <td>{contact.email}</td>
                  <td>{`${new Date(parseFloat(contact.timeStamp))}`}</td>
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
                  <td>{`${new Date(parseFloat(contact.timeStamp))}`}</td>
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
