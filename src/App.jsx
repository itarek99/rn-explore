import React, {useState} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Snackbar from 'react-native-snackbar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const App = () => {
  const [boards, setBoards] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState('X');
  const [winner, setWinner] = useState(null);
  const [winningLines, setWinningLines] = useState(null);

  const handlePress = index => {
    if (boards[index] || winner) {
      return;
    }
    const newBoards = [...boards];
    newBoards[index] = player;
    setBoards(newBoards);
    setPlayer(player === 'X' ? 'O' : 'X');
    setWinner(calculateWinner(newBoards));

    if (calculateWinner(newBoards)) {
      Snackbar.show({
        text: `Player "${player}" Has Won The Game`,
        duration: Snackbar.LENGTH_INDEFINITE,
        backgroundColor: '#0274cc',
        textColor: '#ffffff',
      });
    }
  };

  const calculateWinner = currentBoard => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        setWinningLines(winningLines[i]);
        return currentBoard[a];
      }
    }
    return null;
  };

  const renderCell = index => {
    return (
      <View style={styles.gameBoardCell}>
        {boards[index] && (
          <FontAwesome
            name={boards[index] === 'X' ? 'close' : 'circle-o'}
            size={60}
            color={boards[index] === 'X' ? '#F9D359' : '#ffffff'}
          />
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.playerActivityContainer}>
        <View
          style={[
            styles.playerActivity,
            player === 'X'
              ? styles.activeBackground
              : styles.inactiveBackground,
          ]}>
          <FontAwesome name="close" size={50} color="#F9D359" />
        </View>

        <View
          style={[
            styles.playerActivity,
            player === 'O'
              ? styles.activeBackground
              : styles.inactiveBackground,
          ]}>
          <FontAwesome name="circle-o" size={50} color="#ffffff" />
        </View>
      </View>

      <View style={styles.gameBoardContainer}>
        <View style={styles.gameBoard}>
          <View style={[styles.gameBoardRow, styles.borderBottom]}>
            <Pressable
              onPress={() => handlePress(0)}
              style={[
                styles.gameBoardCell,
                styles.borderRight,
                winningLines?.includes(0) && styles.winningCell,
              ]}>
              {renderCell(0)}
            </Pressable>
            <Pressable
              onPress={() => handlePress(1)}
              style={[
                styles.gameBoardCell,
                styles.borderRight,
                winningLines?.includes(1) && styles.winningCell,
              ]}>
              {renderCell(1)}
            </Pressable>
            <Pressable
              onPress={() => handlePress(2)}
              style={[
                styles.gameBoardCell,
                winningLines?.includes(2) && styles.winningCell,
              ]}>
              {renderCell(2)}
            </Pressable>
          </View>
          <View style={[styles.gameBoardRow, styles.borderBottom]}>
            <Pressable
              onPress={() => handlePress(3)}
              style={[
                styles.gameBoardCell,
                styles.borderRight,
                winningLines?.includes(3) && styles.winningCell,
              ]}>
              {renderCell(3)}
            </Pressable>
            <Pressable
              onPress={() => handlePress(4)}
              style={[
                styles.gameBoardCell,
                styles.borderRight,
                winningLines?.includes(4) && styles.winningCell,
              ]}>
              {renderCell(4)}
            </Pressable>
            <Pressable
              onPress={() => handlePress(5)}
              style={[
                styles.gameBoardCell,
                winningLines?.includes(5) && styles.winningCell,
              ]}>
              {renderCell(5)}
            </Pressable>
          </View>
          <View style={styles.gameBoardRow}>
            <Pressable
              onPress={() => handlePress(6)}
              style={[
                styles.gameBoardCell,
                styles.borderRight,
                winningLines?.includes(6) && styles.winningCell,
              ]}>
              {renderCell(6)}
            </Pressable>
            <Pressable
              onPress={() => handlePress(7)}
              style={[
                styles.gameBoardCell,
                styles.borderRight,
                winningLines?.includes(7) && styles.winningCell,
              ]}>
              {renderCell(7)}
            </Pressable>
            <Pressable
              onPress={() => handlePress(8)}
              style={[
                styles.gameBoardCell,
                winningLines?.includes(8) && styles.winningCell,
              ]}>
              {renderCell(8)}
            </Pressable>
          </View>
        </View>
      </View>

      {winner ? (
        <Pressable
          style={styles.gameActivityButton}
          onPress={() => {
            setBoards(Array(9).fill(null));
            setWinner(null);
            setWinningLines(null);
            Snackbar.dismiss();
          }}>
          <Text style={styles.gameActivityButtonText}>Play Again</Text>
        </Pressable>
      ) : (
        <Pressable
          style={styles.gameActivityButton}
          onPress={() => {
            setBoards(Array(9).fill(null));
            setWinner(null);
            setPlayer('X');
            setWinningLines(null);
            Snackbar.dismiss();
          }}>
          <Text style={styles.gameActivityButtonText}>Restart Game</Text>
        </Pressable>
      )}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FCEEF1',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  gameBoardContainer: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    padding: 10,
    borderRadius: 32,
    borderColor: '#F22753',
    borderWidth: 1,
    borderStyle: 'dashed',
    marginTop: 60,
    marginBottom: 40,
  },
  gameBoard: {
    overflow: 'hidden',
    backgroundColor: '#F22753',
    width: '100%',
    aspectRatio: 1,
    borderRadius: 24,
  },

  gameBoardRow: {
    flex: 1,
    flexDirection: 'row',
  },

  gameBoardCell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  borderBottom: {
    borderBottomColor: '#ffffff',
    borderBottomWidth: 1,
  },
  borderRight: {
    borderRightColor: '#ffffff',
    borderRightWidth: 1,
  },

  playerActivityContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
    paddingHorizontal: 50,
  },

  playerActivity: {
    backgroundColor: 'green',
    flex: 1,
    aspectRatio: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  activeBackground: {
    backgroundColor: '#F22753',
  },

  inactiveBackground: {
    backgroundColor: '#bababa',
  },

  gameActivityButton: {
    backgroundColor: '#F6AC21',
    paddingVertical: 16,
    paddingHorizontal: 50,
    borderRadius: 200,
  },

  gameActivityButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#ffffff',
  },

  winningCell: {
    backgroundColor: '#0274cc',
  },
});
