import { StatusBar } from 'expo-status-bar';
import { useState, useRef } from 'react';
import { Keyboard } from 'react-native';
import { StyleSheet, Text, View, TextInput } from 'react-native';
<link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
export default function App() {
  const [isShowingText, setIsShowingText] = useState("");

  const calculate = () => {
    try {

      let evaluated = eval(isShowingText)
      setIsShowingText(evaluated)

    } catch (error) {
      alert("A blind person can not use this application")
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.topUnder}>
          <Text style={styles.topTitle}>{isShowingText}</Text>
          <Text class="uil uil-airplay"></Text>
        </View>
      </View>

      <View style={styles.bottom}>

        <View style={styles.bottomUnder}>
          <View style={styles.numBox}><Text style={styles.numFontC} onPress={() => setIsShowingText('')}>C</Text></View>
          <View style={styles.numBox}><Text style={styles.numFont}>?</Text></View>
          <View style={styles.numBox}><Text style={styles.numFont} onPress={() => setIsShowingText(isShowingText + "/")}>/</Text></View>
          <View style={styles.numBox}><Text style={styles.numFont} onPress={() => setIsShowingText(isShowingText + '+')}>+</Text></View>

          <View style={styles.numBoxNum}><Text style={styles.numFontNum} onPress={() => setIsShowingText(isShowingText + "1")}>1</Text></View>
          <View style={styles.numBoxNum}><Text style={styles.numFontNum} onPress={() => setIsShowingText(isShowingText + "2")}>2</Text></View>
          <View style={styles.numBoxNum}><Text style={styles.numFontNum} onPress={() => setIsShowingText(isShowingText + "3")}>3</Text></View>
          <View style={styles.numBox}><Text style={styles.numFont} onPress={() => setIsShowingText(isShowingText + "-")}>-</Text></View>
          <View style={styles.numBoxNum}><Text style={styles.numFontNum} onPress={() => setIsShowingText(isShowingText + "4")}>4</Text></View>
          <View style={styles.numBoxNum}><Text style={styles.numFontNum} onPress={() => setIsShowingText(isShowingText + "5")}>5</Text></View>
          <View style={styles.numBoxNum}><Text style={styles.numFontNum} onPress={() => setIsShowingText(isShowingText + "6")}>6</Text></View>
          <View style={styles.numBox}><Text style={styles.numFont} onPress={() => setIsShowingText(isShowingText + "*")}>X</Text></View>
          <View style={styles.numBoxNum}><Text style={styles.numFontNum} onPress={() => setIsShowingText(isShowingText + "7")}>7</Text></View>
          <View style={styles.numBoxNum}><Text style={styles.numFontNum} onPress={() => setIsShowingText(isShowingText + "8")}>8</Text></View>
          <View style={styles.numBoxNum}><Text style={styles.numFontNum} onPress={() => setIsShowingText(isShowingText + "9")}>9</Text></View>
          <View style={styles.numBox}><Text style={styles.numFont} onPress={() => setIsShowingText(isShowingText + "/")}>/</Text></View>
          <View style={styles.numBox}><Text style={styles.numFont}>&</Text></View>
          <View style={styles.numBoxNum}><Text style={styles.numFontNum} onPress={() => setIsShowingText(isShowingText + "0")}>0</Text></View>
          <View style={styles.numBoxequal}><Text style={styles.equalFont} onPress={calculate}>=</Text></View>
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
  numFontNum: {
    fontWeight: 'bold',
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
    marginBottom: 20,
    // borderWidth: 3,
    height: '70%',
    width: "100%",
    // borderColor: "yellow",
  },
  topTitle: {
    paddingHorizontal: 5,
    // borderWidth: 2,
    // borderColor: "red",
    height: '100%',
    width: '100%',
    fontSize: 50,
    color: 'white',
  }
});
