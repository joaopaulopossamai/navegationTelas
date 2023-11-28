import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100',
    height: '100',
    marginTop: 50,
  },
  texRg: {
    fontSize: 20,
    marginTop: '50%',
    marginLeft: 20,
  },
  textCpf: {
    fontSize: 20,
    marginLeft: 20,
  },
  imputDados: {
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    height: 40,
    width: '90%',
    marginLeft: 20,
    marginBottom: 15,
    borderWidth: 1,
  },

  viewButton: {
    marginTop: '70%',
    width: '50%',
    marginLeft: '30%',
    gap: 10,
    flexDirection: 'row',
  },
  viewButton1: {
    marginLeft: 0,
  },
  viewButton2: {
    marginLeft: 20,
  },
  buttonProximo: {
    height: 35,
    backgroundColor: '#01633D',
  },
  buttonVoltar: {
    height: 35,
    backgroundColor: 'red',
  },
});

export default styles;
