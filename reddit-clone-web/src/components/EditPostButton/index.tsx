// Hooks
import { useRouter } from 'next/router';

// Components
import { IconButton } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';

// Types
import { Post } from '../../generated/graphql';
import { SpaceProps } from '@chakra-ui/react';

type Props = SpaceProps & {
  post: Pick<Post, 'id'>;
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
