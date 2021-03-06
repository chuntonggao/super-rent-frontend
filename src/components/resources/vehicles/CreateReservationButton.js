import React from 'react';
import { Link } from 'react-router-dom';

import StyledButton from '../../reusables/StyledButton';

const CreateReservationButton = ({ record }) => {
    if (record.status === 'available') {
        return (
            <StyledButton
                component={Link}
                to={{
                    pathname: '/rents/create',
                    search: '?vehicleLicence=' + record.id
                }}
            >
                Rent
            </StyledButton>
        );
    } else return <span />;
};

export default CreateReservationButton;
