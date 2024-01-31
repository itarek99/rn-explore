import React from 'react';
import {ScrollView, StyleSheet, Text, useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';
import CommentArea from './components/CommentArea';

const BlogDetails = ({route}) => {
  const {item} = route.params;
  const {width} = useWindowDimensions();

  const tagStyles = {
    p: {
      fontSize: 16,
    },
    img: {
      resizeMode: 'contain',
    },
    h2: {
      fontSize: 30,
      fontWeight: 'bold',
    },

    figure: {
      margin: 0,
      width: width - 20,
      overflow: 'hidden',
      padding: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>{item.title.rendered}</Text>
      <RenderHtml
        tagsStyles={tagStyles}
        contentWidth={width}
        source={{html: item.content.rendered}}
      />
      <CommentArea postId={item.id} />
    </ScrollView>
  );
};

export default BlogDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
