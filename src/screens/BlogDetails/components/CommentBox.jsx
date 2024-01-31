import React, {useState} from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {useAddCommentMutation} from '../../../features/comment/commentApi';

const CommentBox = ({postId}) => {
  const [newCommentText, setNewCommentText] = useState('');
  const token = useSelector(state => state.user.token);
  const [postComment, {isLoading}] = useAddCommentMutation();

  const handlePostComment = async () => {
    try {
      const result = await postComment({
        body: {
          post: postId,
          content: newCommentText,
        },
        token,
      }).unwrap();

      if (result.id) {
        setNewCommentText('');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.newCommentContainer}>
      <TextInput
        value={newCommentText}
        placeholder="Think Twice, Comment Once"
        style={styles.commentInput}
        multiline={true}
        onChangeText={text => setNewCommentText(text)}
      />
      {!isLoading ? (
        <Pressable onPress={handlePostComment} style={styles.button}>
          <Text style={styles.buttonText}>Post Comment</Text>
        </Pressable>
      ) : (
        <View style={styles.button}>
          <ActivityIndicator size="small" color="#ffffff" />
        </View>
      )}
    </View>
  );
};

export default CommentBox;

const styles = StyleSheet.create({
  newCommentContainer: {
    marginTop: 10,
  },

  commentInput: {
    borderWidth: 1,
    borderColor: '#d5d5d5',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 8,
    height: 100,
    textAlignVertical: 'top',
  },

  button: {
    backgroundColor: '#000000',
    padding: 16,
    borderRadius: 10,
    marginTop: 10,
  },

  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
