import { useState, useEffect } from "react";
import useFetchData from "../hooks/useFetchData";

import Box from "@mui/material/Box";

import ItemsList from "../components/ItemsList";
import Navbar from "../Layout/Navbar";
import ItemCard from "../components/ItemCard";

const Home = () => {
  const [games, setGames] = useState("");

  const API_KEY = "65083ee5f1d34df9bc632f8101ba5bae";

  const { data, isLoading, error } = useFetchData(
    `https://api.rawg.io/api/games?key=${API_KEY}`
  );

  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const availablePlatform = () => {
    const platformsList = data.map((item) => {
      item.parent_platforms;
    });
    return platformsList;
  };
  availablePlatform();
  // console.log(pare);

  return (
    <div style={{ backgroundColor: "gray" }}>
      {isLoading && <div>Loading...</div>}
      <Navbar />
      <Box
        sx={{
          display: "grid",
          gridAutoColumns: "2fr",
          gap: 1,
        }}
      >
        <Box sx={{ gridRow: "1", gridColumn: "1 / 2" }}></Box>
        <Box sx={{ gridRow: "1", gridColumn: "2 / 5" }}>
          {data &&
            data.map((game) => {
              return (
                <ItemCard
                  platforms={plaformsList}
                  key={game.id}
                  image={game.background_image}
                  title={game.name}
                />
              );
            })}
        </Box>
        <Box
          sx={{ gridRow: "1", gridColumn: "5 / 6" }}
          style={{
            maxHeight: 600,
            overflow: "auto",
            width: "100%",
            itemCount: 20,
            overscanCount: 5,
          }}
        >
          {/* {data &&
            data.map((game) => {
              return (
                <ItemsList
                  key={game.gameId}
                  title={game.title}
                  price={game.salePrice}
                />
              );
            })} */}
        </Box>
      </Box>
    </div>
  );
};

export default Home;
