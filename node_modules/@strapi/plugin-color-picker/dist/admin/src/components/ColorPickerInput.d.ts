import * as React from 'react';
import { type InputProps, type FieldValue } from '@strapi/strapi/admin';
type ColorPickerInputProps = InputProps & FieldValue & {
    labelAction?: React.ReactNode;
};
export declare const ColorPickerInput: React.ForwardRefExoticComponent<ColorPickerInputProps & React.RefAttributes<HTMLButtonElement>>;
export {};
