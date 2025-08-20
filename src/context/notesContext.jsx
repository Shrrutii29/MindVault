import { createContext, useContext, useEffect, useReducer } from "react";
import { notesReducer } from "../reducers/notesReducer";


const NotesContext = createContext();

const NotesProvider = ({children}) => {

    const initialState = {
        title: "",
        text: "",
        notes: [],
        archive: [],
        bin: []
    }

    const [{ title, text, notes, archive, bin }, notesDispatch] = useReducer(notesReducer, initialState);

    // Cleanup bin after 30 days
    useEffect(() => {
        const TWO_MINUTES = 30 * 24 * 60 * 60 * 1000;
      
        const interval = setInterval(() => {
          notesDispatch({ type: "AUTO_DELETE_NOTE", payload: TWO_MINUTES });
        }, 10000);
      
        return () => clearInterval(interval);
      }, [notesDispatch]);
      
    return (
        <NotesContext.Provider value={{title, text, notes, archive, bin, notesDispatch}}>
            {children}
        </NotesContext.Provider>
    )
}

const useNotes = () => useContext(NotesContext);

export {NotesProvider, useNotes};