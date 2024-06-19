export function formatDate(date) {
    console.log(date);
    let datetoFormat = new Date(date);
    return datetoFormat.getDate() + " "
        + datetoFormat.toLocaleString('default', { month: 'long' })  + " "
        + datetoFormat.getFullYear();
}