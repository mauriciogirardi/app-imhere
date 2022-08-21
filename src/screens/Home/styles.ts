import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },

  eventName: {
    color: "#fdfcfe",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },

  eventDate: {
    color: "#6b6b6b",
    fontSize: 16,
  },

  form: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 42,
    marginTop: 36,
  },

  input: {
    flex: 1,
    backgroundColor: "#1f1e25",
    color: "#fdfcfe",
    height: 56,
    paddingLeft: 16,
    paddingRight: 16,
    fontSize: 16,
    borderRadius: 5,
    marginRight: 12,
  },

  buttonText: {
    color: "#fdfcfe",
    fontSize: 28,
  },

  button: {
    backgroundColor: "#31cf67",
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },

  buttonDisabled: {
    backgroundColor: "#31cf67",
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    opacity: 0.5,
  },

  textListEmpty: {
    color: "#6b6b6b",
    fontSize: 20,
    textAlign: "center",
    marginTop: 50,
    lineHeight: 30,
  },
});
