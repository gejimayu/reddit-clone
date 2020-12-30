// Components
import { Flex, IconButton } from '@chakra-ui/react';
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';

// Types
import { PostInfoFragment } from '../../generated/graphql';

type Props = {
  post: PostInfoFragment | null;
};

const UpvoteSection: React.FC<Props> = ({ post }) => {
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <IconButton
        size="sm"
        fontSize="30px"
        aria-label="Upvote"
        marginBottom="4px"
        icon={<ChevronUpIcon />}
      />
      {post?.points}
      <IconButton
        size="sm"
        fontSize="30px"
        aria-label="Downvote"
        marginTop="4px"
        icon={<ChevronDownIcon />}
      />
    </Flex>
  );
};

export default UpvoteSection;
