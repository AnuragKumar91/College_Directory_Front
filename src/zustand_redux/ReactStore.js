import {create} from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useStore = create(devtools(persist((set) => ({
    college: [],
    storeCollegeData: (collegeData) => set((state) => ({
        college: [...state.college, ...collegeData],
    })),

    clearCollegeData: () => set(() => ({
        college: [],
    })),
}), { name: 'app-storage' })));

export default useStore;
