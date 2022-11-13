import React from "react";
import styled from "styled-components";
import FilterSort from "../components/FilterSort";
import MusicAlbums from "../components/MusicAlbums";

const MusicRecords = () => {
  return (
    <Wrapper>
      <Wrapperfilte>
        <FilterSort />
      </Wrapperfilte>
      <div style={{border:"1px solid blue",  width: "100%", display:"grid",  gridTemplateColumns: "repeat(auto-fit, minmax(200px, max-content))"}}>
        <MusicAlbums />
      </div>
    </Wrapper>
  );
};
// styled
const Wrapper = styled.div`
  border: 1px solid red;
  display: flex;
  height: 100vh;
`;
const Wrapperfilte = styled.div`
  border: 1px solid black;
  width: 200px;
`;
// const WrapperMusicAlbum = styled.div`
//   border: 10px solid blue;
//   width: 100%;
//   dispaly: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
//   justify-content: center;
//   grid-gap: 10px;
// `;


export default MusicRecords;
