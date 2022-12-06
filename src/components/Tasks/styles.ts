import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A1A1A',
    flex: 1,
    zIndex: -1,
    paddingTop: 55,
    paddingHorizontal: 24
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  created: {
    flexDirection: 'row',
  },
  createdText: {
    color: '#4EA8DE',
    fontWeight: 'bold',
    marginRight: 8
  },
  finished: {
    flexDirection: 'row',
  },
  finishedText: {
    color: '#8284FA',
    fontWeight: 'bold',
    marginRight: 8
  },
  counter: {
    backgroundColor: '#333',
    width: 25,
    height: 19,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterText: {
    fontSize: 12,
    color: '#D9D9D9',
    fontWeight: 'bold'
  },
  emptyList: {
    paddingTop: 48,
    borderTopColor: '#333',
    borderTopWidth: 1,
    alignItems: 'center',
  },
  textEmptyTitle: {
    color: '#808080',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 16,
  },
  textEmptyText: {
    color: '#808080',
    fontSize: 14,
  }
});
