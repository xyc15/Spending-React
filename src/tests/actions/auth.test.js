import {login, logout} from '../../actions/auth';

test('should setup login object', () => {
    const userId = "abcdefg";
    const action = login(userId);
    expect(action).toEqual({
        type: 'LOGIN',
        uid: userId
    });
});


test('should setup logout object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT',
    });
});