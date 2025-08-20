import { Navbar } from "../../components/Navbar"
import { Sidebar } from "../../components/Sidebar"
import { useNotes } from "../../context/notesContext"
import { NotesCard } from "../../components/NotesCard"

export const Bin = () => {

    const { bin } = useNotes();

    return (
        <>
            <Navbar />
            <main className="flex gap-3">
                <Sidebar />

                <div className="flex-1">
                    {
                        bin?.length > 0 ? (
                            <div className="mt-14 flex flex-wrap gap-6">
                                <h1 className="w-full">Deleted Notes</h1>
                                {
                                    bin.map(({ id, title, text, isPinned }) => (
                                        <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />
                                    ))
                                }
                            </div>
                        ) : (
                            <div className="grid min-h-[30vh] items-center">
                                <div className="flex flex-col items-center text-gray-500">
                                    <span className="material-symbols-outlined">delete_forever</span>
                                    <h1 className="text-xl font-medium">No Deleted notes yet</h1>
                                </div>
                            </div>
                        )
                    }
                </div>
            </main>

        </>
    )
}