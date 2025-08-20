import { useNotes } from "../../context/notesContext";

export const NotesCard = ({ id, title, text, isPinned }) => {
  const { archive, bin, notesDispatch } = useNotes();

  const isArchived = archive.some((note) => note.id === id);
  const isDeleted = bin.some((note) => note.id === id);

  const onPinClick = (id) => {
    notesDispatch({
      type: isPinned ? "UNPIN" : "PIN",
      payload: { id },
    });
  };

  const onArchiveClick = (id) => {
    notesDispatch({
      type: isArchived ? "UNARCHIVE" : "ARCHIVE",
      payload: { id },
    });
  };

  const onDeleteClick = (id) => {
    notesDispatch({
      type: isDeleted ? "RESTORE_NOTE" : "DELETE_NOTE",
      payload: { id },
    });
  };

  return (
    <div className="bg-gray-800 dark:bg-gray-700 text-slate-50 rounded-2xl shadow-md p-4 w-full max-w-sm flex flex-col justify-between">
      {/* Title + Pin */}
      <div className="flex justify-between items-center border-b border-gray-600 pb-2 mb-2 notes-card">
        <p className="font-semibold text-lg">{title}</p>
        {!isDeleted && !isArchived && (
          <button
            onClick={() => onPinClick(id)}
            className="text-yellow-400 hover:text-yellow-500 transition-all"
          >
            {isPinned ? (
              <span className="material-symbols-sharp">keep_off</span>
            ) : (
              <span className="material-symbols-outlined">keep</span>
            )}
          </button>
        )}
      </div>

      {/* Text */}
      <p className="text-gray-200 dark:text-gray-100 mb-4">{text}</p>

      {/* Actions */}
      <div className="flex justify-end gap-3">
        {!isDeleted && (
          <button
            onClick={() => onArchiveClick(id)}
            className="hover:text-blue-400 transition-colors"
          >
            {isArchived ? (
              <span className="material-symbols-outlined">unarchive</span>
            ) : (
              <span className="material-symbols-outlined">archive</span>
            )}
          </button>
        )}

        <button
          onClick={() => onDeleteClick(id)}
          className="hover:text-red-400 transition-colors"
        >
          {isDeleted ? (
            <span className="material-symbols-outlined">restore_from_trash</span>
          ) : (
            <span className="material-symbols-outlined">delete</span>
          )}
        </button>
      </div>
    </div>
  );
};
