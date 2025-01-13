//Import necessary components and utilities
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

//Import custom components and utilities from local files
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

//Main tab layout component
export default function TabLayout() {
  //Get current color scheme
  const colorScheme = useColorScheme();

  return (
    //Tabs component with screen options for all tabs
    <Tabs
      screenOptions={{
        //Set active tab color based on color scheme
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        //Hide the header
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        // Platform-specific styles
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          //Default styles for other platforms
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Map',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="map" color={color} />,
        }}
      />
      <Tabs.Screen
        name="report"
        options={{
          title: 'Report',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="doc.text" color={color} />,
        }}
      />
      <Tabs.Screen
        name="emergency"
        options={{
          title: 'Emergency',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="exclamationmark.triangle" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="gearshape" color={color} />,
        }}
      />
    </Tabs>
  );
}