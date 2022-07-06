import styled from "styled-components";
import { Layout } from "../components/Layout";

const Money = () => {
    return (
        <Layout>
            <TagsSection>
                <ol>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                </ol>
                <button>新增标签</button>
            </TagsSection>
            <NotesSection>
                <label>
                    <span>备注</span>
                    <input type="text" placeholder={"在这里添加备注"}/>
                </label>
            </NotesSection>
            <CategorySection>
                <ul>
                    <li className={"selected"}>支出</li>
                    <li>收入</li>
                </ul>
            </CategorySection>
            <NumberPadSection>
                <div>100</div>
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
                <button>OK</button>
                <button>0</button>
                <button>.</button>
            </NumberPadSection>
        </Layout>
    );
}

const TagsSection = styled.section`
  background: #FFFFFF;
  padding: 12px 16px;

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

const NotesSection = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  > label{
    display: flex;
    align-items: center;
    justify-content: center;
    >span{
      font-size: 16px;
      margin-right: 16px;
      white-space: nowrap;
    }
    >input{
      display: block; // 宽度可以顶一整行，默认另一起行
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`;
const CategorySection = styled.section`
    >ul{
      display: flex;
      background: #c4c4c4;
      font-size: 24px;
      >li{
        width: 50%;
        text-align: center;
        padding: 16px 0;
        position: relative;
        &.selected::after{
          content: '';
          display: block;
          height: 3px;
          background: #333;
          position: absolute;
          bottom: 0px;
          width: 100%;
          left: 0;
        }
      }
    }
`;
const NumberPadSection = styled.section`
`;
export {Money};