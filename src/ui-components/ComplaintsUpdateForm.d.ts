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
export declare type ComplaintsUpdateFormInputValues = {
    userID?: string;
    businessID?: string;
    status?: string;
    reason?: string;
    description?: string;
    owner?: string;
};
export declare type ComplaintsUpdateFormValidationValues = {
    userID?: ValidationFunction<string>;
    businessID?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    reason?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ComplaintsUpdateFormOverridesProps = {
    ComplaintsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    businessID?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    reason?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ComplaintsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ComplaintsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    complaints?: any;
    onSubmit?: (fields: ComplaintsUpdateFormInputValues) => ComplaintsUpdateFormInputValues;
    onSuccess?: (fields: ComplaintsUpdateFormInputValues) => void;
    onError?: (fields: ComplaintsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ComplaintsUpdateFormInputValues) => ComplaintsUpdateFormInputValues;
    onValidate?: ComplaintsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ComplaintsUpdateForm(props: ComplaintsUpdateFormProps): React.ReactElement;
