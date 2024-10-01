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
    title: 'Cá nấu lẩu, nấu mì minion',
    shop: 'LTD Food',
    image: require('./assets/ca_nau_lau.png'),
  },
  {
    id: '2',
    title: '1Kg khô gà bơ tỏi',
    shop: 'LTD Food',
    image: require('./assets/ga_bo_toi.png'),
  },
  {
    id: '3',
    title: 'Xe cẩu đa năng',
    shop: 'Thế giới đồ chơi',
    image: require('./assets/xa_can_cau.png'),
  },
  {
    id: '4',
    title: 'Đồ chơi dạng mô hình',
    shop: 'Thế giới đồ chơi',
    image: require('./assets/do_choi_dang_mo_hinh.png'),
  },
  {
    id: '5',
    title: 'Lãnh đạo giản đơn',
    shop: 'Minh Long Book',
    image: require('./assets/lanh_dao_gian_don.png'),
  },
  {
    id: '6',
    title: 'Hiếu lòng con trẻ',
    shop: 'Minh Long Book',
    image: require('./assets/hieu_long_con_tre.png'),
  },
  {
    id: '7',
    title: 'Donald Trump thiên tài lãnh đạo',
    shop: 'Minh Long Book',
    image: require('./assets/trump1.png'),
  },
];

type ItemProps = {
  title: string,
  shop: string,
  image: any,
};

const Item = ({ title, shop, image }: ItemProps) => (
  <View style={styles.item}>
    <Image source={image} style={styles.imageItem} />
    <View style={styles.infoContainer}>
      <Text style={styles.titleItem} numberOfLines={1}>
        {title}
      </Text>
      <Text style={styles.shopItem}>{shop}</Text>
    </View>
    <TouchableOpacity style={styles.chatButton}>
      <Text style={styles.chatButtonText}>Chat</Text>
    </TouchableOpacity>
  </View>
);

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.buttonHeader}>
          <Image
            style={{ height: 22.5, width: 22.5 }}
            source={require('./assets/leftBack.png')}
          />
        </TouchableOpacity>
        <Text style={styles.titleHeader}>Chat</Text>
        <TouchableOpacity style={styles.buttonHeader}>
          <Image
            style={{ height: 22.5, width: 22.5 }}
            source={require('./assets/bi_cart-check.png')}
          />
        </TouchableOpacity>
      </View>

      <SafeAreaView style={styles.containerItem}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Item title={item.title} shop={item.shop} image={item.image} />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 20 }} // Để đảm bảo có không gian cho scroll
        />
      </SafeAreaView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonHeader}>
          <Image
            style={{ height: 22.5, width: 22.5 }}
            source={require('./assets/Group10.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonHeader}>
          <Image
            style={{ height: 22.5, width: 22.5 }}
            source={require('./assets/Vector.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonHeader}>
          <Image
            style={{ height: 22.5, width: 22.5 }}
            source={require('./assets/Vector1.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#e5e5e5',
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
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#fff',
    padding: 10,
    marginVertical: 16,
    marginHorizontal: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#C4C4C4',
    height: 80, // Thiết lập chiều cao cho mỗi item
  },
  imageItem: {
    width: 74,
    height: 74,
    borderRadius: 5,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  titleItem: {
    fontSize: 16,
    fontWeight: '500',
  },
  shopItem: {
    fontSize: 14,
    color: 'red',
  },
  chatButton: {
    backgroundColor: 'red',
    width: 100,
    height: 50,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  chatButtonText: {
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: 24,
    paddingTop: 8,
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