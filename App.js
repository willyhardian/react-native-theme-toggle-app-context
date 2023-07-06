import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from './context/ThemeContext'

import Home from './screens/Home';
export default function App() {

    return (
        <ThemeProvider>
            <Home />
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({

});
