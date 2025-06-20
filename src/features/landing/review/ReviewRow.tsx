import { SectionLayout } from "../SectionLayout";
import type { ReviewItemProps } from "./ReviewItem";
import { ReviewItem } from "./ReviewItem";

export type ReviewRowProps = {
  reviews: ReviewItemProps[];
};

export const ReviewRow = (props: ReviewRowProps) => {
  return (
    <SectionLayout className="m-auto max-w-7xl columns-1 gap-4">
      {props.reviews.map((review) => (
        <ReviewItem
          {...review}
          key={review.image}
          className="mb-4 break-inside-avoid-column p-6"
        />
      ))}
    </SectionLayout>
  );
};
