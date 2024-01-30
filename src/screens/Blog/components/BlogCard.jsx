import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import RenderHtml from 'react-native-render-html';

const BlogCard = ({item}) => {
  const navigation = useNavigation();
  const handleFullView = () => {
    navigation.navigate('BlogDetails', {item});
  };

  const {width} = useWindowDimensions();

  const tagStyles = {
    p: {
      fontSize: 15,
      margin: 0,
    },
    span: {
      color: '#3030c2',
    },
  };

  return (
    <Pressable onPress={handleFullView}>
      <View style={styles.card}>
        <Text style={styles.title}>{item.title.rendered}</Text>
        <View>
          <RenderHtml
            contentWidth={width}
            source={{
              html:
                item.excerpt.rendered.slice(0, 100) +
                ' <span>[read more]</span> </p>',
            }}
            tagsStyles={tagStyles}
          />
        </View>
      </View>
    </Pressable>
  );
};

export default BlogCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
  },
});
