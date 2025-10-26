import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "../components/Layout";
import FilmCardSkeleton from "../components/Skeleton/FilmCardSkeleton";
import CharacterCardSkeleton from "../components/Skeleton/CharacterSkeleton";
import FilmListPage from "../pages/films/FilmListPage";

const FilmDetailPage = lazy(() => import("../pages/films/FilmDetailPage"));
const CharacterDetailPage = lazy(
  () => import("../pages/characters/characterDetailPage")
);

const FilmFallback = (
  <Layout>
    <FilmCardSkeleton />
  </Layout>
);

const CharacterFallback = (
  <Layout>
    <CharacterCardSkeleton />
  </Layout>
);

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FilmListPage />} />
        <Route
          path="/films/:id"
          element={
            <Suspense fallback={FilmFallback}>
              <FilmDetailPage />
            </Suspense>
          }
        />
        <Route
          path="/people/:id"
          element={
            <Suspense fallback={CharacterFallback}>
              <CharacterDetailPage />
            </Suspense>
          }
        />
        <Route path="*" element={<h2>Página não encontrada</h2>} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;