import React from 'react';
import { View, FlatList } from 'react-native';
import { Text } from '@rneui/themed';
import AnimalCard from './components/AnimalCard'

export default function AnimalList({ route, language }) {
    const { category } = route.params;

    return (
        <View>
            <Text
            h3
            style={{
                marginVertical: 15,
                textAlign: 'center',
                color: category.color,
                fontWeight: 'bold'
            }}
        >
            {language === 'ko' ? category.category_ko : category.category_en}
        </Text>

        <FlatList
        data={category.animals}
        keyExtractor={(item) => item.name_en}
        renderItem={({ item }) => (
            <AnimalCard animals={item} language={language} />
        )}
        />
        </View>
    );
}