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
export declare type AppVersionHistoryCreateFormInputValues = {
    platform?: string;
    latestVersion?: string;
    createdAt?: string;
};
export declare type AppVersionHistoryCreateFormValidationValues = {
    platform?: ValidationFunction<string>;
    latestVersion?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AppVersionHistoryCreateFormOverridesProps = {
    AppVersionHistoryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    platform?: PrimitiveOverrideProps<SelectFieldProps>;
    latestVersion?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AppVersionHistoryCreateFormProps = React.PropsWithChildren<{
    overrides?: AppVersionHistoryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AppVersionHistoryCreateFormInputValues) => AppVersionHistoryCreateFormInputValues;
    onSuccess?: (fields: AppVersionHistoryCreateFormInputValues) => void;
    onError?: (fields: AppVersionHistoryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AppVersionHistoryCreateFormInputValues) => AppVersionHistoryCreateFormInputValues;
    onValidate?: AppVersionHistoryCreateFormValidationValues;
} & React.CSSProperties>;
export default function AppVersionHistoryCreateForm(props: AppVersionHistoryCreateFormProps): React.ReactElement;
