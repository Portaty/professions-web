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
export declare type NotificationHistoryUpdateFormInputValues = {
    title?: string;
    message?: string;
};
export declare type NotificationHistoryUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    message?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotificationHistoryUpdateFormOverridesProps = {
    NotificationHistoryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    message?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NotificationHistoryUpdateFormProps = React.PropsWithChildren<{
    overrides?: NotificationHistoryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    notificationHistory?: any;
    onSubmit?: (fields: NotificationHistoryUpdateFormInputValues) => NotificationHistoryUpdateFormInputValues;
    onSuccess?: (fields: NotificationHistoryUpdateFormInputValues) => void;
    onError?: (fields: NotificationHistoryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NotificationHistoryUpdateFormInputValues) => NotificationHistoryUpdateFormInputValues;
    onValidate?: NotificationHistoryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NotificationHistoryUpdateForm(props: NotificationHistoryUpdateFormProps): React.ReactElement;
