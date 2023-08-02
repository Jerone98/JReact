import { TextInput, View } from "react-native";

const MyOwnControlFunc = () => {
  //any business logic

  return (
    <View style={{ backgroundColor: "red" }}>
      <TextInput value={"About Us"} />
    </View>
  );
  // return {
  //    <View style={{backgroundColor: 'red'}}>
  //     <TextInput value={"something functional"} />
  //     </View>
  // };
};

export default MyOwnControlFunc;
