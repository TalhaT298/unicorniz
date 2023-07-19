import React from 'react'

export default function PrimaryButton({ children, onClickProps, disabledProps, classes }) {
	return (
        <button
			disabled={disabledProps}
			onClick={onClickProps}
			className={`px-8 py-3 bg-black  hover:bg-white border-black border  hover:text-black text-white ${classes}`}>
			{children}
		</button>
	);
}
