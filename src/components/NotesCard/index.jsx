import { useNotes } from "../../context/notesContext";

export const NotesCard = ({ id, title, text, isPinned }) => {

    const { archive, notesDispatch } = useNotes();
    const isArchived = archive.some(note => note.id === id)

    const onPinClick = (id) => {
        !isPinned ? notesDispatch({
            type: 'PIN',
            payload: { id }
        }) : notesDispatch({
            type: 'UNPIN',
            payload: { id }
        })
    }

    const onArchiveClick = (id) => {

        const isArchived = archive?.some(note => note.id === id);
        !isArchived ? notesDispatch({
            type: 'ARCHIVE',
            payload: { id }
        }) : notesDispatch({
            type: 'UNARCHIVE',
            payload: { id }
        })
    }


    return (
        <div className="border border-amber-950 p-2 rounded-md bg-gray-700 text-slate-50  w-[350px]" key={id}>
            <div className="flex justify-between border-b-2">
                <p className="p-2">{title}</p>

                {
                    !isArchived && (
                        <button onClick={() => onPinClick(id)}>
                            {
                                isPinned
                                    ? <span className="material-symbols-sharp">keep_off </span>
                                    : <span className="material-symbols-outlined">keep</span>
                            }
                        </button>

                    )
                }
            </div>
            <div className="flex flex-col">
                <p className="p-2">{text}</p>
                <div className="ml-auto">
                    <button onClick={() => onArchiveClick(id)}>
                        {
                            isArchived ?
                                <span className="material-symbols-outlined">unarchive</span> :
                                <span className="material-symbols-outlined">archive</span>

                        }
                    </button>
                    <button>
                        <span className="material-symbols-outlined">delete</span>
                    </button>
                </div>
            </div>
        </div>
    )
}