import { Skeleton, SkeletonText } from '@chakra-ui/react';

const PostCardSkeleton: React.FC<Props> = () => {
  return (
    <>
      <Skeleton height="24px" />
      <SkeletonText marginTop="5px" noOfLines={1} width="10%" />
      <SkeletonText marginTop="16px" noOfLines={2} />
    </>
  );
};

export default PostCardSkeleton;
