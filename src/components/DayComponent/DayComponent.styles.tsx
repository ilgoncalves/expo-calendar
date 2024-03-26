import { ViewStyle, StyleSheet, TextStyle } from "react-native";

import { heightPercentageToDP as hp } from "react-native-responsive-screen";

interface Style {
  day: ViewStyle;
  daySelected: ViewStyle;
  dayText: TextStyle;
  dayNameText: TextStyle;
  selectedDayText: TextStyle;
  dayWrapper: ViewStyle;
}

export default StyleSheet.create<Style>({
  selectedDayText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "800",
    fontFamily: "Roboto",
  },
  dayText: {
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Roboto",
    color: "#FFF",
  },
  dayNameText: {
    fontWeight: "bold",
    fontSize: 12,
  },
  day: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  dayWrapper: {
    position: "relative",
    flex: 1,
    flexDirection: "row",
    height: hp(4),
    marginVertical: hp(0.5),
    flexBasis: "14%",
    justifyContent: "center",
    alignItems: "center",
  },
  daySelected: {
    backgroundColor: "#00A19B",
    zIndex: 1000,
    width: hp(4.2),
    height: hp(4.2),
    borderRadius: hp(4.2),
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
});
