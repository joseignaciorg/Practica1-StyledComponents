import { useState } from 'react';
import Button from '../button/Button';
import { StyledDiv } from './styles';

const SquareColors = () => {
	const [active, setActive] = useState(true);
	return (
		<>
			<StyledDiv active={active}></StyledDiv>
			<Button
				text='Change Color'
				handleclick={() => changeColor(active, setActive)}
			/>
		</>
	);
};
const changeColor = (active, setActive) => {
	setActive(!active);
};
export default SquareColors;
