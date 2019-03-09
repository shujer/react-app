import React  from 'react';
import moment from 'moment/min/moment-with-locales';
import Moment from 'react-moment';

Moment.globalMoment = moment;
Moment.globalLocale = 'zh-cn';

const App = (props) => {
    return <Moment fromNow>{props.date}</Moment>
};

export default App