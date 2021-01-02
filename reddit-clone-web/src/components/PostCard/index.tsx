// Components
import UpvoteSection from '../UpvoteSection';
import DeletePostButtons from '../DeletePostButton';
import EditPostButtons from '../EditPostButton';
import { Box, Heading, Text, Flex, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

// Types
import { PostSnippetFragment } from '../../generated/graphql';

type Props = {
  post: PostSnippetFragment;
  showEditDeleteButton: boolean;
};

const PostCard: React.FC<Props> = ({ post, showEditDeleteButton }) => {
  return (
    <Flex>
      <UpvoteSection post={post} />
      <Box marginLeft="15px" width="100%">
        <NextLink href="post/[postId]" as={`/post/${post.id}`}>
          <Link>
            <Heading fontSize="xl">{post.title}</Heading>
          </Link>
        </NextLink>
        <Text>Posted by {post.creator.username}</Text>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          marginTop="16px"
        >
          <Text>{post.textSnippet}...</Text>
          {showEditDeleteButton && (
            <Flex>
              <EditPostButtons post={post} marginRight="15px" />
              <DeletePostButtons post={post} />
            </Flex>
          )}
        </Flex>
      </Box>
    </Flex>
  );
};

export default PostCard;
