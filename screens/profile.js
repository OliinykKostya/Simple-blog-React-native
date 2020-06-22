import * as React from 'react';
import { View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { getPreparedPosts } from '../api/api'
import { globalStyles } from '../styles/global'
import Card from '../shared/card'

const about = () => {
  const [user, setUser] = useState([])

  useEffect(() => {

    getPreparedPosts()
      .then(users => {
        setUser(users[0].user.id)
      })
      .catch(e => {
        throw e
      })
  }, [])

  return (
    <View>
      <Text
        style={{ marginHorizontal: 20, textAlign: "center" }}
      >
        Currently logged in
      </Text>

      <Card>
        <Text style={{}, globalStyles.user}>{user}</Text>
      </Card>

    </View>
  )
}

export default about;
