import React, {useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {DARK_COLOR} from '../../constants/colors';
import {freeGames, paidGames} from '../../model/data';
import GameListItems from './components/GameListItems';
import GameListToggler from './components/GameListToggler';
import Upcoming from './components/Upcoming';

const Home = ({navigation}) => {
  const [selectedType, setSelectedType] = useState('free');
  const onSelectedTypeChange = type => {
    setSelectedType(type);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>Hello, John Doe</Text>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            style={styles.profileImage}
            source={require('../../assets/images/user-profile.jpg')}
          />
        </Pressable>
      </View>

      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={18} color={DARK_COLOR} />
        <TextInput style={styles.searchInput} placeholder="Search Game" />
      </View>
      <Upcoming />
      <GameListToggler
        selectedType={selectedType}
        onChange={onSelectedTypeChange}
      />
      <GameListItems data={selectedType === 'free' ? freeGames : paidGames} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },

  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
  },

  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: DARK_COLOR,
  },

  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginTop: 20,
  },

  searchInput: {
    flex: 1,
    fontSize: 15,
    color: DARK_COLOR,
    padding: 8,
  },
});
