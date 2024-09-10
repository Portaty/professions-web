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
export declare type BusinessUpdateFormInputValues = {
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
    schedule?: string;
    catalogpdf?: string;
};
export declare type BusinessUpdateFormValidationValues = {
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
    schedule?: ValidationFunction<string>;
    catalogpdf?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BusinessUpdateFormOverridesProps = {
    BusinessUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
    schedule?: PrimitiveOverrideProps<TextFieldProps>;
    catalogpdf?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BusinessUpdateFormProps = React.PropsWithChildren<{
    overrides?: BusinessUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    business?: any;
    onSubmit?: (fields: BusinessUpdateFormInputValues) => BusinessUpdateFormInputValues;
    onSuccess?: (fields: BusinessUpdateFormInputValues) => void;
    onError?: (fields: BusinessUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BusinessUpdateFormInputValues) => BusinessUpdateFormInputValues;
    onValidate?: BusinessUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BusinessUpdateForm(props: BusinessUpdateFormProps): React.ReactElement;
