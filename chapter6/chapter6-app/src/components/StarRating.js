import Star from './Star';

export default function StarRating({
  totalStars = 5,
  selectedStars = 0,
  style = {},
  ...props
}) {
  return (
      <div style={{padding: '5px', ...style}} {...props}>
        {[...Array(totalStars)].map((_, i) => (
                <Star
                    key={i}
                    selected={selectedStars > i}
                />
            ),
        )}
        <p>
          {selectedStars} of {totalStars} stars
        </p>
      </div>
  );
}
