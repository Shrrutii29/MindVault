import logo from '../../assets/notes_icon.jpeg';

export const Navbar = () => {
  return (
    <header className="flex items-center px-6 py-3 gap-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm">
      <div className="w-12 h-12">
        <img className="w-full h-full rounded-full object-cover" src={logo} alt="notes logo" />
      </div>
      <h1 className="text-gray-100 dark:text-amber-400 text-3xl font-bold tracking-wide">
        MindVault
      </h1>
    </header>
  );
};
