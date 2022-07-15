import styled from "styled-components";
import { useTags } from "../../hooks/useTags";
import { createId } from "../../lib/createId";

type Props = {
    children?: React.ReactNode;
    value: number[];
    onChange: (value: number[]) => void;
}
const TagsSection: React.FunctionComponent<Props> = (props) => {
    // const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
    const { tags, setTags, onAddTag } = useTags();
    // const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const selectedTags = props.value;
    const onToggleTag = (tagId: number) => {
        const index = selectedTags.indexOf(tagId);
        if (index >= 0) {
            props.onChange(selectedTags.filter((t) => t !== tagId));
        } else {
            props.onChange([...selectedTags, tagId]);
        }
    }
    const getClass = (tagId: number) => selectedTags.indexOf(tagId) >= 0 ? 'selected' : '';
    return (
        <Wrapper>
            <ol>
                {tags.map((tag:any) => {
                    return <li key={tag.id} onClick={() => {
                        onToggleTag(tag.id)
                    }} className={getClass(tag.id)}>{tag.id}{`-`}{tag.name}</li>
                })}
            </ol>
            <button onClick={onAddTag}>新增标签</button>
        </Wrapper>
    );
}

const Wrapper = styled.section`
  background: #FFFFFF;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;

  > ol {
    margin: 0 -12px;

    > li {
      background: #D9D9D9;
      border-radius: 18px;
      display: inline-block;
      padding: 4px 18px;
      font-size: 14px;
      line-height: 16px;
      margin: 8px 12px;

      &.selected {
        background: #f60;
      }
    }
  }

  > button {
    background: none;
    border: none;
    padding: 1px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
`;

export {TagsSection}