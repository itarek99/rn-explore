import React, {useState} from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import CurrencySwitch from './components/CurrencySwitch';
import {currencyByTaka} from './data/currency';

const App = () => {
  const [convertedCurrency, setConvertedCurrency] = useState('0');
  const [inputCurrency, setInputCurrency] = useState('0');
  const [selectedCurrency, setSelectedCurrency] = useState(currencyByTaka[0]);

  const handleCurrencyChange = item => {
    setSelectedCurrency(item);
    setConvertedCurrency(
      (Number(inputCurrency) * Number(item.value)).toFixed(2),
    );
  };

  const handleInputChange = value => {
    setInputCurrency(value);
    setConvertedCurrency(
      (Number(value) * Number(selectedCurrency.value)).toFixed(2),
    );
  };

  const handleOutputChange = value => {
    setConvertedCurrency(value);
    setInputCurrency(
      (Number(value) / Number(selectedCurrency.value)).toFixed(2),
    );
  };

  const renderItem = ({item}) => (
    <CurrencySwitch
      selectedCurrency={selectedCurrency}
      onPress={handleCurrencyChange}
      item={item}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="height">
        <View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>TAKA</Text>
            <TextInput
              keyboardType="decimal-pad"
              style={styles.input}
              onChangeText={handleInputChange}
              value={String(inputCurrency)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>{selectedCurrency.name}</Text>
            <TextInput
              keyboardType="decimal-pad"
              style={styles.input}
              onChangeText={handleOutputChange}
              value={String(convertedCurrency)}
            />
          </View>
        </View>
        <FlatList
          data={currencyByTaka}
          renderItem={renderItem}
          keyExtractor={item => item.name}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    padding: 10,
    gap: 10,
  },
  inputContainer: {
    margin: 10,
    marginTop: 0,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: 'lightgray',
    borderRadius: 4,
    fontSize: 20,
    padding: 10,
  },
});

export default App;
