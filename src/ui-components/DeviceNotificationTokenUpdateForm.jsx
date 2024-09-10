/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { getDeviceNotificationToken } from "../graphql/queries";
import { updateDeviceNotificationToken } from "../graphql/mutations";
export default function DeviceNotificationTokenUpdateForm(props) {
  const {
    id: idProp,
    deviceNotificationToken: deviceNotificationTokenModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    deviceID: "",
    notificationToken: "",
  };
  const [deviceID, setDeviceID] = React.useState(initialValues.deviceID);
  const [notificationToken, setNotificationToken] = React.useState(
    initialValues.notificationToken
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = deviceNotificationTokenRecord
      ? { ...initialValues, ...deviceNotificationTokenRecord }
      : initialValues;
    setDeviceID(cleanValues.deviceID);
    setNotificationToken(cleanValues.notificationToken);
    setErrors({});
  };
  const [deviceNotificationTokenRecord, setDeviceNotificationTokenRecord] =
    React.useState(deviceNotificationTokenModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getDeviceNotificationToken.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getDeviceNotificationToken
        : deviceNotificationTokenModelProp;
      setDeviceNotificationTokenRecord(record);
    };
    queryData();
  }, [idProp, deviceNotificationTokenModelProp]);
  React.useEffect(resetStateValues, [deviceNotificationTokenRecord]);
  const validations = {
    deviceID: [],
    notificationToken: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          deviceID: deviceID ?? null,
          notificationToken: notificationToken ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: updateDeviceNotificationToken.replaceAll("__typename", ""),
            variables: {
              input: {
                id: deviceNotificationTokenRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "DeviceNotificationTokenUpdateForm")}
      {...rest}
    >
      <TextField
        label="Device id"
        isRequired={false}
        isReadOnly={false}
        value={deviceID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              deviceID: value,
              notificationToken,
            };
            const result = onChange(modelFields);
            value = result?.deviceID ?? value;
          }
          if (errors.deviceID?.hasError) {
            runValidationTasks("deviceID", value);
          }
          setDeviceID(value);
        }}
        onBlur={() => runValidationTasks("deviceID", deviceID)}
        errorMessage={errors.deviceID?.errorMessage}
        hasError={errors.deviceID?.hasError}
        {...getOverrideProps(overrides, "deviceID")}
      ></TextField>
      <TextField
        label="Notification token"
        isRequired={false}
        isReadOnly={false}
        value={notificationToken}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              deviceID,
              notificationToken: value,
            };
            const result = onChange(modelFields);
            value = result?.notificationToken ?? value;
          }
          if (errors.notificationToken?.hasError) {
            runValidationTasks("notificationToken", value);
          }
          setNotificationToken(value);
        }}
        onBlur={() =>
          runValidationTasks("notificationToken", notificationToken)
        }
        errorMessage={errors.notificationToken?.errorMessage}
        hasError={errors.notificationToken?.hasError}
        {...getOverrideProps(overrides, "notificationToken")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || deviceNotificationTokenModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || deviceNotificationTokenModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
