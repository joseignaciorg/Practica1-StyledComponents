import styled from "styled-components";

const StyledDiv = styled.div`
    height:12.5rem; 
    width:12.5rem; 
    background-color:${props=>props.active ? 'red' : 'yellow'};
`;

export{StyledDiv}