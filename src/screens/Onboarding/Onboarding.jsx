import React from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CoverImage from '../../assets/svgs/cover.svg';
import {DARK_COLOR, PRIMARY_COLOR} from '../../constants/colors';

const Onboarding = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>GAMER ZONE</Text>
      <View style={styles.coverImage}>
        <CoverImage width="100%" />
      </View>
      <Pressable
        onPress={() => {
          navigation.navigate('Login');
        }}
        style={styles.button}>
        <Text style={styles.buttonText}>Let's Begin</Text>
        <FontAwesome name="chevron-right" size={18} color="#fff" />
      </Pressable>
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: DARK_COLOR,
    marginTop: 20,
  },

  coverImage: {
    width: '100%',
    paddingHorizontal: 16,
  },

  button: {
    backgroundColor: PRIMARY_COLOR,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 10,
    marginBottom: 40,
    width: '100%',
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    fontStyle: 'italic',
  },
});
