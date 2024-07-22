import styled from "styled-components";
import { color, fontSize, radius, space } from "./tokens";

export const SWrapper = styled.div`
  position: relative;

  > form {
    position: relative;
  }
`;

export const SProvidedBy = styled.p`
  color: ${color.black500};
  font-size: ${fontSize.sm};
  bottom: ${space[40]};
  position: absolute;
  z-index: 50;
  right: 0;

  > a {
    color: ${color.black500};
    text-decoration: none;

    &:hover {
      color: ${color.black300};
    }
  }
`;

export const SLabelPrefix = styled.label`
  left: calc(${space[15]} - 3px);
  position: absolute;
  top: 9px;
`;

export const SLabelSuffix = styled.label`
  right: calc(${space[15]} - 3px);
  position: absolute;
  cursor: pointer;
  top: 9px;
`;

export const SInput = styled.input`
  background-color: ${color.white198};
  border-radius: ${radius.md};
  font-size: ${fontSize.md};
  line-height: ${space[35]};
  padding: 0 ${space[45]};
  box-sizing: border-box;
  height: ${space[45]};
  box-shadow: none;
  width: 100%;
  outline: 0;
  border: 0;

  &:hover,
  &:focus {
    box-shadow: inset 0px 0px 0px 1px ${color.blue500};
  }
`;

export const SQueriesWrapper = styled.div`
  box-shadow: ${color.black500} 0px 10px 38px -10px;
  background-color: ${color.white100};
  border-radius: ${radius.md};
  margin-top: ${space[10]};
  padding: ${space[10]};
  position: absolute;
  max-height: 300px;
  right: 0;
  left: 0;
`;

export const SQueries = styled.div`
  flex-direction: column;
  row-gap: ${space[5]};
  display: flex;
`;

export const SQuery = styled.div`
  grid-template-columns: ${space[30]} 1fr auto;
  border-radius: ${radius.md};
  font-size: ${fontSize.md};
  column-gap: ${space[15]};
  justify-content: center;
  padding: ${space[10]};
  align-items: center;
  cursor: pointer;
  display: grid;

  &:hover {
    background-color: ${color.white300};
  }
`;

export const SQueryImage = styled.div`
  box-shadow: ${color.white500} 0px 3px 9px;
  border-radius: ${radius.md};
  height: ${space[30]};
  width: ${space[30]};
  position: relative;
  overflow: hidden;

  > img {
    position: absolute;
    height: 100%;
    width: 100%;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
  }
`;

export const SQueryName = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;

export const SQueryDomain = styled.p`
  color: ${color.black500};
`;

export const SNotFound = styled.div`
  padding: ${space[30]} 0 ${space[40]};
  text-align: center;
`;

export const SNotFoundIcon = styled.div`
  margin-bottom: ${space[20]};
  color: ${color.black500};
`;
export const SIconAndTextWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background: white;
`;

export const SIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

export const SText = styled.span`
  font-size: 1rem;
`;
export const SInputWrapper = styled.div`
  position: relative;
`;
