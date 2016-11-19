import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
    backgroundColor: '#FFF'
  },
  input: {
    height: 50,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    textAlign: 'center'
  },
  buttonContainer: {
    height: 50,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#000',
    margin: 5,
    justifyContent: 'center'
  },
  button: {
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center'
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
  },
  link: {
    color: '#0000FF',
  },
  feedback: {
    textAlign: 'center',
    color: '#FF0000',
    padding: 5
  }
})
