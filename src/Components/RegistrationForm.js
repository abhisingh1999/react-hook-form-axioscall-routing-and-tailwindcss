import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

let emsg = "This field is required";
let smsg = "valid ";

const errorMessage = (emsg) => {
  return <span className="text-red-500">{emsg}</span>;
};
const successMessage = (smsg) => {
  return <span className="text-green-500">{smsg}</span>;
};

const RegistrationForm = ({ addPerson, personToEdit, updatePerson }) => {
  const propertyNames = [
    "firstName",
    "lastName",
    "age",
    "gender",
    "language",
    "email",
    "id",
  ];

  const navigate = useNavigate();

  useEffect(() => {
    propertyNames.forEach((propertyName) => {
      setValue(propertyName, personToEdit[propertyName]);
    });
  }, [personToEdit]);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, touchedFields },
  } = useForm({
    mode: "all",
  });

  const onSubmit = (person) => {
    if (person.id === "") {
      addPerson(person);
    } else {
      updatePerson(person);
    }
    personToEdit = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      language: "",
      email: "",
      id: "",
    };
    propertyNames.forEach((propertyName) => {
      setValue(propertyName, personToEdit[propertyName], {
        shouldDirty: false,
        shouldTouch: false,
        shouldValidate: false,
      });
    });
    navigate("/");
  };
  // console.log(errors);

  return (
    <div className="w-full xl:px-8 xl:w-8/12 mx-auto my-4">
      <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
        <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
          Sign up for updates
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" {...register("id")} />
          <div className="mb-1 sm:mb-2">
            <label
              htmlFor="firstName"
              className="inline-block mb-1 font-medium"
            >
              First name
            </label>
            <input
              type="text"
              placeholder="First Name"
              {...register("firstName", {
                required: true,
              })}
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="firstname"
            />
            <p>
              {errors &&
                errors.firstName &&
                errors.firstName.type == "required" &&
                errorMessage(emsg)}
              {!errors.firstName &&
                touchedFields.firstName &&
                successMessage(smsg + watch().firstName)}
            </p>
          </div>

          <div className="mb-1 sm:mb-2">
            <label htmlFor="lastName" className="inline-block mb-1 font-medium">
              Last name
            </label>
            <input
              type="text"
              placeholder="Last Name"
              {...register("lastName", {
                required: true,
              })}
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="lastName"
            />
            <p>
              {errors &&
                errors.lastName &&
                errors.lastName.type == "required" &&
                errorMessage(emsg)}
              {!errors.lastName &&
                touchedFields.lastName &&
                successMessage(smsg + watch().lastName)}
            </p>
          </div>

          <div className="mb-1 sm:mb-2">
            <label htmlFor="age" className="inline-block mb-1 font-medium">
              Age
            </label>
            <input
              type="text"
              placeholder="Age"
              {...register("age", {
                required: true,
                pattern: /^(1[89]|[2-9]\d)$/gm,
              })}
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="Age"
            />
            <p>
              {errors &&
                errors.age &&
                errors.age.type == "required" &&
                errorMessage(emsg)}
              {errors &&
                errors.age &&
                errors.age.type == "pattern" &&
                errorMessage("invalid age")}
              {!errors.age && touchedFields.age && successMessage(smsg)}
            </p>
          </div>

          <div className="mb-1 sm:mb-2">
            <input
              {...register("gender", {
                required: true,
              })}
              type="radio"
              value="Male"
              id="male"
            />
            <label htmlFor="male" className="inline-block m-1 font-medium">
              Male
            </label>
          </div>

          <div className="mb-1 sm:mb-2">
            <input
              {...register("gender", {
                required: true,
              })}
              type="radio"
              value="Female"
              id="female"
            />
            <label htmlFor="female" className="inline-block m-1 font-medium">
              Female
            </label>
            <p>
              {errors &&
                errors.gender &&
                errors.gender.type == "required" &&
                errorMessage(emsg)}
            </p>
          </div>

          <div className="mb-1 sm:mb-2">
            <label htmlFor="email" className="inline-block mb-1 font-medium">
              E-mail
            </label>
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              })}
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="Email"
            />
            <p>
              {errors &&
                errors.email &&
                errors.email.type == "required" &&
                errorMessage(emsg)}
              {errors &&
                errors.email &&
                errors.email.type == "pattern" &&
                errorMessage("invalid Email")}
              {!errors.email && touchedFields.email && successMessage(smsg)}
            </p>
          </div>

          <div className="mb-1 sm:mb-2">
            <label htmlFor="language" className="block mb-1 font-medium">
              Select language
            </label>
            <select
              {...register("language", {
                required: true,
              })}
              id="Language"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            >
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Gujrati">Gujrati</option>
            </select>
          </div>

          <div className="mt-4 mb-2 sm:mb-4">
            <input
              type="submit"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default RegistrationForm;
