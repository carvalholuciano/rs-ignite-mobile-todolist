import { useState } from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { colors } from "../style/colors";
import { fonts } from "../style/fonts";

export function Input({ style, ...props }: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <TextInput
      style={[styles.input, isFocused && styles.focused, style]}
      placeholder="Adicione uma nova tarefa"
      placeholderTextColor={colors.grey300}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 54,
    backgroundColor: colors.grey500,
    borderRadius: 8,
    borderColor: colors.grey700,
    color: colors.grey100,
    padding: 16,
    fontSize: fonts.fontSize.large,
    fontFamily: fonts.fontFamily.regular,
    borderWidth: 1,
  },
  focused: {
    borderColor: colors.purpleDark,
  },
});
