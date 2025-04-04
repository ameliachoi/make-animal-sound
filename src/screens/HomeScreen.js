import React, { useLayoutEffect } from 'react';
import { View, FlatList, Text, Switch, TouchableOpacity, Image, Dimensions, StyleSheet } from 'react-native';
import { animalCategories } from '../data/animals';


const screenWidth = Dimensions.get('window').width;
const ITEM_MARGIN = 10;
const NUM_COLUMNS = 2;
const ITEM_SIZE = (screenWidth - ITEM_MARGIN * (NUM_COLUMNS + 1)) / NUM_COLUMNS;

export default function HomeScreen({ navigation, language, setLanguage }) {

    // header language toggle
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ marginRight: 10, fontSize: 12 }}> KO </Text> 
                    <Switch
                        value={language === 'en'} // Right switch is English
                        onValueChange={(value) => setLanguage(value ? 'en' : 'ko')}
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={language === 'en' ? '#f5dd4b' : '#f4f3f4'}      
                    />
                    <Text style={{ marginLeft: 10, fontSize: 12 }}> EN </Text>
                </View>
            ),
            title: language === 'ko' ? '동물 소리를 내봐요!' : 'Make Animal Sounds!'
        });  
    }, [navigation, language]);

    // choose category
    const renderItem = ({ item }) => (
        <TouchableOpacity
            style = {styles(item).box_item}
            onPress={() => navigation.navigate('AnimalList', { category: item, language })}
        >
            <Text style={styles(item).itemText}> 
                {language === 'ko' ? item.category_ko : item.category_en}
            </Text>
        </TouchableOpacity>
    );

    const styles = (item) => StyleSheet.create({
        container: {
            flex: 1,
            padding: 20,
            alignItems: 'center',
            justifyContent: 'center',
        },
        box_item: {
            width: '48%',
            height: ITEM_SIZE,
            margin: ITEM_MARGIN / 2, // half margin for both sides
            marginVertical: ITEM_MARGIN,
            backgroundColor: item.color,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
        },
        itemText: {
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            fontFamily: language === 'ko' ? 'BMJUA' : 'NUNITO'
        }
    })

    return (
        <View style={{ flex: 1, padding: 20 , alignItems: 'center', justifyContent: 'center'}}>
            <Text sytle ={{ fontSize: 25, textAlign: 'center', marginBottom: 20 }}>
                {language === 'ko' ? '카테고리를 선택하세요' : 'Choose a category' }
            </Text>
            <Text style={{ fontSize: 12, marginVertical: 10 }}>
                {language === 'ko' ? '카테고리를 선택하면 동물 소리를 들을 수 있어요!' : 'Choose a category to hear animal sounds!'}
            </Text>
            <FlatList
                data={animalCategories}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                numColumns={NUM_COLUMNS}
                contentContainerStyle={{ paddingHorizontal: ITEM_MARGIN }}
            />
        </View>
    );
}