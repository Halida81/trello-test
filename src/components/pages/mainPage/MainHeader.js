import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { useSelector } from "react-redux";

const Container = styled.header`
  background-color: rgb(240, 255, 255);
  margin: 0 auto;

  img {
    width: 85px;
    height: 50px;
    margin-left: 20px;
  }

  input {
    outline: none;
    margin-left: 470px;
    height: 30px;
    width: 200px;
    border-radius: 3px;
    color: rgb(0, 33, 71);
  }
  input:active,
  input:focus,
  input:hover {
    border-color: blue;
  }
  nav {
    display: flex;
  }
  > nav ul {
    display: flex;
    justify-content: space-around;
    width: 90%;
    align-items: center;
  }

  li {
    list-style: none;
  }
  li:hover {
    color: blue;
  }
  .autocomplete {
    position: absolute;
    flex-direction: column;
    margin: 0;
    padding: 0;
    left: 81.5rem;
    top: 50px;
    width: 13.5%;
    background-color: red;
    box-shadow: 1px 1px 5px rgb(0, 0, 0, 0.15);
    z-index: 111;
    max-height: 240px;
    height: auto;
    overflow: auto;
  }
  .autocomplete_item {
    padding: 10px;
    &:hover {
      background-color: rgb(180, 180, 180);
      cursor: pointer;
      transition: cubic-bezier(1, 0, 0, 1) 0.3s all;
    }
  }
  select {
    border: none;
    outline: none;
    color: rgb(0, 33, 71);
  }
`;

const MainHeader = () => {
  const items = useSelector((state) => state.column.items);
  const [searchInput, setSearchInput] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  let filteredItems = items.filter((item) => {
    return item.title.toLowerCase().includes(searchInput.toLowerCase());
  });

  const itemClickHandler = (e) => {
    setSearchInput(e.target.textContent);
    setIsOpen(!isOpen);
  };

  const inputClickHandler = () => {
    setIsOpen(true);
  };
  console.log(searchInput);
  return (
    <Container>
      <nav>
        <ul>
          <span
            style={{ color: " rgb(0, 33, 71)" }}
            role="img"
            aria-label="ApplicationSwitcherIcon"
          >
            <svg
              width="24"
              height="24"
              role="presentation"
              focusable="false"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 5C4 4.44772 4.44772 4 5 4H7C7.55228 4 8 4.44772 8 5V7C8 7.55228 7.55228 8 7 8H5C4.44772 8 4 7.55228 4 7V5ZM4 11C4 10.4477 4.44772 10 5 10H7C7.55228 10 8 10.4477 8 11V13C8 13.5523 7.55228 14 7 14H5C4.44772 14 4 13.5523 4 13V11ZM11 4C10.4477 4 10 4.44772 10 5V7C10 7.55228 10.4477 8 11 8H13C13.5523 8 14 7.55228 14 7V5C14 4.44772 13.5523 4 13 4H11ZM10 11C10 10.4477 10.4477 10 11 10H13C13.5523 10 14 10.4477 14 11V13C14 13.5523 13.5523 14 13 14H11C10.4477 14 10 13.5523 10 13V11ZM17 4C16.4477 4 16 4.44772 16 5V7C16 7.55228 16.4477 8 17 8H19C19.5523 8 20 7.55228 20 7V5C20 4.44772 19.5523 4 19 4H17ZM16 11C16 10.4477 16.4477 10 17 10H19C19.5523 10 20 10.4477 20 11V13C20 13.5523 19.5523 14 19 14H17C16.4477 14 16 13.5523 16 13V11ZM5 16C4.44772 16 4 16.4477 4 17V19C4 19.5523 4.44772 20 5 20H7C7.55228 20 8 19.5523 8 19V17C8 16.4477 7.55228 16 7 16H5ZM10 17C10 16.4477 10.4477 16 11 16H13C13.5523 16 14 16.4477 14 17V19C14 19.5523 13.5523 20 13 20H11C10.4477 20 10 19.5523 10 19V17ZM17 16C16.4477 16 16 16.4477 16 17V19C16 19.5523 16.4477 20 17 20H19C19.5523 20 20 19.5523 20 19V17C20 16.4477 19.5523 16 19 16H17Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>

          <img
            alt="Trello"
            src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/167dc7b9900a5b241b15ba21f8037cf8/trello-logo-blue.svg"
          ></img>
          <select>
            <option>Working space</option>
          </select>
          <select>
            <option>Recent</option>
          </select>
          <select>
            <option>Favorites</option>
          </select>
          <select>
            <option>Templates</option>
          </select>
          <select>
            <option>Сreate</option>
          </select>
        </ul>
        <ul>
          <input
            type="text"
            placeholder="search..."
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
            onClick={inputClickHandler}
          />
          <span className="autocomplete" onClick={itemClickHandler}>
            {searchInput && isOpen
              ? filteredItems.map((item) => {
                  return (
                    <div key={item.id}>
                      <li className="autocomplete_item">{item.title}</li>
                    </div>
                  );
                })
              : null}
          </span>

          <AiOutlineSearch
            style={{
              fontSize: "30px",
              marginLeft: "-90px",
              color: "rgb(0, 33, 71)",
            }}
          />
        </ul>
      </nav>
    </Container>
  );
};
export default MainHeader;
