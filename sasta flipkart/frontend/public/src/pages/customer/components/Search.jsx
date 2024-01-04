import React from "react";
import ReactDOM from "react-dom";
import { InputBase, Box, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic"; 
import ImageSearchIcon from "@mui/icons-material/ImageSearch"; 
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearchedProducts } from "../../../redux/userHandle";

const Search = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    dispatch(getSearchedProducts("searchProduct", searchTerm));

    if (location.pathname !== "/ProductSearch") {
      navigate("/ProductSearch");
    }
  };

  return (
    <SearchContainer>
      <InputSearchBase
        placeholder="Search for products, brands and more"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
     <SearchIconWrapper onClick={handleSearch}>
        <SearchIcon sx={{ color: "#4d1c9c" }} />
     </SearchIconWrapper>
      <VoiceSearchIconWrapper>
        <MicIcon sx={{ color: "#4d1c9c" }} />
      </VoiceSearchIconWrapper>
      <ImageSearchIconWrapper>
        <ImageSearchIcon sx={{ color: "#4d1c9c" }} />
      </ImageSearchIconWrapper>
    </SearchContainer>
  );
};

const SearchContainer = styled(Box)`
  border-radius: 2px;
  margin-left: 10px;
  width: 38%;
  background-color: #fff;
  display: flex;
`;

const SearchIconWrapper = styled(Box)`
  padding: 5px;
  display: flex;
  color: blue;
`;

const VoiceSearchIconWrapper = styled(Box)`
  padding: 5px;
  display: flex;
  color: blue;
`;

const ImageSearchIconWrapper = styled(Box)`
  padding: 5px;
  display: flex;
  color: blue;
`;

const InputSearchBase = styled(InputBase)`
  font-size: unset;
  width: 100%;
  padding-left: 20px;
`;

export default Search;
