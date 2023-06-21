import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList
} from "react-native";
import { useState } from "react";
import { styles } from "./App.css";
export default function App() {
  const [input, setInput] = useState(null);
  const [listGoal, setListGoal] = useState([]);
  function goalHandleInput(enteredText) {
    setInput(enteredText);
  }
  function goalHandleSubmit() {
    setListGoal((curr) => [...curr, input]);
    setInput(null);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContrainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Hello Tuesday!"
          value={input}
          onChangeText={goalHandleInput}
        />
        <Button
          color={"black"}
          style={styles.button}
          title="Add goal"
          onPress={goalHandleSubmit}
        />
      </View>
      <View style={styles.goalContainer}>
        <ScrollView alwaysBounceVertical={false}>
          {listGoal.map((goal) => (
            <View style={styles.goalItem}>
              <Text style={styles.goalText} key={goal}> {goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
