export const getLocalTimeFromUTC = (utcTimestamp, timezoneOffsetSeconds) => {
    const date = new Date(utcTimestamp * 1000);
    const localTime = new Date(date.getTime() + timezoneOffsetSeconds * 1000);

    const options = {
        timeZone: 'UTC',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };

    return localTime.toLocaleTimeString('en-GB', options);
};
