import React from "react";
import Tr from "./Tr";

const Table = ({ person, deletePerson, setPersonToEdit }) => {
  return (
    <div className="w-full xl:px-8 xl:w-8/12 mx-auto my-4">
      <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
        <table className="w-full border text-center">
          <thead>
            <tr>
              <th className="border">First Name</th>
              <th className="border">Last Name</th>
              <th className="border">Age</th>
              <th className="border">Gender</th>
              <th className="border">Language</th>
              <th className="border">Email</th>
              <th className="border">Action</th>
            </tr>
          </thead>
          <tbody>
            {person.map((value, index) => {
              return (
                <Tr
                  value={value}
                  key={index}
                  deletePerson={deletePerson}
                  setPersonToEdit={setPersonToEdit}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
