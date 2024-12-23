import { Tabs } from "expo-router";
import { bottomTabs, tabBarLabelStyle } from "./BottomTabBar.constants";

export const BottomTabBar = () => (
  <Tabs
    screenOptions={{ headerShown: false, tabBarActiveTintColor: "#FF4D67" }}
  >
    {bottomTabs.map(({ name, title, activeIcon: ActiveIcon, icon: Icon }) => (
      <Tabs.Screen
        key={name}
        name={name}
        options={{
          title,
          tabBarLabelStyle,
          tabBarIcon: ({ focused }) => (focused ? <ActiveIcon /> : <Icon />),
        }}
      />
    ))}
  </Tabs>
);
