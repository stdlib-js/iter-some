/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 2.0

/// <reference types="@stdlib/types"/>

import { Iterator } from '@stdlib/types/iter';

/**
* Tests whether at least `n` iterated values are truthy.
*
* @param iterator - input iterator
* @param n - minimum number of truthy elements
* @throws second argument must be a positive integer
* @returns boolean indicating whether at least `n` iterated values are truthy
*
* @example
* var array2iterator = require( `@stdlib/array/to-iterator` );
*
* var it = array2iterator( [ 0, 0, 1, 1, 1 ] );
*
* var bool = iterSome( it, 3 );
* // returns true
*/
declare function iterSome( iterator: Iterator, n: number ): boolean;


// EXPORTS //

export = iterSome;
