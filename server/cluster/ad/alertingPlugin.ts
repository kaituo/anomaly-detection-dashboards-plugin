/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

import { API, MAX_ALERTS } from '../../utils/constants';

export default function alertingPlugin(Client: any, config: any, components: any) {
  const ca = components.clientAction.factory;

  Client.prototype.alerting = components.clientAction.namespaceFactory();
  const alerting = Client.prototype.alerting.prototype;
  
  alerting.searchMonitors = ca({
    url: {
      fmt: `${API.ALERTING_BASE}/_search`,
    },
    needBody: true,
    method: 'POST',
  });
  
  alerting.searchAlerts = ca({
    url: {
      fmt: `${API.ALERTING_BASE}/alerts?size=${MAX_ALERTS}&monitorId=<%=monitorId%>&sortString=start_time&sortOrder=desc&searchString=start_time:[<%=startTime%>%20TO%20<%=endTime%>]`,
      req: {
        monitorId: {
          type: 'string',
          required: true,
        },
        startTime: {
          type: 'number',
          required: true,
        },
        endTime: {
          type: 'number',
          required: true,
        },
      },
    },
    method: 'GET',
  });

}
