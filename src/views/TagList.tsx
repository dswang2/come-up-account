import styled from "styled-components";
import { Layout } from "../components/Layout";
import { useTags } from "../hooks/useTags";
import { Icon } from "../components/Icon";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";

const TagList = () => {
    const { tags, onAddTag } = useTags();
    return (
        <Layout>
            <Wrapper>
                <ol>
                    {tags.map((tag:any) => {
                        return (<li key={tag.id}>
                            <Link to={'/tags/' + tag.id}>
                                <span className={"oneLine"}>{tag.id}{`-`}{tag.name}</span>
                                <Icon name={"right"}/>
                            </Link>
                        </li>);
                    })}
                </ol>
                <Button onClick={onAddTag}>新建标签</Button>
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
  }

`

export { TagList };