import { useEffect, useState } from "react";
import Image from "./Image";

import axios from "axios";
import { Data } from "../types";
import InfiniteScroll from "react-infinite-scroll-component";

const Gallery = () => {
  const [images, setImages] = useState<Data[]>([]);
  const [columns, setColumns] = useState<Data[][]>([[]]);
  const [isLoading, setIsLoading] = useState(true);

  async function getImages() {
    try {
      await axios
        .get(
          "https://api.unsplash.com/photos?client_id=CdK_VLqU0tr0tuoSX7_-Cwe9pSwaLHQZXDpzIzRNtuo"
        )
        .then((response) => {
          setImages([...images, ...response.data]);
          setIsLoading(false);
          console.log(response);
        });
    } catch (error) {
      console.error(error);
    }
  }
  async function getRandomImages() {
    try {
      await axios
        .get(
          "https://api.unsplash.com/photos/random?client_id=CdK_VLqU0tr0tuoSX7_-Cwe9pSwaLHQZXDpzIzRNtuo&count=9"
        )
        .then((response) => {
          setImages([...images, ...response.data]);
          setIsLoading(false);
          console.log(response);
        });
    } catch (error) {
      console.error(error);
    }
  }

  function createGridColumns(array: Data[], size: number) {
    const fillers = [];

    for (let i = 0; i < size; i++) {
      fillers.push([]);
    }

    return array.reduce((ac: Data[][], value, index) => {
      const colIdx = index % size;
      ac[colIdx].push(value);
      return ac;
    }, fillers);
  }

  useEffect(() => {
    getImages();
  }, []);

  useEffect(() => {
    setColumns(createGridColumns(images, 3));
  }, [images]);

  return (
    <InfiniteScroll
      dataLength={images.length}
      next={getRandomImages}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <div className="gallery">
        {columns.map((columnImages) => (
          <div className="column">
            {columnImages.map((image: Data) => (
              <Image data={image} loading={isLoading} />
            ))}
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Gallery;
