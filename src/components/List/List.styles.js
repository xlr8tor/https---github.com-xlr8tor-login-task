import styled from "styled-components";

export const Container = styled.div`
  &.content__wrapper {
    display: flex;
    flex-direction: column;
    color: var(--theme-color);
    padding: 20px 40px;
    height: 100%;
    overflow: auto;
  }
`;

export const Wrapper = styled.ul`
  &.list {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: space-around;
    background-color: #9297b321;
    padding-left: 0;
    margin: 0;
    border-radius: 14px;
    cursor: pointer;
    overflow: hidden;
  }

  .list__item {
    padding: 10px 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    width: 100%;
    height: 100%;
    white-space: nowrap;
    transition: 0.3s;
  }

  .list__item:hover {
    background-color: var(--theme-bg-color);
  }

  .list__item + .list__item {
    border-top: 1px solid var(--border-color);
  }

  .btn {
    appearance: none;
    border: none;
    background-color: #9b111e;
    color: var(--loginColor);
    padding: 8px 24px;
    font-size: 15px;
    font-weight: 700;
    border-radius: 20px;
    white-space: nowrap;
    cursor: pointer;
  }

  .status {
    display: inline-block;
    border: 1px solid #10121b66;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    vertical-align: text-bottom;
    margin-inline: 0 12px;
  }
`;
