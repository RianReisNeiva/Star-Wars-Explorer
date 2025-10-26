import BackButton from "../../components/BackButton";
import FilmCard from "../../components/FilmCard";
import Layout from "../../components/Layout";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FilmCardSkeleton from "../../components/Skeleton/FilmCardSkeleton";
import useSwapi from "../../hooks/useStarWarsService";

function FilmDetailPage() {
  const { id } = useParams();
  const { data: film, loading, error } = useSwapi(`films/${id}`);
  const navigate = useNavigate();

  function back() {
    navigate("/");
  }

  if (loading) {
    return (
      <Layout>
        <BackButton onClick={back} />
        <FilmCardSkeleton />
      </Layout>
    );
  }

  if (error || !film) {
    return (
      <Layout>
        <BackButton onClick={back} />
        <p>Filme não encontrado.</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <BackButton onClick={back} />
      <FilmCard film={film} />
    </Layout>
  );
}
export default FilmDetailPage;