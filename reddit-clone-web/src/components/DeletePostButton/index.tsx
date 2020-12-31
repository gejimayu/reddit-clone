// Hooks
import { useDeletePostMutation } from '../../generated/graphql';

// Components
import { IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

// Types
import { PostSnippetFragment } from '../../generated/graphql';

type Props = {
  post: PostSnippetFragment;
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
