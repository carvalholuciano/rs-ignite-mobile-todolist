import { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import Trash from "../assets/trash.svg";
import { colors } from "../style/colors";

export function DeleteButton(props: TouchableOpacityProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TouchableOpacity
      style={[styles.container, isFocused ? styles.focused : {}]}
      {...props}
      onPressIn={() => setIsFocused(true)}
      onPressOut={() => setIsFocused(false)}
      activeOpacity={0.7}
    >
      <Trash color={isFocused ? colors.danger : colors.grey300} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 32,
    height: 32,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  focused: {
    backgroundColor: colors.grey400,
  },
});
