
const createId = ():number => {
    const preId = parseInt(window.localStorage.getItem("preId") || '0');
    const id = preId + 1;
    window.localStorage.setItem("preId", JSON.stringify(id));
    return id;
}
export { createId };