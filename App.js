import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
<link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.topUnder}>
          <Text style={styles.topTitle}>423423423425</Text>
          <Text class="uil uil-airplay"></Text>
        </View>
      </View>

      <View style={styles.bottom}>

        <View style={styles.bottomUnder}>
          <View style={styles.numBox}><Text style={styles.numFontC}>C</Text></View>
          <View style={styles.numBox}><Text style={styles.numFont}>?</Text></View>
          <View style={styles.numBox}><Text style={styles.numFont}>\</Text></View>
          <View style={styles.numBox}><Text style={styles.numFont}>+</Text></View>

          <View style={styles.numBoxNum}><Text style={styles.numFontNum}>1</Text></View>
          <View style={styles.numBoxNum}><Text style={styles.numFontNum}>2</Text></View>
          <View style={styles.numBoxNum}><Text style={styles.numFontNum}>3</Text></View>
          <View style={styles.numBox}><Text style={styles.numFont}>-</Text></View>
          <View style={styles.numBoxNum}><Text style={styles.numFontNum}>4</Text></View>
          <View style={styles.numBoxNum}><Text style={styles.numFontNum}>5</Text></View>
          <View style={styles.numBoxNum}><Text style={styles.numFontNum}>6</Text></View>
          <View style={styles.numBox}><Text style={styles.numFont}>*</Text></View>
          <View style={styles.numBoxNum}><Text style={styles.numFontNum}>7</Text></View>
          <View style={styles.numBoxNum}><Text style={styles.numFontNum}>8</Text></View>
          <View style={styles.numBoxNum}><Text style={styles.numFontNum}>9</Text></View>
          <View style={styles.numBox}><Text style={styles.numFont}>/</Text></View>
          <View style={styles.numBox}><Text style={styles.numFont}>&</Text></View>
          <View style={styles.numBoxNum}><Text style={styles.numFontNum}>0</Text></View>
          <View style={styles.numBoxequal}><Text style={styles.equalFont}>=</Text></View>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    height: "100%",
    // width:200,
    backgroundColor: '#f0f0f0',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottom: {
    backgroundColor: '#393E46',
    height: "65%",
    width: '100%',
    // paddingVertical:10,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginHorizontal: 20,
  },
  bottomUnder: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  numBox: {
    margin: 2,
    backgroundColor: '#222831',
    borderRadius: 150,
    textAlign: 'center',
    justifyContent: 'center',
    height: 85,
    width: 85,
  },
  numFont: {
    textAlign: 'center',
    color: '#EEEEEE',
    justifyContent: 'center',
    alignContent: 'center',
    margin: 0,
    padding: 0,
    alignItems: 'center',
    fontSize: 60,
    paddingHorizontal: 25,
  },
  numFontNum:{
    fontWeight:'bold',
    textAlign: 'center',
    color: 'black',
    justifyContent: 'center',
    alignContent: 'center',
    margin: 0,
    padding: 0,
    alignItems: 'center',
    fontSize: 60,
    paddingHorizontal: 25,
  },
  numBoxNum: {
    margin: 2,
    backgroundColor: '#EEEEEE',
    borderRadius: 150,
    textAlign: 'center',
    justifyContent: 'center',
    height: 85,
    width: 85,
  },
  numFontC: {
    textAlign: 'center',
    color: 'orange',
    justifyContent: 'center',
    alignContent: 'center',
    margin: 0,
    padding: 0,
    alignItems: 'center',
    fontSize: 60,
    paddingHorizontal: 25,
  },
  numBoxequal: {
    margin: 2,
    marginVertical: 6,
    backgroundColor: '#00ADB5',
    borderRadius: 150,
    textAlign: 'center',
    justifyContent: 'center',
    height: 80,
    width: 170,
  },
  equalFont: {
    textAlign: 'center',
    color: '#EEEEEE',
    justifyContent: 'center',
    alignContent: 'center',
    margin: 0,
    padding: 0,
    alignItems: 'center',
    fontSize: 60,
    paddingHorizontal: 25,
  },
  // Top Section Start
  top: {
    zIndex: 1,
    marginBottom: -22,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    backgroundColor: '#00ADB5',
    height: "30%",
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',

  },
  topUnder: {
    marginBottom: 20
  },
  topTitle: {
    fontSize: 50,
    color: 'white'
  }
});
