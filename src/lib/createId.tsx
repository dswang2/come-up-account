import { useTags } from "../hooks/useTags";

const createId = ():number => {
    const tags =JSON.parse(window.localStorage.getItem("tags")||'[]');
    const preId = tags.length > 0 ? tags[tags.length-1].id : 0;
    const id = preId + 1;
    return id;
}
export { createId };