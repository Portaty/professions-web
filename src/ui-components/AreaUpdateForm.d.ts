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
export declare type AreaUpdateFormInputValues = {
    name?: string;
};
export declare type AreaUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AreaUpdateFormOverridesProps = {
    AreaUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AreaUpdateFormProps = React.PropsWithChildren<{
    overrides?: AreaUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    area?: any;
    onSubmit?: (fields: AreaUpdateFormInputValues) => AreaUpdateFormInputValues;
    onSuccess?: (fields: AreaUpdateFormInputValues) => void;
    onError?: (fields: AreaUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AreaUpdateFormInputValues) => AreaUpdateFormInputValues;
    onValidate?: AreaUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AreaUpdateForm(props: AreaUpdateFormProps): React.ReactElement;
