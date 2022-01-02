import React from 'react';

export const ProductModal = ({active, setActive, children}) => {

	return (
		<div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)} >
			<div className="modal__content" onClick={e => e.stopPropagation()}>
				
			</div>
		</div>
	);
}

