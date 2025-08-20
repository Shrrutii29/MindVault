import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { useNotes } from "../../context/notesContext";
import { NotesCard } from "../../components/NotesCard";

export const Bin = () => {
  const { bin } = useNotes();

  return (
    <>
      <Navbar />
      <main className="flex gap-3">
        <Sidebar />
        <div className="flex-1 px-6 py-4">
          {bin?.length > 0 ? (
            <div>
              <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                🗑️ Bin
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {bin.map(({ id, title, text, isPinned }) => (
                  <NotesCard
                    key={id}
                    id={id}
                    title={title}
                    text={text}
                    isPinned={isPinned}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="grid min-h-[50vh] place-items-center">
              <div className="flex flex-col items-center text-gray-500">
                <span className="material-symbols-outlined text-5xl">delete</span>
                <h1 className="text-lg font-medium mt-2">No notes in bin</h1>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};
