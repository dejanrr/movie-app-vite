import { useContext, useEffect } from "react";
/* import { useSearchData } from "../../services/movieServiceHooks"; */
import { Drawer, ConfigProvider, theme } from "antd";
import { MovieContext } from "../../Context/MovieContext";
import SearchResult from "../searchResult/SearchResult";
import "./searchDrawer.css";

const SearchDrawer = () => {
  const {
    handleSubmit,
    searchQuery,
    setSearchQuery,
    drawerVisible,
    setDrawerVisible,
    searchResults,
  } = useContext(MovieContext);

  /*   const { data: searchData, status } = useSearchData(searchQuery); */

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  /*   const handleInputSubmit = (e) => {
    e.preventDefault();

    if (searchQuery) {
      console.log(searchData);
    }
  }; */

  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgBase: "#343434",
        },
      }}
    >
      <Drawer
        title="Search Movies"
        placement="right"
        closable={true}
        visible={drawerVisible}
        open={drawerVisible}
        onClose={() => {
          setDrawerVisible(false);
        }}
      >
        <form onSubmit={handleSubmit}>
          <input
            value={searchQuery}
            onChange={handleInputChange}
            type="text"
            className="search-input"
            placeholder="Search movies..."
          />
        </form>
        {searchResults
          ? searchResults?.results?.map((movie) => (
              <SearchResult movie={movie} {...movie} />
            ))
          : ""}
      </Drawer>
    </ConfigProvider>
  );
};

export default SearchDrawer;
