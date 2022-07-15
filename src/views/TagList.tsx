import styled from "styled-components";
import { Layout } from "../components/Layout";
import { useTags } from "../hooks/useTags";
import { Icon } from "../components/Icon";
import { Link } from "react-router-dom";
import { createId } from "../lib/createId";

const TagList = () => {
    const { tags, setTags } = useTags();
    const onAddTag = () => {
        const tagName = window.prompt("新标签名称为");
        if (tagName !== null) {
            setTags([...tags, { id: createId(), name: tagName }]);
        }
    }
    return (
        <Layout>
            <Wrapper>
                <ol>
                    {tags.map((tag:any) => {
                        return (<li>
                            <Link to={'/tags/' + tag.name}>
                                <span className={"oneLine"}>{tag.id}{`-`}{tag.name}</span>
                                <Icon name={"right"}/>
                            </Link>
                        </li>);
                    })}
                </ol>
                <button onClick={onAddTag}>新建标签</button>
            </Wrapper>
        </Layout>
    );
}

const Wrapper = styled.div`
  max-height: 100%; // 这是必须的
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  > ol {
    width: 100%;
    font-size: 16px;
    background: white;
    flex-shrink: 1;
    overflow: auto;
    ::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }
    > li {
      //background: white;
      border-bottom: 1px solid #BCBBC1;
      //box-shadow: inset 0px -0.5px 0px #BCBBC1;
      margin-left: 16px;
      line-height: 16px;
      > a {
        padding: 12px 16px 16px 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }

  > button {
    margin-top: 52px;
    margin-bottom: 16px;
    margin-left: auto;
    margin-right: auto;
    border: none;
    background: #767676;
    border-radius: 4px;
    font-size: 18px;
    line-height: 20px;
    padding: 10px 16px;
    color: white;
    flex-grow: 0; // 膨胀指数
    overflow: auto;
  }

`

export { TagList };