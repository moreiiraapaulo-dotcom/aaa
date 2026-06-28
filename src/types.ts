/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface LinkItem {
  id: string;
  title: string;
  url: string;
  image?: string;
  subtitle?: string;
  hasCopyButton?: boolean;
  copyValue?: string;
  iconName?: string;
}
