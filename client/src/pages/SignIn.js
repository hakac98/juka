import React from "react";
import Section from "../components/ui/Section";
import Input from "../components/ui/Input";

const SignIn = () => {
  return (
    <Section>
      <form className="grid gap-y-4 mx-auto w-96">
        <Input name="name" type="text" label="Ime" />
        <Input name="surname" type="text" label="Prezime" />
        <Input name="email" type="email" label="E-adresa" />
        <Input name="password" type="password" label="Lozinka" />
        <input
          className="bg-lime-600 text-white p-2 font-bold"
          type="submit"
          value="Registracija"
        />
      </form>
    </Section>
  );
};

export default SignIn;
