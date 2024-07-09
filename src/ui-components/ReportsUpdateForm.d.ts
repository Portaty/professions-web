/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Reports } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ReportsUpdateFormInputValues = {
    userID?: string;
    subject?: string;
    description?: string;
    status?: string;
};
export declare type ReportsUpdateFormValidationValues = {
    userID?: ValidationFunction<string>;
    subject?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReportsUpdateFormOverridesProps = {
    ReportsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    subject?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type ReportsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ReportsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    reports?: Reports;
    onSubmit?: (fields: ReportsUpdateFormInputValues) => ReportsUpdateFormInputValues;
    onSuccess?: (fields: ReportsUpdateFormInputValues) => void;
    onError?: (fields: ReportsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReportsUpdateFormInputValues) => ReportsUpdateFormInputValues;
    onValidate?: ReportsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ReportsUpdateForm(props: ReportsUpdateFormProps): React.ReactElement;
