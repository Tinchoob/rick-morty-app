import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Button
        title='Press me to increment number!'
        onPress={() => setCount(count + 1)}
      />
      <Text>Count : {count} </Text>
    </View>
  );
};

export default Counter;
