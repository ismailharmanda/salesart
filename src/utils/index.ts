import AsyncStorage from '@react-native-async-storage/async-storage';

export const loadString = async (key: string): Promise<string | null> => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    console.error('Failed to load string from storage', error);
    return null;
  }
};

export const saveString = async (
  key: string,
  value: string,
): Promise<boolean> => {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.error('Failed to save string to storage', error);
    return false;
  }
};

export const load = async (key: string): Promise<any | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error('Failed to load data from storage', error);
    return null;
  }
};

export const save = async (key: string, value: any): Promise<boolean> => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    return true;
  } catch (error) {
    console.error('Failed to save data to storage', error);
    return false;
  }
};

export const remove = async (key: string): Promise<boolean> => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error('Failed to remove data from storage', error);
    return false;
  }
};

export const clear = async (): Promise<boolean> => {
  try {
    await AsyncStorage.clear();
    return true;
  } catch (error) {
    console.error('Failed to clear storage', error);
    return false;
  }
};
