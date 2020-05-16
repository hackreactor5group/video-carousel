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

    <ImageDiv>
        <Image src={props.image.small} onClick={props.clickHandlerOnModalDisplay} index={props.index} />
            <NameTag>{props.userName}</NameTag>
    </ImageDiv>
);

export default Thumbnail;
