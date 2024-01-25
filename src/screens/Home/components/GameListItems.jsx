import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import GameListItem from './GameListItem';

const Separator = () => <View style={styles.separator} />;

const GameListItems = ({data}) => {
  const renderItemSeparator = () => <Separator />;
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item}) => <GameListItem data={item} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={renderItemSeparator}
      />
    </View>
  );
};

export default GameListItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 8,
    marginTop: 16,
  },

  separator: {
    height: 10,
  },
});
