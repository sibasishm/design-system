interface ControlType<T> {
	control: {
		type: 'inline-radio' | 'boolean' | 'text';
		options?: T;
	};
}

export const toEnum = <T>(options: T[]): ControlType<T[]> => ({
	control: {
		type: 'inline-radio',
		options,
	},
});

export const toBoolean = (): ControlType<null> => ({
	control: {
		type: 'boolean',
	},
});

export const toStr = (): ControlType<null> => ({
	control: {
		type: 'text',
	},
});
