import { create } from "zustand";

interface BearStore {
	bears: number;
	fish: number;
	actions: {
		increasePopulation: (by: BearStore["bears"]) => void;
		eatFish: () => void;
		removeAllBears: () => void;
	};
}

const useBearStore = create<BearStore>((set) => ({
	bears: 0,
	fish: 0,
	// ⬇️ separate "namespace" for actions
	actions: {
		increasePopulation: (by) => set((state) => ({ bears: state.bears + by })),
		eatFish: () => set((state) => ({ fish: state.fish - 1 })),
		removeAllBears: () => set({ bears: 0 }),
	},
}));

// 💡 따로 export해서 의미없는 리렌더링 없애기
// atomic selectors
export const useBears = () => useBearStore((state) => state.bears);
export const useFish = () => useBearStore((state) => state.fish);

// 혹은 구독하려는 컴포넌트에서 다음과 같이 사용
export default function exampleStore() {
	const bears = useBearStore((state) => state.bears);
	// return (
	// <p>{bears}</p>
	// )
}

// 🎉 액션 함수는 바뀌지 않기 때문에 한번에 export
export const useBearActions = () => useBearStore((state) => state.actions);
