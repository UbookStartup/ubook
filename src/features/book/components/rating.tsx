/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from 'react';
/* eslint-disable react/jsx-key */
interface RatingProps {
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export const Rating: FC<RatingProps> = ({ rating, setRating }) => {
  const [hoverRating, setHoverRating] = useState(0);
  const getColor = (i: number) => {
    if (hoverRating >= i + 1 && i >= rating) {
      return 'bg-primary/50';
    }
    if (!!hoverRating && hoverRating <= i && i + 1 <= rating) {
      return 'bg-primary/50';
    }
    return '';
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center">
        {[...new Array(5)].map((_, i) => (
          <>
            <input
              type="button"
              className={`h-4 w-4 rounded-full transition-all ${
                i > rating - 1
                  ? 'bg-primary/30 hover:bg-primary/50'
                  : 'bg-primary'
              } ${getColor(i)}`}
              onClick={() => setRating(i + 1)}
              onMouseEnter={() => setHoverRating(i + 1)}
              onMouseLeave={() => setHoverRating(0)}
            />
            {i !== 4 && (
              <div
                className={`h-px w-7 transition-all ${
                  i > rating - 2 ? 'bg-primary/30' : 'bg-primary'
                } ${getColor(i + 1)}`}
                onMouseEnter={() => setHoverRating(i + 1)}
                onMouseLeave={() => setHoverRating(0)}
              />
            )}
          </>
        ))}
      </div>
    </div>
  );
};
