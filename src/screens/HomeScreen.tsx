
import React, { useContext, useEffect } from 'react'
import { View, Text, Button, ActivityIndicator, ScrollView, Dimensions } from 'react-native'

import Carousel from 'react-native-snap-carousel';
import ImageColors from 'react-native-image-colors';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../componnts/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { Movie } from '../interfaces/movieInterface';
import { FlatList } from 'react-native-gesture-handler';
import { HorizontalSlider } from '../componnts/HorizontalSlider';
import { GradientBackground } from '../componnts/GradientBackground';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { getImageColors } from '../helpers/getColors';
import { GradientContext } from '../context/GradientContext';

const { width: windowWidth } = Dimensions.get('window');
export const HomeScreen = () => {
  

  const { nowPlaying, isLoading, topRated, upComing, popular } = useMovies();
  const { top } = useSafeAreaInsets();

  const {setMainColors } = useContext( GradientContext )

  const getPosterColors = async ( index : number ) => {
      const movie = nowPlaying[index];
      const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;
      const [ primary='green', secondary='orange' ] = await getImageColors( uri )
        
      setMainColors({ primary, secondary })
      console.log({primary,secondary})
  }

  useEffect(() => {
    if( nowPlaying.length> 0 ) {
        getPosterColors(0);
    }
  
   
  }, [nowPlaying])
  
 
  if ( isLoading ){
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="blue" size={100}  />

        

    </View>
  
  )
  }

  return (

  <GradientBackground>


    <ScrollView>

            
            <View style={{ marginTop: top + 20 }}>
                
                {/* Carosel Principal */}
                <View style={{ height: 440 }}>
                    <Carousel 
                        data={ nowPlaying }
                        renderItem={ ({ item }: any) => <MoviePoster movie={ item } /> }
                        sliderWidth={ windowWidth }
                        itemWidth={ 300 }
                        inactiveSlideOpacity={0.9}
                        onSnapToItem={ index => getPosterColors( index )}
                    />
                </View>

                {/* peliculas populares */}

                
                <HorizontalSlider title='Populares' movies={ popular } />
                <HorizontalSlider title='Top Rated' movies={ topRated } />
                <HorizontalSlider title='Upcoming' movies={ upComing } />
                
                

            </View>
        </ScrollView>
  </GradientBackground>

    

  )
}
