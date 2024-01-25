import React from 'react';
import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Details = ({route}) => {
  const product = route.params.product;
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.info}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} src={product.imageUrl} />
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.ratingContainer}>
            <FontAwesome name="star" size={22} color="#ff7b00" />
            <Text style={styles.rating}>{product.rating}</Text>
            <View style={styles.ratingCount}>
              <Text style={styles.ratingCountText}>
                {product.ratingCount} Review
              </Text>
            </View>
          </View>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>BDT {product.discountPrice}</Text>

          <View style={styles.tagContainer}>
            {product.tags.map((tag, index) => (
              <View style={styles.tag} key={index}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              Inspected and guaranteed to have minimal cosmetic damage, which is
              not noticeable when the device is held at arm's length.
              Successfully passed a full diagnostic test which ensures like-new
              functionality and removal of any prior-user personal information.
            </Text>
            <Text style={styles.descriptionText}>
              Includes a brand new, generic charging cable that is certified Mfi
              (Made for iPhone) and a brand new, generic wall plug that is UL
              certified for performance and safety. Also includes a SIM tray
              removal tool but does not come with headphones or a SIM card.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footerContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Add To Cart</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  info: {
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    height: 400,
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  detailsContainer: {
    padding: 14,
  },

  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 8,
    marginBottom: 10,
  },

  rating: {
    fontSize: 20,
    fontWeight: '700',
    marginHorizontal: 5,
  },

  ratingCount: {
    backgroundColor: '#b1b1b1',
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderRadius: 100,
  },

  ratingCountText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '400',
  },

  title: {
    fontSize: 20,
    fontWeight: '600',
  },

  price: {
    fontSize: 15,
    fontWeight: '500',
    color: '#ff7b00',
    marginTop: 4,
  },

  tagContainer: {
    gap: 6,
    marginTop: 16,
    alignItems: 'flex-start',
  },

  tag: {
    backgroundColor: '#000000',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 100,
  },

  tagText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '400',
  },

  descriptionText: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 18,
    marginTop: 16,
  },

  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    paddingTop: 12,
    paddingBottom: Platform.OS === 'ios' ? 26 : 12,
    paddingHorizontal: 14,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },

  button: {
    backgroundColor: '#000000',
    paddingVertical: 16,
    width: '100%',
    borderRadius: 12,
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
  },
});
