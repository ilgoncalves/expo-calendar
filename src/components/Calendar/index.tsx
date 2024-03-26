import React, { FC, useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";

import styles from "./styles";
import { leftPad } from "../../utils";
import { DayComponent } from "../DayComponent";

interface ICalendarProps {
  onDaySelect?: (selectedDate: string) => void;
}

const months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const numberOfDaysByMonthId: { [monthId: number]: number } = {
  0: 31,
  1: 28,
  2: 31,
  3: 30,
  4: 31,
  5: 30,
  6: 31,
  7: 31,
  8: 30,
  9: 31,
  10: 30,
  11: 31,
};

export const Calendar: FC<ICalendarProps> = ({ onDaySelect }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const [daySelected, setDaySelected] = useState<string | null>(null);

  const getInitialMonthDay = (date: string) => {
    var arr: any = date.split("/").reverse();
    return new Date(arr[0], arr[1] - 1, arr[2]).getDay();
  };

  const daysSlots = Array(42)
    .fill(null)
    .map((_, i) => i + 1);

  const renderMonth = (startAt: number, numberOfDays: number) => {
    let currentDayIndex = 0;

    return daysSlots.map((slot) => {
      let toDisplay = "";

      const firstDay = startAt;

      if (currentDayIndex < numberOfDays && slot > firstDay) {
        currentDayIndex++;
        toDisplay = currentDayIndex.toString();
      }

      const isInvalidDay = Number.isNaN(parseInt(toDisplay, 10));

      const isCurrentSelected = daySelected === toDisplay;

      return (
        <DayComponent
          dayValue={toDisplay}
          isNotADay={isInvalidDay}
          onPress={async () => handleDayPress(toDisplay)}
          selected={isCurrentSelected}
        />
      );
    });
  };

  const mountDate = (day: string) => {
    return `${currentYear}-${leftPad(currentMonth + 1, 2)}-${leftPad(
      parseInt(day, 10),
      2
    )}`;
  };

  const handleDayPress = (dayPressed: string) => {
    setDaySelected(dayPressed);
    onDaySelect && onDaySelect(mountDate(dayPressed));
  };

  const onMonthChange = (signal: number) => {
    setDaySelected(null);
    if (
      (currentMonth === 0 && signal === -1) ||
      (currentMonth === 11 && signal === 1)
    ) {
      setCurrentYear((prev) => prev + 1 * signal);
      return setCurrentMonth(signal > 0 ? 0 : 11);
    }
    setCurrentMonth((prev) => prev + 1 * signal);
  };

  const getNumberOfDays = (month: number) => {
    if (month === 1 && currentYear % 4 === 0) {
      return 29;
    }
    return numberOfDaysByMonthId[month];
  };

  return (
    <View style={styles.container}>
      <View style={styles.controlsWrapper}>
        <Text style={styles.controlsText}>
          {`${months[currentMonth]}`}
          {"  "}
          <Text style={styles.yearText}>{currentYear}</Text>
        </Text>
        <View style={styles.touchables}>
          <TouchableOpacity onPress={() => onMonthChange(-1)}>
            <Text style={styles.touchablesText}>{"<"}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onMonthChange(1)}>
            <Text style={styles.touchablesText}>{">"}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.calendar}>
        {renderMonth(
          getInitialMonthDay(
            `01/${leftPad(currentMonth + 1, 2)}/${currentYear}`
          ),
          getNumberOfDays(currentMonth)
        )}
      </View>
    </View>
  );
};
