import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { NotesCard } from "../../components/NotesCard";
import { useNotes } from "../../context/notesContext";

export const Home = () => {
  const { notes, title, text, isPinned, notesDispatch } = useNotes();

  const onTitleChange = (e) => {
    notesDispatch({
      type: "TITLE",
      payload: e.target.value,
    });
  };

  const onTextChange = (e) => {
    notesDispatch({
      type: "TEXT",
      payload: e.target.value,
    });
  };

  const onAddClick = () => {
    notesDispatch({
      type: "ADD_NOTE",
    });
    notesDispatch({
      type: "CLEAR_INPUT",
    });
  };

  const pinnedNotes = notes.length > 0 && notes.filter((note) => note.isPinned);
  const otherNotes = notes.length > 0 && notes.filter((note) => !note.isPinned);

  return (
    <>
      <Navbar />
      <main className="flex gap-3">
        <Sidebar />
        <div className="flex flex-col flex-1 px-6 py-4">
          {/* Note Input Box */}
          <div className="flex flex-col w-full max-w-lg bg-white dark:bg-gray-800 rounded-2xl shadow-md relative self-center p-4">
            <input
              value={title}
              onChange={onTitleChange}
              className="border-b border-gray-300 dark:border-gray-600 bg-transparent p-2 text-gray-900 dark:text-white text-lg font-medium focus:outline-none"
              placeholder="Title"
            />
            <textarea
              value={text}
              onChange={onTextChange}
              className="bg-transparent p-2 text-gray-700 dark:text-gray-200 resize-none h-[160px] focus:outline-none"
              placeholder="Take a note..."
            />
            <button
              disabled={title.length === 0}
              onClick={onAddClick}
              className="w-10 h-10 absolute bottom-3 right-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white flex items-center justify-center rounded-full shadow-md transition-all"
            >
              <span className="material-symbols-outlined">add</span>
            </button>
          </div>

          {/* Notes Sections */}
          <div className="mt-12 flex flex-col gap-10">
            {pinnedNotes?.length > 0 && (
              <div>
                <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                  📌 Pinned Notes
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {pinnedNotes.map(({ id, title, text, isPinned }) => (
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
            )}

            {otherNotes?.length > 0 && (
              <div>
                <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                  📝 Other Notes
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {otherNotes.map(({ id, title, text, isPinned }) => (
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
            )}
          </div>
        </div>
      </main>
    </>
  );
};
