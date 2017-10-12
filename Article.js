/**
 * HeyDoc!
 * https://github.com/carlosarturo28
 * @flow
 */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
} from 'native-base';
import { Image, StatusBar, TouchableWithoutFeedback } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions, Router, Scene } from 'react-native-router-flux';
import Home from './App';
import { Container, Header, Body, Left, Card, CardItem, Content, Footer, FooterTab, Button, Icon, Text, Title } from 'native-base';

class Article extends React.Component {

  render() {
    return (

      <Container>
		<StatusBar
     backgroundColor="#2768AC"
     barStyle="light-content"
   		/>
        <Content>

        
          <CardItem cardBody style={{borderRadius: 0, marginTop: -20}}>
  			<View style={{width:100, height:120, flex:1, flexDirection:'row'}}>
     			<Image source={{uri: 'https://www.damemagazine.com/sites/default/files/styles/feature_wide/public/field/image/happy-baby.jpg?itok=6Ez4tlLV'}} style={{height: 220, width: null, flex: 1}}/>
  				
  				<View style={{position: 'absolute', top: 0, right: 0, bottom: -100, left: 0, backgroundColor: 'black', opacity: 0.36}}/>
  				
  			</View>
		  </CardItem>
		

          <Card style={{backgroundColor: "transparent"}}>
            <CardItem cardBody style={{backgroundColor: "transparent"}}>
            	<Text style={{fontSize: 20, color: "#FFFFFF"}}>
                  4 tips for dealing with your baby’s first illness
                </Text>
            </CardItem>
            
            <CardItem footer style={{backgroundColor: "transparent"}}>
              <Text style={{color:"#FFFFFF", fontSize: 14, backgroundColor: "transparent"}}>— By Juliet Scott</Text>
            </CardItem>
         
         	<Text style={{fontSize: 16, color: "#9C9C9C", fontWeight: "200", marginTop: 30, marginHorizontal: 14}}>
				Cellulite is fat that is caught between bands of connective tissue directly beneath the skin that creates a lumpy, bumpy orange peel appearance mostly on the hips, thighs and backsides of most women. While not life threatening, it is ugly, unsightly and embarrassing if you’re the one that has it.
			</Text>
			
			<Text style={{fontSize: 16, color: "#9C9C9C", fontWeight: "200", marginTop: 20, marginHorizontal: 14}}>
				Because cellulite is primarily caused by fat, reducing the body’s fat content by creating a caloric deficit either by eating less or exercising is the first step for reducing cellulite. However, diet and exercise do not always give women (and some men) the results that they’re looking for. This is where treatment options come in.
			</Text>
			
		  </Card>
        
        </Content>


        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="ios-videocam-outline" />
              <Text>Videochat</Text>
            </Button>
            <Button vertical>
              <Icon name="ios-chatboxes-outline" />
              <Text>Chat</Text>
            </Button>
            <Button vertical>
              <Icon active name="ios-notifications-outline" />
              <Text>Notifications</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
export default Article;