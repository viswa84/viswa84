import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import getMusicRecord from "../redux/action";

const MusicAlbums = () => {
  const dispatch = useDispatch();
  const [searchParams]=useSearchParams()
  const musicRecords = useSelector((store) => store.musicRecords);
     const location = useLocation()
  useEffect(() => {
     if(location || musicRecords.length === 0){
        const genre = searchParams.getAll("genre")
        const queryParmes={
            params:{
                genre:genre,
                _sort:searchParams.get("sortBy") && "year",
                _order: searchParams.get("sortBy")
            }
            
        }
        dispatch(getMusicRecord(queryParmes ));


     }
  }, [location.search]);

  return (
    <>
      {musicRecords.length > 0 &&
        musicRecords.map((album) => {
          return (
            <div key={album.id}>
              <div> {album.name}</div>
              <div>
                <img src={album.img} alt={album.name} />
              </div>
              <div> {album.genre}</div>
              <div> {album.year}</div>
            </div>
          );
        })}
    </>
  );
};

export default MusicAlbums;
