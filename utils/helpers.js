module.exports = {
    format_date: date => {
        const dateObj = new Date(date);
        const currentDate = `${dateObj.getMonth() + 1}/${dateObj.getDate()}/${dateObj.getFullYear()}`;
        const hours = dateObj.getHours();
        const minutes = dateObj.getMinutes();
        const format_time = `${hours}:${minutes}`;

        return `${currentDate} at ${format_time}`;
    },
};
