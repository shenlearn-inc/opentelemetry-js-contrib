/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Attributes } from '@opentelemetry/api';
import { HttpAttribute } from '@opentelemetry/semantic-conventions';
import type * as Hapi from '@hapi/hapi';
import { AttributeNames, HapiLayerType } from './types';

export const getRouteMetadata = (
  route: Hapi.ServerRoute
): {
  attributes: Attributes;
  name: string;
} => {
  return {
    attributes: {
      [HttpAttribute.HTTP_ROUTE]: route.path,
      [HttpAttribute.HTTP_METHOD]: route.method,
      [AttributeNames.HAPI_TYPE]: HapiLayerType.ROUTER,
    },
    name: `router - ${route.path}`,
  };
};