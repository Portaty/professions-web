/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LogsCreateFormInputValues = {
    userID?: string;
    type?: string;
    text?: string;
    businessID?: string;
    posI?: number;
    posE?: number;
    name?: string;
};
export declare type LogsCreateFormValidationValues = {
    userID?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    text?: ValidationFunction<string>;
    businessID?: ValidationFunction<string>;
    posI?: ValidationFunction<number>;
    posE?: ValidationFunction<number>;
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LogsCreateFormOverridesProps = {
    LogsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
    text?: PrimitiveOverrideProps<TextFieldProps>;
    businessID?: PrimitiveOverrideProps<TextFieldProps>;
    posI?: PrimitiveOverrideProps<TextFieldProps>;
    posE?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LogsCreateFormProps = React.PropsWithChildren<{
    overrides?: LogsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LogsCreateFormInputValues) => LogsCreateFormInputValues;
    onSuccess?: (fields: LogsCreateFormInputValues) => void;
    onError?: (fields: LogsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LogsCreateFormInputValues) => LogsCreateFormInputValues;
    onValidate?: LogsCreateFormValidationValues;
} & React.CSSProperties>;
export default function LogsCreateForm(props: LogsCreateFormProps): React.ReactElement;
