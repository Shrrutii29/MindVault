import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  const getStyles = ({ isActive }) => {
    const base =
      "flex items-center gap-3 px-4 py-3 rounded-tr-full rounded-br-full transition-all duration-300 font-medium";
    return isActive
      ? `${base} bg-orange-900 text-white shadow-md`
      : `${base} text-gray-700 dark:text-gray-300 hover:bg-amber-700 hover:text-white hover:pl-6`;
  };

  return (
    <aside className="flex flex-col gap-4 p-5 w-[250px] h-screen bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700">
      <NavLink className={getStyles} to='/'>
        <span className="material-symbols-outlined">home</span>
        <span>Home</span>
      </NavLink>
      <NavLink className={getStyles} to='/archive'>
        <span className="material-symbols-outlined">archive</span>
        <span>Archive</span>
      </NavLink>
      <NavLink className={getStyles} to='/important'>
        <span className="material-symbols-outlined">label_important</span>
        <span>Important</span>
      </NavLink>
      <NavLink className={getStyles} to='/bin'>
        <span className="material-symbols-outlined">delete</span>
        <span>Bin</span>
      </NavLink>
    </aside>
  );
};
