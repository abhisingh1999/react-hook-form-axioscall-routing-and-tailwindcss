import React from "react";
import { useNavigate } from "react-router-dom";

const Tr = ({ value, deletePerson, setPersonToEdit }) => {
  const navigate = useNavigate();
  return (
    <tr>
      <td className="border">{value.firstName}</td>
      <td className="border">{value.lastName}</td>
      <td className="border">{value.age}</td>
      <td className="border">{value.gender}</td>
      <td className="border">{value.language}</td>
      <td className="border">{value.email}</td>
      <td className="border">
        <div className="p-6 flex gap-3">
          <button
            onClick={() => {
              setPersonToEdit(value);
              navigate("/edit-person");
            }}
            className="inline-flex px-2 py-1 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Edit
          </button>
          <button
            onClick={() => {
              deletePerson(value.id);
            }}
            className="inline-flex px-2 py-1 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-orange-accent-400 hover:bg-deep-orange-accent-700 focus:shadow-outline focus:outline-none"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Tr;
