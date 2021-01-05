import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import * as SQLite from "expo-sqlite";
import NotesStack from "./screens/NotesStack";
import AddScreen from "./screens/AddScreen";

const db = SQLite.openDatabase("notes.db");
const Stack = createStackNavigator();
const onRemove = id => e => {
  setTodos(todos.filter(todo => todo.id !== id));
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal" headerMode="none">
        <Stack.Screen
          name="Notes Stack"
          component={NotesStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Add Note" component={AddScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
 }
 

 
 

