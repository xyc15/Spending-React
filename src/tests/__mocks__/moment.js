const moment = require.requireActual('moment');//require real module

export default (timestamp = 0) => {
    return moment(timestamp);//mocked module, force moment to start at a specific point in time if no point in time is provided
};