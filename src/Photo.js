import React from "react";

function Photo({ PhotoData }) {
  return (
    <div>
      {PhotoData.filter((items) => {
        return items.albumId <= 5;
      })}
    </div>
  );
}

export default Photo;
