import { useContext } from "react";
import { NotesCard } from "../../components/NotesCard";
import { useNotes } from "../../context/notesContext";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";

export const Important = () => {
    const { notes } = useNotes();

    const pinnedNotes = notes.filter(note => note.isPinned);
    console.log("Notes in Important:", notes);


    return (
        <>
            <Navbar />
            <main className="flex gap-3">
                <Sidebar />

                <div className="flex-1">
                    {
                        pinnedNotes?.length > 0 ? (
                            <div className="mt-14 flex flex-wrap gap-6">
                                <h1 className="w-full">Pinned Notes</h1>
                                {
                                    pinnedNotes.map(({ id, title, text, isPinned }) => (
                                        <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />
                                    ))
                                }
                            </div>
                        ) : (
                            <div className="grid min-h-[30vh] items-center">
                                <div className="flex flex-col items-center text-gray-500">
                                    <span className="material-symbols-outlined">pinboard</span>
                                    <h1 className="text-xl font-medium">No pinned notes yet</h1>
                                </div>
                            </div>

                        )
                    }
                </div>

            </main>



        </>


    )
}