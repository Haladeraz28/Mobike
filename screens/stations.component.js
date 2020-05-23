import React, { Component } from 'react';
import { SafeAreaView,StyleSheet,Image,ScrollView,View,StatusBar,Dimensions ,Linking,TouchableOpacity } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction, Button} from '@ui-kitten/components';
import MapView, { PROVIDER_GOOGLE, Callout } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import  { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Carousel from 'react-native-snap-carousel';



const BackIcon = (style) => (
  <Icon {...style} name='arrow-back' />
);

export class StationsScreen extends Component{
  constructor(props){
        super(props)
        this.state={
           origin:{latitude: 30.786704, longitude:31.000310} ,
           destination:{latitude:null,longitude:null} ,
           entries:[
            {
              title: 'Tanta university',
              subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
              illustration:require('../assets/logo.png'),
              link:'https://facebok.com/'
            },
            {
              title: 'Mobike',
              subtitle: 'Lorem ipsum dolor sit amet',
              illustration: require('../assets/image26.png'),
              link:'https://facebok.com/'
            },
            {
              title: 'Department',
              subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
              illustration: require('../assets/image29.png'),
              link:'https://facebok.com/'
            },
            
            
            
          ]
          };
  }
  _renderItem = ({item, index}) => {
    const {title, subtitle, illustration, link} = item;
    const uppercaseTitle = title ? (
      <Text style={[styles.title]} numberOfLines={2}>
        {title.toUpperCase()}
      </Text>
    ) : (
      false
    );
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.slideInnerContainer}
        onPress={() => {
          Linking.openURL(link).catch((err) => console.error('An error occurred', err));;
        }}>
        <View style={styles.shadow} />
        <View style={[styles.imageContainer]}>
          <Image source={ illustration}  style={styles.image}
           resizeMode={'contain'}/>
          <View style={[styles.radiusMask]} />
        </View>
        <View style={[styles.textContainer]}>
          {uppercaseTitle}
          <Text style={[styles.subtitle]} numberOfLines={2}>
           
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  
  
  FindRoute=(destination)=>{
    console.log(destination)
    this.setState({destination:destination})
  }
  BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={()=>this.props.navigation.goBack()}/>
  );
  render(){
    return (
        <SafeAreaView style={{ flex: 1 }}>
        <TopNavigation title='Nearest Stations'  leftControl={this.BackAction()}
        titleStyle={{
            color:'white',
            fontSize:17,
            fontWeight:'bold',
            marginLeft:10
        }}
            style={{backgroundColor:'royalblue'}} />
        <Divider/>
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.container}>
        <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
            latitude: 30.786704, 
            longitude:31.000310,
            latitudeDelta: 0.04,
            longitudeDelta: 0.04,
            
        }}
        
        >
            <Marker coordinate = {{latitude: 30.786704,
            longitude:31.000310}}
            pinColor = {"purple"} // any color
            title={"title"}
            description={"description"}
            opacity={1}
            >
              <Callout>
                <Button>Test</Button>
              </Callout>
            </Marker>
            <Marker coordinate = {{latitude: 30.776704,
            longitude:31.000410}}
            pinColor = {"purple"} // any color
            title={"title"}
            description={"description"}
            opacity={1}
            >
              <Callout onPress={()=>{this.FindRoute({latitude: 30.776704,
            longitude:31.000410})}}>
                <View>
                  <Text>
                    test station
                  </Text>
                </View>
              </Callout>
            </Marker>
            
           {this.state.destination.latitude && this.state.destination.longitude &&
            <MapViewDirections
              origin={this.state.origin}
              destination={this.state.destination}
              apikey={'AIzaSyDIsvlnCWVSeYFEz2KdShw38TN_YtFTZrg'}
              strokeWidth={3}
              strokeColor="hotpink"
            />
            }
            
        </MapView>
        </View>
        
        <View style={styles.slider}>
        <Carousel
          ref={c => (this._slider1Ref = c)}
          data={this.state.entries}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages={false}
          firstItem={1}
          inactiveSlideScale={0.84}
          inactiveSlideOpacity={0.7}
          // inactiveSlideShift={20}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          loop={true}
          loopClonesPerSide={2}
          autoplay={true}
          autoplayDelay={500}
          autoplayInterval={3000}
          //onSnapToItem={index => this.setState({slider1ActiveSlide: index})}
        />
      </View>
        
        </Layout>
        </SafeAreaView>
    );
  }
};
function wp(percentage) {
  const value = (percentage * width) / 100;
  return Math.round(value);
}
const IS_IOS = Platform.OS === 'ios';

const { width, height } = Dimensions.get('screen');
const slideHeight = height * 0.4;
const slideWidth = wp(50);
const itemHorizontalMargin = wp(2);
const sliderWidth = width;
const itemWidth = slideWidth + itemHorizontalMargin * 2;
const entryBorderRadius = 8;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: height*.5,
    width: width,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    marginBottom:10
  },
  slide: {
    top:height*56,
    width: width,
    height: height*.44,
    paddingHorizontal: 20
    // other styles for the item container
},





slider: {
  top: height * 0.2,
  marginTop: 15,
  overflow: 'visible', // for custom animations
  marginTop:30,
  marginBottom:70
},
sliderContentContainer: {
  paddingVertical: 1,
  backgroundColor:'white' // for custom animation
},
slideInnerContainer: {
  width: itemWidth,
  height: slideHeight,
  paddingHorizontal: itemHorizontalMargin,
  paddingBottom: 18, 
  backgroundColor:'white'// needed for shadow
},
shadow: {
  position: 'absolute',
  top: 0,
  left: itemHorizontalMargin,
  right: itemHorizontalMargin,
  bottom: 18,
  shadowColor: '#1a1917',
  shadowOpacity: 0.25,
  shadowOffset: {width: 0, height: 10},
  shadowRadius: 10,
  borderRadius: entryBorderRadius,
 
},
imageContainer: {
  flex: 1,
  marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
  backgroundColor: 'lavender',
  borderTopLeftRadius: entryBorderRadius,
  borderTopRightRadius: entryBorderRadius,
  
},
imageContainerEven: {
  backgroundColor: '#1a1917',
},
image: {
  ...StyleSheet.absoluteFillObject,
  resizeMode: 'contain',
  borderRadius: IS_IOS ? entryBorderRadius : 0,
  borderTopLeftRadius: entryBorderRadius,
  borderTopRightRadius: entryBorderRadius,
  marginTop:30,
  marginLeft:40
  
 
  
 
  
},
// image's border radius is buggy on iOS; let's hack it!
radiusMask: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: entryBorderRadius,
  backgroundColor: 'royalblue',
},
radiusMaskEven: {
  backgroundColor: '#1a1917',
},
textContainer: {
  justifyContent: 'center',
  paddingTop: 20 - entryBorderRadius,
  paddingBottom: 20,
  paddingHorizontal: 16,
  backgroundColor: 'white',
  borderBottomLeftRadius: entryBorderRadius,
  borderBottomRightRadius: entryBorderRadius,
},
textContainerEven: {
  backgroundColor: '#1a1917',
},
title: {
  color: '#1a1917',
  fontSize: 13,
  fontWeight: 'bold',
  letterSpacing: 0.5,
  marginLeft:50

},
titleEven: {
  color: 'white',
},
subtitle: {
  marginTop: 6,
  color: '#888888',
  fontSize: 12,
  fontStyle: 'italic',
},
subtitleEven: {
  color: 'rgba(255, 255, 255, 0.7)',
},
 });
 
