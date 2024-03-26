import React, { FC } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./DayComponent.styles";

import { leftPad } from "../../utils";

interface IDayComponentProps {
  selected: boolean;
  isNotADay: boolean;
  dayValue: string;
  onPress: () => {};
}

interface IDayContentProps {
  onPress: () => {};
  isNotADay: boolean;
  disabled: boolean;
  selected: boolean;
  children: string;
}

export const DayContent: FC<IDayContentProps> = ({
  onPress,
  isNotADay,
  disabled,
  selected,
  children,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.day, selected && styles.daySelected]}
    >
      <Text
        style={[
          styles.dayText,
          isNotADay && styles.dayNameText,
          selected && styles.selectedDayText,
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export const DayComponent: FC<IDayComponentProps> = ({
  selected,
  onPress,
  isNotADay,
  dayValue,
}) => {
  return (
    <View style={styles.dayWrapper}>
      <DayContent
        onPress={onPress}
        disabled={isNotADay || selected}
        selected={selected}
        isNotADay={isNotADay}
      >
        {!isNotADay && parseInt(dayValue, 10) < 10
          ? leftPad(parseInt(dayValue, 10), 2)
          : dayValue}
      </DayContent>
    </View>
  );
};
