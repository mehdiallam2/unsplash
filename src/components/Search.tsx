import { ReactTyped } from "react-typed";

const Search = () => {
  return (
    <div className="search">
      <div className="search-container">
        <h1 className="search-title">
          <ReactTyped
            strings={[
              "Which type of images are u looking for",
              "Which categories of pictures are u searching for",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
            showCursor={false}
            fadeOut
          />
        </h1>
        <div className="search-bar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="search-bar-search-icon"
          >
            <path
              fill="currentColor"
              d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
            ></path>
          </svg>
          <input
            type="text"
            name="search"
            id="input"
            className="search-input"
            placeholder="What are you looking for?"
          />
          <button type="button" className="search-delete">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path
                fill="currentColor"
                d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
