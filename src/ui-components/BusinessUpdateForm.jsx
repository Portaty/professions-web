/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SelectField,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Business } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function BusinessUpdateForm(props) {
  const {
    id: idProp,
    business: businessModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    status: "",
    identityID: "",
    name: "",
    image: "",
    images: [],
    thumbnail: "",
    email: "",
    phone: "",
    whatsapp: "",
    instagram: "",
    facebook: "",
    page: "",
    activity: "",
    tags: [],
    description: "",
    prefer: false,
  };
  const [status, setStatus] = React.useState(initialValues.status);
  const [identityID, setIdentityID] = React.useState(initialValues.identityID);
  const [name, setName] = React.useState(initialValues.name);
  const [image, setImage] = React.useState(initialValues.image);
  const [images, setImages] = React.useState(initialValues.images);
  const [thumbnail, setThumbnail] = React.useState(initialValues.thumbnail);
  const [email, setEmail] = React.useState(initialValues.email);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [whatsapp, setWhatsapp] = React.useState(initialValues.whatsapp);
  const [instagram, setInstagram] = React.useState(initialValues.instagram);
  const [facebook, setFacebook] = React.useState(initialValues.facebook);
  const [page, setPage] = React.useState(initialValues.page);
  const [activity, setActivity] = React.useState(initialValues.activity);
  const [tags, setTags] = React.useState(initialValues.tags);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [prefer, setPrefer] = React.useState(initialValues.prefer);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = businessRecord
      ? { ...initialValues, ...businessRecord }
      : initialValues;
    setStatus(cleanValues.status);
    setIdentityID(cleanValues.identityID);
    setName(cleanValues.name);
    setImage(cleanValues.image);
    setImages(cleanValues.images ?? []);
    setCurrentImagesValue("");
    setThumbnail(cleanValues.thumbnail);
    setEmail(cleanValues.email);
    setPhone(cleanValues.phone);
    setWhatsapp(cleanValues.whatsapp);
    setInstagram(cleanValues.instagram);
    setFacebook(cleanValues.facebook);
    setPage(cleanValues.page);
    setActivity(cleanValues.activity);
    setTags(cleanValues.tags ?? []);
    setCurrentTagsValue("");
    setDescription(cleanValues.description);
    setPrefer(cleanValues.prefer);
    setErrors({});
  };
  const [businessRecord, setBusinessRecord] = React.useState(businessModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Business, idProp)
        : businessModelProp;
      setBusinessRecord(record);
    };
    queryData();
  }, [idProp, businessModelProp]);
  React.useEffect(resetStateValues, [businessRecord]);
  const [currentImagesValue, setCurrentImagesValue] = React.useState("");
  const imagesRef = React.createRef();
  const [currentTagsValue, setCurrentTagsValue] = React.useState("");
  const tagsRef = React.createRef();
  const validations = {
    status: [],
    identityID: [],
    name: [],
    image: [],
    images: [],
    thumbnail: [],
    email: [],
    phone: [],
    whatsapp: [],
    instagram: [],
    facebook: [],
    page: [],
    activity: [],
    tags: [],
    description: [],
    prefer: [],
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
          status,
          identityID,
          name,
          image,
          images,
          thumbnail,
          email,
          phone,
          whatsapp,
          instagram,
          facebook,
          page,
          activity,
          tags,
          description,
          prefer,
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
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Business.copyOf(businessRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "BusinessUpdateForm")}
      {...rest}
    >
      <SelectField
        label="Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status: value,
              identityID,
              name,
              image,
              images,
              thumbnail,
              email,
              phone,
              whatsapp,
              instagram,
              facebook,
              page,
              activity,
              tags,
              description,
              prefer,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      >
        <option
          children="Enabled"
          value="ENABLED"
          {...getOverrideProps(overrides, "statusoption0")}
        ></option>
        <option
          children="Disabled"
          value="DISABLED"
          {...getOverrideProps(overrides, "statusoption1")}
        ></option>
        <option
          children="Suspended"
          value="SUSPENDED"
          {...getOverrideProps(overrides, "statusoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Identity id"
        isRequired={false}
        isReadOnly={false}
        value={identityID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              identityID: value,
              name,
              image,
              images,
              thumbnail,
              email,
              phone,
              whatsapp,
              instagram,
              facebook,
              page,
              activity,
              tags,
              description,
              prefer,
            };
            const result = onChange(modelFields);
            value = result?.identityID ?? value;
          }
          if (errors.identityID?.hasError) {
            runValidationTasks("identityID", value);
          }
          setIdentityID(value);
        }}
        onBlur={() => runValidationTasks("identityID", identityID)}
        errorMessage={errors.identityID?.errorMessage}
        hasError={errors.identityID?.hasError}
        {...getOverrideProps(overrides, "identityID")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              identityID,
              name: value,
              image,
              images,
              thumbnail,
              email,
              phone,
              whatsapp,
              instagram,
              facebook,
              page,
              activity,
              tags,
              description,
              prefer,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Image"
        isRequired={false}
        isReadOnly={false}
        value={image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              identityID,
              name,
              image: value,
              images,
              thumbnail,
              email,
              phone,
              whatsapp,
              instagram,
              facebook,
              page,
              activity,
              tags,
              description,
              prefer,
            };
            const result = onChange(modelFields);
            value = result?.image ?? value;
          }
          if (errors.image?.hasError) {
            runValidationTasks("image", value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks("image", image)}
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        {...getOverrideProps(overrides, "image")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              status,
              identityID,
              name,
              image,
              images: values,
              thumbnail,
              email,
              phone,
              whatsapp,
              instagram,
              facebook,
              page,
              activity,
              tags,
              description,
              prefer,
            };
            const result = onChange(modelFields);
            values = result?.images ?? values;
          }
          setImages(values);
          setCurrentImagesValue("");
        }}
        currentFieldValue={currentImagesValue}
        label={"Images"}
        items={images}
        hasError={errors?.images?.hasError}
        errorMessage={errors?.images?.errorMessage}
        setFieldValue={setCurrentImagesValue}
        inputFieldRef={imagesRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Images"
          isRequired={false}
          isReadOnly={false}
          value={currentImagesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.images?.hasError) {
              runValidationTasks("images", value);
            }
            setCurrentImagesValue(value);
          }}
          onBlur={() => runValidationTasks("images", currentImagesValue)}
          errorMessage={errors.images?.errorMessage}
          hasError={errors.images?.hasError}
          ref={imagesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "images")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Thumbnail"
        isRequired={false}
        isReadOnly={false}
        value={thumbnail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              identityID,
              name,
              image,
              images,
              thumbnail: value,
              email,
              phone,
              whatsapp,
              instagram,
              facebook,
              page,
              activity,
              tags,
              description,
              prefer,
            };
            const result = onChange(modelFields);
            value = result?.thumbnail ?? value;
          }
          if (errors.thumbnail?.hasError) {
            runValidationTasks("thumbnail", value);
          }
          setThumbnail(value);
        }}
        onBlur={() => runValidationTasks("thumbnail", thumbnail)}
        errorMessage={errors.thumbnail?.errorMessage}
        hasError={errors.thumbnail?.hasError}
        {...getOverrideProps(overrides, "thumbnail")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              identityID,
              name,
              image,
              images,
              thumbnail,
              email: value,
              phone,
              whatsapp,
              instagram,
              facebook,
              page,
              activity,
              tags,
              description,
              prefer,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Phone"
        isRequired={false}
        isReadOnly={false}
        value={phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              identityID,
              name,
              image,
              images,
              thumbnail,
              email,
              phone: value,
              whatsapp,
              instagram,
              facebook,
              page,
              activity,
              tags,
              description,
              prefer,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
      ></TextField>
      <TextField
        label="Whatsapp"
        isRequired={false}
        isReadOnly={false}
        value={whatsapp}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              identityID,
              name,
              image,
              images,
              thumbnail,
              email,
              phone,
              whatsapp: value,
              instagram,
              facebook,
              page,
              activity,
              tags,
              description,
              prefer,
            };
            const result = onChange(modelFields);
            value = result?.whatsapp ?? value;
          }
          if (errors.whatsapp?.hasError) {
            runValidationTasks("whatsapp", value);
          }
          setWhatsapp(value);
        }}
        onBlur={() => runValidationTasks("whatsapp", whatsapp)}
        errorMessage={errors.whatsapp?.errorMessage}
        hasError={errors.whatsapp?.hasError}
        {...getOverrideProps(overrides, "whatsapp")}
      ></TextField>
      <TextField
        label="Instagram"
        isRequired={false}
        isReadOnly={false}
        value={instagram}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              identityID,
              name,
              image,
              images,
              thumbnail,
              email,
              phone,
              whatsapp,
              instagram: value,
              facebook,
              page,
              activity,
              tags,
              description,
              prefer,
            };
            const result = onChange(modelFields);
            value = result?.instagram ?? value;
          }
          if (errors.instagram?.hasError) {
            runValidationTasks("instagram", value);
          }
          setInstagram(value);
        }}
        onBlur={() => runValidationTasks("instagram", instagram)}
        errorMessage={errors.instagram?.errorMessage}
        hasError={errors.instagram?.hasError}
        {...getOverrideProps(overrides, "instagram")}
      ></TextField>
      <TextField
        label="Facebook"
        isRequired={false}
        isReadOnly={false}
        value={facebook}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              identityID,
              name,
              image,
              images,
              thumbnail,
              email,
              phone,
              whatsapp,
              instagram,
              facebook: value,
              page,
              activity,
              tags,
              description,
              prefer,
            };
            const result = onChange(modelFields);
            value = result?.facebook ?? value;
          }
          if (errors.facebook?.hasError) {
            runValidationTasks("facebook", value);
          }
          setFacebook(value);
        }}
        onBlur={() => runValidationTasks("facebook", facebook)}
        errorMessage={errors.facebook?.errorMessage}
        hasError={errors.facebook?.hasError}
        {...getOverrideProps(overrides, "facebook")}
      ></TextField>
      <TextField
        label="Page"
        isRequired={false}
        isReadOnly={false}
        value={page}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              identityID,
              name,
              image,
              images,
              thumbnail,
              email,
              phone,
              whatsapp,
              instagram,
              facebook,
              page: value,
              activity,
              tags,
              description,
              prefer,
            };
            const result = onChange(modelFields);
            value = result?.page ?? value;
          }
          if (errors.page?.hasError) {
            runValidationTasks("page", value);
          }
          setPage(value);
        }}
        onBlur={() => runValidationTasks("page", page)}
        errorMessage={errors.page?.errorMessage}
        hasError={errors.page?.hasError}
        {...getOverrideProps(overrides, "page")}
      ></TextField>
      <TextField
        label="Activity"
        isRequired={false}
        isReadOnly={false}
        value={activity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              identityID,
              name,
              image,
              images,
              thumbnail,
              email,
              phone,
              whatsapp,
              instagram,
              facebook,
              page,
              activity: value,
              tags,
              description,
              prefer,
            };
            const result = onChange(modelFields);
            value = result?.activity ?? value;
          }
          if (errors.activity?.hasError) {
            runValidationTasks("activity", value);
          }
          setActivity(value);
        }}
        onBlur={() => runValidationTasks("activity", activity)}
        errorMessage={errors.activity?.errorMessage}
        hasError={errors.activity?.hasError}
        {...getOverrideProps(overrides, "activity")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              status,
              identityID,
              name,
              image,
              images,
              thumbnail,
              email,
              phone,
              whatsapp,
              instagram,
              facebook,
              page,
              activity,
              tags: values,
              description,
              prefer,
            };
            const result = onChange(modelFields);
            values = result?.tags ?? values;
          }
          setTags(values);
          setCurrentTagsValue("");
        }}
        currentFieldValue={currentTagsValue}
        label={"Tags"}
        items={tags}
        hasError={errors?.tags?.hasError}
        errorMessage={errors?.tags?.errorMessage}
        setFieldValue={setCurrentTagsValue}
        inputFieldRef={tagsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Tags"
          isRequired={false}
          isReadOnly={false}
          value={currentTagsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.tags?.hasError) {
              runValidationTasks("tags", value);
            }
            setCurrentTagsValue(value);
          }}
          onBlur={() => runValidationTasks("tags", currentTagsValue)}
          errorMessage={errors.tags?.errorMessage}
          hasError={errors.tags?.hasError}
          ref={tagsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "tags")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              identityID,
              name,
              image,
              images,
              thumbnail,
              email,
              phone,
              whatsapp,
              instagram,
              facebook,
              page,
              activity,
              tags,
              description: value,
              prefer,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <SwitchField
        label="Prefer"
        defaultChecked={false}
        isDisabled={false}
        isChecked={prefer}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              status,
              identityID,
              name,
              image,
              images,
              thumbnail,
              email,
              phone,
              whatsapp,
              instagram,
              facebook,
              page,
              activity,
              tags,
              description,
              prefer: value,
            };
            const result = onChange(modelFields);
            value = result?.prefer ?? value;
          }
          if (errors.prefer?.hasError) {
            runValidationTasks("prefer", value);
          }
          setPrefer(value);
        }}
        onBlur={() => runValidationTasks("prefer", prefer)}
        errorMessage={errors.prefer?.errorMessage}
        hasError={errors.prefer?.hasError}
        {...getOverrideProps(overrides, "prefer")}
      ></SwitchField>
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
          isDisabled={!(idProp || businessModelProp)}
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
              !(idProp || businessModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
