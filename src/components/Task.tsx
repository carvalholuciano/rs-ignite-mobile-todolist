import { StyleSheet } from "react-native";
import Animated, { ZoomIn, ZoomOut } from "react-native-reanimated";
import { colors } from "../style/colors";
import { fonts } from "../style/fonts";
import { Checkbox } from "./Checkbox";
import { DeleteButton } from "./DeleteButton";
import { Text } from "./Text";

type Props = {
  title: string;
  checked: boolean;
  onToggle: () => void;
  onRemove: () => void;
};

export function Task({ title, checked, onToggle, onRemove }: Props) {
  return (
    <Animated.View entering={ZoomIn} exiting={ZoomOut} style={styles.container}>
      <Checkbox checked={checked} onPress={onToggle} />
      <Text style={[styles.text, checked && styles.done]}>{title}</Text>
      <DeleteButton onPress={onRemove} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    backgroundColor: colors.grey500,
    borderRadius: 8,
    marginBottom: 12,
  },
  text: {
    fontSize: fonts.fontSize.medium,
    flex: 1,
    color: colors.grey100,
    marginHorizontal: 8,
  },
  done: {
    color: colors.grey300,
    textDecorationLine: "line-through",
  },
});
