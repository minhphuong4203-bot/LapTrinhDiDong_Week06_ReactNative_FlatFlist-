import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Cáp chuyển từ Cổng USB sang PS2 ádsadasds',
    shop: 'Shop 1',
    image: require('./assets/images/giacchuyen1.png'), // Replace with your image path
    price: '69.900đ',
    discount: '-39%',
    rating: 4.5,
    ratingCount: 15,
  },
  {
    id: '2',
    title: 'Cáp chuyển từ Cổng USB sang PS2 dsadsa',
    shop: 'Shop 2',
    image: require('./assets/images/daynguon1.png'), // Replace with your image path
    price: '69.900đ',
    discount: '-20%',
    rating: 3.0,
    ratingCount: 5,
  },
    {
    id: '3',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    shop: 'Shop 2',
    image: require('./assets/images/dauchuyendoipsps21.png'), // Replace with your image path
    price: '69.900đ',
    discount: '-20%',
    rating: 3.0,
    ratingCount: 5,
  },
      {
    id: '4',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    shop: 'Shop 2',
    image: require('./assets/images/dauchuyendoi1.png'), // Replace with your image path
    price: '69.900đ',
    discount: '-20%',
    rating: 3.0,
    ratingCount: 5,
  },
      {
    id: '5',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    shop: 'Shop 2',
    image: require('./assets/images/carbusbtops21.png'), // Replace with your image path
    price: '69.900đ',
    discount: '-20%',
    rating: 3.0,
    ratingCount: 5,
  },
      {
    id: '6',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    shop: 'Shop 2',
    image: require('./assets/images/daucam1.png'), // Replace with your image path
    price: '69.900đ',
    discount: '-20%',
    rating: 3.0,
    ratingCount: 5,
  },
  // Add more items as needed
];

type ItemProps = {
  title: string;
  shop: string;
  image: any;
  price: string;
  discount: string;
  rating: number;
  ratingCount: number;
};

const StarIcon = ({ filled }) => (
  <Image
    source={filled ? require('./assets/images/Star1.png') : require('./assets/images/Star5.png')} // Path for outlined star
    style={styles.starIcon}
  />
);

const Item = ({ title, shop, image, price, discount, rating, ratingCount }: ItemProps) => (
  <View style={styles.item}>
    <Image source={image} style={styles.imageItem} />
    <View style={styles.infoContainer}>
      <Text style={styles.titleItem} numberOfLines={2}>{title}</Text>
      <View style={styles.ratingContainer}>
        {[...Array(5)].map((_, index) => (
          <StarIcon key={index} filled={index < Math.floor(rating)} />
        ))}
        <Text style={styles.ratingCount}>{`(${ratingCount})`}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.priceItem}>{price}</Text>
        <Text style={styles.discountItem}>{discount}</Text>
      </View>
    </View>
  </View>
);

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.buttonHeader}>
          <Image
            style={{ height: 22.5, width: 22.5 }}
            source={require('./assets/images/ant-design_arrow-left-outlined.png')}
          />
        </TouchableOpacity>
        <Text style={styles.titleHeader}>Chat</Text>
        <TouchableOpacity style={styles.buttonHeader}>
          <Image
            style={{ height: 22.5, width: 22.5 }}
            source={require('./assets/images/bi_cart-check.png')}
          />
        </TouchableOpacity>
      </View>

      <SafeAreaView style={styles.containerItem}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Item
              title={item.title}
              shop={item.shop}
              image={item.image}
              price={item.price}
              discount={item.discount}
              rating={item.rating}
              ratingCount={item.ratingCount}
            />
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={{ paddingBottom: 20 , paddingRight:8 }}
        />
      </SafeAreaView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonHeader}>
          <Image
            style={{ height: 22.5, width: 22.5 }}
            source={require('./assets/images/Group10.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonHeader}>
          <Image
            style={{ height: 22.5, width: 22.5 }}
            source={require('./assets/images/Vector.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonHeader}>
          <Image
            style={{ height: 22.5, width: 22.5 }}
            source={require('./assets/images/Vector1.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
  menu: {
    height: 42,
    flexDirection: 'row',
    backgroundColor: '#1BA9FF',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  containerItem: {
    flex: 1,
    width: '100%',
    borderTopColor: '#C4C4C4',
    borderTopWidth: 0.5,
    // marginLeft: -6
  },
  item: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 10,
    // margin: 8,
    marginTop: 16,
    marginRight: 16,
    // marginLeft:0,
    // backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 2,
  },
  imageItem: {
    width: 155,
    height: 90,
    borderRadius: 5,
  },
  infoContainer: {
    alignItems: 'flex-start',
    marginTop: 5,
    width: 120,
    marginLeft: 4,
  },
  titleItem: {
    fontSize: 13,
    fontWeight: '600',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    width: 14,
    height: 14,
    margin: 1,
  },
  ratingCount: {
    fontSize: 12,
    color: '#666',
    marginLeft: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignItems: 'center',
  },
  priceItem: {
    fontSize: 14,
    color: '#000',
  },
  discountItem: {
    fontSize: 12,
    color: '#969DAA',
  },
  titleHeader: {
    fontSize: 22,
    color: 'white',
  },
  footer: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#1BA9FF',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default App;