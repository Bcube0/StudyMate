import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { NavgationStyles, Colors } from "../../utils/Theme";
export default function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View
      style={{
        backgroundColor: Colors.Main,
        flexDirection: "row",
        shadowColor: Colors.Black_000000,
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        elevation: 5,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const imageS = options.imageS;
        const imageUn = options.imageUn;
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };
        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={!isFocused ? { flex: 1 } : {}}
          >
            {isFocused ? (
              <>
                <View style={NavgationStyles.bottomTabSelectedView}>
                  <Image source={imageS} style={NavgationStyles.bottomTab} />
                  <Text style={NavgationStyles.bottomTabTextStyle}>
                    {label}
                  </Text>
                </View>
              </>
            ) : (
              <>
                <View style={NavgationStyles.bottomTabUnSelectedView}>
                  <Image source={imageUn} style={NavgationStyles.bottomUnTab} />
                </View>
              </>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
