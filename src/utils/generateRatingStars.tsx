export const generateRatingStars = (rating: number) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={`full-${i}`}>&#9733;</span>);
  }

  if (hasHalfStar) {
    stars.push(<span key="half">&#9733;</span>);
  }

  const remainingStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);
  for (let i = 0; i < remainingStars; i++) {
    stars.push(<span key={`empty-${i}`}>&#9734;</span>);
  }

  return stars;
};
