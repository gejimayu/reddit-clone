// Hooks
import { useUpvoteMutation } from '../../generated/graphql';

// Components
import { Flex, IconButton } from '@chakra-ui/react';
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';

// Utils
import { gql } from '@apollo/client';

// Types
import { PostSnippetFragment } from '../../generated/graphql';

type Props = {
  post: PostSnippetFragment;
};

const UpvoteSection: React.FC<Props> = ({ post }) => {
  const [upvote] = useUpvoteMutation();

  const onClickUpvote = (point: 1 | -1) => {
    const didUserUpvoteDifferently = post.voteStatus !== point;
    upvote({
      variables: { postId: post.id, point },
      optimisticResponse: {
        __typename: 'Mutation',
        upvote: {
          id: post.id,
          __typename: 'Post',
          voteStatus: didUserUpvoteDifferently ? point : 0,
          points: didUserUpvoteDifferently
            ? post.points + point
            : post.points + point * -1,
        },
      },
    });
  };

  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <IconButton
        size="sm"
        fontSize="30px"
        aria-label="Upvote"
        marginBottom="4px"
        colorScheme={post.voteStatus === 1 ? 'teal' : 'gray'}
        onClick={() => onClickUpvote(1)}
        icon={<ChevronUpIcon />}
      />
      {post.points}
      <IconButton
        size="sm"
        fontSize="30px"
        aria-label="Downvote"
        marginTop="4px"
        colorScheme={post.voteStatus === -1 ? 'red' : 'gray'}
        onClick={() => onClickUpvote(-1)}
        icon={<ChevronDownIcon />}
      />
    </Flex>
  );
};

export default UpvoteSection;
