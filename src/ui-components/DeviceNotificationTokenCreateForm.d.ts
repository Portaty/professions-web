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
export declare type DeviceNotificationTokenCreateFormInputValues = {
    deviceID?: string;
    notificationToken?: string;
};
export declare type DeviceNotificationTokenCreateFormValidationValues = {
    deviceID?: ValidationFunction<string>;
    notificationToken?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DeviceNotificationTokenCreateFormOverridesProps = {
    DeviceNotificationTokenCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    deviceID?: PrimitiveOverrideProps<TextFieldProps>;
    notificationToken?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DeviceNotificationTokenCreateFormProps = React.PropsWithChildren<{
    overrides?: DeviceNotificationTokenCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DeviceNotificationTokenCreateFormInputValues) => DeviceNotificationTokenCreateFormInputValues;
    onSuccess?: (fields: DeviceNotificationTokenCreateFormInputValues) => void;
    onError?: (fields: DeviceNotificationTokenCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DeviceNotificationTokenCreateFormInputValues) => DeviceNotificationTokenCreateFormInputValues;
    onValidate?: DeviceNotificationTokenCreateFormValidationValues;
} & React.CSSProperties>;
export default function DeviceNotificationTokenCreateForm(props: DeviceNotificationTokenCreateFormProps): React.ReactElement;
