import React from 'react'
import { ThemeContext, theme } from '../context/ThemeContext'
import { useContext } from 'react';
import { Button, Text, View } from 'react-native';
export default function Home() {
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: isDarkTheme ? '#363636' : '#f0ecce' }}>
            <Button title={`${isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}`} onPress={toggleTheme} />
        </View>
    )
}
