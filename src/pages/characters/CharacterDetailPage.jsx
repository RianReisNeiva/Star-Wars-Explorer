import BackButton from "../../components/BackButton";
import CharacterCard from "../../components/CharacterCard";
import Layout from "../../components/Layout";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CharacterCardSkeleton from "../../components/Skeleton/CharacterSkeleton";
import useSwapi from "../../hooks/useStarWarsService";

function CharacterDetailPage() {
  const { id } = useParams();
  const { data: character, loading, error } = useSwapi(`people/${id}`);
  const navigate = useNavigate();

  function back() {
    navigate("/");
  }

  if (loading) {
    return (
      <Layout>
        <BackButton onClick={back} />
        <CharacterCardSkeleton />
      </Layout>
    );
  }

  if (error || !character) {
    return (
      <Layout>
        <BackButton onClick={back} />
        <p>Personagem não encontrado.</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <BackButton onClick={back} />
      <CharacterCard character={character} />
    </Layout>
  );
}
export default CharacterDetailPage;