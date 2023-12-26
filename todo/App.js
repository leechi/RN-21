import { StatusBar } from "expo-status-bar";
import dayjs from "dayjs";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { getCalendarColumns, getDayColor, getDayText } from "./src/util";
import { useEffect, useState } from "react";
import Margin from "./src/Margin";
import { SimpleLineIcons } from "@expo/vector-icons";

const columnSize = 30;

const Column = ({ text, color, opacity, disabled, onPress, isSelected }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={{
        width: columnSize,
        height: columnSize,
        borderRadius: 15,
        backgroundColor: isSelected ? "#c2c2c2" : "transparent",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color, opacity }}>{text}</Text>
    </TouchableOpacity>
  );
};

const ArrowButton = ({ onPress, name }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ paddingHorizontal: 20, paddingVertical: 15 }}
    >
      <SimpleLineIcons name={name} size={15} color="black" />
    </TouchableOpacity>
  );
};

export default function App() {
  const now = dayjs();
  const [selectedDate, setSelectedDate] = useState(now);
  const columns = getCalendarColumns(selectedDate);

  const ListHeaderComponent = () => {
    const currentDateText = dayjs(selectedDate).format("YYYY.MM.DD.");
    return (
      <View>
        {/* <YYYY.MM.DD.> */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ArrowButton name="arrow-left" onPress={() => {}} />
          <TouchableOpacity>
            <Text style={{ fontSize: 20, color: "#404040" }}>
              {currentDateText}
            </Text>
          </TouchableOpacity>
          <ArrowButton name="arrow-right" onPress={() => {}} />
        </View>
        <View style={{ flexDirection: "row" }}>
          {[0, 1, 2, 3, 4, 5, 6].map((day) => {
            const dayText = getDayText(day);
            const color = getDayColor(day);
            return (
              <Column
                key={`day-${day}`}
                text={dayText}
                color={color}
                opacity={1}
                disabled={true}
              />
            );
          })}
        </View>
      </View>
    );
  };

  const renderItem = ({ item: date }) => {
    const dateText = dayjs(date).get("date");
    const day = dayjs(date).get("day");
    const color = getDayColor(day);
    const isCurrentMonth = dayjs(date).isSame(selectedDate, "month");
    const onPress = () => {
      setSelectedDate(date);
    };
    const isSelected = dayjs(date).isSame(selectedDate, "date");
    return (
      <Column
        text={dateText}
        color={color}
        opacity={isCurrentMonth ? 1 : 0.4}
        onPress={onPress}
        isSelected={isSelected}
      />
    );
  };

  useEffect(() => {
    console.log("hi");
  }, [selectedDate]);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={columns}
        keyExtractor={(_, index) => `colomn-${index}`}
        renderItem={renderItem}
        numColumns={7}
        ListHeaderComponent={ListHeaderComponent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
