import { useParams, useNavigate } from "react-router-dom";
import { useTags } from "../hooks/useTags";
import { Layout } from "../components/Layout";
import { Icon } from "../components/Icon";
import { Button } from "../components/Button";
import styled from "styled-components";
import { Input } from "../components/Input";
import { useRef } from "react";
import { Center } from "../components/Center";

type Params = {
    id: string;
}
const Tag: React.FunctionComponent = (props) => {
    const { getTagById, updateTag, deleteTag, tags} = useTags();
    let { id: idString = "0" } = useParams<Params>();
    const tag = getTagById(parseInt(idString));
    console.log("ddsw-tags:",tags);
    console.log("ddsw-tag:",tag);
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement>(null);
    const onClickBack = () => {
        console.log("ddsw-back");
        navigate(-1);
    }
    return (
        <Layout>
            {tag?  <Wrapper>
                <div><Icon name={"left"} onClick={onClickBack}/><span>编辑标签</span></div>
                <Input ref={inputRef}
                       placeholder={"标签名"}
                       label={"标签名"}
                       defaultValue={tag.name} onBlur={() => {
                           if(inputRef && inputRef.current){
                               updateTag(tag.id, inputRef.current.value);
                           }
                }}/>
                <Button onClick={() => {
                    deleteTag(tag.id);
                        navigate(-1);
                }}>删除标签</Button>
            </Wrapper> : <Center>tag不存在</Center>}
        </Layout>);
}

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  >label{
    height: 48px;
  }
  > div:nth-child(1) {
    background: white;
    font-size: 16px;
    line-height: 16px;
    padding-top: 14px;
    padding-bottom: 16px;
    position: relative;

    > svg {
      margin-left: 24px;
      line-height: 18px;
      width: 10px;
    }

    > span {
      line-height: 16px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateY(-50%) translateX(-50%);
    }
  }

  > label {
    margin-top: 16px;
    background: white;
    padding-left: 16px;
    font-size: 16px;
  }

  > button {
    margin-top: 52px;
    margin-bottom: 16px;
  }
`;

export { Tag };