import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppData } from './types';
const STORAGE_KEY = '@liner_tracker/data';
const EMPTY_DATA: AppData = { tracks: [], sessions: [] };
export async function loadData(): Promise<AppData> { try { const raw = await AsyncStorage.getItem(STORAGE_KEY); if (!raw) return EMPTY_DATA; const parsed = JSON.parse(raw) as Partial<AppData>; return { tracks: Array.isArray(parsed.tracks) ? parsed.tracks : [], sessions: Array.isArray(parsed.sessions) ? parsed.sessions : [] }; } catch { return EMPTY_DATA; } }
export async function saveData(data: AppData): Promise<void> { await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }
export async function clearData(): Promise<void> { await AsyncStorage.removeItem(STORAGE_KEY); }
