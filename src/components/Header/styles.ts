import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0D0D0D',
    height: 173,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    position: 'relative'
  },
  form: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: -20,
  },
  input: {
    backgroundColor: '#262626',
    flex: 1,
    marginRight: 4,
    borderRadius: 6,
    paddingHorizontal: 16,
    color: '#F2F2F2',
    borderColor: '#0D0D0D',
    borderWidth: 1,
  },
})
