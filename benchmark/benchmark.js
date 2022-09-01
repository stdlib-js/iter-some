/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

'use strict';

// MODULES //

var bench = require( '@stdlib/bench' );
var isBoolean = require( '@stdlib/assert-is-boolean' ).isPrimitive;
var pkg = require( './../package.json' ).name;
var iterSome = require( './../lib' );


// FUNCTIONS //

function createIterator( arr ) {
	var len;
	var it;
	var i;

	len = arr.length;
	i = -1;

	it = {};
	it.next = next;
	it.reset = reset;

	return it;

	function next() {
		i += 1;
		if ( i < len ) {
			return {
				'value': arr[ i ],
				'done': false
			};
		}
		i = -1; // reset index
		return {
			'done': true
		};
	}

	function reset() {
		i = -1;
	}
}


// MAIN //

bench( pkg, function benchmark( b ) {
	var bool;
	var arr;
	var i;

	arr = createIterator( [ 0, 0, 1, 1, 1, 1 ] );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = iterSome( arr, 4 );
		if ( !isBoolean( bool ) ) {
			b.fail( 'should return a boolean' );
		}
		arr.reset();
	}
	b.toc();
	if ( !isBoolean( bool ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::loop', function benchmark( b ) {
	var values;
	var total;
	var count;
	var bool;
	var arr;
	var i;
	var j;

	total = 4;

	values = [ 0, 0, 1, 1, 1, 1 ];
	arr = createIterator( values );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = false;
		count = 0;
		for ( j = 0; j < values.length; j++ ) {
			if ( arr.next().value ) {
				count += 1;
				if ( count === total ) {
					bool = true;
					break;
				}
			}
		}
		if ( !isBoolean( bool ) ) {
			b.fail( 'should be a boolean' );
		}
		arr.reset();
	}
	b.toc();
	if ( !isBoolean( bool ) ) {
		b.fail( 'should be a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
