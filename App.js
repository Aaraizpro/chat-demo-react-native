import React from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
import { ChatProvider, useChat } from './ChatContext';

export default function App() {
  return (
    <ChatProvider>
      <ChatScreen />
    </ChatProvider>
  );
}

function ChatScreen() {
  const { messages, sendMessage, message, setMessage } = useChat();

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.message}>{item}</Text>}
        style={styles.list}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={message}
          onChangeText={setMessage}
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 50 },
  list: { flex: 1, marginBottom: 20 },
  message: { padding: 10, backgroundColor: '#eee', borderRadius: 5, marginVertical: 5 },
  inputContainer: { flexDirection: 'row', alignItems: 'center' },
  input: { flex: 1, borderColor: '#ccc', borderWidth: 1, borderRadius: 5, padding: 10, marginRight: 10 }
});
