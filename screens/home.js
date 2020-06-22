import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text
} from 'react-native';
import { getPreparedPosts } from '../api/api'
import Card from '../shared/card'
import { globalStyles } from '../styles/global'

function HomeScreen({ navigation }) {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [loaded, setLoaded] = useState(true)

  useEffect(() => {
    setIsLoading(true)

    getPreparedPosts()
      .then(posts => {
        setPost(posts)
        setIsLoading(false)
        setLoaded(true)
      })
      .catch(() => {
        setIsLoading(false)
        setLoaded(false)
      })
  }, [])

  return (

    <>
      {isLoading && <ActivityIndicator
        size="large"
        color="#0000ff"
        style={styles.isLoading}
      />}
      {loaded
        ?
        <FlatList data={post} renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Comments',
              item)}
          >

            <Card>
              <View style={styles.boxNumber}>
                <Text style={styles.numbersComments}>
                  {item.comments.length}
                </Text>
              </View>

              <Image
                style={styles.image}
                source={require('../assets/message.png')}
              />

              <TouchableOpacity
                onPress={() => navigation.navigate('Author',
                  item)}
              >
                <Text style={globalStyles.author}>{item.author}</Text>
              </TouchableOpacity>

              <Text style={globalStyles.title}>{item.title}</Text>
              <Text style={globalStyles.body}>{item.body}</Text>
            </Card>

          </TouchableOpacity>
        )} />

        : <Text style={styles.loaded}>Something break, try to reload APP</Text>
      }
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    right: 10,
  },
  
  boxNumber: {
    alignItems: "center",
    backgroundColor: 'red',
    width: 20,
    height: 20,
    position: 'absolute',
    borderRadius: 10,
    borderColor: 'black',
    right: -5,
    top: -10,
    zIndex: 1,
  },

  numbersComments: {
    fontWeight: 'bold',
    color: 'white',
  },
  button: {
    color: 'red',
  },

  isLoading: {
    marginTop: 300,
  },

  loaded: {
    marginTop: 300,
    alignSelf: 'center',
    fontSize: 50,
    fontWeight: 'bold',
  }
})

export default HomeScreen
