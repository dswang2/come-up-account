let id = 0;
const createId = ():number => {
    id = id + 1;
    return id;
}
export { createId };