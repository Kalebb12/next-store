import { Star, StarHalf } from 'lucide-react';

export default function StarRating({ rating }: { rating: number }) {
  const stars = [];

  for (let i = 1; i <= Math.round(rating); i++) {
    stars.push(
      <div key={i} className="relative w-5 h-5">
        {
          i < rating ? <Star
          className="size-5"
          stroke='none'
          fill="yellow"
        /> : i == rating + 0.5 ? <StarHalf className='size-5' stroke='none'
          fill="yellow" /> : null
        }
      </div>
    );
  }

  return <div className="flex gap-1">{stars} - {rating} / 5</div>;
}
