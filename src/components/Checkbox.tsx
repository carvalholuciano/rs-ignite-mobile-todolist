import { useState } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import Animated, { ZoomIn, ZoomOut } from "react-native-reanimated";
import Checked from "../assets/checked.svg";
import Unchecked from "../assets/unchecked.svg";
import { colors } from "../style/colors";

interface Props extends TouchableOpacityProps {
  checked?: boolean;
}

export function Checkbox({ checked = false, ...rest }: Props) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPressIn={() => setIsFocused(true)}
      onPressOut={() => setIsFocused(false)}
      {...rest}
    >
      {checked ? (
        <Animated.View entering={ZoomIn} exiting={ZoomOut}>
          <Checked color={isFocused ? colors.purple : colors.purpleDark} />
        </Animated.View>
      ) : (
        <Unchecked color={isFocused ? colors.blueDark : colors.blue} />
      )}
    </TouchableOpacity>
  );
}
