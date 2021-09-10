import dialogsReducer from "./dialogsMessage-reducer";
import peopleRightReducer from "./peopleRightMessage-reducer";

let store = {
    _state:{

        dialogsMessage: {
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
        },
        peopleRightMessage: {
            postData:[
                {id:1, context: 'ggg', likes: 435},
                {id:2, context: 'haha', likes: 667},
                {id:3, context: 'looool',likes: 999},
                {id:4, context: 'good',likes: 1}
            ],
            nowPost: 'hello'
        }
    },
    _AddLaunchRender () {
        console.log('Im groot')
    },

    getState () {
        return this._state
    },
    subscribe (observer) {
        this._AddLaunchRender = observer;
    },

    dispatch(action) {

        this._state.peopleRightMessage = peopleRightReducer(this._state.peopleRightMessage, action)
        this._state.dialogsMessage = dialogsReducer(this._state.dialogsMessage, action)

        this._AddLaunchRender(this.state)
    }
}


export default store;
