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

import React, { Component } from 'react';

import {
  EuiModal,
  EuiModalBody,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiOverlayMask,
  EuiCodeBlock,
} from '@elastic/eui';

interface CodeModalProps {
  code: string;
  title: string;
  subtitle?: string;
  getModalVisibilityChange: () => boolean;
  closeModal: () => void;
}

export class CodeModal extends Component<CodeModalProps, {}> {
  constructor(props: CodeModalProps) {
    super(props);
  }

  render() {
    let modal;

    if (this.props.getModalVisibilityChange()) {
      modal = (
        <EuiOverlayMask>
          <EuiModal onClose={this.props.closeModal}>
            <EuiModalHeader>
              <EuiModalHeaderTitle>
                <div>
                  <p>{this.props.title}</p>
                  {this.props.subtitle ? (
                    <p className="modelSubtitle">{this.props.subtitle}</p>
                  ) : (
                    {}
                  )}
                </div>
              </EuiModalHeaderTitle>
            </EuiModalHeader>

            <EuiModalBody>
              <EuiCodeBlock
                language="json"
                paddingSize="s"
                overflowHeight={300}
                isCopyable
              >
                {this.props.code}
              </EuiCodeBlock>
            </EuiModalBody>
          </EuiModal>
        </EuiOverlayMask>
      );
    }
    return <div>{modal}</div>;
  }
}
