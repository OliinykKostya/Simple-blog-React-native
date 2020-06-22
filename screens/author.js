import * as React from 'react';
import { View, Text } from 'react-native';
import Card from '../shared/card'
import { globalStyles } from '../styles/global'

const Author = ({ route }) => {
  const comments = route.params.posts;
  let index = 2;

  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop: 20 }}>
      <Text style={globalStyles.author}>{route.params.author}</Text>
      {comments.map(item => (
        <View key={(+new Date()) * index++}>
          <Card>
            <Text style={globalStyles.title}>{item.title}</Text>
            <Text>{item.body}</Text>
          </Card>
        </View>
      ))}
    </View>
  );
}

export default Author
