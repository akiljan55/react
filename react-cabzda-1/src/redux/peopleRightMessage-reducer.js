const ADD_POST = 'ADD-POST'
const ADD_NEW_CHANGES = 'ADD-NEW-CHANGE'

let initialPage = {
    postData:[
        {id:1, context: 'ggg', likes: 435},
        {id:2, context: 'haha', likes: 667},
        {id:3, context: 'looool',likes: 999},
        {id:4, context: 'good',likes: 1}
    ],
    nowPost: 'hello'
}

const peopleRightReducer = (state = initialPage, action) => {
    if (action.type === 'ADD-POST') {
        let newPost = {
            id: 5,
            context: state.nowPost,
            likes: 0
        }
        state.postData.push(newPost)
        state.nowPost = '';

    } else if (action.type === 'ADD-NEW-CHANGE') {
        state.nowPost = action.newText;
    }
    return state ;
}

export const AddPost = () => ({type: ADD_POST})
export const AddNewChanges = (conText) => ({type: ADD_NEW_CHANGES , newText: conText})

export default peopleRightReducer