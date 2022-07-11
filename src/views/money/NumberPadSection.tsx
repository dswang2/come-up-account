import { useState } from "react";
import styled from "styled-components";

type Props = {
    children?: React.ReactNode;
}

const NumberPadSection: React.FunctionComponent<Props> = (props) => {
    // 数字
    const [outPut, _setOutPut] = useState('0');
    const setOutPut = (output:string) => {
        if (output.length > 16) {
            _setOutPut(output.slice(0, 16));
        } else if (output.length === 0) {
            _setOutPut('0');
        }else {
            _setOutPut(output);
        }
    }
    const onClickButtonWrapper = (e: React.MouseEvent<HTMLDivElement>) => {
        const text = (e.target as HTMLButtonElement).textContent;
        if (!text) return;
        switch (text) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
                if (outPut === '0') {
                    setOutPut(text);
                } else {
                    setOutPut(outPut + text);
                }
                break;
            case '.':
                if (outPut.indexOf('.') >= 0) {
                    return;
                }
                setOutPut(outPut + text);
                break;
            case 'ok':
                break;
            case '删除':
                console.log("ddsw--")
                if (outPut.length === 1) {
                    setOutPut('');
                } else {
                    setOutPut(outPut.slice(0, -1));
                }
                break
            case '清空':
                console.log("ddsw1--")
                setOutPut('');
                break;
        }
    }
    return (<Wrapper>
        <div className={"output"}>{outPut}</div>
        <div className={"pad clearfix"} onClick={onClickButtonWrapper}>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>删除</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>清空</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button className={"ok"}>OK</button>
            <button className={"zero"}>0</button>
            <button>.</button>
        </div>
    </Wrapper>);
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  & .output {
    background: white;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25), inset 0 5px 5px -5px rgba(0, 0, 0, 0.25);
  }

  & .pad {
    >button{
      float: left;
      width: 25%;
      height: 64px;
      font-size: 18px;
      border: none;

      &.ok{
        height: 128px;
        float: right;
      }

      &.zero{
        width: 50%;
      }

      &:nth-child(1){
        background: #F2F2F2;

      }

      &:nth-child(2),
      &:nth-child(5){
        background: #E0E0E0;
      }

      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9){
        background: #D3D3D3;
      }

      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10){
        background: #B8B8B8;
      }

      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13){
        background: #A9A9A9;
      }

      &:nth-child(12) {
        background: #8B8B8B;
      }

      &:nth-child(14){
        background: #9A9A9A;
      }
    }
  }
`;

export {NumberPadSection}