import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: "red", }}>
        <Text>1</Text>
      </View>
      <View style={{backgroundColor:"blue", }}>
      <Text>2</Text>
      </View>
      <View style={{backgroundColor: "green",}}>
      <Text>3</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
  },
});
