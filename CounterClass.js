import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

class CounterClass extends React.Component {
  state = {
    count: 0,
  };
  onPress = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <View>
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text>Click Here</Text>
        </TouchableOpacity>

        <View>
          <Text>You Pressed {this.state.count} times</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginBottom: 10,
  },
});

export default CounterClass;
