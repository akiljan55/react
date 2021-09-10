const ADD_DIALOGS = 'ADD-DIALOGS'
const ADD_DIALOGS_CHANGES = 'ADD-DIALOGS-CHANGES'

let initaialPage = {
    dialogsData:[
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Vanya'},
        {id: 3, name: 'Sergey'},
        {id: 4, name: 'Nastya'},
        {id: 5, name: 'Ekaterina'},
    ],
    messageData:[
        { id: 1, message: 'Hello' },
        { id: 2, message: 'Hi' },
        { id: 3, message: 'What is your name?' },
        { id: 4, message: 'My Name is Donald' },
    ],
    nowDialogs: 'good job'
};

const dialogsReducer = (state = initaialPage, action) => {
    if (action.type === 'ADD-DIALOGS') {
        let newDialogs = {
            id:5,
            message: state.nowDialogs
        }
        state.messageData.push(newDialogs)
        state.nowDialogs = ''

    }else if(action.type === 'ADD-DIALOGS-CHANGES') {
        state.nowDialogs = action.text
    }
    return state ;
}

export const AddDialogs = () => ({type: ADD_DIALOGS})
export const AddDialogsChanges = (text) => ({type: ADD_DIALOGS_CHANGES, text: text})

export default dialogsReducer;
