import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#262626',
    borderRadius: 8,
    flexDirection: 'row',
    minHeight: 64,
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginTop: 8
  },
  text: {
    color: '#F2F2F2',
    fontSize: 14,
    flex: 2,
    paddingLeft: 8,
    paddingRight: 4
  },
  textStriped: {
    color: '#808080',
    fontSize: 14,
    flex: 2,
    paddingLeft: 8,
    paddingRight: 4,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  }
});
