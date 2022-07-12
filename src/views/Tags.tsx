import styled from "styled-components";
import { Layout } from "../components/Layout";
import { useTags } from "../hooks/useTags";
import { Icon } from "../components/Icon";

const Tags = () => {
    const { tags, setTags } = useTags();
    return (
        <Layout>
            <Wrapper>
                <ol>
                    {tags.map((tag) => {
                        return (<li>
                            {tag}
                            <Icon name={"right"}/>
                        </li>);
                    })}
                </ol>
                <button>新建标签</button>
            </Wrapper>
        </Layout>
    );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  > ol {
    width: 100%;
    font-size: 16px;
    background: white;
    flex-grow: 1; // 膨胀指数
    overflow: auto;
    > li {
      //background: white;
      border-bottom: 1px solid #BCBBC1;
      //box-shadow: inset 0px -0.5px 0px #BCBBC1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px 16px 0px;
      margin-left: 16px;
      line-height: 16px;
    }
  }

  > button {
    margin-top: 52px;
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

export { Tags };