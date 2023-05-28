import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';

const searchFilterScreen = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const searchRef = useRef();
  const listRef = useRef();
  const [oldData, setOldData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(0);
  const [initial, setInitial] = useState(0);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(response => {
        console.log(response);
        setData(response);
        setOldData(response);
      });
  }, []);

  const searchFilterFunction = text => {
    if (text !== '') {
      let tempData = data.filter(item => {
        return item.title.toLowerCase().indexOf(text.toLowerCase()) > -1;
      });
      setData(tempData);
    } else {
      setData(oldData);
    }
  };

  return (
    <View style={styles.MainContainer}>
      <View style={styles.SecondContainer}>
        <View style={styles.ThirdContainer}>
          <Image
            source={require('../Images/search.png')}
            style={styles.searchImage}
          />
          <TextInput
            style={styles.TextInputContainer}
            ref={searchRef}
            placeholder="Search Items Here..."
            value={search}
            onChangeText={txt => {
              searchFilterFunction(txt);
              setSearch(txt);
            }}
          />
          {search == '' ? null : (
            <TouchableOpacity
              style={{marginRight: 15}}
              onPress={() => {
                searchRef.current.clear();
                searchFilterFunction('');
                setSearch('');
              }}>
              <Image
                source={require('../Images/close.png')}
                style={styles.closeImage}
              />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity
          style={{
            marginRight: 30,
          }}
          onPress={() => {
            setVisible(true);
          }}>
          <Image
            source={require('../Images/filter.png')}
            style={styles.filterImage}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        ref={listRef}
        showsVerticalScrollIndicator={false}
        initialScrollIndex={initial}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: '90%',
                borderRadius: 10,
                borderWidth: 0.5,
                alignSelf: 'center',
                marginTop: 20,
                marginBottom: index == data.length - 1 ? 20 : 0,
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Image
                source={{uri: item.image}}
                style={{
                  width: 60,
                  height: '90%',
                  marginLeft: 10,
                  borderRadius: 10,
                }}
              />
              <View style={{width: '80%'}}>
                <Text style={styles.flatListText}>
                  {item.title.substring(0, 30)}
                </Text>
                <Text style={{fontSize: 12, margin: 10}}>
                  {item.description.substring(0, 50)}
                </Text>
                <View style={styles.priceText}>
                  <Text style={styles.priceText}>{'$' + item.price}</Text>
                  <Text style={styles.ratingText}>{item.rating.rate}</Text>
                  <Image
                    source={require('../Images/star.png')}
                    style={{width: 12, height: 12, marginLeft: 5}}
                  />
                </View>
              </View>
            </View>
          );
        }}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          setVisible(!visible);
        }}>
        <View style={styles.firstView}>
          <View style={styles.secondView}>
            <TouchableOpacity
              onPress={() => {
                setVisible(false);
              }}>
              <Image
                source={require('../Images/close.png')}
                style={styles.closeImageModal}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sortByName}
              onPress={() => {
                setSelectedFilter(1);
                const strAscending = data.sort((a, b) =>
                  a.title > b.title ? 1 : -1,
                );
                setData(strAscending);
                listRef.current.scrollToIndex({animated: true, index: 0});
                setVisible(false);
              }}>
              <Text style={styles.sortValue}>Sort By Name</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.lowHighPrice}
              onPress={() => {
                setSelectedFilter(2);
                setData(data.sort((a, b) => a.price - b.price));
                listRef.current.scrollToIndex({animated: true, index: 0});
                setVisible(false);
              }}>
              <Text style={{fontSize: 18, color: '#000'}}>
                Low to High Price
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.highLow}
              onPress={() => {
                setSelectedFilter(3);
                setData(data.sort((a, b) => b.price - a.price));
                listRef.current.scrollToIndex({animated: true, index: 0});
                setVisible(false);
              }}>
              <Text style={{fontSize: 18, color: '#000'}}>
                Hight to Low Price
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sortRating}
              onPress={() => {
                setSelectedFilter(4);
                setData(data.sort((a, b) => b.rating.rate - a.rating.rate));
                listRef.current.scrollToIndex({animated: true, index: 0});
                setVisible(false);
              }}>
              <Text style={{fontSize: 18, color: '#000'}}>Sort by Rating</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default searchFilterScreen;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  SecondContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    marginTop: 20,
    justifyContent: 'space-between',
  },
  ThirdContainer: {
    width: '80%',
    height: 50,
    borderRadius: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  searchImage: {
    width: 24,
    height: 24,
    marginLeft: 15,
    opacity: 0.5,
  },
  TextInputContainer: {
    width: '76%',
    height: 50,
  },
  closeImage: {
    width: 16,
    height: 16,
    opacity: 0.5,
  },
  filterImage: {
    width: 24,
    height: 24,
  },
  flatListText: {
    fontWeight: '600',
    marginLeft: 10,
    marginTop: 10,
  },
  priceText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    fontSize: 18,
    marginLeft: 10,
    fontWeight: '800',
    color: 'green',
  },
  ratingText: {
    fontSize: 16,
    marginLeft: 50,
    fontWeight: '800',
    color: 'orange',
  },
  firstView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  secondView: {
    width: '80%',
    height: 220,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  sortByName: {
    width: '100%',
    height: 50,
    borderBottomWidth: 0.5,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  sortValue: {
    fontSize: 18,
    color: '#000',
  },
  lowHighPrice: {
    width: '100%',
    height: 50,
    borderBottomWidth: 0.5,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  highLow: {
    width: '100%',
    height: 50,
    borderBottomWidth: 0.5,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  sortRating: {
    width: '100%',
    height: 50,
    borderBottomWidth: 0.5,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  closeImageModal: {
    width: 18,
    height: 18,
    opacity: 0.8,
    marginTop: 5,
    marginLeft: '90%',
  },
});
