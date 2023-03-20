import React,{ useCallback, useState } from 'react';
import { View,TextInput,StyleSheet,ImageBackground, TouchableOpacity, KeyboardAvoidingView, Platform, } from 'react-native';
import backgroundImage from '../assets/image/droplet.jpeg';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import colors from '../constants/colors';

const ChatScreen = props => {

	const [messageText,setMessageText] = useState("");

	const sendMessage = useCallback(()=>{
			setMessageText("");
	},[messageText]);

	return (
		<SafeAreaView
		 edges = {['right','left','bottom']}
		 style={styles.container}
		>
			<KeyboardAvoidingView style={styles.screen}
			keyboardVerticalOffset={100}
			behavior={Platform.OS==="ios"?"padding":undefined}>
			<ImageBackground source={backgroundImage} style={styles.backgroundImage}>
					
			</ImageBackground>	
			<View style={styles.inputContainer}>
				<TouchableOpacity style={styles.mediaButton} onPress={()=>{console.log('pressed')}}>
				 <Feather name="plus" size={24} color={colors.blue}/>	
				</TouchableOpacity>
				<TextInput style={styles.textBox} value={messageText} onSubmitEditing={sendMessage} onChangeText={text=> setMessageText(text)}/>
				{
					messageText==="" &&
					<TouchableOpacity style={styles.mediaButton} onPress={()=>{console.log('Pressed')}}>
						<Feather name="camera" size={24} color={colors.blue}/>
					</TouchableOpacity>
				}
				{
					messageText!=="" &&
					<TouchableOpacity style={{...styles.mediaButton,...styles.sendButton}} onPress={sendMessage}>
						<Feather name="send"  size={20} color='white'/>
					</TouchableOpacity>
				}
			</View>
			</KeyboardAvoidingView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
container:{
	flex:1,
	flexDirection:'column',
},
screen:{
	flex:1
},
backgroundImage:{
	flex:1,
},
inputContainer:{
	flexDirection:'row',
	paddingVertical:8,
	paddingHorizontal:10,
	height:50
},
textBox:{
	flex:1,
	borderWidth:1,
	borderRadius:15,
	justifyContent:'center',
	alignItems:'center',
	borderColor:colors.lightGrey,
	marginHorizontal:15,
	paddingHorizontal:12,		
},
mediaButton:{
	justifyContent:'center',
	alignItems:'center',
	width:35,
},
sendButton:{
	backgroundColor:colors.blue,
	borderRadius:50,
	padding:8,
	width:35,

}
});
export default ChatScreen;