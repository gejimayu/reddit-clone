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

  const onClickUpvote = (point: number) => {
    upvote({
      variables: { postId: post.id, point },
      update(cache) {
        const data = cache.readFragment<PostSnippetFragment>({
          id: 'Post:' + post.id,
          fragment: gql`
            fragment _ on Post {
              points
            }
          `,
        });
        if (data) {
          cache.writeFragment({
            id: 'Post:' + post.id,
            fragment: gql`
              fragment _ on Post {
                points
              }
            `,
            data: { points: data.points + point },
          });
        }
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
        onClick={() => onClickUpvote(1)}
        icon={<ChevronUpIcon />}
      />
      {post.points}
      <IconButton
        size="sm"
        fontSize="30px"
        aria-label="Downvote"
        marginTop="4px"
        onClick={() => onClickUpvote(-1)}
        icon={<ChevronDownIcon />}
      />
    </Flex>
  );
};

export default UpvoteSection;
