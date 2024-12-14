export const FavoriteSite = () => {
  const favoriteSite = {
    name: "Google",
    url: "https://www.google.com/",
  };

  return (
    <p className="favorite-site">
      Моє улюблене посилання: <a href={favoriteSite.url}>{favoriteSite.name}</a>
    </p>
  );
};
