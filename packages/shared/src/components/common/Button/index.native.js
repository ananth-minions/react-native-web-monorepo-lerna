import React from 'react';
import styled from 'styled-components';
import Touchable from '../../primitives/Touchable';
import Text from '../../primitives/Text';
import { buttonContainerStyle, buttonTextStyle } from '../../../styles';

const ButtonWrapper = styled(Touchable).attrs({
	variant: 'primary',
	px: 3,
	py: 2,
	border: 0,
	borderRadius: 4,
})`${buttonContainerStyle}`;

const ButtonText = styled(Text).attrs({
	variant: 'primary',
	fontSize: 2,
	fontWeight: 'bold',
	mb: 0,
})`${buttonTextStyle}`;

const Button = ({
	onPress,
	text,
	...rest,
}) => (
	<ButtonWrapper onPress={onPress} {...rest}>
		<ButtonText>
			{text}
		</ButtonText>
	</ButtonWrapper>
);

export default Button;