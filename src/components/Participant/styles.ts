import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1f1e25",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
    borderRadius: 5,
    marginBottom: 10,
  },

  name: {
    color: "#fdfcfe",
    fontSize: 16,
    flex: 1,
  },

  button: {
    backgroundColor: "#e23c44",
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginLeft: 16,
  },

  buttonText: {
    color: "#fdfcfe",
    fontSize: 32,
  },
});
