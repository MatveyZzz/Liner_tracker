export type Unit = 'hours' | 'topics';

export type Track = { id: string; name: string; unit: Unit; goal: number; weeklyTarget: number; startDate: string; studyDays: number[]; color: string; icon: string; };
export type StudySession = { id: string; trackId: string; date: string; amount: number; note?: string; };
export type AppData = { tracks: Track[]; sessions: StudySession[]; };
export const WEEKDAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
export const COLORS = ['#6759E8', '#159D83', '#E58B35', '#D95875', '#3C83D9', '#8B61C2'];
export const ICONS = ['book', 'code', 'language', 'calculator', 'flask', 'fitness'];
