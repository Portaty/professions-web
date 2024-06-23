/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ReasonComplaints } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ReasonComplaintsUpdateFormInputValues = {
    name?: string;
};
export declare type ReasonComplaintsUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReasonComplaintsUpdateFormOverridesProps = {
    ReasonComplaintsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReasonComplaintsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ReasonComplaintsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    reasonComplaints?: ReasonComplaints;
    onSubmit?: (fields: ReasonComplaintsUpdateFormInputValues) => ReasonComplaintsUpdateFormInputValues;
    onSuccess?: (fields: ReasonComplaintsUpdateFormInputValues) => void;
    onError?: (fields: ReasonComplaintsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReasonComplaintsUpdateFormInputValues) => ReasonComplaintsUpdateFormInputValues;
    onValidate?: ReasonComplaintsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ReasonComplaintsUpdateForm(props: ReasonComplaintsUpdateFormProps): React.ReactElement;
