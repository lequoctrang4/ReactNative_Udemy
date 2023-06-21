import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
        <View style={styles.inputContrainer}>
          <TextInput style={styles.textInput} placeholder='Hello Tuesday!'/>
          <Button style={styles.button} title='Add goal'/>

        </View>
        <View>
            <Text>List of goals...</Text>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    display: "flex",
    flexDirection: "column",
  },
  inputContrainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
  ,
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: "80%",
    marginRight: 8,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    borderRadius: 5
  },
  button:{
    backgroundColor: "white",
    color: "lightblue"
  }

});
