import styled from "styled-components";

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

    // max-width 表示后面的属性最大适合的高度是 800px
    // max-width 表示针对 800px 以下的设备增加的css效果
    @media (max-height: 800px ){
      >button{
        height: 40px;
        &.ok{
          height: 80px;
        }
      }
    }
  }
`;

export {Wrapper};