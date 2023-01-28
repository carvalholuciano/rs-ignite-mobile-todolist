import { StyleSheet, Text as TextRN, TextProps } from "react-native";
import { fonts } from "../style/fonts";

export function Text({ style, children, ...props }: TextProps) {
  return (
    <TextRN style={[styles.default, style]} {...props}>
      {children}
    </TextRN>
  );
}

const styles = StyleSheet.create({
  default: {
    fontFamily: fonts.fontFamily.regular,
    fontSize: fonts.fontSize.small,
  },
});
