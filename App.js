import { View, Text, Dimensions, Platform, StatusBar } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <StatusBar StatusBarStyle="default" />
      <WebView
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
        }}
        originWhitelist={["*"]}
        source={{ uri: require("./config.json").url }}
      />
    </View>
  );
}
