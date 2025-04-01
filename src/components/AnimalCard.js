import React from "react";
import { Image } from "react-native";
import { Card, Button } from '@rneui/themed';
import { Audio } from 'expo-av';

export default function AnimalCard({ animal, language }) {
    const playSound = async () => {
        const { sound } = await Audio.Sound.createAsync(animal.sound);
        await sound.playAsync();
    };
    
    return (
        <Card containerStyle={{ borderRadius: 15 }}>
            <Card.Title>
                {language === 'ko' ? animal.name_ko : animal.name_en}
            </Card.Title>
            <Card.Divider color="white" />
            <Image
            source={animal.image}
            style={{
                width: '100%',
                height: 150,
                resizeMode: 'contain',
                borderRadius: 10,
            }}
        />
        <Button
        title={language === 'ko' ? '소리 재생' : 'Play Sound'}
        onPress={playSound}
        buttonStyle={{ marginTop: 15, borderRadius: 25 }}
        />
       </Card>
    );
}

