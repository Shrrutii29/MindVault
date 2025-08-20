import { useActionData } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

export const notesReducer = (state, { type, payload }) => {
    switch (type) {
        case 'TITLE':
            return {
                ...state,
                title: payload
            }
        case 'TEXT':
            return {
                ...state,
                text: payload
            }
        case 'ADD_NOTE':
            return {
                ...state,
                notes: [...state.notes, { text: state.text, title: state.title, id: uuid(), isPinned: false }]
            }
        case 'CLEAR_INPUT':
            return {
                ...state,
                text: "",
                title: ""
            }
        case 'PIN':
            return {
                ...state,
                notes: state.notes.map(note => note.id === payload.id ? { ...note, isPinned: !note.isPinned } : note)
            }
        case 'UNPIN':
            return {
                ...state,
                notes: state.notes.map(note => note.id === payload.id ? { ...note, isPinned: !note.isPinned } : note)
            }

        case 'ARCHIVE':
            const noteToArchive = state.notes.find(note => note.id === payload.id);

            return {
                ...state,
                archive: noteToArchive ? [...state.archive, noteToArchive] : state.archive,
                notes: state.notes.filter(note => note.id !== payload.id)
            }

        case 'UNARCHIVE':
            const noteToUnarchive = state.archive.find(note => note.id === payload.id);

            return {
                ...state,
                notes: noteToUnarchive ? [...state.notes, noteToUnarchive] : state.notes,
                archive: state.archive.filter(note => note.id !== payload.id)
            }

        case 'DELETE_NOTE':

            const isArchived = state.archive.some(note => note.id === payload.id);
            const noteToDelete = isArchived ? state.archive.find(note => note.id === payload.id) : state.notes.find(note => note.id === payload.id)

            return {
                ...state,
                notes: !isArchived ? state.notes.filter(note => note.id !== payload.id) : state.notes,
                archive: isArchived ? state.archive.filter(note => note.id !== payload.id) : state.archive,
                bin: [...state.bin, { ...noteToDelete, deletedAt: Date.now() }]
            }

        case 'RESTORE_NOTE':

            const noteToRestore = state.bin.find(note => note.id === payload.id);
            const { deletedAt, ...restoredNote } = noteToRestore;

            return {
                ...state,
                notes: [...state.notes, restoredNote],
                bin: state.bin.filter(note => note.id !== payload.id)
            }

        case "AUTO_DELETE_NOTE": {
            const now = Date.now();
            return {
                ...state,
                bin: state.bin.filter(note => now - note.deletedAt < payload)
            };
        }


        default:
            return state
    }
}