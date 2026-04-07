import Button from "@/components/Button";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";


export default function Index() {

  const [display, setDisplay] = useState("");

  const handlePress = (value: string) => {
    if (display === "Error") {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };

  const handleClear = () => {
    setDisplay("");
  }

  const handleDelete = () => {
    setDisplay(display.slice(0, -1))
  }

  const handleCalculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay("Error");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{display || '0'}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <Button title="C" onPress={() => handleClear()} style={styles.operator} textStyle={{ color: 'white' }} />
          <Button title="⌫" onPress={() => handleDelete()} style={styles.operator} textStyle={{ color: 'white' }} />
          <Button title="%" onPress={() => handlePress('%')} style={styles.operator} textStyle={{ color: 'white' }} />
          <Button title="/" onPress={() => handlePress('/')} style={styles.operator} textStyle={{ color: 'white' }} />
        </View>
        <View style={styles.row}>
          <Button title="7" onPress={() => handlePress('7')} />
          <Button title="8" onPress={() => handlePress('8')} />
          <Button title="9" onPress={() => handlePress('9')} />
          <Button title="*" onPress={() => handlePress('*')} style={styles.operator} textStyle={{ color: 'white' }} />
        </View>
        <View style={styles.row}>
          <Button title="4" onPress={() => handlePress('4')} />
          <Button title="5" onPress={() => handlePress('5')} />
          <Button title="6" onPress={() => handlePress('6')} />
          <Button title="-" onPress={() => handlePress('-')} style={styles.operator} textStyle={{ color: "white" }} />
        </View>
        <View style={styles.row}>
          <Button title="1" onPress={() => handlePress('1')} />
          <Button title="2" onPress={() => handlePress('2')} />
          <Button title="3" onPress={() => handlePress('3')} />
          <Button title="+" onPress={() => handlePress('+')} style={styles.operator} textStyle={{ color: 'white' }} />
        </View>
        <View style={styles.row}>
          <Button title="0" onPress={() => handlePress('0')} style={styles.zeroButton} />
          <Button title="." onPress={() => handlePress('.')} />
          <Button title="=" onPress={handleCalculate} style={styles.equal} />
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    marginBottom: 40,
  },
  displayContainer: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 20,
  },
  displayText: {
    fontSize: 48,
    color: "#fff",
  },
  buttonContainer: {
    flex: 4,
  },
  row: {
    flexDirection: "row",
    flex: 1,
  },
  operator: {
    backgroundColor: "#2a2a2a",
  },
  equal: {
    backgroundColor: "#ff9500"
  },
  zeroButton: {
    flex: 2,
  }

})