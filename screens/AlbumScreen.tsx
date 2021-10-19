import { NavigationProp, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import albumDetails from '../data/albumDetails';
import SongListItem from '../components/SongListItem';
import AlbumHeader from '../components/AlbumHeader';
const AlbumScreen = (props: {}) => {
  
    const route = useRoute();
    // const albumId = route.params.id;
   //  useEffect( effect: () => {
   //     console.log(route);
   //  }, deps[])

 return (
    <View>
        <FlatList
        data={albumDetails.songs}
        renderItem={({ item }) => <SongListItem song={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <AlbumHeader album={albumDetails} />}
      />
    </View>
 )
}

export default AlbumScreen;