import variable from "./../variables/platform";

export default (variables = variable) => {
  const cardTheme = {
".transparent":{
shadowColor:null,
shadowOffset:null,
shadowOpacity:null,
shadowRadius:null,
elevation:null},

marginVertical:5,
marginHorizontal:16,
flex:1,
borderWidth:variables.borderWidth,
borderRadius:0,
borderColor:variables.cardBorderColor,
flexWrap:"wrap",
backgroundColor:variables.cardDefaultBg,
shadowColor:"#000",
shadowOffset:null,
shadowOpacity:0,
shadowRadius:0,
elevation:0};

  return cardTheme;
};
