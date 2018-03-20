/**
 *
 */

import { enumType } from "../../utils/types";

import * as t from "io-ts";

export enum NotificationChannelStatusEnum {
  "QUEUED" = "QUEUED",

  "SENT_TO_CHANNEL" = "SENT_TO_CHANNEL"
}

export type NotificationChannelStatus = t.TypeOf<
  typeof NotificationChannelStatus
>;

export const NotificationChannelStatus = enumType<
  NotificationChannelStatusEnum
>(NotificationChannelStatusEnum, "NotificationChannelStatus");