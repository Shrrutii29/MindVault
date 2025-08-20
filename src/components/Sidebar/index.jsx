import { NavLink } from "react-router-dom";

export const Sidebar = () => {

    const getStyles = ({ isActive }) => {
        const base =
            "flex items-center gap-3 px-2 py-4 rounded-tr-full rounded-br-full shadow-lg transition-all duration-300";

        return isActive
            ? `${base} bg-orange-950 text-slate-50`
            : `${base} hover:bg-amber-800 hover:text-slate-50 hover:px-6`;
    }
    return (
        <aside className="flex flex-col gap-3  p-5 w-[300px] h-screen">
            <NavLink className={getStyles} to='/'>
                <span className="material-symbols-outlined">home</span>
                <span>Home</span>
            </NavLink>
            <NavLink className={getStyles} to='/archive'>
                <span className="material-symbols-outlined">
                    archive
                </span>
                <span>Archive</span>
            </NavLink>
            <NavLink className={getStyles} to='/important'>
                <span className="material-symbols-outlined">
                    label_important
                </span>
                <span>Important</span>
            </NavLink>
            <NavLink className={getStyles} to='/bin'>
                <span className="material-symbols-outlined">
                    delete
                </span>
                <span>Bin</span>

            </NavLink>
        </aside>
    )
}