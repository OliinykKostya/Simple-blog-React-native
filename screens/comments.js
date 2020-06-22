import * as React from 'react';
import { View, Text } from 'react-native';
import Card from '../shared/card'
import { globalStyles } from '../styles/global'

const DetailsScreen = ({ route }) => {
  const comments = route.params.comments;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {comments.map(item => (
        <View key={item.author}>
          <Card >
            <Text style={globalStyles.author}>{item.author}</Text>
            <Text style={globalStyles.body}>{item.body}</Text>
          </Card>
        </View>
      ))}
    </View>
  );
}

export default DetailsScreen
