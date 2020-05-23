import React,{Component} from 'react';
import { SafeAreaView ,FlatList, StyleSheet, Dimensions,Image} from 'react-native';
import { Button, Divider, Layout, TopNavigation,Text, Card } from '@ui-kitten/components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Avatar } from '@ui-kitten/components';

export  class HomeScreen extends Component {
  constructor(props){
      super(props)
      this.state = {
        message: 'Nearest Stations', 
        message1: 'startingbooking',
        menu:[
          {icon:require('../assets/image10.png'),text:'Stations',screen:'Stations'},
          {icon:require('../assets/image11.png'),text:'Start booking',screen:'StartingBooking'},
          
        ]
      }
  }  
  render(){
    return (
        
            
            <SafeAreaView style={{ flex: 1 ,backgroundColor:'royalblue'}}>
            <TopNavigation title='Home' 
            titleStyle={{
              fontWeight:'bold',
                color:'black',
                fontSize:17,
                marginLeft:10
            }}
                style={{backgroundColor:'white'}} />
            <Divider/>
{/*             
           <Layout style={{flex:1,backgroundColor:"#fff", alignItems:"stretch"}}>
           
    <Layout style={{flex:.2,backgroundColor:"red"}}>
    <Text style={{fontSize:20, color:"#fff"}}>Stations</Text>
    </Layout>
    
 
    
    <Layout style={{flex:.2,backgroundColor:"blue"}}>
    <Text style={{fontSize:20, color:"#fff"}}>Starting booking</Text>
    </Layout>
    <Layout style={{flex:.2,backgroundColor:"purple"}}>
    <Text style={{fontSize:20, color:"#fff"}}>Setting</Text>
    </Layout>
    <Layout style={{flex:.2,backgroundColor:"orange"}}>
    <Text style={{fontSize:20, color:"#fff"}}>History</Text>
    </Layout>
    </Layout>
                 */}
                 <Layout style={style.Layout}>

                 <Avatar style={style.header}
    
    source={require('../assets/image22.png')}
     />
  <Text style={style.text}>Hala deraz</Text>

                 </Layout>
        <FlatList
          // contentContainerStyle={{flex: 1, justifyContent: 'center'}}
           
          data={this.state.menu}
          renderItem={({ item }) => (
            <Card style={style.card} onPress={()=>{this.props.navigation.navigate(item.screen)}}>
              <Image  style={ style.image} source={item.icon}/>
              <Text style={{    textAlign: 'center',fontSize:16,marginTop:30}}>{item.text}</Text>
            </Card>
          )}
          //Setting the number of column
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
        />
               
            </SafeAreaView>
        );
      }
    };
    const {width,height}= Dimensions.get('window');
    const style= StyleSheet.create(
      {
        card:{
          borderRadius:10,
          margin:10,
          width:(width-40)/2,
          height:120,
          marginTop:40
          
         
          
        
        },
        image:{
          height:50,
          width:110,
          aspectRatio: 1.3, 
    resizeMode: 'contain',
        },
        Layout:{
          backgroundColor:'royalblue',
          
          flexDirection: 'row',
          
         
        },
        header:{
          height:60,
          width:110,
          aspectRatio: 1.5, 
    resizeMode: 'contain',
    marginTop:10
        },
        text:{
          marginTop:30,
          fontSize:19,
         color:'white',
         fontWeight:'bold'
        
        }
      }
    )