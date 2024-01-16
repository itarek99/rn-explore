import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import FlatColor from './components/FlatColor/FlatColor';
import Header from './components/Header/Header';
import ImageCard from './components/ImageCard/ImageCard';
import ScrollCards from './components/ScrollColors/ScrollCards';

const App = () => {
  return (
    <SafeAreaView>
      <Header />
      <ScrollView>
        <FlatColor />
        <ScrollCards />
        <ImageCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
