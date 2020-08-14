import React, { Fragment } from 'react';
import styled from 'styled-components';

import coronaImage from '../../images/covid-19.png';

const StyledImg = styled.img`
	width: 370px;
	margin-top: 50px;
`;

const HeaderImage = () => {
	return (
		<Fragment>
			<StyledImg src={coronaImage} alt='Corona Virus Picture' />
		</Fragment>
	);
};

export default HeaderImage;
