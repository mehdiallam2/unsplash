import { Blurhash } from "react-blurhash";
import { Data } from "../types";

const Image = ({ data, loading }: { data: Data; loading: boolean }) => {
  return (
    <div className="card">
      <div className="overlay"></div>
      {loading ? (
        <Blurhash hash={data.blur_hash} />
      ) : (
        <img src={data.urls.regular} alt={data.alt_description} />
      )}

      <a
        className="card-download"
        href={`${data.links.download}&force=true`}
        download={data.alt_description}
        title={data.description}
      >
        <svg
          className="card-download-svg"
          viewBox="0 0 24 24"
          version="1.1"
          aria-hidden="false"
        >
          <desc lang="en-US">Arrow pointing down</desc>
          <path d="m19.35 11.625-5.85 5.4V1.5h-3v15.525l-5.85-5.4-2.025 2.25L12 22.425l9.375-8.55-2.025-2.25Z"></path>
        </svg>
      </a>
    </div>
  );
};

export default Image;
