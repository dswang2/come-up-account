import { useParams } from "react-router-dom";
import { useTags } from "../hooks/useTags";

type Params = {
    id: string;
}
const Tag: React.FunctionComponent = (props) => {
    const { getTagById } = useTags();
    let { id: idString = "0" } = useParams<Params>();
    const tag = getTagById(parseInt(idString));
    return (<div>{tag.name}</div>);
}
export { Tag };