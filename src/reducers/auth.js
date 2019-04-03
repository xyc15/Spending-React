export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                uid: action.uid
                //add credential for anonymous Acccount
                //to be finished
            };
        case 'LOGOUT':
            return {};
        default:
            return state;
    }
};
