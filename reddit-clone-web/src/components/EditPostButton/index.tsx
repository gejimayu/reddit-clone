// Hooks
import { useRouter } from 'next/router';

// Components
import { IconButton } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';

// Types
import { PostSnippetFragment } from '../../generated/graphql';
import { SpaceProps } from '@chakra-ui/react';

type Props = SpaceProps & {
  post: PostSnippetFragment;
};

const EditPostButtons: React.FC<Props> = ({ post, ...styles }) => {
  const router = useRouter();
  return (
    <IconButton
      {...styles}
      icon={<EditIcon />}
      aria-label="Delete post"
      colorScheme="gray"
      onClick={() => {
        router.push(`/post/edit/${post.id}`);
      }}
    />
  );
};

export default EditPostButtons;
