export const reducer=(state,action)=>{
    switch (action.type) {
        case 'ADD_ITEM':
            const newPeople=[...state.people,action.payload]
            return {
                ...state,people:newPeople,
                isModalOpen:true,
                modalContent:'Added new person'
            }
        case 'NO_VALUE':
            return {...state,isModalOpen:true,modalContent:'Please add name'}
        case 'CLOSE_MODAL':
            return {...state,isModalOpen:false}

        case 'REMOVE_ITEM':
            const newPeoples=state.people.filter((person)=>person.id !== action.payload)
            return {...state,people:newPeoples,isModalOpen:true,modalContent:'Removed item'}
               
    
        default:
            throw new Error('no matching action type');
    }
}