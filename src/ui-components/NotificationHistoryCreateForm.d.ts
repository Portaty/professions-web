/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type NotificationHistoryCreateFormInputValues = {
    title?: string;
    message?: string;
};
export declare type NotificationHistoryCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    message?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotificationHistoryCreateFormOverridesProps = {
    NotificationHistoryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    message?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NotificationHistoryCreateFormProps = React.PropsWithChildren<{
    overrides?: NotificationHistoryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NotificationHistoryCreateFormInputValues) => NotificationHistoryCreateFormInputValues;
    onSuccess?: (fields: NotificationHistoryCreateFormInputValues) => void;
    onError?: (fields: NotificationHistoryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NotificationHistoryCreateFormInputValues) => NotificationHistoryCreateFormInputValues;
    onValidate?: NotificationHistoryCreateFormValidationValues;
} & React.CSSProperties>;
export default function NotificationHistoryCreateForm(props: NotificationHistoryCreateFormProps): React.ReactElement;
