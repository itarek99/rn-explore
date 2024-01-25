import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {DARK_COLOR, PRIMARY_COLOR} from '../../../constants/colors';
import {sliderData} from '../../../model/data';
import {deviceWidth} from '../../../utils/dimensions';
import UpcomingBanner from './UpcomingBanner';

const Upcoming = () => {
  const renderUpcomingItem = ({item, index}) => {
    return <UpcomingBanner data={item} key={index} />;
  };

  return (
    <View style={styles.upcomingContainer}>
      <View style={styles.upcomingHeader}>
        <Text style={styles.upcomingTitle}>Upcoming Games</Text>
        <Text style={styles.upcomingSeeAll}>See All</Text>
      </View>
      <View style={styles.carouselContainer}>
        <Carousel
          data={sliderData}
          renderItem={renderUpcomingItem}
          sliderWidth={deviceWidth - 40}
          itemWidth={deviceWidth - 86}
          loop={true}
        />
      </View>
    </View>
  );
};

export default Upcoming;

const styles = StyleSheet.create({
  upcomingContainer: {
    marginTop: 12,
  },
  upcomingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  upcomingTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: DARK_COLOR,
  },

  upcomingSeeAll: {
    fontSize: 14,
    color: PRIMARY_COLOR,
  },

  carouselContainer: {
    marginTop: 12,
  },
});
