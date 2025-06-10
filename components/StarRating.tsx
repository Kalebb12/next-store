import { Star, StarHalf } from 'lucide-react';

export default function StarRating({ rating }: { rating: number }) {
  const stars = [];

  for (let i = 1; i <= Math.ceil(rating); i++) {
    stars.push(
      <div key={i} className="relative w-5 h-5">
        {
          i <= rating ? <Star
          className="size-5"
          stroke='none'
          fill="#FFC633"
        /> : rating <= i + 0.5 ? <StarHalf className='size-5' stroke='none'
          fill="#FFC633" /> : null
        }
      </div>
    );
  }

  return <div className="flex gap-1">{stars} <span className="text-sm">- {rating}/5</span></div>;
}
