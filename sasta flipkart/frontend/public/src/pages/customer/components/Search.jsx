import React, { useRef } from "react";
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
  const imageInputRef = useRef(null);

  const handleSearch = async () => {
    await dispatch(getSearchedProducts("searchProduct", searchTerm));

    if (location.pathname !== "/ProductSearch") {
      navigate("/ProductSearch");
    }
  };

  const handleImageSearch = () => {
    // Handle image search logic here
    // You can access the selected file using imageInputRef.current.files
  };

  const handleImageUpload = () => {
    imageInputRef.current.click();
  };

  const handleVoiceSearch = () => {
    const recognition = new window.webkitSpeechRecognition(); // Use the Web Speech API

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchTerm(transcript);
      recognition.stop();
    };

    recognition.start();
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
      <VoiceSearchIconWrapper onClick={handleVoiceSearch}>
        <MicIcon sx={{ color: "#4d1c9c" }} />
      </VoiceSearchIconWrapper>
      <ImageSearchIconWrapper onClick={handleImageUpload}>
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          ref={imageInputRef}
          onChange={handleImageSearch}
        />
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
