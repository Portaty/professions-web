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
export declare type DeviceNotificationTokenUpdateFormInputValues = {
    deviceID?: string;
    notificationToken?: string;
};
export declare type DeviceNotificationTokenUpdateFormValidationValues = {
    deviceID?: ValidationFunction<string>;
    notificationToken?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DeviceNotificationTokenUpdateFormOverridesProps = {
    DeviceNotificationTokenUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    deviceID?: PrimitiveOverrideProps<TextFieldProps>;
    notificationToken?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DeviceNotificationTokenUpdateFormProps = React.PropsWithChildren<{
    overrides?: DeviceNotificationTokenUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    deviceNotificationToken?: any;
    onSubmit?: (fields: DeviceNotificationTokenUpdateFormInputValues) => DeviceNotificationTokenUpdateFormInputValues;
    onSuccess?: (fields: DeviceNotificationTokenUpdateFormInputValues) => void;
    onError?: (fields: DeviceNotificationTokenUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DeviceNotificationTokenUpdateFormInputValues) => DeviceNotificationTokenUpdateFormInputValues;
    onValidate?: DeviceNotificationTokenUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DeviceNotificationTokenUpdateForm(props: DeviceNotificationTokenUpdateFormProps): React.ReactElement;
