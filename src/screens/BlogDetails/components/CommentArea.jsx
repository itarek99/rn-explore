import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import RenderHtml from 'react-native-render-html';
import {useGetCommentsQuery} from '../../../features/comment/commentApi';
import CommentBox from './CommentBox';

const CommentArea = ({postId}) => {
  const {width} = useWindowDimensions();
  const {data, isLoading} = useGetCommentsQuery(postId);

  const tagsStyles = {
    p: {
      margin: 0,
      fontSize: 15,
    },
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000000" />
      </View>
    );
  }

  return (
    <View style={styles.commentContainer}>
      <Text style={styles.title}>Comments</Text>
      <View>
        {data &&
          data.map(comment => (
            <View style={styles.commentItem} key={comment.id}>
              <View style={styles.commentItemHeader}>
                <Text style={styles.commentAuthorName}>
                  {comment.author_name}
                </Text>
              </View>
              <RenderHtml
                contentWidth={width}
                source={{html: comment.content.rendered}}
                tagsStyles={tagsStyles}
              />
            </View>
          ))}
      </View>
      <CommentBox postId={postId} />
    </View>
  );
};

export default CommentArea;

const styles = StyleSheet.create({
  loadingContainer: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  commentContainer: {
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    marginBottom: 4,
    fontWeight: 'bold',
  },

  commentAuthorName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },

  commentItem: {
    marginVertical: 6,
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 10,
  },

  commentItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
