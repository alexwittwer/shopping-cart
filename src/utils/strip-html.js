export default function removeTags(str) {
    const regex = /(<([^>]+)>)/ig
    return str.replace(regex, '');
}