import styled from "styled-components";
import React, { useState } from "react";

type Props = {
    children?: React.ReactNode;
    value: string[];
    onChange: (value: string[]) => void;
}
const TagsSection: React.FunctionComponent<Props> = (props) => {
    const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
    // const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const selectedTags = props.value;
    const onAddTag = () => {
        const tagName = window.prompt("新标签名称为");
        if (tagName !== null) {
            setTags([...tags, tagName]);
        }
    }
    const onToggleTag = (tag: string) => {
        const index = selectedTags.indexOf(tag);
        if (index >= 0) {
            props.onChange(selectedTags.filter((t) => t !== tag));
        } else {
            props.onChange([...selectedTags, tag]);
        }
    }
    const getClass = (tag: string) => selectedTags.indexOf(tag) >= 0 ? 'selected' : '';
    return (
        <Wrapper>
            <ol>
                {tags.map((tag) => {
                    return <li key={tag} onClick={() => {
                        onToggleTag(tag)
                    }} className={getClass(tag)}>{tag}</li>
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