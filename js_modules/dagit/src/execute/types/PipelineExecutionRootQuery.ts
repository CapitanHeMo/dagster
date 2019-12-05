// @generated
/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PipelineExecutionRootQuery
// ====================================================

export interface PipelineExecutionRootQuery_pipelineOrError_PipelineNotFoundError {
  __typename: "PipelineNotFoundError";
  message: string;
}

export interface PipelineExecutionRootQuery_pipelineOrError_PythonError {
  __typename: "PythonError";
  message: string;
}

export interface PipelineExecutionRootQuery_pipelineOrError_Pipeline_modes {
  __typename: "Mode";
  name: string;
  description: string | null;
}

export interface PipelineExecutionRootQuery_pipelineOrError_Pipeline {
  __typename: "Pipeline";
  name: string;
  modes: PipelineExecutionRootQuery_pipelineOrError_Pipeline_modes[];
}

export interface PipelineExecutionRootQuery_pipelineOrError_InvalidSubsetError_pipeline_modes {
  __typename: "Mode";
  name: string;
  description: string | null;
}

export interface PipelineExecutionRootQuery_pipelineOrError_InvalidSubsetError_pipeline {
  __typename: "Pipeline";
  name: string;
  modes: PipelineExecutionRootQuery_pipelineOrError_InvalidSubsetError_pipeline_modes[];
}

export interface PipelineExecutionRootQuery_pipelineOrError_InvalidSubsetError {
  __typename: "InvalidSubsetError";
  message: string;
  pipeline: PipelineExecutionRootQuery_pipelineOrError_InvalidSubsetError_pipeline;
}

export type PipelineExecutionRootQuery_pipelineOrError = PipelineExecutionRootQuery_pipelineOrError_PipelineNotFoundError | PipelineExecutionRootQuery_pipelineOrError_PythonError | PipelineExecutionRootQuery_pipelineOrError_Pipeline | PipelineExecutionRootQuery_pipelineOrError_InvalidSubsetError;

export interface PipelineExecutionRootQuery_environmentSchemaOrError_PipelineNotFoundError {
  __typename: "PipelineNotFoundError" | "InvalidSubsetError" | "PythonError";
}

export interface PipelineExecutionRootQuery_environmentSchemaOrError_EnvironmentSchema_rootEnvironmentType {
  __typename: "EnumConfigType" | "CompositeConfigType" | "RegularConfigType" | "ListConfigType" | "NullableConfigType";
  key: string;
}

export interface PipelineExecutionRootQuery_environmentSchemaOrError_EnvironmentSchema_allConfigTypes_RegularConfigType_innerTypes {
  __typename: "EnumConfigType" | "CompositeConfigType" | "RegularConfigType" | "ListConfigType" | "NullableConfigType";
  key: string;
}

export interface PipelineExecutionRootQuery_environmentSchemaOrError_EnvironmentSchema_allConfigTypes_RegularConfigType {
  __typename: "RegularConfigType" | "NullableConfigType";
  key: string;
  name: string | null;
  isList: boolean;
  isSelector: boolean;
  isNullable: boolean;
  description: string | null;
  innerTypes: PipelineExecutionRootQuery_environmentSchemaOrError_EnvironmentSchema_allConfigTypes_RegularConfigType_innerTypes[];
}

export interface PipelineExecutionRootQuery_environmentSchemaOrError_EnvironmentSchema_allConfigTypes_CompositeConfigType_innerTypes {
  __typename: "EnumConfigType" | "CompositeConfigType" | "RegularConfigType" | "ListConfigType" | "NullableConfigType";
  key: string;
}

export interface PipelineExecutionRootQuery_environmentSchemaOrError_EnvironmentSchema_allConfigTypes_CompositeConfigType_fields_configType {
  __typename: "EnumConfigType" | "CompositeConfigType" | "RegularConfigType" | "ListConfigType" | "NullableConfigType";
  key: string;
}

export interface PipelineExecutionRootQuery_environmentSchemaOrError_EnvironmentSchema_allConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isOptional: boolean;
  configType: PipelineExecutionRootQuery_environmentSchemaOrError_EnvironmentSchema_allConfigTypes_CompositeConfigType_fields_configType;
}

export interface PipelineExecutionRootQuery_environmentSchemaOrError_EnvironmentSchema_allConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  name: string | null;
  isList: boolean;
  isSelector: boolean;
  isNullable: boolean;
  description: string | null;
  innerTypes: PipelineExecutionRootQuery_environmentSchemaOrError_EnvironmentSchema_allConfigTypes_CompositeConfigType_innerTypes[];
  fields: PipelineExecutionRootQuery_environmentSchemaOrError_EnvironmentSchema_allConfigTypes_CompositeConfigType_fields[];
}

