import { useState } from "react";
import CardNeon from "../../components/CardNeon";
import Layout from "../../components/Layout";
import Search from "../../components/Search";
import "../../styles/global.css";
import CardNeonSkeleton from "../../components/Skeleton/CardNeonSkeleton";
import useSwapi from "../../hooks/useStarWarsService";

function FilmListPage() {
  const { data: films, loading, error } = useSwapi("films");
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchChange(e) {
    setSearchTerm(e.target.value);
  }

  const filteredFilms = (films || []).filter((film) =>
    film.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (error) {
    return (
      <Layout>
        <Search value={searchTerm} onChange={handleSearchChange} />
        <p style={{ color: "red", textAlign: "center" }}>
          Erro ao carregar os filmes.
        </p>
      </Layout>
    );
  }

  if (loading) {
    return (
      <Layout>
        <Search value={searchTerm} onChange={handleSearchChange} />
        <div className="list">
          {Array.from({ length: 6 }, (_, index) => (
            <CardNeonSkeleton key={index} />
          ))}
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Search value={searchTerm} onChange={handleSearchChange} />
      <div className="list">
        {filteredFilms.map((film) => (
          <CardNeon key={film.url} film={film} />
        ))}
      </div>
    </Layout>
  );
}
export default FilmListPage;