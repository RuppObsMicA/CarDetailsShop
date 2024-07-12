import React from 'react';

import { Schedule } from './Schedule/Schedule';
import { Payment } from './Payment/Payment';

export const ScheduleAndPayment = () => {
    return (
        <div className="schedule-and-payment">
            <Schedule />
            <Payment />
        </div>
    );
};
