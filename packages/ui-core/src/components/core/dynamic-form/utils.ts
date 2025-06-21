import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { sql } from "@codemirror/lang-sql";
import { json } from "@codemirror/lang-json";
import { css } from "@codemirror/lang-css";
import { html } from "@codemirror/lang-html";

import { ConditionalLogic, DfFormField } from "./types";

export const getCodeLanguageExtension = (language: string) => {
  switch (language.toLowerCase()) {
    case "javascript":
    case "js":
      return javascript();
    case "python":
    case "py":
      return python();
    case "sql":
      return sql();
    case "json":
      return json();
    case "css":
      return css();
    case "html":
      return html();
    default:
      return javascript();
  }
};

export const evaluateCondition = (
  condition: ConditionalLogic,
  formData: any
): boolean => {
  const fieldValue = formData[condition.field];

  switch (condition.operator) {
    case "equals":
      return fieldValue === condition.value;
    case "not_equals":
      return fieldValue !== condition.value;
    case "contains":
      return Array.isArray(fieldValue)
        ? fieldValue.includes(condition.value)
        : String(fieldValue).includes(condition.value);
    case "not_contains":
      return Array.isArray(fieldValue)
        ? !fieldValue.includes(condition.value)
        : !String(fieldValue).includes(condition.value);
    case "greater_than":
      return Number(fieldValue) > Number(condition.value);
    case "less_than":
      return Number(fieldValue) < Number(condition.value);
    default:
      return true;
  }
};

export const shouldShowField = (field: DfFormField, formData: any): boolean => {
  if (!field.dependencies?.length) return true;

  return field.dependencies.every(dep => {
    const conditionsMet = dep.condition.every(cond =>
      evaluateCondition(cond, formData)
    );
    return dep.action === "show" ? conditionsMet : !conditionsMet;
  });
};
