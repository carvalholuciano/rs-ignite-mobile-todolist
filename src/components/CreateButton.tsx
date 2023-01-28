import { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import Plus from "../assets/plus.svg";
import { colors } from "../style/colors";

export function CreateButton(props: TouchableOpacityProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TouchableOpacity
      style={[styles.container, isFocused ? styles.focused : {}]}
      {...props}
      onPressIn={() => setIsFocused(true)}
      onPressOut={() => setIsFocused(false)}
      activeOpacity={0.7}
    >
      <Plus />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 52,
    height: 52,
    backgroundColor: colors.blueDark,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  focused: {
    backgroundColor: colors.blue,
  },
});
