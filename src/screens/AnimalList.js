import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Text } from '@rneui/themed';
import AnimalCard from '../components/AnimalCard'

export default function AnimalList({ route, language }) {
    const { category } = route.params;

    const styles = StyleSheet.create({
        category_text: {
            marginVertical: 15,
            textAlign: 'center',
            color: category.color,
            fontWeight: 'bold'
        }
    })
    
    return (
        <View>
            <Text
            h3
            style={styles.category_text}
            >
                {language === 'ko' ? category.category_ko : category.category_en}
            </Text>

        <FlatList
        data={category.animals}
        keyExtractor={(item) => item.name_en}
        renderItem={({ item }) => (
            <AnimalCard animal={item} language={language} />
        )}
        />
        </View>
    );
}