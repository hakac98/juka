const Input = ({ name, type, label }) => {
  return (
    <div className="grid gap-y-2">
      <label htmlFor={name}>{label}</label>
      <input
        className="border border-slate-150 rounded p-2 outline-none"
        id={name}
        type={type}
      />
    </div>
  );
};

export default Input;
