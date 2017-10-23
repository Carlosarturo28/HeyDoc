var React = require('react-native');
var {StyleSheet, Dimensions, Platform} = React;


module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  inputs: {
    position: 'relative',
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    top: -200,
    flex: 1,
  },
  inputContainer: {
    padding: 10,
    marginHorizontal: 32,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginTop: 4,
    borderBottomWidth: 0,
    borderColor: 'transparent'
  },
  input: {
    fontFamily: 'SofiaProRegular',
    position: 'absolute',
    left: 5,
    top: 0,
    right: 5,
    backgroundColor: '#E5F2FF',
    borderRadius: 50,
    bottom: 0,
    height: 40,
    fontSize: 18,
    padding: 5,
    paddingHorizontal: 15
  },
  greyFont: {
    color: '#224870'
  },
  darkFont: {
    color: '#000'
  }
});

module.exports.colors = {
  accentColor: '#31D8A0'
};