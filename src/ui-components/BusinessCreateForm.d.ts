/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type BusinessCreateFormInputValues = {
    status?: string;
    identityID?: string;
    name?: string;
    image?: string;
    images?: string[];
    thumbnail?: string;
    email?: string;
    phone?: string;
    whatsapp?: string;
    instagram?: string;
    facebook?: string;
    page?: string;
    activity?: string;
    tags?: string[];
    description?: string;
    prefer?: boolean;
};
export declare type BusinessCreateFormValidationValues = {
    status?: ValidationFunction<string>;
    identityID?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    images?: ValidationFunction<string>;
    thumbnail?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    whatsapp?: ValidationFunction<string>;
    instagram?: ValidationFunction<string>;
    facebook?: ValidationFunction<string>;
    page?: ValidationFunction<string>;
    activity?: ValidationFunction<string>;
    tags?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    prefer?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BusinessCreateFormOverridesProps = {
    BusinessCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    identityID?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    images?: PrimitiveOverrideProps<TextFieldProps>;
    thumbnail?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    whatsapp?: PrimitiveOverrideProps<TextFieldProps>;
    instagram?: PrimitiveOverrideProps<TextFieldProps>;
    facebook?: PrimitiveOverrideProps<TextFieldProps>;
    page?: PrimitiveOverrideProps<TextFieldProps>;
    activity?: PrimitiveOverrideProps<TextFieldProps>;
    tags?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    prefer?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type BusinessCreateFormProps = React.PropsWithChildren<{
    overrides?: BusinessCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BusinessCreateFormInputValues) => BusinessCreateFormInputValues;
    onSuccess?: (fields: BusinessCreateFormInputValues) => void;
    onError?: (fields: BusinessCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BusinessCreateFormInputValues) => BusinessCreateFormInputValues;
    onValidate?: BusinessCreateFormValidationValues;
} & React.CSSProperties>;
export default function BusinessCreateForm(props: BusinessCreateFormProps): React.ReactElement;
