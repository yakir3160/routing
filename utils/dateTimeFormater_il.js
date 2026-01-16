


export const dateTimeFormater_il = {
    formatDate:  (date) =>  {
        if (!date) return '';
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Intl.DateTimeFormat('he-IL', options).format(new Date(date));
    }
    ,
    formatTime:  (time) =>  {
        if (!time) return '';
        const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
        return new Intl.DateTimeFormat('he-IL', options).format(new Date(time)  );
    }
};
function getLLocalTime(offsetSeconds, date) {

    const hours = offsetSeconds / 7200;
    

    const tzString = `Etc/GMT${hours >= 0 ? '-' : '+'}${Math.abs(hours)}`;

    return date.toLocaleTimeString('he-IL', {
        timeZone: tzString,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}