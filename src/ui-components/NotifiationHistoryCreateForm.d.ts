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
export declare type NotifiationHistoryCreateFormInputValues = {
    title?: string;
    message?: string;
};
export declare type NotifiationHistoryCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    message?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotifiationHistoryCreateFormOverridesProps = {
    NotifiationHistoryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    message?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NotifiationHistoryCreateFormProps = React.PropsWithChildren<{
    overrides?: NotifiationHistoryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NotifiationHistoryCreateFormInputValues) => NotifiationHistoryCreateFormInputValues;
    onSuccess?: (fields: NotifiationHistoryCreateFormInputValues) => void;
    onError?: (fields: NotifiationHistoryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NotifiationHistoryCreateFormInputValues) => NotifiationHistoryCreateFormInputValues;
    onValidate?: NotifiationHistoryCreateFormValidationValues;
} & React.CSSProperties>;
export default function NotifiationHistoryCreateForm(props: NotifiationHistoryCreateFormProps): React.ReactElement;
