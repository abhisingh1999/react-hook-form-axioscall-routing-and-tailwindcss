import { useEffect, useState } from "react";
import RegistrationForm from "./Components/RegistrationForm";
import Table from "./Components/Table";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";

function App() {
  const [person, setPerson] = useState([]);
  const [personToEdit, setPersonToEdit] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    language: "",
    email: "",
    id: "",
  });

  useEffect(() => {
    getAllPerson();
  }, []);

  const getAllPerson = () => {
    axios
      .get(`https://63ac417034c46cd7ae7c275e.mockapi.io/student`)
      .then((res) => {
        setPerson(res.data);
      });
  };

  const addPerson = (p) => {
    axios
      .post("https://63ac417034c46cd7ae7c275e.mockapi.io/student", p)
      .then((res) => {
        if (res.status == 201 && res.statusText == "Created") {
          setPerson([...person, res.data]);
        }
      });
  };

  const updatePerson = (p) => {
    axios
      .put("https://63ac417034c46cd7ae7c275e.mockapi.io/student/" + p.id, p)
      .then((res) => {
        if (res.status == 200 && res.statusText == "OK") {
          console.log(res);
          setPerson(
            person.map((per) => {
              return per.id != p.id ? per : res.data;
            })
          );
        }
      });
  };

  const deletePerson = (id) => {
    axios
      .delete("https://63ac417034c46cd7ae7c275e.mockapi.io/student/" + id)
      .then((res) => {
        if (res.status == 200 && res.statusText == "OK") {
          setPerson(person.filter((p) => p.id != id));
        }
      });
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route
            index
            element={
              <Table
                person={person}
                deletePerson={deletePerson}
                setPersonToEdit={setPersonToEdit}
              />
            }
          />
          <Route
            path="add-person"
            element={
              <RegistrationForm
                addPerson={addPerson}
                personToEdit={{
                  firstName: "",
                  lastName: "",
                  age: "",
                  gender: "",
                  language: "",
                  email: "",
                  id: "",
                }}
              />
            }
          />
          <Route
            path="edit-person"
            element={
              <RegistrationForm
                personToEdit={personToEdit}
                updatePerson={updatePerson}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
