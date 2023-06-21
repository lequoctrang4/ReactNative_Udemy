import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  inputContrainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "white",
    color: "lightblue",
  },
  goalContainer: {
    flex: 5,

    paddingVertical: 20,
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    padding: 8,
  },
  goalText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
});
