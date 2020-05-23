import React, { Component } from 'react';



import { SafeAreaView,StyleSheet,Image,ScrollView,View,StatusBar,Dimensions ,FlatList,Linking,TouchableOpacity ,ImageBackground,Header } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction, Button, Card} from '@ui-kitten/components';
import MapView, { PROVIDER_GOOGLE, Callout } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import  { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Carousel from 'react-native-snap-carousel';
import {StarIcon, category, Modal, CardImage, CardTitle, CardContent, CardAction } from '@ui-kitten/components';
import Rating from 'react-native-easy-rating';
import { DrawerHeaderFooter } from '@ui-kitten/components';
import { SimpleAnimation } from 'react-native-simple-animations';
import { cos } from 'react-native-reanimated';



const BackIcon = (style) => (
  <Icon {...style} name='arrow-back' />
);

export class StartingBookingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      visible1: false,
      visible2:false,
      
      end:false,
      start:false,
      car:"RENT TRIP",
      rating:1,
    }
  };
 
 
  
  step = () => {
    if(this.state.start==false){
    this.setState({ car: "END TRIP",start:true});
    }else if(this.state.start == true && this.state.end == false){
      this.setState({ car: "Done",end:true});
    }else{
      this.props.navigation.navigate('Home');
    }
  };


BackAction = () => (
  <TopNavigationAction icon={BackIcon} onPress={()=>this.props.navigation.goBack()}/>
);
render(){
  return (
      <SafeAreaView >
      <TopNavigation title='Starting booking'  leftControl={this.BackAction()}
      titleStyle={{
        
        fontSize:17,
        fontWeight:'bold',
        marginLeft:10
    }}
     
          style={{backgroundColor:'white'}} />
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
          
         
        </MapView>


      
           
          
        
      </View>
     
      
      

      </Layout>
      <Layout  style={{top: height*.48,alignItems:'center',backgroundColor:'transparent'}}>
      <Card style={styles.card} >
        <Layout style={styles.layout} level='4'>
         
               <Image  style={ styles.image} 
               source={require('../assets/image30.png')}/> 
               </Layout>
               <Layout style={styles.layout} level='3'>
              
              <Text style={{marginLeft:170,textAlign: 'center',fontSize:16,marginTop:10,fontWeight:'bold'}}>lorem BMX</Text>
              
              </Layout>
              <Layout style={styles.layout} level='2'>
              
              { this.state.end==false && <Text style={{marginLeft:170,textAlign: 'center',fontSize:16,marginTop:55}}>ID:</Text>}
              { this.state.end==true && <Text style={{marginLeft:170,textAlign: 'center',fontSize:16,marginTop:55}}>Points:</Text>}
              
              </Layout>
              <Layout style={styles.layout1} level='2'>
              {this.state.end==false && <Text style={{alignItems:'center',justifyContent:'center',marginLeft:20,marginTop:5}}>JWT</Text>}
              {this.state.end==true && <Text style={{alignItems:'center',justifyContent:'center',marginLeft:20,marginTop:5}}>250</Text>}
              
             { this.state.end==true &&<Rating style={styles.ffff}
                  rating={1}
                  max={5}
                  iconWidth={24}
                  iconHeight={24}
                  iconSelected={require('../assets/selected.png')}
                  iconUnselected={require('../assets/unselected.png')}
                  onRate={(rating) => this.setState({ rating: rating })} />}
              </Layout>
            </Card>
            <Button style={styles.button}
              onPress={this.step} >
              {this.state.car}
              </Button>
           </Layout>
           
     
     
      </SafeAreaView>
  );
}
};







const { width, height } = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: height*.59,
    width: width,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    marginBottom:80
  },
  card:{
    borderRadius:10,
    
    width:340,
    height:210,
    top:-30,
 
    backgroundColor:'white',
   
    
   
    
  
  },
  layout: {
    flex: 1,
    
  },
  image:{
    height:200,
    width:150,

    marginLeft:10,
   
resizeMode: 'contain',

  },
  layout1:{
    
  
    width: 300,
    alignSelf: "center",
    borderWidth: .2,
    borderColor: "black",
    borderStyle: "dashed",
    marginLeft:170,
    marginTop:80,
    width:80,
    height:30,
    backgroundColor:'white'
  },
 
  button:{
  top:-15,
    backgroundColor:'royalblue',
    width:340
  },
  ffff:{
    top:40,
    right:20
  ,zIndex:500
  }
})