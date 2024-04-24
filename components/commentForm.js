import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

export default CommentForm = () => {
  return (
    <View style={styles.commentForm}>
      <TextInput
        style={styles.input}
        placeholder='Enter Name Here'
      />
      <TextInput
        style={styles.input}
        placeholder='Enter Comment Here'
        multiline={true}
        numberOfLines={5}
      />
      <Text style={styles.submitButton}>Submit</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  commentForm: {
    width: '100%',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  submitButton: {
    backgroundColor: 'blue',
    color: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    textAlign: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
});
