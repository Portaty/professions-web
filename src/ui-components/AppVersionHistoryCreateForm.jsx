/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { createAppVersionHistory } from "../graphql/mutations";
export default function AppVersionHistoryCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    platform: "",
    latestVersion: "",
    createdAt: "",
  };
  const [platform, setPlatform] = React.useState(initialValues.platform);
  const [latestVersion, setLatestVersion] = React.useState(
    initialValues.latestVersion
  );
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setPlatform(initialValues.platform);
    setLatestVersion(initialValues.latestVersion);
    setCreatedAt(initialValues.createdAt);
    setErrors({});
  };
  const validations = {
    platform: [{ type: "Required" }],
    latestVersion: [{ type: "Required" }],
    createdAt: [{ type: "Required" }],
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
          platform,
          latestVersion,
          createdAt,
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
            query: createAppVersionHistory.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "AppVersionHistoryCreateForm")}
      {...rest}
    >
      <SelectField
        label="Platform"
        placeholder="Please select an option"
        isDisabled={false}
        value={platform}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              platform: value,
              latestVersion,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.platform ?? value;
          }
          if (errors.platform?.hasError) {
            runValidationTasks("platform", value);
          }
          setPlatform(value);
        }}
        onBlur={() => runValidationTasks("platform", platform)}
        errorMessage={errors.platform?.errorMessage}
        hasError={errors.platform?.hasError}
        {...getOverrideProps(overrides, "platform")}
      >
        <option
          children="Ios"
          value="IOS"
          {...getOverrideProps(overrides, "platformoption0")}
        ></option>
        <option
          children="Android"
          value="ANDROID"
          {...getOverrideProps(overrides, "platformoption1")}
        ></option>
      </SelectField>
      <TextField
        label="Latest version"
        isRequired={true}
        isReadOnly={false}
        value={latestVersion}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              platform,
              latestVersion: value,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.latestVersion ?? value;
          }
          if (errors.latestVersion?.hasError) {
            runValidationTasks("latestVersion", value);
          }
          setLatestVersion(value);
        }}
        onBlur={() => runValidationTasks("latestVersion", latestVersion)}
        errorMessage={errors.latestVersion?.errorMessage}
        hasError={errors.latestVersion?.hasError}
        {...getOverrideProps(overrides, "latestVersion")}
      ></TextField>
      <TextField
        label="Created at"
        isRequired={true}
        isReadOnly={false}
        value={createdAt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              platform,
              latestVersion,
              createdAt: value,
            };
            const result = onChange(modelFields);
            value = result?.createdAt ?? value;
          }
          if (errors.createdAt?.hasError) {
            runValidationTasks("createdAt", value);
          }
          setCreatedAt(value);
        }}
        onBlur={() => runValidationTasks("createdAt", createdAt)}
        errorMessage={errors.createdAt?.errorMessage}
        hasError={errors.createdAt?.hasError}
        {...getOverrideProps(overrides, "createdAt")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
