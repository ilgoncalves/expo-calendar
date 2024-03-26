import { ViewStyle, StyleSheet, TextStyle } from "react-native";

interface Style {
  controlsText: TextStyle;
  touchablesText: TextStyle;
  yearText: TextStyle;
  calendar: ViewStyle;
  container: ViewStyle;
  touchables: ViewStyle;
  controlsWrapper: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    backgroundColor: "#131313",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#B7B7B75E",
    marginTop: 12,
    paddingBottom: 12,
  },
  controlsText: {
    fontSize: 15,
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "#FFF",
  },
  yearText: {
    fontSize: 24,
    fontWeight: "500",
  },
  touchables: {
    flexDirection: "row",
    gap: 38,
  },
  touchablesText: {
    color: "#FFF",
    fontSize: 32,
    fontWeight: "900",
  },
  controlsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 18,
  },
  calendar: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
});
