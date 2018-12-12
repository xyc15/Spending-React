import authReducer from '../../reducers/auth';

test('should setup user id forlogin', () => {
    const action = {
        type: 'LOGIN',
        uid: 'asdfg'
    };
    const state = authReducer({}, action);
    expect(state).toEqual({
        uid: 'asdfg'
    });
});

test('should empty user id for logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({uid: 'anything'}, action);
    expect(state).toEqual({});
});