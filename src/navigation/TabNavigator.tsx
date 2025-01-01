import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import BookListScreen from '../screens/BookListScreen';
import ProfileStackNavigator from '../screens/ProfileStackNavigator';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home-outline';
              break;
            case 'Profile':
              iconName = 'person-outline';
              break;
            case 'Books':
              iconName = 'book-outline';
              break;
            default:
              iconName = 'help-circle-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarLabelStyle: styles.tabLabel,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#D32F2F',
        tabBarInactiveTintColor: '#FFCDD2',
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarBadge: 3,
          tabBarBadgeStyle: styles.badge,
        }}
      />
      <Tab.Screen name="Books" component={BookListScreen} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#FFEBEE',
    borderTopWidth: 1,
    borderTopColor: '#E57373',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: -2 },
  },
  tabLabel: {
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.4,
    color: '#D32F2F',
  },
  header: {
    backgroundColor: '#FFEBEE',
    borderBottomWidth: 1,
    borderBottomColor: '#E57373',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  headerTitle: {
    color: '#D32F2F',
    fontWeight: '600',
    fontSize: 18,
    letterSpacing: 0.6,
  },
  badge: {
    backgroundColor: '#D32F2F',
    color: '#FFEBEE',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default TabNavigator;