export interface PipelineExecutionRootQuery_environmentSchemaOrError_EnvironmentSchema_allConfigTypes_ListConfigType_innerTypes {
  __typename: "EnumConfigType" | "CompositeConfigType" | "RegularConfigType" | "ListConfigType" | "NullableConfigType";
  key: string;
}

export interface PipelineExecutionRootQuery_environmentSchemaOrError_EnvironmentSchema_allConfigTypes_ListConfigType_ofType {
  __typename: "EnumConfigType" | "CompositeConfigType" | "RegularConfigType" | "ListConfigType" | "NullableConfigType";
  key: string;
}

export interface PipelineExecutionRootQuery_environmentSchemaOrError_EnvironmentSchema_allConfigTypes_ListConfigType {
  __typename: "ListConfigType";
  key: string;
  name: string | null;
  isList: boolean;
  isSelector: boolean;
  isNullable: boolean;
  description: string | null;
  innerTypes: PipelineExecutionRootQuery_environmentSchemaOrError_EnvironmentSchema_allConfigTypes_ListConfigType_innerTypes[];
  ofType: PipelineExecutionRootQuery_environmentSchemaOrError_EnvironmentSchema_allConfigTypes_ListConfigType_ofType;
}

export interface PipelineExecutionRootQuery_environmentSchemaOrError_EnvironmentSchema_allConfigTypes_EnumConfigType_innerTypes {
  __typename: "EnumConfigType" | "CompositeConfigType" | "RegularConfigType" | "ListConfigType" | "NullableConfigType";
  key: string;
}

export interface PipelineExecutionRootQuery_environmentSchemaOrError_EnvironmentSchema_allConfigTypes_EnumConfigType_values {
  __typename: "EnumConfigValue";
  value: string;
  description: string | null;
}

export interface PipelineExecutionRootQuery_environmentSchemaOrError_EnvironmentSchema_allConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  name: string | null;
  isList: boolean;
  isSelector: boolean;
  isNullable: boolean;
  description: string | null;
  innerTypes: PipelineExecutionRootQuery_environmentSchemaOrError_EnvironmentSchema_allConfigTypes_EnumConfigType_innerTypes[];
  values: PipelineExecutionRootQuery_environmentSchemaOrError_EnvironmentSchema_allConfigTypes_EnumConfigType_values[];
}

export type PipelineExecutionRootQuery_environmentSchemaOrError_EnvironmentSchema_allConfigTypes = PipelineExecutionRootQuery_environmentSchemaOrError_EnvironmentSchema_allConfigTypes_RegularConfigType | PipelineExecutionRootQuery_environmentSchemaOrError_EnvironmentSchema_allConfigTypes_CompositeConfigType | PipelineExecutionRootQuery_environmentSchemaOrError_EnvironmentSchema_allConfigTypes_ListConfigType | PipelineExecutionRootQuery_environmentSchemaOrError_EnvironmentSchema_allConfigTypes_EnumConfigType;

export interface PipelineExecutionRootQuery_environmentSchemaOrError_EnvironmentSchema {
  __typename: "EnvironmentSchema";
  rootEnvironmentType: PipelineExecutionRootQuery_environmentSchemaOrError_EnvironmentSchema_rootEnvironmentType;
  allConfigTypes: PipelineExecutionRootQuery_environmentSchemaOrError_EnvironmentSchema_allConfigTypes[];
}

export interface PipelineExecutionRootQuery_environmentSchemaOrError_ModeNotFoundError {
  __typename: "ModeNotFoundError";
  message: string;
}

export type PipelineExecutionRootQuery_environmentSchemaOrError = PipelineExecutionRootQuery_environmentSchemaOrError_PipelineNotFoundError | PipelineExecutionRootQuery_environmentSchemaOrError_EnvironmentSchema | PipelineExecutionRootQuery_environmentSchemaOrError_ModeNotFoundError;

export interface PipelineExecutionRootQuery {
  pipelineOrError: PipelineExecutionRootQuery_pipelineOrError;
  environmentSchemaOrError: PipelineExecutionRootQuery_environmentSchemaOrError;
}

export interface PipelineExecutionRootQueryVariables {
  name: string;
  solidSubset?: string[] | null;
  mode?: string | null;
}
