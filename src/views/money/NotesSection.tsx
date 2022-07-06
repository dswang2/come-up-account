import styled from "styled-components";

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

export {NotesSection}