import { useNotes } from "../../context/notesContext";

export const NotesCard = ({ id, title, text, isPinned }) => {

    const { notesDispatch } = useNotes();

    const onPinClick = (id) => {
        !isPinned ? notesDispatch({
            type: 'PIN',
            payload: { id }
        }) : notesDispatch({
            type: 'UNPIN',
            payload: {id}
        })

    }
    return (
        <div className="border border-amber-950 p-2 rounded-md bg-gray-700 text-slate-50  w-[350px]" key={id}>
            <div className="flex justify-between border-b-2">
                <p>{title}</p>
                <button onClick={() => onPinClick(id)}>

                    {
                        isPinned ? <span className="material-symbols-sharp">keep_off </span> :
                            <span className="material-symbols-outlined">keep</span>
                    }
                </button>
            </div>
            <div className="flex flex-col">
                <p>{text}</p>
                <div className="ml-auto">
                    <button>
                        <span className="material-symbols-outlined">archive</span>
                    </button>
                    <button>
                        <span className="material-symbols-outlined">delete</span>
                    </button>
                </div>
            </div>
        </div>
    )
}