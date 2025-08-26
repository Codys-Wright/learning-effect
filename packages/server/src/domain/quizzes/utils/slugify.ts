/**
 * Hack to make 'slugify' import work with "type": "module".
 */
import slugifyLib from "slugify";

export const slugify = slugifyLib as unknown as typeof slugifyLib.default;
