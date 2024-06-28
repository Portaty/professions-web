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
export declare type NotifiationHistoryUpdateFormInputValues = {
    title?: string;
    message?: string;
};
export declare type NotifiationHistoryUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    message?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotifiationHistoryUpdateFormOverridesProps = {
    NotifiationHistoryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    message?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NotifiationHistoryUpdateFormProps = React.PropsWithChildren<{
    overrides?: NotifiationHistoryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    notifiationHistory?: any;
    onSubmit?: (fields: NotifiationHistoryUpdateFormInputValues) => NotifiationHistoryUpdateFormInputValues;
    onSuccess?: (fields: NotifiationHistoryUpdateFormInputValues) => void;
    onError?: (fields: NotifiationHistoryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NotifiationHistoryUpdateFormInputValues) => NotifiationHistoryUpdateFormInputValues;
    onValidate?: NotifiationHistoryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NotifiationHistoryUpdateForm(props: NotifiationHistoryUpdateFormProps): React.ReactElement;
