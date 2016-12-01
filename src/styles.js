import { StyleSheet } from 'react-native';

// Style Variables
const blue = '#90caf9';
const navy = '#1a237e';
const white = '#FFF';
// Style Declarations
module.exports = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
    backgroundColor: blue
  },
  input: {
    backgroundColor: white,
    height: 50,
    borderColor: navy,
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    textAlign: 'center',
    color: navy
  },
  buttonContainer: {
    height: 50,
    borderColor: navy,
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: navy,
    margin: 5,
    justifyContent: 'center'
  },
  button: {
    color: white,
    fontSize: 20,
    textAlign: 'center'
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
  },
  link: {
    color: navy
  },
  feedback: {
    textAlign: 'center',
    color: '#FF0000',
    padding: 5
  },

  // Topics Section
  flexContainer: {
    flex: 1,
    backgroundColor: blue
  },
  header: {
    marginTop: 20,
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  body: {
    flex: 24,
    paddingRight: 20,
    paddingLeft: 20
  },
  title: {
    textAlign: 'center'
  },

  //List selection
  list: {
    flex: 1
  },
  row: {
    alignItems: 'center',
    backgroundColor: white,
    borderColor: navy,
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    padding: 10
  },
  rowTitle: {
    fontWeight: 'bold'
  },

  // Details Section
  detailTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  detailSubtitle: {
    textAlign: 'center',
    fontSize: 14
  },
  comment: {
    color: '#777'
  }
})
