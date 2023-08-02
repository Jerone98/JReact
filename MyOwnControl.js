import React from "react";
import { TextInput, View } from "react-native";

class MyOwnControl extends React.Component {
  //any business logic

  render() {
    // any business logic

    return (
      <View style={{ backgroundColor: "blue" }}>
        <TextInput value={"Home"} />
      </View>
    );
    // return {
    //   <View ;={{backgroundColor: "blue"}}>
    // <TextInput value={'something'} />;
    // </View>

    // };
  }
}

export default MyOwnControl;
