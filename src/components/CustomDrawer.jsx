import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {DARK_COLOR} from '../constants/colors';

const CustomDrawer = props => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        contentContainerStyle={styles.drawerContentContainer}
        {...props}>
        <ImageBackground
          style={styles.imageContainer}
          source={require('../assets/images/menu-bg.jpeg')}>
          <View style={styles.userInfoContainer}>
            <Image
              style={styles.userProfileImage}
              source={require('../assets/images/user-profile.jpg')}
            />
            <View>
              <Text style={styles.userName}>John Doe</Text>
              <Text style={styles.userEmail}>johndoe@gmail.com</Text>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.itemListContainer}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.footerContainer}>
        <Pressable style={styles.footerButton} onPress={() => {}}>
          <FontAwesome name="share-square-o" size={20} color={DARK_COLOR} />
          <Text style={styles.footerButtonText}>Share With Friend</Text>
        </Pressable>
        <Pressable style={styles.footerButton} onPress={() => {}}>
          <FontAwesome name="arrow-circle-o-left" size={20} color="#c21b1b" />
          <Text style={styles.footerButtonText}>Log Out</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  drawerContentContainer: {
    backgroundColor: '#8200d6',
  },
  imageContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  userProfileImage: {
    height: 80,
    width: 80,
    resizeMode: 'cover',
    borderRadius: 40,
  },
  userName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  userEmail: {
    color: 'white',
    fontSize: 14,
    marginTop: 2,
  },

  itemListContainer: {
    backgroundColor: '#fff',
    paddingVertical: 8,
  },

  footerContainer: {
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 36,
    borderTopColor: '#eaeaea',
    borderTopWidth: 1,
  },
  footerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  footerButtonText: {
    fontSize: 15,
    fontWeight: '500',
  },
});
