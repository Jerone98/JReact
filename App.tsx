/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import type { PropsWithChildren } from "react";
import { SafeAreaView } from "react-native";
import MyOwnControl from "./MyOwnControl";
import MyOwnControlFunc from "./MyOwnControlFunc";
import CounterClass from "./CounterClass";

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <MyOwnControl />
      <MyOwnControlFunc />
      <CounterClass />
    </SafeAreaView>
  );
  // return ()
  //   <SafeAreaView>
  //   // <MyOwnControl/>
  //   // <MyOwnControlFunc />
  //   </SafeAreaView>

  // };
}

export default App;
