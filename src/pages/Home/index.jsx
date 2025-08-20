import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { NotesCard } from "../../components/NotesCard";
import { useNotes } from "../../context/notesContext";

export const Home = () => {

    const { notes, title, text, isPinned, notesDispatch } = useNotes();

    const onTitleChange = (e) => {
        notesDispatch({
            type: 'TITLE',
            payload: e.target.value
        })
    }

    const onTextChange = (e) => {
        notesDispatch({
            type: 'TEXT',
            payload: e.target.value
        })
    }

    const onAddClick = () => {
        notesDispatch({
            type: 'ADD_NOTE'
        })
        notesDispatch({
            type: 'CLEAR_INPUT'
        })

    }

    const pinnedNotes = notes.length > 0 && notes.filter(note => note.isPinned);
    const otherNotes = notes.length > 0 && notes.filter(note => !note.isPinned);

    console.log(pinnedNotes)
    console.log(otherNotes)
    return (
        <>
            <Navbar />
            <main className="flex gap-3">
                <Sidebar />
                <div className="flex flex-col w-screen mt-15">
                    <div className="flex flex-col w-[450px] bg-gray-800 rounded-md relative self-center">
                        <input value={title} onChange={onTitleChange} className="border-b-2 p-2 placeholder-white text-white" placeholder="Title" />
                        <textarea value={text} onChange={onTextChange} className="p-2 placeholder-white text-white h-[200px]" placeholder="Text" />
                        <button disabled={title.length == 0} onClick={onAddClick} className="w-7 h-7 absolute bottom-0 right-0 border bg-gray-100 rounded-full">
                            <span className="material-symbols-outlined">add</span>
                        </button>
                    </div>

                    <div className="mt-14 ml-10 flex flex-col gap-10">
                        {
                            pinnedNotes?.length > 0 && (
                            <div>
                               <h1 className="">Pinned Notes</h1>
                                <div className="flex flex-wrap gap-6">
                                    {
                                        pinnedNotes.map(({ id, title, text, isPinned }) => (
                                            <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />
                                        ))
                                    }
                                </div>
                            </div>
                            )
                        }

                        <div>
                        {
                            pinnedNotes?.length > 0 && (
                                <h1 className="">Other Notes</h1>

                            )
                        }
                        {
                            otherNotes?.length > 0 && (
                                <div className="flex flex-wrap gap-6">
                                    {
                                        otherNotes.map(({ id, title, text, isPinned }) => (
                                            <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />
                                        ))
                                    }
                                </div>
                            )
                        }
                        </div>

                    </div>



                </div>
            </main>
        </>
    )
}