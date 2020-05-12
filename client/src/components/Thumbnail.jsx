/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

const ImageDiv = styled.div`
    width: 2000px;
    margin: 6px;
    height: 9em;
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    cursor: pointer;
`;

const NameTag = styled.p`
    color:grey;
`

const Thumbnail = props => (
    console.log(props, 'props'),

    <ImageDiv>
        <Image src={props.image.small} onClick={props.clickHandlerOnModalDisplay} index={props.index} />
            <p style={{color:'red'}}>{props.userName}</p>
    </ImageDiv>
);

export default Thumbnail;
