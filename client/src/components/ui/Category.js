const Category = ({ category, onClick }) => {
  const categoryName = category.name;
  return (
    <li className="flex-1 text-center" onClick={onClick}>
      <div className="border border-slate-150 p-4">
        <h1 className="capitalize text-xl font-medium">{categoryName}</h1>
      </div>
    </li>
  );
};

export default Category;
