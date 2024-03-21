import React from 'react';

import { DatePickerProps } from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import {
  BaseBox,
  BaseReactDatePicker,
  BaseTextLabel,
} from './DatePicker.styled';

interface DatePickerWithLabelProps extends DatePickerProps {
  label: string;
}

const datepickerConfigDefault = {
  calendarIcon: null,
  clearIcon: null,
  format: 'MMM dd, yyyy',
  maxDate: new Date(),
  locale: 'us-US',
};
export const DatePicker = ({ onChange, value }: DatePickerProps) => {
  return (
    <BaseReactDatePicker
      {...datepickerConfigDefault}
      onChange={onChange}
      value={value}
    />
  );
};

export const DatePickerWithLabel = ({
  onChange,
  value,
  label,
}: DatePickerWithLabelProps) => {
  return (
    <BaseBox>
      <BaseTextLabel>{label}</BaseTextLabel>
      <BaseReactDatePicker
        {...datepickerConfigDefault}
        onChange={onChange}
        value={value}
      />
    </BaseBox>
  );
};
