import React from 'react';
import { View, FlatList } from 'react-native';
import { Card, Text } from '@rneui/themed';
import { animalCategories } from '../data/animals';

export default function HomeScreen({ navigation, language}) {
    const renderItem = ({ item }) => (
        <Card
        containerStyle={{
            borderRadius: 15,
            backgroundColor: item.color,
        }}
        >
            <Card.Title style={{ color: 'black', fontSize: 20}}>
                {language === 'ko' ? item.category_ko : item.category_en}
            </Card.Title>
            <Card.Divider color='white' />
            <Text
            style={{ color: 'white', textAlign: 'center'}}
            onPress={() => 
                navigation.navigate('AnimalList', {
                    category: item,
                    language,
                })
            }
            >
                {language === 'ko' ? '보기' : 'View'}
            </Text>
        </Card>
    );

    return (
        <View style={{ flex: 1, padding: 10 }}>
            <FlatList
            data={animalCategories}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            />
        </View>
    );
}