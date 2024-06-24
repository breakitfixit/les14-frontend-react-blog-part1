function formatDate(date) {
    const datetoFormat = new Date(date);
    return datetoFormat.getDate() + " "
        + datetoFormat.toLocaleString('nl-NL', { month: 'long' }) + " "
        + datetoFormat.getFullYear();
}

export default formatDate;