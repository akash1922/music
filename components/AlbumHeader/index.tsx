import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Album } from '../../types';
import styles from './style';
export type  AlbumHeaderProps={
    album: Album;
}


const ALbumHeader = (props: AlbumHeaderProps)=> {
    const{album}=props;
    return(
        <View style={styles.container}>
            <Image source={{uri:album.imageUri}} style={styles.image} />
            <Text style={styles.name}> {album.name} </Text>
            <View style={styles.creatorContainer} >
                <Text>By {album.by}</Text>
                <Text style={styles.likes}>{album.numberOfLikes} Likes </Text>
            </View>
            <TouchableOpacity>
            <View style={styles.button}>
                <Text style={styles.buttonText}>PLAY</Text>  

            </View>

            </TouchableOpacity>
        </View>
        )
}

export default ALbumHeader;


