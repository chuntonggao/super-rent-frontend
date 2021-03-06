import React from 'react';
import {
    AutocompleteInput,
    DisabledInput,
    Edit,
    ReferenceInput,
    SimpleForm
} from 'react-admin';

import CustomDateInput from '../../reusables/CustomDateInput';
import validateRent from './validateRent';

const RentEdit = props => (
    <Edit undoable={false} {...props}>
        <SimpleForm validate={validateRent}>
            <DisabledInput source="rentId" label="ID" />

            <ReferenceInput
                label="Vehicle"
                source="vehicleLicence"
                reference="vehicles"
                perPage={500}
            >
                <AutocompleteInput
                    source="vehicleLicence"
                    optionText={choice =>
                        `${choice.vehicleLicence} (${choice.make} ${choice.model})`
                    }
                />
            </ReferenceInput>

            <ReferenceInput
                label="Customer"
                source="driversLicence"
                reference="customers"
                perPage={500}
            >
                <AutocompleteInput
                    source="driversLicence"
                    optionText={choice =>
                        `${choice.driversLicence} (${choice.name})`
                    }
                />
            </ReferenceInput>

            <ReferenceInput
                source="confNum"
                reference="reservations"
                label="Reservation #"
                allowEmpty
            >
                <AutocompleteInput
                    source="confNum"
                    optionText={choice => `${choice.confNum}`}
                />
            </ReferenceInput>

            <CustomDateInput
                source="fromDate"
                label="From"
                options={{ format: 'YYYY-MM-dd' }}
            />
            <CustomDateInput
                source="toDate"
                label="To"
                options={{ format: 'YYYY-MM-dd' }}
            />
        </SimpleForm>
    </Edit>
);

export default RentEdit;
