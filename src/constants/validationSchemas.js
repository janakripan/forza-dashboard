/**
 * Centralized Yup validation schemas.
 *
 * Why this file exists:
 * - Keeps validation rules out of UI components.
 * - Makes it easy to swap requirements when API constraints are known.
 *
 * Conventions:
 * - Schemas are named by feature (e.g. `headerSearchSchema`).
 * - Export shapes are stable so forms can adopt them without refactors.
 */

import * as Yup from "yup";

/**
 * Header search input validation.
 *
 * Notes:
 * - The UI is designed to search as-you-type, so validation is intentionally light.
 * - Replace the `max()` limit based on backend search constraints.
 */
export const headerSearchSchema = Yup.object({
  query: Yup.string()
    .trim()
    .max(120, "Search query is too long")
    .nullable(),
});

