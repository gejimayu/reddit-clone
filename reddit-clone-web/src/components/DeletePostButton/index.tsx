// Hooks
import { useDeletePostMutation } from '../../generated/graphql';

// Components
import { IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

// Types
import { Post } from '../../generated/graphql';

type Props = {
  post: Pick<Post, 'id' | '__typename'>;
};

const DeletePostButtons: React.FC<Props> = ({ post }) => {
  const [deletePost, { loading: isDeletePostLoading }] = useDeletePostMutation({
    variables: { id: post.id },
    update(cache) {
      cache.evict({ id: cache.identify(post) });
    },
  });

  return (
    <IconButton
      icon={<DeleteIcon />}
      aria-label="Delete post"
      colorScheme="red"
      isLoading={isDeletePostLoading}
      onClick={() => {
        deletePost();
      }}
    />
  );
};

export default DeletePostButtons;
