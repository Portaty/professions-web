/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AppVersionHistory } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AppVersionHistoryUpdateFormInputValues = {
    platform?: string;
    latestVersion?: string;
    createdAt?: string;
};
export declare type AppVersionHistoryUpdateFormValidationValues = {
    platform?: ValidationFunction<string>;
    latestVersion?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AppVersionHistoryUpdateFormOverridesProps = {
    AppVersionHistoryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    platform?: PrimitiveOverrideProps<SelectFieldProps>;
    latestVersion?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AppVersionHistoryUpdateFormProps = React.PropsWithChildren<{
    overrides?: AppVersionHistoryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    appVersionHistory?: AppVersionHistory;
    onSubmit?: (fields: AppVersionHistoryUpdateFormInputValues) => AppVersionHistoryUpdateFormInputValues;
    onSuccess?: (fields: AppVersionHistoryUpdateFormInputValues) => void;
    onError?: (fields: AppVersionHistoryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AppVersionHistoryUpdateFormInputValues) => AppVersionHistoryUpdateFormInputValues;
    onValidate?: AppVersionHistoryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AppVersionHistoryUpdateForm(props: AppVersionHistoryUpdateFormProps): React.ReactElement;
