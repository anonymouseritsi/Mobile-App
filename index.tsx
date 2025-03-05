import react from "react";
import {View, Text, Image, StyleSheet,Dimensions} from "react-native";
import { Ionicons } from "@expo/vector-icons";


const my_app = ()=> {
  return(
    <View style={{flex:1}}>
      {/* For Header */}
      <View style={{backgroundColor:'white',height:100,width:'100%',flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{flexDirection:'row'}}>
            <Image source={require('../assets/images/pic.jpg')} style={{margin:10,height:70,width:70, borderRadius:35}} />
              <View style={{margin:8}}>
                <Text style={{fontSize:20,color:'black'}}> Hello</Text>
                <Text style={{fontSize:20,color:'black',fontWeight:'bold'}}> Richie Alcantara</Text>
              </View>
        </View>
        <Ionicons name="search" size={30} color="black" style={{margin:20}} />
      </View >

      {/* For card */}
      <View style={{backgroundColor:'blue',height:230,width:'100%', borderRadius:40}}>
          <View style={{flexDirection:'row',justifyContent:'space-between',margin:12}}>
            <Text style={{color:'white',fontSize:20}}> Current Balance</Text>
            <Ionicons name="disc" size={30} color="orange" />
            
          </View>
          <View style={{flexDirection:'row',margin:10}}>
              <Ionicons name="logo-bitcoin" size={24} color="skyblue" />
              <Text style={{color:'white',fontSize:20}}> 248.75</Text>
          </View>
          <View>
            <Text style={{color:'white',fontSize:25,margin:15}}>****  ****  **** 1474</Text>
          </View>
          <View style={{flexDirection:'row',margin:10,justifyContent:'space-between'}}>
              <Text style={{color:'white',fontSize:20}}> Richie Alcantara</Text>
              <View>
                <Text style={{color:'white',fontSize:15}}>Ex. Date </Text>
                <Text style={{color:'white',fontSize:15}}>10/28 </Text>
              </View>
          </View>
      </View>

      {/* For Services */}
      <View style={{height:150,width:'100%'}}>
        <Text style={{color:'black',fontSize:25,fontWeight:'bold',margin:15}}>Services </Text>
        <View style={{backgroundColor:'white',height:100,width:'100%',flex:1,flexDirection:'row',justifyContent:'space-evenly'}}>
          <View>
            <Ionicons name="wallet" size={50} color="red" style={{marginTop:10}} />
            <Text style={{color:'black',fontSize:15,fontWeight:'bold'}}> Wallet </Text>
          </View>
          <View>
            <Ionicons name="arrow-redo" size={50} color="skyblue" style={{marginTop:10}} />
            <Text style={{color:'black',fontSize:15,fontWeight:'bold'}}> Transfer </Text>
          </View>
          <View>
            <Ionicons name="logo-paypal" size={50} color="orange" style={{marginTop:10}}/>
            <Text style={{color:'black',fontSize:15,fontWeight:'bold'}}> Pay </Text>
          </View>
          <View>
            <Ionicons name="briefcase-sharp" size={50} color="yellowgreen" style={{marginTop:10}}/>
            <Text style={{color:'black',fontSize:15,fontWeight:'bold'}}> Topup </Text>
          </View>
        </View>
      </View>

        {/* For Transaction */}
      <View>
        <Text style={{color:'black',fontSize:25,fontWeight:'bold',margin:15}}>Recent Transactions </Text>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          
          <View style={{margin:5,flexDirection:'row'}}>
            <Ionicons name="logo-dribbble" size={40} color="red" style={{margin:5}} />
            <View>
              <Text style={{fontSize:15,color:'black',fontWeight:'bold'}}> Dribble</Text>
              <Text style={{fontSize:15,color:'black',fontWeight:'bold'}}> Payment Received</Text>
            </View>
          </View>
          <Text style={{fontSize:15,color:'red',fontWeight:'bold',margin:10}}> $275 </Text>
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{margin:5,flexDirection:'row'}}>
              <Ionicons name="wallet" size={40} color="green" style={{margin:5}} />
              <View>
                <Text style={{fontSize:15,color:'black',fontWeight:'bold'}}> Google Wallet</Text>
                <Text style={{fontSize:15,color:'black',fontWeight:'bold'}}> Payment via wallet can be done</Text>
              </View>
              
            </View>
            <Text style={{fontSize:15,color:'green',fontWeight:'bold',margin:10}}> $275 </Text>
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{margin:5,flexDirection:'row'}}>
              <Ionicons name="logo-gitlab" size={40} color="blue" style={{margin:5}} />
              <View>
                <Text style={{fontSize:15,color:'black',fontWeight:'bold'}}> Uplabs</Text>
                <Text style={{fontSize:15,color:'black',fontWeight:'bold'}}> Payment Received</Text>
              </View>
            
            </View>
            <Text style={{fontSize:15,color:'blue',fontWeight:'bold',margin:10}}> $275 </Text>
        </View>


        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          
          <View style={{margin:5,flexDirection:'row'}}>
            <Ionicons name="logo-dribbble" size={40} color="red" style={{margin:5}} />
            <View>
              <Text style={{fontSize:15,color:'black',fontWeight:'bold'}}> Dribble</Text>
              <Text style={{fontSize:15,color:'black',fontWeight:'bold'}}> Payment Received</Text>
            </View>
          </View>
          <Text style={{fontSize:15,color:'red',fontWeight:'bold',margin:10}}> $275 </Text>
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{margin:5,flexDirection:'row'}}>
              <Ionicons name="wallet" size={40} color="green" style={{margin:5}} />
              <View>
                <Text style={{fontSize:15,color:'black',fontWeight:'bold'}}> Google Wallet</Text>
                <Text style={{fontSize:15,color:'black',fontWeight:'bold'}}> Payment via wallet can be done</Text>
              </View>
              
            </View>
            <Text style={{fontSize:15,color:'green',fontWeight:'bold',margin:10}}> $275 </Text>
        </View>


      </View>

    </View>

)};



export default my_app;