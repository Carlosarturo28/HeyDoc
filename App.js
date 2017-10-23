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
import { Image, TouchableWithoutFeedback } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import getTheme from './native-base-theme/components';
import { StyleProvider, Container, Header, Body, Left, Card, CardItem, Content, Footer, FooterTab, Button, Icon, Text, Title } from 'native-base';
import Store from './src/Store';

class Home extends React.Component {

  render() {
    return (
<StyleProvider  style={getTheme()}>
      <Container>
        <Header> 
      <Body>
          <Title>MD. Felipe Jaramillo </Title>
      </Body>
        </Header>
        <Content>
          <TouchableWithoutFeedback onPress={Actions.article}>
          <Card>
              <CardItem cardBody style={{borderRadius: 4, overflow: 'hidden'}}>
              <Image source={{uri: 'https://www.damemagazine.com/sites/default/files/styles/feature_wide/public/field/image/happy-baby.jpg?itok=6Ez4tlLV'}} style={{height: 185, width: null, flex: 1}}/>  
            </CardItem>
            <CardItem cardBody>
                <Text>
                  4 tips for dealing with your baby’s first illness
                </Text>
            </CardItem>
            <CardItem footer>
              <Text style={{fontSize: 14}}>— By Juliet Scott</Text>
            </CardItem>
         </Card>
        </TouchableWithoutFeedback>
         <Grid>
         <Col>
         <Card>
              <CardItem cardBody style={{borderRadius: 4, overflow: 'hidden'}}>
              <Image source={{uri: 'https://website-gyb7jkvs4m4z.netdna-ssl.com/prismics3/x78a4c2dbfd5f5ad764ac8a19fa925128969b92f2_unhappy-woman-pregnant.jpg.pagespeed.ic.vem6xnfOve.jpg'}} style={{height: 105, width: null, flex: 1}}/>
            </CardItem>
            <CardItem cardBody>
                <Text style={{fontSize: 14}}>
                  Pregnant and have anxiety disorder?
                </Text>
            </CardItem>
            <CardItem footer>
              <Text style={{fontSize: 12}}>— By William Tell</Text>
            </CardItem>
         </Card>
        </Col>
        <Col>
         <Card>
              <CardItem cardBody style={{borderRadius: 4, overflow: 'hidden'}}>
              <Image source={{uri: 'https://media.mnn.com/assets/images/2017/06/crying_baby_bottle.jpg.653x0_q80_crop-smart.jpg'}} style={{height: 105, width: null, flex: 1}}/>
            </CardItem>
            <CardItem cardBody>
                <Text style={{fontSize: 14}}>
                  The Truth About Acid Reflux in babies
                </Text>
            </CardItem>
            <CardItem footer>
              <Text style={{fontSize: 12}}>— By John Lennon</Text>
            </CardItem>
         </Card>
         </Col>
         </Grid>

         <Grid>
         <Col>
         <Card>
              <CardItem cardBody style={{borderRadius: 4, overflow: 'hidden'}}>
              <Image source={{uri: 'https://static.vix.com/en/sites/default/files/styles/large/public/ovs/w/what-do-happy-kids-have-in-common-2.jpg?itok=-_LeUlKS'}} style={{height: 105, width: null, flex: 1}}/>
            </CardItem>
            <CardItem cardBody>
                <Text style={{fontSize: 14}}>
                  Pregnant and have anxiety disorder?
                </Text>
            </CardItem>
            <CardItem footer>
              <Text style={{fontSize: 12}}>— By William Tell</Text>
            </CardItem>
         </Card>
        </Col>
        <Col>
         <Card>
              <CardItem cardBody style={{borderRadius: 4, overflow: 'hidden'}}>
              <Image source={{uri: 'https://media.mnn.com/assets/images/2016/01/stern-baby.jpg.838x0_q80.jpg'}} style={{height: 105, width: null, flex: 1}}/>
            </CardItem>
            <CardItem cardBody>
                <Text style={{fontSize: 14}}>
                  The Truth About Acid Reflux in babies
                </Text>
            </CardItem>
            <CardItem footer>
              <Text style={{fontSize: 12}}>— By John Lennon</Text>
            </CardItem>
         </Card>
         </Col>
         </Grid>
        </Content>


        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="ios-videocam-outline" />
              <Text>Videochat</Text>
            </Button>
            <Button vertical onPress={Actions.routeChat}>
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
    </StyleProvider>
    );
  }
}

export default Home;
