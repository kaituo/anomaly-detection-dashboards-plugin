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

import { EuiEmptyPrompt, EuiLink, EuiIcon } from '@elastic/eui';
import React, { Component, Fragment } from 'react';
import { CreateDetectorButtons } from '../../../../components/CreateDetectorButtons/CreateDetectorButtons';
import { BASE_DOCS_LINK } from '../../../../utils/constants';

export class EmptyDashboard extends Component<{}, {}> {
  render() {
    return (
      <EuiEmptyPrompt
        title={<h2>You have no detectors</h2>}
        body={
          <Fragment>
            <p>Create detector first to detect anomalies in your data.</p>
            <p>
              Dashboard will generate insights on the anomalies across all of
              your detectors.
            </p>
            <p>
              Read about{' '}
              <EuiLink href={`${BASE_DOCS_LINK}/ad`} target="_blank">
                Get started with Anomaly detection &nbsp;
                <EuiIcon size="s" type="popout" />
              </EuiLink>{' '}
            </p>
          </Fragment>
        }
        actions={<CreateDetectorButtons />}
      />
    );
  }
}
