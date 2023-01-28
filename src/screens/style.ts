import { StyleSheet } from "react-native";
import { colors } from "../style/colors";
import { fonts } from "../style/fonts";

export const styles = StyleSheet.create({
  header: {
    height: 173,
    backgroundColor: colors.grey700,
    justifyContent: "center",
    alignItems: "center",
  },
  newTask: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 146,
    zIndex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  tasks: {
    backgroundColor: colors.grey600,
    padding: 20,
    paddingTop: 55,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  empty: {
    color: "#FFF",
    fontSize: fonts.fontSize.medium,
    textAlign: "center",
    borderTopWidth: 1,
    borderTopColor: colors.grey400,
    paddingHorizontal: 20,
    paddingVertical: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  textEmpty: {
    fontFamily: fonts.fontFamily.bold,
    fontSize: fonts.fontSize.medium,
    color: colors.grey300,
    marginTop: 20,
  },
  textEmptyRegular: {
    fontSize: fonts.fontSize.medium,
  },
  textInfoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textCreated: {
    fontFamily: fonts.fontFamily.bold,
    color: colors.blue,
    fontSize: fonts.fontSize.medium,
  },
  textDone: {
    fontFamily: fonts.fontFamily.bold,
    color: colors.purple,
    fontSize: fonts.fontSize.medium,
  },
  counter: {
    backgroundColor: colors.grey400,
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  textCounter: {
    fontFamily: fonts.fontFamily.bold,
    color: colors.grey200,
  },
});
