/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.4.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code, options ) {
		DOMEval( code, { nonce: options && options.nonce } );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2019-04-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) &&

				// Support: IE 8 only
				// Exclude object elements
				(nodeType !== 1 || context.nodeName.toLowerCase() !== "object") ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 && rdescend.test( selector ) ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = (elem.ownerDocument || elem).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( typeof elem.contentDocument !== "undefined" ) {
			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								} );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	// Support: IE 9-11 only
	// Also use offsetWidth/offsetHeight for when box sizing is unreliable
	// We use getClientRects() to check for hidden/disconnected.
	// In those cases, the computed value can be trusted to be border-box
	if ( ( !support.boxSizingReliable() && isBorderBox ||
		val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url, options ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./public/static/layui/layui.all.js":
/*!******************************************!*\
  !*** ./public/static/layui/layui.all.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/** layui-v2.5.5 MIT License By https://www.layui.com */
;
!function (e) {
  "use strict";

  var t = document,
      o = {
    modules: {},
    status: {},
    timeout: 10,
    event: {}
  },
      n = function n() {
    this.v = "2.5.5";
  },
      r = function () {
    var e = t.currentScript ? t.currentScript.src : function () {
      for (var e, o = t.scripts, n = o.length - 1, r = n; r > 0; r--) {
        if ("interactive" === o[r].readyState) {
          e = o[r].src;
          break;
        }
      }

      return e || o[n].src;
    }();
    return e.substring(0, e.lastIndexOf("/") + 1);
  }(),
      i = function i(t) {
    e.console && console.error && console.error("Layui hint: " + t);
  },
      a = "undefined" != typeof opera && "[object Opera]" === opera.toString(),
      u = {
    layer: "modules/layer",
    laydate: "modules/laydate",
    laypage: "modules/laypage",
    laytpl: "modules/laytpl",
    layim: "modules/layim",
    layedit: "modules/layedit",
    form: "modules/form",
    upload: "modules/upload",
    transfer: "modules/transfer",
    tree: "modules/tree",
    table: "modules/table",
    element: "modules/element",
    rate: "modules/rate",
    colorpicker: "modules/colorpicker",
    slider: "modules/slider",
    carousel: "modules/carousel",
    flow: "modules/flow",
    util: "modules/util",
    code: "modules/code",
    jquery: "modules/jquery",
    mobile: "modules/mobile",
    "layui.all": "../layui.all"
  };

  n.prototype.cache = o, n.prototype.define = function (e, t) {
    var n = this,
        r = "function" == typeof e,
        i = function i() {
      var e = function e(_e2, t) {
        layui[_e2] = t, o.status[_e2] = !0;
      };

      return "function" == typeof t && t(function (n, r) {
        e(n, r), o.callback[n] = function () {
          t(e);
        };
      }), this;
    };

    return r && (t = e, e = []), !layui["layui.all"] && layui["layui.mobile"] ? i.call(n) : (n.use(e, i), n);
  }, n.prototype.use = function (e, n, l) {
    function s(e, t) {
      var n = "PLaySTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/;
      ("load" === e.type || n.test((e.currentTarget || e.srcElement).readyState)) && (o.modules[f] = t, d.removeChild(v), function r() {
        return ++m > 1e3 * o.timeout / 4 ? i(f + " is not a valid module") : void (o.status[f] ? c() : setTimeout(r, 4));
      }());
    }

    function c() {
      l.push(layui[f]), e.length > 1 ? y.use(e.slice(1), n, l) : "function" == typeof n && n.apply(layui, l);
    }

    var y = this,
        p = o.dir = o.dir ? o.dir : r,
        d = t.getElementsByTagName("head")[0];
    e = "string" == typeof e ? [e] : e, window.jQuery && jQuery.fn.on && (y.each(e, function (t, o) {
      "jquery" === o && e.splice(t, 1);
    }), layui.jquery = layui.$ = jQuery);
    var f = e[0],
        m = 0;
    if (l = l || [], o.host = o.host || (p.match(/\/\/([\s\S]+?)\//) || ["//" + location.host + "/"])[0], 0 === e.length || layui["layui.all"] && u[f] || !layui["layui.all"] && layui["layui.mobile"] && u[f]) return c(), y;
    if (o.modules[f]) !function g() {
      return ++m > 1e3 * o.timeout / 4 ? i(f + " is not a valid module") : void ("string" == typeof o.modules[f] && o.status[f] ? c() : setTimeout(g, 4));
    }();else {
      var v = t.createElement("script"),
          h = (u[f] ? p + "lay/" : /^\{\/\}/.test(y.modules[f]) ? "" : o.base || "") + (y.modules[f] || f) + ".js";
      h = h.replace(/^\{\/\}/, ""), v.async = !0, v.charset = "utf-8", v.src = h + function () {
        var e = o.version === !0 ? o.v || new Date().getTime() : o.version || "";
        return e ? "?v=" + e : "";
      }(), d.appendChild(v), !v.attachEvent || v.attachEvent.toString && v.attachEvent.toString().indexOf("[native code") < 0 || a ? v.addEventListener("load", function (e) {
        s(e, h);
      }, !1) : v.attachEvent("onreadystatechange", function (e) {
        s(e, h);
      }), o.modules[f] = h;
    }
    return y;
  }, n.prototype.getStyle = function (t, o) {
    var n = t.currentStyle ? t.currentStyle : e.getComputedStyle(t, null);
    return n[n.getPropertyValue ? "getPropertyValue" : "getAttribute"](o);
  }, n.prototype.link = function (e, n, r) {
    var a = this,
        u = t.createElement("link"),
        l = t.getElementsByTagName("head")[0];
    "string" == typeof n && (r = n);
    var s = (r || e).replace(/\.|\//g, ""),
        c = u.id = "layuicss-" + s,
        y = 0;
    return u.rel = "stylesheet", u.href = e + (o.debug ? "?v=" + new Date().getTime() : ""), u.media = "all", t.getElementById(c) || l.appendChild(u), "function" != typeof n ? a : (function p() {
      return ++y > 1e3 * o.timeout / 100 ? i(e + " timeout") : void (1989 === parseInt(a.getStyle(t.getElementById(c), "width")) ? function () {
        n();
      }() : setTimeout(p, 100));
    }(), a);
  }, o.callback = {}, n.prototype.factory = function (e) {
    if (layui[e]) return "function" == typeof o.callback[e] ? o.callback[e] : null;
  }, n.prototype.addcss = function (e, t, n) {
    return layui.link(o.dir + "css/" + e, t, n);
  }, n.prototype.img = function (e, t, o) {
    var n = new Image();
    return n.src = e, n.complete ? t(n) : (n.onload = function () {
      n.onload = null, "function" == typeof t && t(n);
    }, void (n.onerror = function (e) {
      n.onerror = null, "function" == typeof o && o(e);
    }));
  }, n.prototype.config = function (e) {
    e = e || {};

    for (var t in e) {
      o[t] = e[t];
    }

    return this;
  }, n.prototype.modules = function () {
    var e = {};

    for (var t in u) {
      e[t] = u[t];
    }

    return e;
  }(), n.prototype.extend = function (e) {
    var t = this;
    e = e || {};

    for (var o in e) {
      t[o] || t.modules[o] ? i("模块名 " + o + " 已被占用") : t.modules[o] = e[o];
    }

    return t;
  }, n.prototype.router = function (e) {
    var t = this,
        e = e || location.hash,
        o = {
      path: [],
      search: {},
      hash: (e.match(/[^#](#.*$)/) || [])[1] || ""
    };
    return /^#\//.test(e) ? (e = e.replace(/^#\//, ""), o.href = "/" + e, e = e.replace(/([^#])(#.*$)/, "$1").split("/") || [], t.each(e, function (e, t) {
      /^\w+=/.test(t) ? function () {
        t = t.split("="), o.search[t[0]] = t[1];
      }() : o.path.push(t);
    }), o) : o;
  }, n.prototype.data = function (t, o, n) {
    if (t = t || "layui", n = n || localStorage, e.JSON && e.JSON.parse) {
      if (null === o) return delete n[t];
      o = "object" == _typeof(o) ? o : {
        key: o
      };

      try {
        var r = JSON.parse(n[t]);
      } catch (i) {
        var r = {};
      }

      return "value" in o && (r[o.key] = o.value), o.remove && delete r[o.key], n[t] = JSON.stringify(r), o.key ? r[o.key] : r;
    }
  }, n.prototype.sessionData = function (e, t) {
    return this.data(e, t, sessionStorage);
  }, n.prototype.device = function (t) {
    var o = navigator.userAgent.toLowerCase(),
        n = function n(e) {
      var t = new RegExp(e + "/([^\\s\\_\\-]+)");
      return e = (o.match(t) || [])[1], e || !1;
    },
        r = {
      os: function () {
        return /windows/.test(o) ? "windows" : /linux/.test(o) ? "linux" : /iphone|ipod|ipad|ios/.test(o) ? "ios" : /mac/.test(o) ? "mac" : void 0;
      }(),
      ie: function () {
        return !!(e.ActiveXObject || "ActiveXObject" in e) && ((o.match(/msie\s(\d+)/) || [])[1] || "11");
      }(),
      weixin: n("micromessenger")
    };

    return t && !r[t] && (r[t] = n(t)), r.android = /android/.test(o), r.ios = "ios" === r.os, r;
  }, n.prototype.hint = function () {
    return {
      error: i
    };
  }, n.prototype.each = function (e, t) {
    var o,
        n = this;
    if ("function" != typeof t) return n;

    if (e = e || [], e.constructor === Object) {
      for (o in e) {
        if (t.call(e[o], o, e[o])) break;
      }
    } else for (o = 0; o < e.length && !t.call(e[o], o, e[o]); o++) {
      ;
    }

    return n;
  }, n.prototype.sort = function (e, t, o) {
    var n = JSON.parse(JSON.stringify(e || []));
    return t ? (n.sort(function (e, o) {
      var n = /^-?\d+$/,
          r = e[t],
          i = o[t];
      return n.test(r) && (r = parseFloat(r)), n.test(i) && (i = parseFloat(i)), r && !i ? 1 : !r && i ? -1 : r > i ? 1 : r < i ? -1 : 0;
    }), o && n.reverse(), n) : n;
  }, n.prototype.stope = function (t) {
    t = t || e.event;

    try {
      t.stopPropagation();
    } catch (o) {
      t.cancelBubble = !0;
    }
  }, n.prototype.onevent = function (e, t, o) {
    return "string" != typeof e || "function" != typeof o ? this : n.event(e, t, null, o);
  }, n.prototype.event = n.event = function (e, t, n, r) {
    var i = this,
        a = null,
        u = t.match(/\((.*)\)$/) || [],
        l = (e + "." + t).replace(u[0], ""),
        s = u[1] || "",
        c = function c(e, t) {
      var o = t && t.call(i, n);
      o === !1 && null === a && (a = !1);
    };

    return r ? (o.event[l] = o.event[l] || {}, o.event[l][s] = [r], this) : (layui.each(o.event[l], function (e, t) {
      return "{*}" === s ? void layui.each(t, c) : ("" === e && layui.each(t, c), void (s && e === s && layui.each(t, c)));
    }), a);
  }, e.layui = new n();
}(window);
layui.define(function (a) {
  var i = layui.cache;
  layui.config({
    dir: i.dir.replace(/lay\/dest\/$/, "")
  }), a("layui.all", layui.v);
});
layui.define(function (e) {
  "use strict";

  var r = {
    open: "{{",
    close: "}}"
  },
      c = {
    exp: function exp(e) {
      return new RegExp(e, "g");
    },
    query: function query(e, c, t) {
      var o = ["#([\\s\\S])+?", "([^{#}])*?"][e || 0];
      return n((c || "") + r.open + o + r.close + (t || ""));
    },
    escape: function escape(e) {
      return String(e || "").replace(/&(?!#?[a-zA-Z0-9]+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;");
    },
    error: function error(e, r) {
      var c = "Laytpl Error：";
      return "object" == (typeof console === "undefined" ? "undefined" : _typeof(console)) && console.error(c + e + "\n" + (r || "")), c + e;
    }
  },
      n = c.exp,
      t = function t(e) {
    this.tpl = e;
  };

  t.pt = t.prototype, window.errors = 0, t.pt.parse = function (e, t) {
    var o = this,
        p = e,
        a = n("^" + r.open + "#", ""),
        l = n(r.close + "$", "");
    e = e.replace(/\s+|\r|\t|\n/g, " ").replace(n(r.open + "#"), r.open + "# ").replace(n(r.close + "}"), "} " + r.close).replace(/\\/g, "\\\\").replace(n(r.open + "!(.+?)!" + r.close), function (e) {
      return e = e.replace(n("^" + r.open + "!"), "").replace(n("!" + r.close), "").replace(n(r.open + "|" + r.close), function (e) {
        return e.replace(/(.)/g, "\\$1");
      });
    }).replace(/(?="|')/g, "\\").replace(c.query(), function (e) {
      return e = e.replace(a, "").replace(l, ""), '";' + e.replace(/\\/g, "") + ';view+="';
    }).replace(c.query(1), function (e) {
      var c = '"+(';
      return e.replace(/\s/g, "") === r.open + r.close ? "" : (e = e.replace(n(r.open + "|" + r.close), ""), /^=/.test(e) && (e = e.replace(/^=/, ""), c = '"+_escape_('), c + e.replace(/\\/g, "") + ')+"');
    }), e = '"use strict";var view = "' + e + '";return view;';

    try {
      return o.cache = e = new Function("d, _escape_", e), e(t, c.escape);
    } catch (u) {
      return delete o.cache, c.error(u, p);
    }
  }, t.pt.render = function (e, r) {
    var n,
        t = this;
    return e ? (n = t.cache ? t.cache(e, c.escape) : t.parse(t.tpl, e), r ? void r(n) : n) : c.error("no data");
  };

  var o = function o(e) {
    return "string" != typeof e ? c.error("Template not found") : new t(e);
  };

  o.config = function (e) {
    e = e || {};

    for (var c in e) {
      r[c] = e[c];
    }
  }, o.v = "1.2.0", e("laytpl", o);
});
layui.define(function (e) {
  "use strict";

  var a = document,
      t = "getElementById",
      n = "getElementsByTagName",
      i = "laypage",
      r = "layui-disabled",
      u = function u(e) {
    var a = this;
    a.config = e || {}, a.config.index = ++s.index, a.render(!0);
  };

  u.prototype.type = function () {
    var e = this.config;
    if ("object" == _typeof(e.elem)) return void 0 === e.elem.length ? 2 : 3;
  }, u.prototype.view = function () {
    var e = this,
        a = e.config,
        t = a.groups = "groups" in a ? 0 | a.groups : 5;
    a.layout = "object" == _typeof(a.layout) ? a.layout : ["prev", "page", "next"], a.count = 0 | a.count, a.curr = 0 | a.curr || 1, a.limits = "object" == _typeof(a.limits) ? a.limits : [10, 20, 30, 40, 50], a.limit = 0 | a.limit || 10, a.pages = Math.ceil(a.count / a.limit) || 1, a.curr > a.pages && (a.curr = a.pages), t < 0 ? t = 1 : t > a.pages && (t = a.pages), a.prev = "prev" in a ? a.prev : "&#x4E0A;&#x4E00;&#x9875;", a.next = "next" in a ? a.next : "&#x4E0B;&#x4E00;&#x9875;";
    var n = a.pages > t ? Math.ceil((a.curr + (t > 1 ? 1 : 0)) / (t > 0 ? t : 1)) : 1,
        i = {
      prev: function () {
        return a.prev ? '<a href="javascript:;" class="layui-laypage-prev' + (1 == a.curr ? " " + r : "") + '" data-page="' + (a.curr - 1) + '">' + a.prev + "</a>" : "";
      }(),
      page: function () {
        var e = [];
        if (a.count < 1) return "";
        n > 1 && a.first !== !1 && 0 !== t && e.push('<a href="javascript:;" class="layui-laypage-first" data-page="1"  title="&#x9996;&#x9875;">' + (a.first || 1) + "</a>");
        var i = Math.floor((t - 1) / 2),
            r = n > 1 ? a.curr - i : 1,
            u = n > 1 ? function () {
          var e = a.curr + (t - i - 1);
          return e > a.pages ? a.pages : e;
        }() : t;

        for (u - r < t - 1 && (r = u - t + 1), a.first !== !1 && r > 2 && e.push('<span class="layui-laypage-spr">&#x2026;</span>'); r <= u; r++) {
          r === a.curr ? e.push('<span class="layui-laypage-curr"><em class="layui-laypage-em" ' + (/^#/.test(a.theme) ? 'style="background-color:' + a.theme + ';"' : "") + "></em><em>" + r + "</em></span>") : e.push('<a href="javascript:;" data-page="' + r + '">' + r + "</a>");
        }

        return a.pages > t && a.pages > u && a.last !== !1 && (u + 1 < a.pages && e.push('<span class="layui-laypage-spr">&#x2026;</span>'), 0 !== t && e.push('<a href="javascript:;" class="layui-laypage-last" title="&#x5C3E;&#x9875;"  data-page="' + a.pages + '">' + (a.last || a.pages) + "</a>")), e.join("");
      }(),
      next: function () {
        return a.next ? '<a href="javascript:;" class="layui-laypage-next' + (a.curr == a.pages ? " " + r : "") + '" data-page="' + (a.curr + 1) + '">' + a.next + "</a>" : "";
      }(),
      count: '<span class="layui-laypage-count">共 ' + a.count + " 条</span>",
      limit: function () {
        var e = ['<span class="layui-laypage-limits"><select lay-ignore>'];
        return layui.each(a.limits, function (t, n) {
          e.push('<option value="' + n + '"' + (n === a.limit ? "selected" : "") + ">" + n + " 条/页</option>");
        }), e.join("") + "</select></span>";
      }(),
      refresh: ['<a href="javascript:;" data-page="' + a.curr + '" class="layui-laypage-refresh">', '<i class="layui-icon layui-icon-refresh"></i>', "</a>"].join(""),
      skip: function () {
        return ['<span class="layui-laypage-skip">&#x5230;&#x7B2C;', '<input type="text" min="1" value="' + a.curr + '" class="layui-input">', '&#x9875;<button type="button" class="layui-laypage-btn">&#x786e;&#x5b9a;</button>', "</span>"].join("");
      }()
    };
    return ['<div class="layui-box layui-laypage layui-laypage-' + (a.theme ? /^#/.test(a.theme) ? "molv" : a.theme : "default") + '" id="layui-laypage-' + a.index + '">', function () {
      var e = [];
      return layui.each(a.layout, function (a, t) {
        i[t] && e.push(i[t]);
      }), e.join("");
    }(), "</div>"].join("");
  }, u.prototype.jump = function (e, a) {
    if (e) {
      var t = this,
          i = t.config,
          r = e.children,
          u = e[n]("button")[0],
          l = e[n]("input")[0],
          p = e[n]("select")[0],
          c = function c() {
        var e = 0 | l.value.replace(/\s|\D/g, "");
        e && (i.curr = e, t.render());
      };

      if (a) return c();

      for (var o = 0, y = r.length; o < y; o++) {
        "a" === r[o].nodeName.toLowerCase() && s.on(r[o], "click", function () {
          var e = 0 | this.getAttribute("data-page");
          e < 1 || e > i.pages || (i.curr = e, t.render());
        });
      }

      p && s.on(p, "change", function () {
        var e = this.value;
        i.curr * e > i.count && (i.curr = Math.ceil(i.count / e)), i.limit = e, t.render();
      }), u && s.on(u, "click", function () {
        c();
      });
    }
  }, u.prototype.skip = function (e) {
    if (e) {
      var a = this,
          t = e[n]("input")[0];
      t && s.on(t, "keyup", function (t) {
        var n = this.value,
            i = t.keyCode;
        /^(37|38|39|40)$/.test(i) || (/\D/.test(n) && (this.value = n.replace(/\D/, "")), 13 === i && a.jump(e, !0));
      });
    }
  }, u.prototype.render = function (e) {
    var n = this,
        i = n.config,
        r = n.type(),
        u = n.view();
    2 === r ? i.elem && (i.elem.innerHTML = u) : 3 === r ? i.elem.html(u) : a[t](i.elem) && (a[t](i.elem).innerHTML = u), i.jump && i.jump(i, e);
    var s = a[t]("layui-laypage-" + i.index);
    n.jump(s), i.hash && !e && (location.hash = "!" + i.hash + "=" + i.curr), n.skip(s);
  };
  var s = {
    render: function render(e) {
      var a = new u(e);
      return a.index;
    },
    index: layui.laypage ? layui.laypage.index + 1e4 : 0,
    on: function on(e, a, t) {
      return e.attachEvent ? e.attachEvent("on" + a, function (a) {
        a.target = a.srcElement, t.call(e, a);
      }) : e.addEventListener(a, t, !1), this;
    }
  };
  e(i, s);
});
!function () {
  "use strict";

  var e = window.layui && layui.define,
      t = {
    getPath: function () {
      var e = document.currentScript ? document.currentScript.src : function () {
        for (var e, t = document.scripts, n = t.length - 1, a = n; a > 0; a--) {
          if ("interactive" === t[a].readyState) {
            e = t[a].src;
            break;
          }
        }

        return e || t[n].src;
      }();
      return e.substring(0, e.lastIndexOf("/") + 1);
    }(),
    getStyle: function getStyle(e, t) {
      var n = e.currentStyle ? e.currentStyle : window.getComputedStyle(e, null);
      return n[n.getPropertyValue ? "getPropertyValue" : "getAttribute"](t);
    },
    link: function link(e, a, i) {
      if (n.path) {
        var r = document.getElementsByTagName("head")[0],
            o = document.createElement("link");
        "string" == typeof a && (i = a);
        var s = (i || e).replace(/\.|\//g, ""),
            l = "layuicss-" + s,
            d = 0;
        o.rel = "stylesheet", o.href = n.path + e, o.id = l, document.getElementById(l) || r.appendChild(o), "function" == typeof a && !function c() {
          return ++d > 80 ? window.console && console.error("laydate.css: Invalid") : void (1989 === parseInt(t.getStyle(document.getElementById(l), "width")) ? a() : setTimeout(c, 100));
        }();
      }
    }
  },
      n = {
    v: "5.0.9",
    config: {},
    index: window.laydate && window.laydate.v ? 1e5 : 0,
    path: t.getPath,
    set: function set(e) {
      var t = this;
      return t.config = w.extend({}, t.config, e), t;
    },
    ready: function ready(a) {
      var i = "laydate",
          r = "",
          o = (e ? "modules/laydate/" : "theme/") + "default/laydate.css?v=" + n.v + r;
      return e ? layui.addcss(o, a, i) : t.link(o, a, i), this;
    }
  },
      a = function a() {
    var e = this;
    return {
      hint: function hint(t) {
        e.hint.call(e, t);
      },
      config: e.config
    };
  },
      i = "laydate",
      r = ".layui-laydate",
      o = "layui-this",
      s = "laydate-disabled",
      l = "开始日期超出了结束日期<br>建议重新选择",
      d = [100, 2e5],
      c = "layui-laydate-static",
      m = "layui-laydate-list",
      u = "laydate-selected",
      h = "layui-laydate-hint",
      y = "laydate-day-prev",
      f = "laydate-day-next",
      p = "layui-laydate-footer",
      g = ".laydate-btns-confirm",
      v = "laydate-time-text",
      D = ".laydate-btns-time",
      T = function T(e) {
    var t = this;
    t.index = ++n.index, t.config = w.extend({}, t.config, n.config, e), n.ready(function () {
      t.init();
    });
  },
      w = function w(e) {
    return new C(e);
  },
      C = function C(e) {
    for (var t = 0, n = "object" == _typeof(e) ? [e] : (this.selector = e, document.querySelectorAll(e || null)); t < n.length; t++) {
      this.push(n[t]);
    }
  };

  C.prototype = [], C.prototype.constructor = C, w.extend = function () {
    var e = 1,
        t = arguments,
        n = function n(e, t) {
      e = e || (t.constructor === Array ? [] : {});

      for (var a in t) {
        e[a] = t[a] && t[a].constructor === Object ? n(e[a], t[a]) : t[a];
      }

      return e;
    };

    for (t[0] = "object" == _typeof(t[0]) ? t[0] : {}; e < t.length; e++) {
      "object" == _typeof(t[e]) && n(t[0], t[e]);
    }

    return t[0];
  }, w.ie = function () {
    var e = navigator.userAgent.toLowerCase();
    return !!(window.ActiveXObject || "ActiveXObject" in window) && ((e.match(/msie\s(\d+)/) || [])[1] || "11");
  }(), w.stope = function (e) {
    e = e || window.event, e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0;
  }, w.each = function (e, t) {
    var n,
        a = this;
    if ("function" != typeof t) return a;

    if (e = e || [], e.constructor === Object) {
      for (n in e) {
        if (t.call(e[n], n, e[n])) break;
      }
    } else for (n = 0; n < e.length && !t.call(e[n], n, e[n]); n++) {
      ;
    }

    return a;
  }, w.digit = function (e, t, n) {
    var a = "";
    e = String(e), t = t || 2;

    for (var i = e.length; i < t; i++) {
      a += "0";
    }

    return e < Math.pow(10, t) ? a + (0 | e) : e;
  }, w.elem = function (e, t) {
    var n = document.createElement(e);
    return w.each(t || {}, function (e, t) {
      n.setAttribute(e, t);
    }), n;
  }, C.addStr = function (e, t) {
    return e = e.replace(/\s+/, " "), t = t.replace(/\s+/, " ").split(" "), w.each(t, function (t, n) {
      new RegExp("\\b" + n + "\\b").test(e) || (e = e + " " + n);
    }), e.replace(/^\s|\s$/, "");
  }, C.removeStr = function (e, t) {
    return e = e.replace(/\s+/, " "), t = t.replace(/\s+/, " ").split(" "), w.each(t, function (t, n) {
      var a = new RegExp("\\b" + n + "\\b");
      a.test(e) && (e = e.replace(a, ""));
    }), e.replace(/\s+/, " ").replace(/^\s|\s$/, "");
  }, C.prototype.find = function (e) {
    var t = this,
        n = 0,
        a = [],
        i = "object" == _typeof(e);

    return this.each(function (r, o) {
      for (var s = i ? [e] : o.querySelectorAll(e || null); n < s.length; n++) {
        a.push(s[n]);
      }

      t.shift();
    }), i || (t.selector = (t.selector ? t.selector + " " : "") + e), w.each(a, function (e, n) {
      t.push(n);
    }), t;
  }, C.prototype.each = function (e) {
    return w.each.call(this, this, e);
  }, C.prototype.addClass = function (e, t) {
    return this.each(function (n, a) {
      a.className = C[t ? "removeStr" : "addStr"](a.className, e);
    });
  }, C.prototype.removeClass = function (e) {
    return this.addClass(e, !0);
  }, C.prototype.hasClass = function (e) {
    var t = !1;
    return this.each(function (n, a) {
      new RegExp("\\b" + e + "\\b").test(a.className) && (t = !0);
    }), t;
  }, C.prototype.attr = function (e, t) {
    var n = this;
    return void 0 === t ? function () {
      if (n.length > 0) return n[0].getAttribute(e);
    }() : n.each(function (n, a) {
      a.setAttribute(e, t);
    });
  }, C.prototype.removeAttr = function (e) {
    return this.each(function (t, n) {
      n.removeAttribute(e);
    });
  }, C.prototype.html = function (e) {
    return this.each(function (t, n) {
      n.innerHTML = e;
    });
  }, C.prototype.val = function (e) {
    return this.each(function (t, n) {
      n.value = e;
    });
  }, C.prototype.append = function (e) {
    return this.each(function (t, n) {
      "object" == _typeof(e) ? n.appendChild(e) : n.innerHTML = n.innerHTML + e;
    });
  }, C.prototype.remove = function (e) {
    return this.each(function (t, n) {
      e ? n.removeChild(e) : n.parentNode.removeChild(n);
    });
  }, C.prototype.on = function (e, t) {
    return this.each(function (n, a) {
      a.attachEvent ? a.attachEvent("on" + e, function (e) {
        e.target = e.srcElement, t.call(a, e);
      }) : a.addEventListener(e, t, !1);
    });
  }, C.prototype.off = function (e, t) {
    return this.each(function (n, a) {
      a.detachEvent ? a.detachEvent("on" + e, t) : a.removeEventListener(e, t, !1);
    });
  }, T.isLeapYear = function (e) {
    return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
  }, T.prototype.config = {
    type: "date",
    range: !1,
    format: "yyyy-MM-dd",
    value: null,
    isInitValue: !0,
    min: "1900-1-1",
    max: "2099-12-31",
    trigger: "focus",
    show: !1,
    showBottom: !0,
    btns: ["clear", "now", "confirm"],
    lang: "cn",
    theme: "default",
    position: null,
    calendar: !1,
    mark: {},
    zIndex: null,
    done: null,
    change: null
  }, T.prototype.lang = function () {
    var e = this,
        t = e.config,
        n = {
      cn: {
        weeks: ["日", "一", "二", "三", "四", "五", "六"],
        time: ["时", "分", "秒"],
        timeTips: "选择时间",
        startTime: "开始时间",
        endTime: "结束时间",
        dateTips: "返回日期",
        month: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
        tools: {
          confirm: "确定",
          clear: "清空",
          now: "现在"
        }
      },
      en: {
        weeks: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        time: ["Hours", "Minutes", "Seconds"],
        timeTips: "Select Time",
        startTime: "Start Time",
        endTime: "End Time",
        dateTips: "Select Date",
        month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        tools: {
          confirm: "Confirm",
          clear: "Clear",
          now: "Now"
        }
      }
    };
    return n[t.lang] || n.cn;
  }, T.prototype.init = function () {
    var e = this,
        t = e.config,
        n = "yyyy|y|MM|M|dd|d|HH|H|mm|m|ss|s",
        a = "static" === t.position,
        i = {
      year: "yyyy",
      month: "yyyy-MM",
      date: "yyyy-MM-dd",
      time: "HH:mm:ss",
      datetime: "yyyy-MM-dd HH:mm:ss"
    };
    t.elem = w(t.elem), t.eventElem = w(t.eventElem), t.elem[0] && (t.range === !0 && (t.range = "-"), t.format === i.date && (t.format = i[t.type]), e.format = t.format.match(new RegExp(n + "|.", "g")) || [], e.EXP_IF = "", e.EXP_SPLIT = "", w.each(e.format, function (t, a) {
      var i = new RegExp(n).test(a) ? "\\d{" + function () {
        return new RegExp(n).test(e.format[0 === t ? t + 1 : t - 1] || "") ? /^yyyy|y$/.test(a) ? 4 : a.length : /^yyyy$/.test(a) ? "1,4" : /^y$/.test(a) ? "1,308" : "1,2";
      }() + "}" : "\\" + a;
      e.EXP_IF = e.EXP_IF + i, e.EXP_SPLIT = e.EXP_SPLIT + "(" + i + ")";
    }), e.EXP_IF = new RegExp("^" + (t.range ? e.EXP_IF + "\\s\\" + t.range + "\\s" + e.EXP_IF : e.EXP_IF) + "$"), e.EXP_SPLIT = new RegExp("^" + e.EXP_SPLIT + "$", ""), e.isInput(t.elem[0]) || "focus" === t.trigger && (t.trigger = "click"), t.elem.attr("lay-key") || (t.elem.attr("lay-key", e.index), t.eventElem.attr("lay-key", e.index)), t.mark = w.extend({}, t.calendar && "cn" === t.lang ? {
      "0-1-1": "元旦",
      "0-2-14": "情人",
      "0-3-8": "妇女",
      "0-3-12": "植树",
      "0-4-1": "愚人",
      "0-5-1": "劳动",
      "0-5-4": "青年",
      "0-6-1": "儿童",
      "0-9-10": "教师",
      "0-9-18": "国耻",
      "0-10-1": "国庆",
      "0-12-25": "圣诞"
    } : {}, t.mark), w.each(["min", "max"], function (e, n) {
      var a = [],
          i = [];

      if ("number" == typeof t[n]) {
        var r = t[n],
            o = new Date().getTime(),
            s = 864e5,
            l = new Date(r ? r < s ? o + r * s : r : o);
        a = [l.getFullYear(), l.getMonth() + 1, l.getDate()], r < s || (i = [l.getHours(), l.getMinutes(), l.getSeconds()]);
      } else a = (t[n].match(/\d+-\d+-\d+/) || [""])[0].split("-"), i = (t[n].match(/\d+:\d+:\d+/) || [""])[0].split(":");

      t[n] = {
        year: 0 | a[0] || new Date().getFullYear(),
        month: a[1] ? (0 | a[1]) - 1 : new Date().getMonth(),
        date: 0 | a[2] || new Date().getDate(),
        hours: 0 | i[0],
        minutes: 0 | i[1],
        seconds: 0 | i[2]
      };
    }), e.elemID = "layui-laydate" + t.elem.attr("lay-key"), (t.show || a) && e.render(), a || e.events(), t.value && t.isInitValue && (t.value.constructor === Date ? e.setValue(e.parse(0, e.systemDate(t.value))) : e.setValue(t.value)));
  }, T.prototype.render = function () {
    var e = this,
        t = e.config,
        n = e.lang(),
        a = "static" === t.position,
        i = e.elem = w.elem("div", {
      id: e.elemID,
      "class": ["layui-laydate", t.range ? " layui-laydate-range" : "", a ? " " + c : "", t.theme && "default" !== t.theme && !/^#/.test(t.theme) ? " laydate-theme-" + t.theme : ""].join("")
    }),
        r = e.elemMain = [],
        o = e.elemHeader = [],
        s = e.elemCont = [],
        l = e.table = [],
        d = e.footer = w.elem("div", {
      "class": p
    });

    if (t.zIndex && (i.style.zIndex = t.zIndex), w.each(new Array(2), function (e) {
      if (!t.range && e > 0) return !0;
      var a = w.elem("div", {
        "class": "layui-laydate-header"
      }),
          i = [function () {
        var e = w.elem("i", {
          "class": "layui-icon laydate-icon laydate-prev-y"
        });
        return e.innerHTML = "&#xe65a;", e;
      }(), function () {
        var e = w.elem("i", {
          "class": "layui-icon laydate-icon laydate-prev-m"
        });
        return e.innerHTML = "&#xe603;", e;
      }(), function () {
        var e = w.elem("div", {
          "class": "laydate-set-ym"
        }),
            t = w.elem("span"),
            n = w.elem("span");
        return e.appendChild(t), e.appendChild(n), e;
      }(), function () {
        var e = w.elem("i", {
          "class": "layui-icon laydate-icon laydate-next-m"
        });
        return e.innerHTML = "&#xe602;", e;
      }(), function () {
        var e = w.elem("i", {
          "class": "layui-icon laydate-icon laydate-next-y"
        });
        return e.innerHTML = "&#xe65b;", e;
      }()],
          d = w.elem("div", {
        "class": "layui-laydate-content"
      }),
          c = w.elem("table"),
          m = w.elem("thead"),
          u = w.elem("tr");
      w.each(i, function (e, t) {
        a.appendChild(t);
      }), m.appendChild(u), w.each(new Array(6), function (e) {
        var t = c.insertRow(0);
        w.each(new Array(7), function (a) {
          if (0 === e) {
            var i = w.elem("th");
            i.innerHTML = n.weeks[a], u.appendChild(i);
          }

          t.insertCell(a);
        });
      }), c.insertBefore(m, c.children[0]), d.appendChild(c), r[e] = w.elem("div", {
        "class": "layui-laydate-main laydate-main-list-" + e
      }), r[e].appendChild(a), r[e].appendChild(d), o.push(i), s.push(d), l.push(c);
    }), w(d).html(function () {
      var e = [],
          i = [];
      return "datetime" === t.type && e.push('<span lay-type="datetime" class="laydate-btns-time">' + n.timeTips + "</span>"), w.each(t.btns, function (e, r) {
        var o = n.tools[r] || "btn";
        t.range && "now" === r || (a && "clear" === r && (o = "cn" === t.lang ? "重置" : "Reset"), i.push('<span lay-type="' + r + '" class="laydate-btns-' + r + '">' + o + "</span>"));
      }), e.push('<div class="laydate-footer-btns">' + i.join("") + "</div>"), e.join("");
    }()), w.each(r, function (e, t) {
      i.appendChild(t);
    }), t.showBottom && i.appendChild(d), /^#/.test(t.theme)) {
      var m = w.elem("style"),
          u = ["#{{id}} .layui-laydate-header{background-color:{{theme}};}", "#{{id}} .layui-this{background-color:{{theme}} !important;}"].join("").replace(/{{id}}/g, e.elemID).replace(/{{theme}}/g, t.theme);
      "styleSheet" in m ? (m.setAttribute("type", "text/css"), m.styleSheet.cssText = u) : m.innerHTML = u, w(i).addClass("laydate-theme-molv"), i.appendChild(m);
    }

    e.remove(T.thisElemDate), a ? t.elem.append(i) : (document.body.appendChild(i), e.position()), e.checkDate().calendar(), e.changeEvent(), T.thisElemDate = e.elemID, "function" == typeof t.ready && t.ready(w.extend({}, t.dateTime, {
      month: t.dateTime.month + 1
    }));
  }, T.prototype.remove = function (e) {
    var t = this,
        n = (t.config, w("#" + (e || t.elemID)));
    return n.hasClass(c) || t.checkDate(function () {
      n.remove();
    }), t;
  }, T.prototype.position = function () {
    var e = this,
        t = e.config,
        n = e.bindElem || t.elem[0],
        a = n.getBoundingClientRect(),
        i = e.elem.offsetWidth,
        r = e.elem.offsetHeight,
        o = function o(e) {
      return e = e ? "scrollLeft" : "scrollTop", document.body[e] | document.documentElement[e];
    },
        s = function s(e) {
      return document.documentElement[e ? "clientWidth" : "clientHeight"];
    },
        l = 5,
        d = a.left,
        c = a.bottom;

    d + i + l > s("width") && (d = s("width") - i - l), c + r + l > s() && (c = a.top > r ? a.top - r : s() - r, c -= 2 * l), t.position && (e.elem.style.position = t.position), e.elem.style.left = d + ("fixed" === t.position ? 0 : o(1)) + "px", e.elem.style.top = c + ("fixed" === t.position ? 0 : o()) + "px";
  }, T.prototype.hint = function (e) {
    var t = this,
        n = (t.config, w.elem("div", {
      "class": h
    }));
    t.elem && (n.innerHTML = e || "", w(t.elem).find("." + h).remove(), t.elem.appendChild(n), clearTimeout(t.hinTimer), t.hinTimer = setTimeout(function () {
      w(t.elem).find("." + h).remove();
    }, 3e3));
  }, T.prototype.getAsYM = function (e, t, n) {
    return n ? t-- : t++, t < 0 && (t = 11, e--), t > 11 && (t = 0, e++), [e, t];
  }, T.prototype.systemDate = function (e) {
    var t = e || new Date();
    return {
      year: t.getFullYear(),
      month: t.getMonth(),
      date: t.getDate(),
      hours: e ? e.getHours() : 0,
      minutes: e ? e.getMinutes() : 0,
      seconds: e ? e.getSeconds() : 0
    };
  }, T.prototype.checkDate = function (e) {
    var t,
        a,
        i = this,
        r = (new Date(), i.config),
        o = r.dateTime = r.dateTime || i.systemDate(),
        s = i.bindElem || r.elem[0],
        l = (i.isInput(s) ? "val" : "html", i.isInput(s) ? s.value : "static" === r.position ? "" : s.innerHTML),
        c = function c(e) {
      e.year > d[1] && (e.year = d[1], a = !0), e.month > 11 && (e.month = 11, a = !0), e.hours > 23 && (e.hours = 0, a = !0), e.minutes > 59 && (e.minutes = 0, e.hours++, a = !0), e.seconds > 59 && (e.seconds = 0, e.minutes++, a = !0), t = n.getEndDate(e.month + 1, e.year), e.date > t && (e.date = t, a = !0);
    },
        m = function m(e, t, n) {
      var o = ["startTime", "endTime"];
      t = (t.match(i.EXP_SPLIT) || []).slice(1), n = n || 0, r.range && (i[o[n]] = i[o[n]] || {}), w.each(i.format, function (s, l) {
        var c = parseFloat(t[s]);
        t[s].length < l.length && (a = !0), /yyyy|y/.test(l) ? (c < d[0] && (c = d[0], a = !0), e.year = c) : /MM|M/.test(l) ? (c < 1 && (c = 1, a = !0), e.month = c - 1) : /dd|d/.test(l) ? (c < 1 && (c = 1, a = !0), e.date = c) : /HH|H/.test(l) ? (c < 1 && (c = 0, a = !0), e.hours = c, r.range && (i[o[n]].hours = c)) : /mm|m/.test(l) ? (c < 1 && (c = 0, a = !0), e.minutes = c, r.range && (i[o[n]].minutes = c)) : /ss|s/.test(l) && (c < 1 && (c = 0, a = !0), e.seconds = c, r.range && (i[o[n]].seconds = c));
      }), c(e);
    };

    return "limit" === e ? (c(o), i) : (l = l || r.value, "string" == typeof l && (l = l.replace(/\s+/g, " ").replace(/^\s|\s$/g, "")), i.startState && !i.endState && (delete i.startState, i.endState = !0), "string" == typeof l && l ? i.EXP_IF.test(l) ? r.range ? (l = l.split(" " + r.range + " "), i.startDate = i.startDate || i.systemDate(), i.endDate = i.endDate || i.systemDate(), r.dateTime = w.extend({}, i.startDate), w.each([i.startDate, i.endDate], function (e, t) {
      m(t, l[e], e);
    })) : m(o, l) : (i.hint("日期格式不合法<br>必须遵循下述格式：<br>" + (r.range ? r.format + " " + r.range + " " + r.format : r.format) + "<br>已为你重置"), a = !0) : l && l.constructor === Date ? r.dateTime = i.systemDate(l) : (r.dateTime = i.systemDate(), delete i.startState, delete i.endState, delete i.startDate, delete i.endDate, delete i.startTime, delete i.endTime), c(o), a && l && i.setValue(r.range ? i.endDate ? i.parse() : "" : i.parse()), e && e(), i);
  }, T.prototype.mark = function (e, t) {
    var n,
        a = this,
        i = a.config;
    return w.each(i.mark, function (e, a) {
      var i = e.split("-");
      i[0] != t[0] && 0 != i[0] || i[1] != t[1] && 0 != i[1] || i[2] != t[2] || (n = a || t[2]);
    }), n && e.html('<span class="laydate-day-mark">' + n + "</span>"), a;
  }, T.prototype.limit = function (e, t, n, a) {
    var i,
        r = this,
        o = r.config,
        l = {},
        d = o[n > 41 ? "endDate" : "dateTime"],
        c = w.extend({}, d, t || {});
    return w.each({
      now: c,
      min: o.min,
      max: o.max
    }, function (e, t) {
      l[e] = r.newDate(w.extend({
        year: t.year,
        month: t.month,
        date: t.date
      }, function () {
        var e = {};
        return w.each(a, function (n, a) {
          e[a] = t[a];
        }), e;
      }())).getTime();
    }), i = l.now < l.min || l.now > l.max, e && e[i ? "addClass" : "removeClass"](s), i;
  }, T.prototype.calendar = function (e) {
    var t,
        a,
        i,
        r = this,
        s = r.config,
        l = e || s.dateTime,
        c = new Date(),
        m = r.lang(),
        u = "date" !== s.type && "datetime" !== s.type,
        h = e ? 1 : 0,
        y = w(r.table[h]).find("td"),
        f = w(r.elemHeader[h][2]).find("span");

    if (l.year < d[0] && (l.year = d[0], r.hint("最低只能支持到公元" + d[0] + "年")), l.year > d[1] && (l.year = d[1], r.hint("最高只能支持到公元" + d[1] + "年")), r.firstDate || (r.firstDate = w.extend({}, l)), c.setFullYear(l.year, l.month, 1), t = c.getDay(), a = n.getEndDate(l.month || 12, l.year), i = n.getEndDate(l.month + 1, l.year), w.each(y, function (e, n) {
      var d = [l.year, l.month],
          c = 0;
      n = w(n), n.removeAttr("class"), e < t ? (c = a - t + e, n.addClass("laydate-day-prev"), d = r.getAsYM(l.year, l.month, "sub")) : e >= t && e < i + t ? (c = e - t, s.range || c + 1 === l.date && n.addClass(o)) : (c = e - i - t, n.addClass("laydate-day-next"), d = r.getAsYM(l.year, l.month)), d[1]++, d[2] = c + 1, n.attr("lay-ymd", d.join("-")).html(d[2]), r.mark(n, d).limit(n, {
        year: d[0],
        month: d[1] - 1,
        date: d[2]
      }, e);
    }), w(f[0]).attr("lay-ym", l.year + "-" + (l.month + 1)), w(f[1]).attr("lay-ym", l.year + "-" + (l.month + 1)), "cn" === s.lang ? (w(f[0]).attr("lay-type", "year").html(l.year + "年"), w(f[1]).attr("lay-type", "month").html(l.month + 1 + "月")) : (w(f[0]).attr("lay-type", "month").html(m.month[l.month]), w(f[1]).attr("lay-type", "year").html(l.year)), u && (s.range && (e ? r.endDate = r.endDate || {
      year: l.year + ("year" === s.type ? 1 : 0),
      month: l.month + ("month" === s.type ? 0 : -1)
    } : r.startDate = r.startDate || {
      year: l.year,
      month: l.month
    }, e && (r.listYM = [[r.startDate.year, r.startDate.month + 1], [r.endDate.year, r.endDate.month + 1]], r.list(s.type, 0).list(s.type, 1), "time" === s.type ? r.setBtnStatus("时间", w.extend({}, r.systemDate(), r.startTime), w.extend({}, r.systemDate(), r.endTime)) : r.setBtnStatus(!0))), s.range || (r.listYM = [[l.year, l.month + 1]], r.list(s.type, 0))), s.range && !e) {
      var p = r.getAsYM(l.year, l.month);
      r.calendar(w.extend({}, l, {
        year: p[0],
        month: p[1]
      }));
    }

    return s.range || r.limit(w(r.footer).find(g), null, 0, ["hours", "minutes", "seconds"]), s.range && e && !u && r.stampRange(), r;
  }, T.prototype.list = function (e, t) {
    var n = this,
        a = n.config,
        i = a.dateTime,
        r = n.lang(),
        l = a.range && "date" !== a.type && "datetime" !== a.type,
        d = w.elem("ul", {
      "class": m + " " + {
        year: "laydate-year-list",
        month: "laydate-month-list",
        time: "laydate-time-list"
      }[e]
    }),
        c = n.elemHeader[t],
        u = w(c[2]).find("span"),
        h = n.elemCont[t || 0],
        y = w(h).find("." + m)[0],
        f = "cn" === a.lang,
        p = f ? "年" : "",
        T = n.listYM[t] || {},
        C = ["hours", "minutes", "seconds"],
        x = ["startTime", "endTime"][t];

    if (T[0] < 1 && (T[0] = 1), "year" === e) {
      var M,
          b = M = T[0] - 7;
      b < 1 && (b = M = 1), w.each(new Array(15), function (e) {
        var i = w.elem("li", {
          "lay-ym": M
        }),
            r = {
          year: M
        };
        M == T[0] && w(i).addClass(o), i.innerHTML = M + p, d.appendChild(i), M < n.firstDate.year ? (r.month = a.min.month, r.date = a.min.date) : M >= n.firstDate.year && (r.month = a.max.month, r.date = a.max.date), n.limit(w(i), r, t), M++;
      }), w(u[f ? 0 : 1]).attr("lay-ym", M - 8 + "-" + T[1]).html(b + p + " - " + (M - 1 + p));
    } else if ("month" === e) w.each(new Array(12), function (e) {
      var i = w.elem("li", {
        "lay-ym": e
      }),
          s = {
        year: T[0],
        month: e
      };
      e + 1 == T[1] && w(i).addClass(o), i.innerHTML = r.month[e] + (f ? "月" : ""), d.appendChild(i), T[0] < n.firstDate.year ? s.date = a.min.date : T[0] >= n.firstDate.year && (s.date = a.max.date), n.limit(w(i), s, t);
    }), w(u[f ? 0 : 1]).attr("lay-ym", T[0] + "-" + T[1]).html(T[0] + p);else if ("time" === e) {
      var E = function E() {
        w(d).find("ol").each(function (e, a) {
          w(a).find("li").each(function (a, i) {
            n.limit(w(i), [{
              hours: a
            }, {
              hours: n[x].hours,
              minutes: a
            }, {
              hours: n[x].hours,
              minutes: n[x].minutes,
              seconds: a
            }][e], t, [["hours"], ["hours", "minutes"], ["hours", "minutes", "seconds"]][e]);
          });
        }), a.range || n.limit(w(n.footer).find(g), n[x], 0, ["hours", "minutes", "seconds"]);
      };

      a.range ? n[x] || (n[x] = {
        hours: 0,
        minutes: 0,
        seconds: 0
      }) : n[x] = i, w.each([24, 60, 60], function (e, t) {
        var a = w.elem("li"),
            i = ["<p>" + r.time[e] + "</p><ol>"];
        w.each(new Array(t), function (t) {
          i.push("<li" + (n[x][C[e]] === t ? ' class="' + o + '"' : "") + ">" + w.digit(t, 2) + "</li>");
        }), a.innerHTML = i.join("") + "</ol>", d.appendChild(a);
      }), E();
    }

    if (y && h.removeChild(y), h.appendChild(d), "year" === e || "month" === e) w(n.elemMain[t]).addClass("laydate-ym-show"), w(d).find("li").on("click", function () {
      var r = 0 | w(this).attr("lay-ym");

      if (!w(this).hasClass(s)) {
        if (0 === t) i[e] = r, l && (n.startDate[e] = r), n.limit(w(n.footer).find(g), null, 0);else if (l) n.endDate[e] = r;else {
          var c = "year" === e ? n.getAsYM(r, T[1] - 1, "sub") : n.getAsYM(T[0], r, "sub");
          w.extend(i, {
            year: c[0],
            month: c[1]
          });
        }
        "year" === a.type || "month" === a.type ? (w(d).find("." + o).removeClass(o), w(this).addClass(o), "month" === a.type && "year" === e && (n.listYM[t][0] = r, l && (n[["startDate", "endDate"][t]].year = r), n.list("month", t))) : (n.checkDate("limit").calendar(), n.closeList()), n.setBtnStatus(), a.range || n.done(null, "change"), w(n.footer).find(D).removeClass(s);
      }
    });else {
      var S = w.elem("span", {
        "class": v
      }),
          k = function k() {
        w(d).find("ol").each(function (e) {
          var t = this,
              a = w(t).find("li");
          t.scrollTop = 30 * (n[x][C[e]] - 2), t.scrollTop <= 0 && a.each(function (e, n) {
            if (!w(this).hasClass(s)) return t.scrollTop = 30 * (e - 2), !0;
          });
        });
      },
          H = w(c[2]).find("." + v);

      k(), S.innerHTML = a.range ? [r.startTime, r.endTime][t] : r.timeTips, w(n.elemMain[t]).addClass("laydate-time-show"), H[0] && H.remove(), c[2].appendChild(S), w(d).find("ol").each(function (e) {
        var t = this;
        w(t).find("li").on("click", function () {
          var r = 0 | this.innerHTML;
          w(this).hasClass(s) || (a.range ? n[x][C[e]] = r : i[C[e]] = r, w(t).find("." + o).removeClass(o), w(this).addClass(o), E(), k(), (n.endDate || "time" === a.type) && n.done(null, "change"), n.setBtnStatus());
        });
      });
    }
    return n;
  }, T.prototype.listYM = [], T.prototype.closeList = function () {
    var e = this;
    e.config;
    w.each(e.elemCont, function (t, n) {
      w(this).find("." + m).remove(), w(e.elemMain[t]).removeClass("laydate-ym-show laydate-time-show");
    }), w(e.elem).find("." + v).remove();
  }, T.prototype.setBtnStatus = function (e, t, n) {
    var a,
        i = this,
        r = i.config,
        o = w(i.footer).find(g),
        d = r.range && "date" !== r.type && "time" !== r.type;
    d && (t = t || i.startDate, n = n || i.endDate, a = i.newDate(t).getTime() > i.newDate(n).getTime(), i.limit(null, t) || i.limit(null, n) ? o.addClass(s) : o[a ? "addClass" : "removeClass"](s), e && a && i.hint("string" == typeof e ? l.replace(/日期/g, e) : l));
  }, T.prototype.parse = function (e, t) {
    var n = this,
        a = n.config,
        i = t || (e ? w.extend({}, n.endDate, n.endTime) : a.range ? w.extend({}, n.startDate, n.startTime) : a.dateTime),
        r = n.format.concat();
    return w.each(r, function (e, t) {
      /yyyy|y/.test(t) ? r[e] = w.digit(i.year, t.length) : /MM|M/.test(t) ? r[e] = w.digit(i.month + 1, t.length) : /dd|d/.test(t) ? r[e] = w.digit(i.date, t.length) : /HH|H/.test(t) ? r[e] = w.digit(i.hours, t.length) : /mm|m/.test(t) ? r[e] = w.digit(i.minutes, t.length) : /ss|s/.test(t) && (r[e] = w.digit(i.seconds, t.length));
    }), a.range && !e ? r.join("") + " " + a.range + " " + n.parse(1) : r.join("");
  }, T.prototype.newDate = function (e) {
    return e = e || {}, new Date(e.year || 1, e.month || 0, e.date || 1, e.hours || 0, e.minutes || 0, e.seconds || 0);
  }, T.prototype.setValue = function (e) {
    var t = this,
        n = t.config,
        a = t.bindElem || n.elem[0],
        i = t.isInput(a) ? "val" : "html";
    return "static" === n.position || w(a)[i](e || ""), this;
  }, T.prototype.stampRange = function () {
    var e,
        t,
        n = this,
        a = n.config,
        i = w(n.elem).find("td");
    if (a.range && !n.endDate && w(n.footer).find(g).addClass(s), n.endDate) return e = n.newDate({
      year: n.startDate.year,
      month: n.startDate.month,
      date: n.startDate.date
    }).getTime(), t = n.newDate({
      year: n.endDate.year,
      month: n.endDate.month,
      date: n.endDate.date
    }).getTime(), e > t ? n.hint(l) : void w.each(i, function (a, i) {
      var r = w(i).attr("lay-ymd").split("-"),
          s = n.newDate({
        year: r[0],
        month: r[1] - 1,
        date: r[2]
      }).getTime();
      w(i).removeClass(u + " " + o), s !== e && s !== t || w(i).addClass(w(i).hasClass(y) || w(i).hasClass(f) ? u : o), s > e && s < t && w(i).addClass(u);
    });
  }, T.prototype.done = function (e, t) {
    var n = this,
        a = n.config,
        i = w.extend({}, n.startDate ? w.extend(n.startDate, n.startTime) : a.dateTime),
        r = w.extend({}, w.extend(n.endDate, n.endTime));
    return w.each([i, r], function (e, t) {
      "month" in t && w.extend(t, {
        month: t.month + 1
      });
    }), e = e || [n.parse(), i, r], "function" == typeof a[t || "done"] && a[t || "done"].apply(a, e), n;
  }, T.prototype.choose = function (e) {
    var t = this,
        n = t.config,
        a = n.dateTime,
        i = w(t.elem).find("td"),
        r = e.attr("lay-ymd").split("-"),
        l = function l(e) {
      new Date();
      e && w.extend(a, r), n.range && (t.startDate ? w.extend(t.startDate, r) : t.startDate = w.extend({}, r, t.startTime), t.startYMD = r);
    };

    if (r = {
      year: 0 | r[0],
      month: (0 | r[1]) - 1,
      date: 0 | r[2]
    }, !e.hasClass(s)) if (n.range) {
      if (w.each(["startTime", "endTime"], function (e, n) {
        t[n] = t[n] || {
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }), t.endState) l(), delete t.endState, delete t.endDate, t.startState = !0, i.removeClass(o + " " + u), e.addClass(o);else if (t.startState) {
        if (e.addClass(o), t.endDate ? w.extend(t.endDate, r) : t.endDate = w.extend({}, r, t.endTime), t.newDate(r).getTime() < t.newDate(t.startYMD).getTime()) {
          var d = w.extend({}, t.endDate, {
            hours: t.startDate.hours,
            minutes: t.startDate.minutes,
            seconds: t.startDate.seconds
          });
          w.extend(t.endDate, t.startDate, {
            hours: t.endDate.hours,
            minutes: t.endDate.minutes,
            seconds: t.endDate.seconds
          }), t.startDate = d;
        }

        n.showBottom || t.done(), t.stampRange(), t.endState = !0, t.done(null, "change");
      } else e.addClass(o), l(), t.startState = !0;
      w(t.footer).find(g)[t.endDate ? "removeClass" : "addClass"](s);
    } else "static" === n.position ? (l(!0), t.calendar().done().done(null, "change")) : "date" === n.type ? (l(!0), t.setValue(t.parse()).remove().done()) : "datetime" === n.type && (l(!0), t.calendar().done(null, "change"));
  }, T.prototype.tool = function (e, t) {
    var n = this,
        a = n.config,
        i = a.dateTime,
        r = "static" === a.position,
        o = {
      datetime: function datetime() {
        w(e).hasClass(s) || (n.list("time", 0), a.range && n.list("time", 1), w(e).attr("lay-type", "date").html(n.lang().dateTips));
      },
      date: function date() {
        n.closeList(), w(e).attr("lay-type", "datetime").html(n.lang().timeTips);
      },
      clear: function clear() {
        n.setValue("").remove(), r && (w.extend(i, n.firstDate), n.calendar()), a.range && (delete n.startState, delete n.endState, delete n.endDate, delete n.startTime, delete n.endTime), n.done(["", {}, {}]);
      },
      now: function now() {
        var e = new Date();
        w.extend(i, n.systemDate(), {
          hours: e.getHours(),
          minutes: e.getMinutes(),
          seconds: e.getSeconds()
        }), n.setValue(n.parse()).remove(), r && n.calendar(), n.done();
      },
      confirm: function confirm() {
        if (a.range) {
          if (!n.endDate) return n.hint("请先选择日期范围");
          if (w(e).hasClass(s)) return n.hint("time" === a.type ? l.replace(/日期/g, "时间") : l);
        } else if (w(e).hasClass(s)) return n.hint("不在有效日期或时间范围内");

        n.done(), n.setValue(n.parse()).remove();
      }
    };
    o[t] && o[t]();
  }, T.prototype.change = function (e) {
    var t = this,
        n = t.config,
        a = n.dateTime,
        i = n.range && ("year" === n.type || "month" === n.type),
        r = t.elemCont[e || 0],
        o = t.listYM[e],
        s = function s(_s) {
      var l = ["startDate", "endDate"][e],
          d = w(r).find(".laydate-year-list")[0],
          c = w(r).find(".laydate-month-list")[0];
      return d && (o[0] = _s ? o[0] - 15 : o[0] + 15, t.list("year", e)), c && (_s ? o[0]-- : o[0]++, t.list("month", e)), (d || c) && (w.extend(a, {
        year: o[0]
      }), i && (t[l].year = o[0]), n.range || t.done(null, "change"), t.setBtnStatus(), n.range || t.limit(w(t.footer).find(g), {
        year: o[0]
      })), d || c;
    };

    return {
      prevYear: function prevYear() {
        s("sub") || (a.year--, t.checkDate("limit").calendar(), n.range || t.done(null, "change"));
      },
      prevMonth: function prevMonth() {
        var e = t.getAsYM(a.year, a.month, "sub");
        w.extend(a, {
          year: e[0],
          month: e[1]
        }), t.checkDate("limit").calendar(), n.range || t.done(null, "change");
      },
      nextMonth: function nextMonth() {
        var e = t.getAsYM(a.year, a.month);
        w.extend(a, {
          year: e[0],
          month: e[1]
        }), t.checkDate("limit").calendar(), n.range || t.done(null, "change");
      },
      nextYear: function nextYear() {
        s() || (a.year++, t.checkDate("limit").calendar(), n.range || t.done(null, "change"));
      }
    };
  }, T.prototype.changeEvent = function () {
    var e = this;
    e.config;
    w(e.elem).on("click", function (e) {
      w.stope(e);
    }), w.each(e.elemHeader, function (t, n) {
      w(n[0]).on("click", function (n) {
        e.change(t).prevYear();
      }), w(n[1]).on("click", function (n) {
        e.change(t).prevMonth();
      }), w(n[2]).find("span").on("click", function (n) {
        var a = w(this),
            i = a.attr("lay-ym"),
            r = a.attr("lay-type");
        i && (i = i.split("-"), e.listYM[t] = [0 | i[0], 0 | i[1]], e.list(r, t), w(e.footer).find(D).addClass(s));
      }), w(n[3]).on("click", function (n) {
        e.change(t).nextMonth();
      }), w(n[4]).on("click", function (n) {
        e.change(t).nextYear();
      });
    }), w.each(e.table, function (t, n) {
      var a = w(n).find("td");
      a.on("click", function () {
        e.choose(w(this));
      });
    }), w(e.footer).find("span").on("click", function () {
      var t = w(this).attr("lay-type");
      e.tool(this, t);
    });
  }, T.prototype.isInput = function (e) {
    return /input|textarea/.test(e.tagName.toLocaleLowerCase());
  }, T.prototype.events = function () {
    var e = this,
        t = e.config,
        n = function n(_n, a) {
      _n.on(t.trigger, function () {
        a && (e.bindElem = this), e.render();
      });
    };

    t.elem[0] && !t.elem[0].eventHandler && (n(t.elem, "bind"), n(t.eventElem), w(document).on("click", function (n) {
      n.target !== t.elem[0] && n.target !== t.eventElem[0] && n.target !== w(t.closeStop)[0] && e.remove();
    }).on("keydown", function (t) {
      13 === t.keyCode && w("#" + e.elemID)[0] && e.elemID === T.thisElem && (t.preventDefault(), w(e.footer).find(g)[0].click());
    }), w(window).on("resize", function () {
      return !(!e.elem || !w(r)[0]) && void e.position();
    }), t.elem[0].eventHandler = !0);
  }, n.render = function (e) {
    var t = new T(e);
    return a.call(t);
  }, n.getEndDate = function (e, t) {
    var n = new Date();
    return n.setFullYear(t || n.getFullYear(), e || n.getMonth() + 1, 1), new Date(n.getTime() - 864e5).getDate();
  }, window.lay = window.lay || w, e ? (n.ready(), layui.define(function (e) {
    n.path = layui.cache.dir, e(i, n);
  })) :  true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return n;
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}();
!function (e, t) {
  "object" == ( false ? undefined : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : this, function (e, t) {
  function n(e) {
    var t = !!e && "length" in e && e.length,
        n = pe.type(e);
    return "function" !== n && !pe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }

  function r(e, t, n) {
    if (pe.isFunction(t)) return pe.grep(e, function (e, r) {
      return !!t.call(e, r, e) !== n;
    });
    if (t.nodeType) return pe.grep(e, function (e) {
      return e === t !== n;
    });

    if ("string" == typeof t) {
      if (Ce.test(t)) return pe.filter(t, e, n);
      t = pe.filter(t, e);
    }

    return pe.grep(e, function (e) {
      return pe.inArray(e, t) > -1 !== n;
    });
  }

  function i(e, t) {
    do {
      e = e[t];
    } while (e && 1 !== e.nodeType);

    return e;
  }

  function o(e) {
    var t = {};
    return pe.each(e.match(De) || [], function (e, n) {
      t[n] = !0;
    }), t;
  }

  function a() {
    re.addEventListener ? (re.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s)) : (re.detachEvent("onreadystatechange", s), e.detachEvent("onload", s));
  }

  function s() {
    (re.addEventListener || "load" === e.event.type || "complete" === re.readyState) && (a(), pe.ready());
  }

  function u(e, t, n) {
    if (void 0 === n && 1 === e.nodeType) {
      var r = "data-" + t.replace(_e, "-$1").toLowerCase();

      if (n = e.getAttribute(r), "string" == typeof n) {
        try {
          n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : qe.test(n) ? pe.parseJSON(n) : n);
        } catch (i) {}

        pe.data(e, t, n);
      } else n = void 0;
    }

    return n;
  }

  function l(e) {
    var t;

    for (t in e) {
      if (("data" !== t || !pe.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
    }

    return !0;
  }

  function c(e, t, n, r) {
    if (He(e)) {
      var i,
          o,
          a = pe.expando,
          s = e.nodeType,
          u = s ? pe.cache : e,
          l = s ? e[a] : e[a] && a;
      if (l && u[l] && (r || u[l].data) || void 0 !== n || "string" != typeof t) return l || (l = s ? e[a] = ne.pop() || pe.guid++ : a), u[l] || (u[l] = s ? {} : {
        toJSON: pe.noop
      }), "object" != _typeof(t) && "function" != typeof t || (r ? u[l] = pe.extend(u[l], t) : u[l].data = pe.extend(u[l].data, t)), o = u[l], r || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[pe.camelCase(t)] = n), "string" == typeof t ? (i = o[t], null == i && (i = o[pe.camelCase(t)])) : i = o, i;
    }
  }

  function f(e, t, n) {
    if (He(e)) {
      var r,
          i,
          o = e.nodeType,
          a = o ? pe.cache : e,
          s = o ? e[pe.expando] : pe.expando;

      if (a[s]) {
        if (t && (r = n ? a[s] : a[s].data)) {
          pe.isArray(t) ? t = t.concat(pe.map(t, pe.camelCase)) : t in r ? t = [t] : (t = pe.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;

          for (; i--;) {
            delete r[t[i]];
          }

          if (n ? !l(r) : !pe.isEmptyObject(r)) return;
        }

        (n || (delete a[s].data, l(a[s]))) && (o ? pe.cleanData([e], !0) : fe.deleteExpando || a != a.window ? delete a[s] : a[s] = void 0);
      }
    }
  }

  function d(e, t, n, r) {
    var i,
        o = 1,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return pe.css(e, t, "");
    },
        u = s(),
        l = n && n[3] || (pe.cssNumber[t] ? "" : "px"),
        c = (pe.cssNumber[t] || "px" !== l && +u) && Me.exec(pe.css(e, t));

    if (c && c[3] !== l) {
      l = l || c[3], n = n || [], c = +u || 1;

      do {
        o = o || ".5", c /= o, pe.style(e, t, c + l);
      } while (o !== (o = s() / u) && 1 !== o && --a);
    }

    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }

  function p(e) {
    var t = ze.split("|"),
        n = e.createDocumentFragment();
    if (n.createElement) for (; t.length;) {
      n.createElement(t.pop());
    }
    return n;
  }

  function h(e, t) {
    var n,
        r,
        i = 0,
        o = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
    if (!o) for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) {
      !t || pe.nodeName(r, t) ? o.push(r) : pe.merge(o, h(r, t));
    }
    return void 0 === t || t && pe.nodeName(e, t) ? pe.merge([e], o) : o;
  }

  function g(e, t) {
    for (var n, r = 0; null != (n = e[r]); r++) {
      pe._data(n, "globalEval", !t || pe._data(t[r], "globalEval"));
    }
  }

  function m(e) {
    Be.test(e.type) && (e.defaultChecked = e.checked);
  }

  function y(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f, d = e.length, y = p(t), v = [], x = 0; x < d; x++) {
      if (a = e[x], a || 0 === a) if ("object" === pe.type(a)) pe.merge(v, a.nodeType ? [a] : a);else if (Ue.test(a)) {
        for (u = u || y.appendChild(t.createElement("div")), l = (We.exec(a) || ["", ""])[1].toLowerCase(), f = Xe[l] || Xe._default, u.innerHTML = f[1] + pe.htmlPrefilter(a) + f[2], o = f[0]; o--;) {
          u = u.lastChild;
        }

        if (!fe.leadingWhitespace && $e.test(a) && v.push(t.createTextNode($e.exec(a)[0])), !fe.tbody) for (a = "table" !== l || Ve.test(a) ? "<table>" !== f[1] || Ve.test(a) ? 0 : u : u.firstChild, o = a && a.childNodes.length; o--;) {
          pe.nodeName(c = a.childNodes[o], "tbody") && !c.childNodes.length && a.removeChild(c);
        }

        for (pe.merge(v, u.childNodes), u.textContent = ""; u.firstChild;) {
          u.removeChild(u.firstChild);
        }

        u = y.lastChild;
      } else v.push(t.createTextNode(a));
    }

    for (u && y.removeChild(u), fe.appendChecked || pe.grep(h(v, "input"), m), x = 0; a = v[x++];) {
      if (r && pe.inArray(a, r) > -1) i && i.push(a);else if (s = pe.contains(a.ownerDocument, a), u = h(y.appendChild(a), "script"), s && g(u), n) for (o = 0; a = u[o++];) {
        Ie.test(a.type || "") && n.push(a);
      }
    }

    return u = null, y;
  }

  function v() {
    return !0;
  }

  function x() {
    return !1;
  }

  function b() {
    try {
      return re.activeElement;
    } catch (e) {}
  }

  function w(e, t, n, r, i, o) {
    var a, s;

    if ("object" == _typeof(t)) {
      "string" != typeof n && (r = r || n, n = void 0);

      for (s in t) {
        w(e, s, n, r, t[s], o);
      }

      return e;
    }

    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1) i = x;else if (!i) return e;
    return 1 === o && (a = i, i = function i(e) {
      return pe().off(e), a.apply(this, arguments);
    }, i.guid = a.guid || (a.guid = pe.guid++)), e.each(function () {
      pe.event.add(this, t, i, r, n);
    });
  }

  function T(e, t) {
    return pe.nodeName(e, "table") && pe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
  }

  function C(e) {
    return e.type = (null !== pe.find.attr(e, "type")) + "/" + e.type, e;
  }

  function E(e) {
    var t = it.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute("type"), e;
  }

  function N(e, t) {
    if (1 === t.nodeType && pe.hasData(e)) {
      var n,
          r,
          i,
          o = pe._data(e),
          a = pe._data(t, o),
          s = o.events;

      if (s) {
        delete a.handle, a.events = {};

        for (n in s) {
          for (r = 0, i = s[n].length; r < i; r++) {
            pe.event.add(t, n, s[n][r]);
          }
        }
      }

      a.data && (a.data = pe.extend({}, a.data));
    }
  }

  function k(e, t) {
    var n, r, i;

    if (1 === t.nodeType) {
      if (n = t.nodeName.toLowerCase(), !fe.noCloneEvent && t[pe.expando]) {
        i = pe._data(t);

        for (r in i.events) {
          pe.removeEvent(t, r, i.handle);
        }

        t.removeAttribute(pe.expando);
      }

      "script" === n && t.text !== e.text ? (C(t).text = e.text, E(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), fe.html5Clone && e.innerHTML && !pe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Be.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
    }
  }

  function S(e, t, n, r) {
    t = oe.apply([], t);
    var i,
        o,
        a,
        s,
        u,
        l,
        c = 0,
        f = e.length,
        d = f - 1,
        p = t[0],
        g = pe.isFunction(p);
    if (g || f > 1 && "string" == typeof p && !fe.checkClone && rt.test(p)) return e.each(function (i) {
      var o = e.eq(i);
      g && (t[0] = p.call(this, i, o.html())), S(o, t, n, r);
    });

    if (f && (l = y(t, e[0].ownerDocument, !1, e, r), i = l.firstChild, 1 === l.childNodes.length && (l = i), i || r)) {
      for (s = pe.map(h(l, "script"), C), a = s.length; c < f; c++) {
        o = l, c !== d && (o = pe.clone(o, !0, !0), a && pe.merge(s, h(o, "script"))), n.call(e[c], o, c);
      }

      if (a) for (u = s[s.length - 1].ownerDocument, pe.map(s, E), c = 0; c < a; c++) {
        o = s[c], Ie.test(o.type || "") && !pe._data(o, "globalEval") && pe.contains(u, o) && (o.src ? pe._evalUrl && pe._evalUrl(o.src) : pe.globalEval((o.text || o.textContent || o.innerHTML || "").replace(ot, "")));
      }
      l = i = null;
    }

    return e;
  }

  function A(e, t, n) {
    for (var r, i = t ? pe.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
      n || 1 !== r.nodeType || pe.cleanData(h(r)), r.parentNode && (n && pe.contains(r.ownerDocument, r) && g(h(r, "script")), r.parentNode.removeChild(r));
    }

    return e;
  }

  function D(e, t) {
    var n = pe(t.createElement(e)).appendTo(t.body),
        r = pe.css(n[0], "display");
    return n.detach(), r;
  }

  function j(e) {
    var t = re,
        n = lt[e];
    return n || (n = D(e, t), "none" !== n && n || (ut = (ut || pe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (ut[0].contentWindow || ut[0].contentDocument).document, t.write(), t.close(), n = D(e, t), ut.detach()), lt[e] = n), n;
  }

  function L(e, t) {
    return {
      get: function get() {
        return e() ? void delete this.get : (this.get = t).apply(this, arguments);
      }
    };
  }

  function H(e) {
    if (e in Et) return e;

    for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = Ct.length; n--;) {
      if (e = Ct[n] + t, e in Et) return e;
    }
  }

  function q(e, t) {
    for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++) {
      r = e[a], r.style && (o[a] = pe._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Re(r) && (o[a] = pe._data(r, "olddisplay", j(r.nodeName)))) : (i = Re(r), (n && "none" !== n || !i) && pe._data(r, "olddisplay", i ? n : pe.css(r, "display"))));
    }

    for (a = 0; a < s; a++) {
      r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
    }

    return e;
  }

  function _(e, t, n) {
    var r = bt.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
  }

  function F(e, t, n, r, i) {
    for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) {
      "margin" === n && (a += pe.css(e, n + Oe[o], !0, i)), r ? ("content" === n && (a -= pe.css(e, "padding" + Oe[o], !0, i)), "margin" !== n && (a -= pe.css(e, "border" + Oe[o] + "Width", !0, i))) : (a += pe.css(e, "padding" + Oe[o], !0, i), "padding" !== n && (a += pe.css(e, "border" + Oe[o] + "Width", !0, i)));
    }

    return a;
  }

  function M(t, n, r) {
    var i = !0,
        o = "width" === n ? t.offsetWidth : t.offsetHeight,
        a = ht(t),
        s = fe.boxSizing && "border-box" === pe.css(t, "boxSizing", !1, a);

    if (re.msFullscreenElement && e.top !== e && t.getClientRects().length && (o = Math.round(100 * t.getBoundingClientRect()[n])), o <= 0 || null == o) {
      if (o = gt(t, n, a), (o < 0 || null == o) && (o = t.style[n]), ft.test(o)) return o;
      i = s && (fe.boxSizingReliable() || o === t.style[n]), o = parseFloat(o) || 0;
    }

    return o + F(t, n, r || (s ? "border" : "content"), i, a) + "px";
  }

  function O(e, t, n, r, i) {
    return new O.prototype.init(e, t, n, r, i);
  }

  function R() {
    return e.setTimeout(function () {
      Nt = void 0;
    }), Nt = pe.now();
  }

  function P(e, t) {
    var n,
        r = {
      height: e
    },
        i = 0;

    for (t = t ? 1 : 0; i < 4; i += 2 - t) {
      n = Oe[i], r["margin" + n] = r["padding" + n] = e;
    }

    return t && (r.opacity = r.width = e), r;
  }

  function B(e, t, n) {
    for (var r, i = ($.tweeners[t] || []).concat($.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }

  function W(e, t, n) {
    var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = this,
        d = {},
        p = e.style,
        h = e.nodeType && Re(e),
        g = pe._data(e, "fxshow");

    n.queue || (s = pe._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function () {
      s.unqueued || u();
    }), s.unqueued++, f.always(function () {
      f.always(function () {
        s.unqueued--, pe.queue(e, "fx").length || s.empty.fire();
      });
    })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = pe.css(e, "display"), c = "none" === l ? pe._data(e, "olddisplay") || j(e.nodeName) : l, "inline" === c && "none" === pe.css(e, "float") && (fe.inlineBlockNeedsLayout && "inline" !== j(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", fe.shrinkWrapBlocks() || f.always(function () {
      p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
    }));

    for (r in t) {
      if (i = t[r], St.exec(i)) {
        if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
          if ("show" !== i || !g || void 0 === g[r]) continue;
          h = !0;
        }

        d[r] = g && g[r] || pe.style(e, r);
      } else l = void 0;
    }

    if (pe.isEmptyObject(d)) "inline" === ("none" === l ? j(e.nodeName) : l) && (p.display = l);else {
      g ? "hidden" in g && (h = g.hidden) : g = pe._data(e, "fxshow", {}), o && (g.hidden = !h), h ? pe(e).show() : f.done(function () {
        pe(e).hide();
      }), f.done(function () {
        var t;

        pe._removeData(e, "fxshow");

        for (t in d) {
          pe.style(e, t, d[t]);
        }
      });

      for (r in d) {
        a = B(h ? g[r] : 0, r, f), r in g || (g[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0));
      }
    }
  }

  function I(e, t) {
    var n, r, i, o, a;

    for (n in e) {
      if (r = pe.camelCase(n), i = t[r], o = e[n], pe.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = pe.cssHooks[r], a && "expand" in a) {
        o = a.expand(o), delete e[r];

        for (n in o) {
          n in e || (e[n] = o[n], t[n] = i);
        }
      } else t[r] = i;
    }
  }

  function $(e, t, n) {
    var r,
        i,
        o = 0,
        a = $.prefilters.length,
        s = pe.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (i) return !1;

      for (var t = Nt || R(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; a < u; a++) {
        l.tweens[a].run(o);
      }

      return s.notifyWith(e, [l, o, n]), o < 1 && u ? n : (s.resolveWith(e, [l]), !1);
    },
        l = s.promise({
      elem: e,
      props: pe.extend({}, t),
      opts: pe.extend(!0, {
        specialEasing: {},
        easing: pe.easing._default
      }, n),
      originalProperties: t,
      originalOptions: n,
      startTime: Nt || R(),
      duration: n.duration,
      tweens: [],
      createTween: function createTween(t, n) {
        var r = pe.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
        return l.tweens.push(r), r;
      },
      stop: function stop(t) {
        var n = 0,
            r = t ? l.tweens.length : 0;
        if (i) return this;

        for (i = !0; n < r; n++) {
          l.tweens[n].run(1);
        }

        return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
      }
    }),
        c = l.props;

    for (I(c, l.opts.specialEasing); o < a; o++) {
      if (r = $.prefilters[o].call(l, e, c, l.opts)) return pe.isFunction(r.stop) && (pe._queueHooks(l.elem, l.opts.queue).stop = pe.proxy(r.stop, r)), r;
    }

    return pe.map(c, B, l), pe.isFunction(l.opts.start) && l.opts.start.call(e, l), pe.fx.timer(pe.extend(u, {
      elem: e,
      anim: l,
      queue: l.opts.queue
    })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always);
  }

  function z(e) {
    return pe.attr(e, "class") || "";
  }

  function X(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");
      var r,
          i = 0,
          o = t.toLowerCase().match(De) || [];
      if (pe.isFunction(n)) for (; r = o[i++];) {
        "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
      }
    };
  }

  function U(e, t, n, r) {
    function i(s) {
      var u;
      return o[s] = !0, pe.each(e[s] || [], function (e, s) {
        var l = s(t, n, r);
        return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1);
      }), u;
    }

    var o = {},
        a = e === Qt;
    return i(t.dataTypes[0]) || !o["*"] && i("*");
  }

  function V(e, t) {
    var n,
        r,
        i = pe.ajaxSettings.flatOptions || {};

    for (r in t) {
      void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
    }

    return n && pe.extend(!0, e, n), e;
  }

  function Y(e, t, n) {
    for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0];) {
      u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
    }

    if (i) for (a in s) {
      if (s[a] && s[a].test(i)) {
        u.unshift(a);
        break;
      }
    }
    if (u[0] in n) o = u[0];else {
      for (a in n) {
        if (!u[0] || e.converters[a + " " + u[0]]) {
          o = a;
          break;
        }

        r || (r = a);
      }

      o = o || r;
    }
    if (o) return o !== u[0] && u.unshift(o), n[o];
  }

  function J(e, t, n, r) {
    var i,
        o,
        a,
        s,
        u,
        l = {},
        c = e.dataTypes.slice();
    if (c[1]) for (a in e.converters) {
      l[a.toLowerCase()] = e.converters[a];
    }

    for (o = c.shift(); o;) {
      if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
        if (a = l[u + " " + o] || l["* " + o], !a) for (i in l) {
          if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
            a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1]));
            break;
          }
        }
        if (a !== !0) if (a && e["throws"]) t = a(t);else try {
          t = a(t);
        } catch (f) {
          return {
            state: "parsererror",
            error: a ? f : "No conversion from " + u + " to " + o
          };
        }
      }
    }

    return {
      state: "success",
      data: t
    };
  }

  function G(e) {
    return e.style && e.style.display || pe.css(e, "display");
  }

  function K(e) {
    for (; e && 1 === e.nodeType;) {
      if ("none" === G(e) || "hidden" === e.type) return !0;
      e = e.parentNode;
    }

    return !1;
  }

  function Q(e, t, n, r) {
    var i;
    if (pe.isArray(t)) pe.each(t, function (t, i) {
      n || rn.test(e) ? r(e, i) : Q(e + "[" + ("object" == _typeof(i) && null != i ? t : "") + "]", i, n, r);
    });else if (n || "object" !== pe.type(t)) r(e, t);else for (i in t) {
      Q(e + "[" + i + "]", t[i], n, r);
    }
  }

  function Z() {
    try {
      return new e.XMLHttpRequest();
    } catch (t) {}
  }

  function ee() {
    try {
      return new e.ActiveXObject("Microsoft.XMLHTTP");
    } catch (t) {}
  }

  function te(e) {
    return pe.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow);
  }

  var ne = [],
      re = e.document,
      ie = ne.slice,
      oe = ne.concat,
      ae = ne.push,
      se = ne.indexOf,
      ue = {},
      le = ue.toString,
      ce = ue.hasOwnProperty,
      fe = {},
      de = "1.12.3",
      pe = function pe(e, t) {
    return new pe.fn.init(e, t);
  },
      he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      ge = /^-ms-/,
      me = /-([\da-z])/gi,
      ye = function ye(e, t) {
    return t.toUpperCase();
  };

  pe.fn = pe.prototype = {
    jquery: de,
    constructor: pe,
    selector: "",
    length: 0,
    toArray: function toArray() {
      return ie.call(this);
    },
    get: function get(e) {
      return null != e ? e < 0 ? this[e + this.length] : this[e] : ie.call(this);
    },
    pushStack: function pushStack(e) {
      var t = pe.merge(this.constructor(), e);
      return t.prevObject = this, t.context = this.context, t;
    },
    each: function each(e) {
      return pe.each(this, e);
    },
    map: function map(e) {
      return this.pushStack(pe.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    },
    slice: function slice() {
      return this.pushStack(ie.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);
      return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: ae,
    sort: ne.sort,
    splice: ne.splice
  }, pe.extend = pe.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;

    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == _typeof(a) || pe.isFunction(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
      if (null != (i = arguments[s])) for (r in i) {
        e = a[r], n = i[r], a !== n && (l && n && (pe.isPlainObject(n) || (t = pe.isArray(n))) ? (t ? (t = !1, o = e && pe.isArray(e) ? e : []) : o = e && pe.isPlainObject(e) ? e : {}, a[r] = pe.extend(l, o, n)) : void 0 !== n && (a[r] = n));
      }
    }

    return a;
  }, pe.extend({
    expando: "jQuery" + (de + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(e) {
      throw new Error(e);
    },
    noop: function noop() {},
    isFunction: function isFunction(e) {
      return "function" === pe.type(e);
    },
    isArray: Array.isArray || function (e) {
      return "array" === pe.type(e);
    },
    isWindow: function isWindow(e) {
      return null != e && e == e.window;
    },
    isNumeric: function isNumeric(e) {
      var t = e && e.toString();
      return !pe.isArray(e) && t - parseFloat(t) + 1 >= 0;
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;

      for (t in e) {
        return !1;
      }

      return !0;
    },
    isPlainObject: function isPlainObject(e) {
      var t;
      if (!e || "object" !== pe.type(e) || e.nodeType || pe.isWindow(e)) return !1;

      try {
        if (e.constructor && !ce.call(e, "constructor") && !ce.call(e.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (n) {
        return !1;
      }

      if (!fe.ownFirst) for (t in e) {
        return ce.call(e, t);
      }

      for (t in e) {
        ;
      }

      return void 0 === t || ce.call(e, t);
    },
    type: function type(e) {
      return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? ue[le.call(e)] || "object" : _typeof(e);
    },
    globalEval: function globalEval(t) {
      t && pe.trim(t) && (e.execScript || function (t) {
        e.eval.call(e, t);
      })(t);
    },
    camelCase: function camelCase(e) {
      return e.replace(ge, "ms-").replace(me, ye);
    },
    nodeName: function nodeName(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    },
    each: function each(e, t) {
      var r,
          i = 0;
      if (n(e)) for (r = e.length; i < r && t.call(e[i], i, e[i]) !== !1; i++) {
        ;
      } else for (i in e) {
        if (t.call(e[i], i, e[i]) === !1) break;
      }
      return e;
    },
    trim: function trim(e) {
      return null == e ? "" : (e + "").replace(he, "");
    },
    makeArray: function makeArray(e, t) {
      var r = t || [];
      return null != e && (n(Object(e)) ? pe.merge(r, "string" == typeof e ? [e] : e) : ae.call(r, e)), r;
    },
    inArray: function inArray(e, t, n) {
      var r;

      if (t) {
        if (se) return se.call(t, e, n);

        for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++) {
          if (n in t && t[n] === e) return n;
        }
      }

      return -1;
    },
    merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n;) {
        e[i++] = t[r++];
      }

      if (n !== n) for (; void 0 !== t[r];) {
        e[i++] = t[r++];
      }
      return e.length = i, e;
    },
    grep: function grep(e, t, n) {
      for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) {
        r = !t(e[o], o), r !== s && i.push(e[o]);
      }

      return i;
    },
    map: function map(e, t, r) {
      var i,
          o,
          a = 0,
          s = [];
      if (n(e)) for (i = e.length; a < i; a++) {
        o = t(e[a], a, r), null != o && s.push(o);
      } else for (a in e) {
        o = t(e[a], a, r), null != o && s.push(o);
      }
      return oe.apply([], s);
    },
    guid: 1,
    proxy: function proxy(e, t) {
      var n, r, i;
      if ("string" == typeof t && (i = e[t], t = e, e = i), pe.isFunction(e)) return n = ie.call(arguments, 2), r = function r() {
        return e.apply(t || this, n.concat(ie.call(arguments)));
      }, r.guid = e.guid = e.guid || pe.guid++, r;
    },
    now: function now() {
      return +new Date();
    },
    support: fe
  }), "function" == typeof Symbol && (pe.fn[Symbol.iterator] = ne[Symbol.iterator]), pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    ue["[object " + t + "]"] = t.toLowerCase();
  });

  var ve = function (e) {
    function t(e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          f,
          p,
          h = t && t.ownerDocument,
          g = t ? t.nodeType : 9;
      if (n = n || [], "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g) return n;

      if (!r && ((t ? t.ownerDocument || t : B) !== H && L(t), t = t || H, _)) {
        if (11 !== g && (l = ye.exec(e))) if (i = l[1]) {
          if (9 === g) {
            if (!(a = t.getElementById(i))) return n;
            if (a.id === i) return n.push(a), n;
          } else if (h && (a = h.getElementById(i)) && R(t, a) && a.id === i) return n.push(a), n;
        } else {
          if (l[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
          if ((i = l[3]) && w.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(i)), n;
        }

        if (w.qsa && !X[e + " "] && (!F || !F.test(e))) {
          if (1 !== g) h = t, p = e;else if ("object" !== t.nodeName.toLowerCase()) {
            for ((s = t.getAttribute("id")) ? s = s.replace(xe, "\\$&") : t.setAttribute("id", s = P), f = N(e), o = f.length, u = de.test(s) ? "#" + s : "[id='" + s + "']"; o--;) {
              f[o] = u + " " + d(f[o]);
            }

            p = f.join(","), h = ve.test(e) && c(t.parentNode) || t;
          }
          if (p) try {
            return Q.apply(n, h.querySelectorAll(p)), n;
          } catch (m) {} finally {
            s === P && t.removeAttribute("id");
          }
        }
      }

      return S(e.replace(se, "$1"), t, n, r);
    }

    function n() {
      function e(n, r) {
        return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r;
      }

      var t = [];
      return e;
    }

    function r(e) {
      return e[P] = !0, e;
    }

    function i(e) {
      var t = H.createElement("div");

      try {
        return !!e(t);
      } catch (n) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }

    function o(e, t) {
      for (var n = e.split("|"), r = n.length; r--;) {
        T.attrHandle[n[r]] = t;
      }
    }

    function a(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
      if (r) return r;
      if (n) for (; n = n.nextSibling;) {
        if (n === t) return -1;
      }
      return e ? 1 : -1;
    }

    function s(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return "input" === n && t.type === e;
      };
    }

    function u(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }

    function l(e) {
      return r(function (t) {
        return t = +t, r(function (n, r) {
          for (var i, o = e([], n.length, t), a = o.length; a--;) {
            n[i = o[a]] && (n[i] = !(r[i] = n[i]));
          }
        });
      });
    }

    function c(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }

    function f() {}

    function d(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) {
        r += e[t].value;
      }

      return r;
    }

    function p(e, t, n) {
      var r = t.dir,
          i = n && "parentNode" === r,
          o = I++;
      return t.first ? function (t, n, o) {
        for (; t = t[r];) {
          if (1 === t.nodeType || i) return e(t, n, o);
        }
      } : function (t, n, a) {
        var s,
            u,
            l,
            c = [W, o];

        if (a) {
          for (; t = t[r];) {
            if ((1 === t.nodeType || i) && e(t, n, a)) return !0;
          }
        } else for (; t = t[r];) {
          if (1 === t.nodeType || i) {
            if (l = t[P] || (t[P] = {}), u = l[t.uniqueID] || (l[t.uniqueID] = {}), (s = u[r]) && s[0] === W && s[1] === o) return c[2] = s[2];
            if (u[r] = c, c[2] = e(t, n, a)) return !0;
          }
        }
      };
    }

    function h(e) {
      return e.length > 1 ? function (t, n, r) {
        for (var i = e.length; i--;) {
          if (!e[i](t, n, r)) return !1;
        }

        return !0;
      } : e[0];
    }

    function g(e, n, r) {
      for (var i = 0, o = n.length; i < o; i++) {
        t(e, n[i], r);
      }

      return r;
    }

    function m(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
        (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      }

      return a;
    }

    function y(e, t, n, i, o, a) {
      return i && !i[P] && (i = y(i)), o && !o[P] && (o = y(o, a)), r(function (r, a, s, u) {
        var l,
            c,
            f,
            d = [],
            p = [],
            h = a.length,
            y = r || g(t || "*", s.nodeType ? [s] : s, []),
            v = !e || !r && t ? y : m(y, d, e, s, u),
            x = n ? o || (r ? e : h || i) ? [] : a : v;
        if (n && n(v, x, s, u), i) for (l = m(x, p), i(l, [], s, u), c = l.length; c--;) {
          (f = l[c]) && (x[p[c]] = !(v[p[c]] = f));
        }

        if (r) {
          if (o || e) {
            if (o) {
              for (l = [], c = x.length; c--;) {
                (f = x[c]) && l.push(v[c] = f);
              }

              o(null, x = [], l, u);
            }

            for (c = x.length; c--;) {
              (f = x[c]) && (l = o ? ee(r, f) : d[c]) > -1 && (r[l] = !(a[l] = f));
            }
          }
        } else x = m(x === a ? x.splice(h, x.length) : x), o ? o(null, a, x, u) : Q.apply(a, x);
      });
    }

    function v(e) {
      for (var t, n, r, i = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, u = p(function (e) {
        return e === t;
      }, a, !0), l = p(function (e) {
        return ee(t, e) > -1;
      }, a, !0), c = [function (e, n, r) {
        var i = !o && (r || n !== A) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
        return t = null, i;
      }]; s < i; s++) {
        if (n = T.relative[e[s].type]) c = [p(h(c), n)];else {
          if (n = T.filter[e[s].type].apply(null, e[s].matches), n[P]) {
            for (r = ++s; r < i && !T.relative[e[r].type]; r++) {
              ;
            }

            return y(s > 1 && h(c), s > 1 && d(e.slice(0, s - 1).concat({
              value: " " === e[s - 2].type ? "*" : ""
            })).replace(se, "$1"), n, s < r && v(e.slice(s, r)), r < i && v(e = e.slice(r)), r < i && d(e));
          }

          c.push(n);
        }
      }

      return h(c);
    }

    function x(e, n) {
      var i = n.length > 0,
          o = e.length > 0,
          a = function a(r, _a, s, u, l) {
        var c,
            f,
            d,
            p = 0,
            h = "0",
            g = r && [],
            y = [],
            v = A,
            x = r || o && T.find.TAG("*", l),
            b = W += null == v ? 1 : Math.random() || .1,
            w = x.length;

        for (l && (A = _a === H || _a || l); h !== w && null != (c = x[h]); h++) {
          if (o && c) {
            for (f = 0, _a || c.ownerDocument === H || (L(c), s = !_); d = e[f++];) {
              if (d(c, _a || H, s)) {
                u.push(c);
                break;
              }
            }

            l && (W = b);
          }

          i && ((c = !d && c) && p--, r && g.push(c));
        }

        if (p += h, i && h !== p) {
          for (f = 0; d = n[f++];) {
            d(g, y, _a, s);
          }

          if (r) {
            if (p > 0) for (; h--;) {
              g[h] || y[h] || (y[h] = G.call(u));
            }
            y = m(y);
          }

          Q.apply(u, y), l && !r && y.length > 0 && p + n.length > 1 && t.uniqueSort(u);
        }

        return l && (W = b, A = v), g;
      };

      return i ? r(a) : a;
    }

    var b,
        w,
        T,
        C,
        E,
        N,
        k,
        S,
        A,
        D,
        j,
        L,
        H,
        q,
        _,
        F,
        M,
        O,
        R,
        P = "sizzle" + 1 * new Date(),
        B = e.document,
        W = 0,
        I = 0,
        $ = n(),
        z = n(),
        X = n(),
        U = function U(e, t) {
      return e === t && (j = !0), 0;
    },
        V = 1 << 31,
        Y = {}.hasOwnProperty,
        J = [],
        G = J.pop,
        K = J.push,
        Q = J.push,
        Z = J.slice,
        ee = function ee(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        if (e[n] === t) return n;
      }

      return -1;
    },
        te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ne = "[\\x20\\t\\r\\n\\f]",
        re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
        oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
        ae = new RegExp(ne + "+", "g"),
        se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
        ue = new RegExp("^" + ne + "*," + ne + "*"),
        le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
        ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
        fe = new RegExp(oe),
        de = new RegExp("^" + re + "$"),
        pe = {
      ID: new RegExp("^#(" + re + ")"),
      CLASS: new RegExp("^\\.(" + re + ")"),
      TAG: new RegExp("^(" + re + "|[*])"),
      ATTR: new RegExp("^" + ie),
      PSEUDO: new RegExp("^" + oe),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + te + ")$", "i"),
      needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
    },
        he = /^(?:input|select|textarea|button)$/i,
        ge = /^h\d$/i,
        me = /^[^{]+\{\s*\[native \w/,
        ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ve = /[+~]/,
        xe = /'|\\/g,
        be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
        we = function we(e, t, n) {
      var r = "0x" + t - 65536;
      return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
    },
        Te = function Te() {
      L();
    };

    try {
      Q.apply(J = Z.call(B.childNodes), B.childNodes), J[B.childNodes.length].nodeType;
    } catch (Ce) {
      Q = {
        apply: J.length ? function (e, t) {
          K.apply(e, Z.call(t));
        } : function (e, t) {
          for (var n = e.length, r = 0; e[n++] = t[r++];) {
            ;
          }

          e.length = n - 1;
        }
      };
    }

    w = t.support = {}, E = t.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && "HTML" !== t.nodeName;
    }, L = t.setDocument = function (e) {
      var t,
          n,
          r = e ? e.ownerDocument || e : B;
      return r !== H && 9 === r.nodeType && r.documentElement ? (H = r, q = H.documentElement, _ = !E(H), (n = H.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), w.attributes = i(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), w.getElementsByTagName = i(function (e) {
        return e.appendChild(H.createComment("")), !e.getElementsByTagName("*").length;
      }), w.getElementsByClassName = me.test(H.getElementsByClassName), w.getById = i(function (e) {
        return q.appendChild(e).id = P, !H.getElementsByName || !H.getElementsByName(P).length;
      }), w.getById ? (T.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && _) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }, T.filter.ID = function (e) {
        var t = e.replace(be, we);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }) : (delete T.find.ID, T.filter.ID = function (e) {
        var t = e.replace(be, we);
        return function (e) {
          var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return n && n.value === t;
        };
      }), T.find.TAG = w.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);

        if ("*" === e) {
          for (; n = o[i++];) {
            1 === n.nodeType && r.push(n);
          }

          return r;
        }

        return o;
      }, T.find.CLASS = w.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && _) return t.getElementsByClassName(e);
      }, M = [], F = [], (w.qsa = me.test(H.querySelectorAll)) && (i(function (e) {
        q.appendChild(e).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + P + "-]").length || F.push("~="), e.querySelectorAll(":checked").length || F.push(":checked"), e.querySelectorAll("a#" + P + "+*").length || F.push(".#.+[+~]");
      }), i(function (e) {
        var t = H.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:");
      })), (w.matchesSelector = me.test(O = q.matches || q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && i(function (e) {
        w.disconnectedMatch = O.call(e, "div"), O.call(e, "[s!='']:x"), M.push("!=", oe);
      }), F = F.length && new RegExp(F.join("|")), M = M.length && new RegExp(M.join("|")), t = me.test(q.compareDocumentPosition), R = t || me.test(q.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) for (; t = t.parentNode;) {
          if (t === e) return !0;
        }
        return !1;
      }, U = t ? function (e, t) {
        if (e === t) return j = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === H || e.ownerDocument === B && R(B, e) ? -1 : t === H || t.ownerDocument === B && R(B, t) ? 1 : D ? ee(D, e) - ee(D, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t) return j = !0, 0;
        var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            s = [e],
            u = [t];
        if (!i || !o) return e === H ? -1 : t === H ? 1 : i ? -1 : o ? 1 : D ? ee(D, e) - ee(D, t) : 0;
        if (i === o) return a(e, t);

        for (n = e; n = n.parentNode;) {
          s.unshift(n);
        }

        for (n = t; n = n.parentNode;) {
          u.unshift(n);
        }

        for (; s[r] === u[r];) {
          r++;
        }

        return r ? a(s[r], u[r]) : s[r] === B ? -1 : u[r] === B ? 1 : 0;
      }, H) : H;
    }, t.matches = function (e, n) {
      return t(e, null, null, n);
    }, t.matchesSelector = function (e, n) {
      if ((e.ownerDocument || e) !== H && L(e), n = n.replace(ce, "='$1']"), w.matchesSelector && _ && !X[n + " "] && (!M || !M.test(n)) && (!F || !F.test(n))) try {
        var r = O.call(e, n);
        if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
      } catch (i) {}
      return t(n, H, null, [e]).length > 0;
    }, t.contains = function (e, t) {
      return (e.ownerDocument || e) !== H && L(e), R(e, t);
    }, t.attr = function (e, t) {
      (e.ownerDocument || e) !== H && L(e);
      var n = T.attrHandle[t.toLowerCase()],
          r = n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !_) : void 0;
      return void 0 !== r ? r : w.attributes || !_ ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }, t.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, t.uniqueSort = function (e) {
      var t,
          n = [],
          r = 0,
          i = 0;

      if (j = !w.detectDuplicates, D = !w.sortStable && e.slice(0), e.sort(U), j) {
        for (; t = e[i++];) {
          t === e[i] && (r = n.push(i));
        }

        for (; r--;) {
          e.splice(n[r], 1);
        }
      }

      return D = null, e;
    }, C = t.getText = function (e) {
      var t,
          n = "",
          r = 0,
          i = e.nodeType;

      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) {
            n += C(e);
          }
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else for (; t = e[r++];) {
        n += C(t);
      }

      return n;
    }, T = t.selectors = {
      cacheLength: 50,
      createPseudo: r,
      match: pe,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(e) {
          return e[1] = e[1].replace(be, we), e[3] = (e[3] || e[4] || e[5] || "").replace(be, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];
          return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = N(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          var t = e.replace(be, we).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function CLASS(e) {
          var t = $[e + " "];
          return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && $(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(e, n, r) {
          return function (i) {
            var o = t.attr(i, e);
            return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"));
          };
        },
        CHILD: function CHILD(e, t, n, r, i) {
          var o = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              s = "of-type" === t;
          return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode;
          } : function (t, n, u) {
            var l,
                c,
                f,
                d,
                p,
                h,
                g = o !== a ? "nextSibling" : "previousSibling",
                m = t.parentNode,
                y = s && t.nodeName.toLowerCase(),
                v = !u && !s,
                x = !1;

            if (m) {
              if (o) {
                for (; g;) {
                  for (d = t; d = d[g];) {
                    if (s ? d.nodeName.toLowerCase() === y : 1 === d.nodeType) return !1;
                  }

                  h = g = "only" === e && !h && "nextSibling";
                }

                return !0;
              }

              if (h = [a ? m.firstChild : m.lastChild], a && v) {
                for (d = m, f = d[P] || (d[P] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], p = l[0] === W && l[1], x = p && l[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (x = p = 0) || h.pop();) {
                  if (1 === d.nodeType && ++x && d === t) {
                    c[e] = [W, p, x];
                    break;
                  }
                }
              } else if (v && (d = t, f = d[P] || (d[P] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], p = l[0] === W && l[1], x = p), x === !1) for (; (d = ++p && d && d[g] || (x = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== y : 1 !== d.nodeType) || !++x || (v && (f = d[P] || (d[P] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), c[e] = [W, x]), d !== t));) {
                ;
              }

              return x -= i, x === r || x % r === 0 && x / r >= 0;
            }
          };
        },
        PSEUDO: function PSEUDO(e, n) {
          var i,
              o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
          return o[P] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
            for (var r, i = o(e, n), a = i.length; a--;) {
              r = ee(e, i[a]), e[r] = !(t[r] = i[a]);
            }
          }) : function (e) {
            return o(e, 0, i);
          }) : o;
        }
      },
      pseudos: {
        not: r(function (e) {
          var t = [],
              n = [],
              i = k(e.replace(se, "$1"));
          return i[P] ? r(function (e, t, n, r) {
            for (var o, a = i(e, null, r, []), s = e.length; s--;) {
              (o = a[s]) && (e[s] = !(t[s] = o));
            }
          }) : function (e, r, o) {
            return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop();
          };
        }),
        has: r(function (e) {
          return function (n) {
            return t(e, n).length > 0;
          };
        }),
        contains: r(function (e) {
          return e = e.replace(be, we), function (t) {
            return (t.textContent || t.innerText || C(t)).indexOf(e) > -1;
          };
        }),
        lang: r(function (e) {
          return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, we).toLowerCase(), function (t) {
            var n;

            do {
              if (n = _ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);

            return !1;
          };
        }),
        target: function target(t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id;
        },
        root: function root(e) {
          return e === q;
        },
        focus: function focus(e) {
          return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: function enabled(e) {
          return e.disabled === !1;
        },
        disabled: function disabled(e) {
          return e.disabled === !0;
        },
        checked: function checked(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(e) {
          return !T.pseudos.empty(e);
        },
        header: function header(e) {
          return ge.test(e.nodeName);
        },
        input: function input(e) {
          return he.test(e.nodeName);
        },
        button: function button(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function text(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: l(function () {
          return [0];
        }),
        last: l(function (e, t) {
          return [t - 1];
        }),
        eq: l(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: l(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        odd: l(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        lt: l(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; --r >= 0;) {
            e.push(r);
          }

          return e;
        }),
        gt: l(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) {
            e.push(r);
          }

          return e;
        })
      }
    }, T.pseudos.nth = T.pseudos.eq;

    for (b in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      T.pseudos[b] = s(b);
    }

    for (b in {
      submit: !0,
      reset: !0
    }) {
      T.pseudos[b] = u(b);
    }

    return f.prototype = T.filters = T.pseudos, T.setFilters = new f(), N = t.tokenize = function (e, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = z[e + " "];
      if (c) return n ? 0 : c.slice(0);

      for (s = e, u = [], l = T.preFilter; s;) {
        r && !(i = ue.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = le.exec(s)) && (r = i.shift(), o.push({
          value: r,
          type: i[0].replace(se, " ")
        }), s = s.slice(r.length));

        for (a in T.filter) {
          !(i = pe[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
            value: r,
            type: a,
            matches: i
          }), s = s.slice(r.length));
        }

        if (!r) break;
      }

      return n ? s.length : s ? t.error(e) : z(e, u).slice(0);
    }, k = t.compile = function (e, t) {
      var n,
          r = [],
          i = [],
          o = X[e + " "];

      if (!o) {
        for (t || (t = N(e)), n = t.length; n--;) {
          o = v(t[n]), o[P] ? r.push(o) : i.push(o);
        }

        o = X(e, x(i, r)), o.selector = e;
      }

      return o;
    }, S = t.select = function (e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l = "function" == typeof e && e,
          f = !r && N(e = l.selector || e);

      if (n = n || [], 1 === f.length) {
        if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && _ && T.relative[o[1].type]) {
          if (t = (T.find.ID(a.matches[0].replace(be, we), t) || [])[0], !t) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length);
        }

        for (i = pe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !T.relative[s = a.type]);) {
          if ((u = T.find[s]) && (r = u(a.matches[0].replace(be, we), ve.test(o[0].type) && c(t.parentNode) || t))) {
            if (o.splice(i, 1), e = r.length && d(o), !e) return Q.apply(n, r), n;
            break;
          }
        }
      }

      return (l || k(e, f))(r, t, !_, n, !t || ve.test(e) && c(t.parentNode) || t), n;
    }, w.sortStable = P.split("").sort(U).join("") === P, w.detectDuplicates = !!j, L(), w.sortDetached = i(function (e) {
      return 1 & e.compareDocumentPosition(H.createElement("div"));
    }), i(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || o("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), w.attributes && i(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || o("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), i(function (e) {
      return null == e.getAttribute("disabled");
    }) || o(te, function (e, t, n) {
      var r;
      if (!n) return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), t;
  }(e);

  pe.find = ve, pe.expr = ve.selectors, pe.expr[":"] = pe.expr.pseudos, pe.uniqueSort = pe.unique = ve.uniqueSort, pe.text = ve.getText, pe.isXMLDoc = ve.isXML, pe.contains = ve.contains;

  var xe = function xe(e, t, n) {
    for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) {
      if (1 === e.nodeType) {
        if (i && pe(e).is(n)) break;
        r.push(e);
      }
    }

    return r;
  },
      be = function be(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }

    return n;
  },
      we = pe.expr.match.needsContext,
      Te = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      Ce = /^.[^:#\[\.,]*$/;

  pe.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? pe.find.matchesSelector(r, e) ? [r] : [] : pe.find.matches(e, pe.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, pe.fn.extend({
    find: function find(e) {
      var t,
          n = [],
          r = this,
          i = r.length;
      if ("string" != typeof e) return this.pushStack(pe(e).filter(function () {
        for (t = 0; t < i; t++) {
          if (pe.contains(r[t], this)) return !0;
        }
      }));

      for (t = 0; t < i; t++) {
        pe.find(e, r[t], n);
      }

      return n = this.pushStack(i > 1 ? pe.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n;
    },
    filter: function filter(e) {
      return this.pushStack(r(this, e || [], !1));
    },
    not: function not(e) {
      return this.pushStack(r(this, e || [], !0));
    },
    is: function is(e) {
      return !!r(this, "string" == typeof e && we.test(e) ? pe(e) : e || [], !1).length;
    }
  });

  var Ee,
      Ne = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      ke = pe.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;

    if (n = n || Ee, "string" == typeof e) {
      if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : Ne.exec(e), !r || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

      if (r[1]) {
        if (t = t instanceof pe ? t[0] : t, pe.merge(this, pe.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : re, !0)), Te.test(r[1]) && pe.isPlainObject(t)) for (r in t) {
          pe.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        }
        return this;
      }

      if (i = re.getElementById(r[2]), i && i.parentNode) {
        if (i.id !== r[2]) return Ee.find(e);
        this.length = 1, this[0] = i;
      }

      return this.context = re, this.selector = e, this;
    }

    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : pe.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(pe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), pe.makeArray(e, this));
  };

  ke.prototype = pe.fn, Ee = pe(re);
  var Se = /^(?:parents|prev(?:Until|All))/,
      Ae = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  pe.fn.extend({
    has: function has(e) {
      var t,
          n = pe(e, this),
          r = n.length;
      return this.filter(function () {
        for (t = 0; t < r; t++) {
          if (pe.contains(this, n[t])) return !0;
        }
      });
    },
    closest: function closest(e, t) {
      for (var n, r = 0, i = this.length, o = [], a = we.test(e) || "string" != typeof e ? pe(e, t || this.context) : 0; r < i; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && pe.find.matchesSelector(n, e))) {
            o.push(n);
            break;
          }
        }
      }

      return this.pushStack(o.length > 1 ? pe.uniqueSort(o) : o);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? pe.inArray(this[0], pe(e)) : pe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t))));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), pe.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return xe(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return xe(e, "parentNode", n);
    },
    next: function next(e) {
      return i(e, "nextSibling");
    },
    prev: function prev(e) {
      return i(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return xe(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return xe(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return xe(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return xe(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return be((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return be(e.firstChild);
    },
    contents: function contents(e) {
      return pe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : pe.merge([], e.childNodes);
    }
  }, function (e, t) {
    pe.fn[e] = function (n, r) {
      var i = pe.map(this, t, n);
      return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = pe.filter(r, i)), this.length > 1 && (Ae[e] || (i = pe.uniqueSort(i)), Se.test(e) && (i = i.reverse())), this.pushStack(i);
    };
  });
  var De = /\S+/g;
  pe.Callbacks = function (e) {
    e = "string" == typeof e ? o(e) : pe.extend({}, e);

    var t,
        n,
        r,
        i,
        a = [],
        s = [],
        u = -1,
        l = function l() {
      for (i = e.once, r = t = !0; s.length; u = -1) {
        for (n = s.shift(); ++u < a.length;) {
          a[u].apply(n[0], n[1]) === !1 && e.stopOnFalse && (u = a.length, n = !1);
        }
      }

      e.memory || (n = !1), t = !1, i && (a = n ? [] : "");
    },
        c = {
      add: function add() {
        return a && (n && !t && (u = a.length - 1, s.push(n)), function r(t) {
          pe.each(t, function (t, n) {
            pe.isFunction(n) ? e.unique && c.has(n) || a.push(n) : n && n.length && "string" !== pe.type(n) && r(n);
          });
        }(arguments), n && !t && l()), this;
      },
      remove: function remove() {
        return pe.each(arguments, function (e, t) {
          for (var n; (n = pe.inArray(t, a, n)) > -1;) {
            a.splice(n, 1), n <= u && u--;
          }
        }), this;
      },
      has: function has(e) {
        return e ? pe.inArray(e, a) > -1 : a.length > 0;
      },
      empty: function empty() {
        return a && (a = []), this;
      },
      disable: function disable() {
        return i = s = [], a = n = "", this;
      },
      disabled: function disabled() {
        return !a;
      },
      lock: function lock() {
        return i = !0, n || c.disable(), this;
      },
      locked: function locked() {
        return !!i;
      },
      fireWith: function fireWith(e, n) {
        return i || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || l()), this;
      },
      fire: function fire() {
        return c.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!r;
      }
    };

    return c;
  }, pe.extend({
    Deferred: function Deferred(e) {
      var t = [["resolve", "done", pe.Callbacks("once memory"), "resolved"], ["reject", "fail", pe.Callbacks("once memory"), "rejected"], ["notify", "progress", pe.Callbacks("memory")]],
          n = "pending",
          r = {
        state: function state() {
          return n;
        },
        always: function always() {
          return i.done(arguments).fail(arguments), this;
        },
        then: function then() {
          var e = arguments;
          return pe.Deferred(function (n) {
            pe.each(t, function (t, o) {
              var a = pe.isFunction(e[t]) && e[t];
              i[o[1]](function () {
                var e = a && a.apply(this, arguments);
                e && pe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        },
        promise: function promise(e) {
          return null != e ? pe.extend(e, r) : r;
        }
      },
          i = {};
      return r.pipe = r.then, pe.each(t, function (e, o) {
        var a = o[2],
            s = o[3];
        r[o[1]] = a.add, s && a.add(function () {
          n = s;
        }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
          return i[o[0] + "With"](this === i ? r : this, arguments), this;
        }, i[o[0] + "With"] = a.fireWith;
      }), r.promise(i), e && e.call(i, i), i;
    },
    when: function when(e) {
      var t,
          n,
          r,
          i = 0,
          o = ie.call(arguments),
          a = o.length,
          s = 1 !== a || e && pe.isFunction(e.promise) ? a : 0,
          u = 1 === s ? e : pe.Deferred(),
          l = function l(e, n, r) {
        return function (i) {
          n[e] = this, r[e] = arguments.length > 1 ? ie.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r);
        };
      };

      if (a > 1) for (t = new Array(a), n = new Array(a), r = new Array(a); i < a; i++) {
        o[i] && pe.isFunction(o[i].promise) ? o[i].promise().progress(l(i, n, t)).done(l(i, r, o)).fail(u.reject) : --s;
      }
      return s || u.resolveWith(r, o), u.promise();
    }
  });
  var je;
  pe.fn.ready = function (e) {
    return pe.ready.promise().done(e), this;
  }, pe.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function holdReady(e) {
      e ? pe.readyWait++ : pe.ready(!0);
    },
    ready: function ready(e) {
      (e === !0 ? --pe.readyWait : pe.isReady) || (pe.isReady = !0, e !== !0 && --pe.readyWait > 0 || (je.resolveWith(re, [pe]), pe.fn.triggerHandler && (pe(re).triggerHandler("ready"), pe(re).off("ready"))));
    }
  }), pe.ready.promise = function (t) {
    if (!je) if (je = pe.Deferred(), "complete" === re.readyState || "loading" !== re.readyState && !re.documentElement.doScroll) e.setTimeout(pe.ready);else if (re.addEventListener) re.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s);else {
      re.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
      var n = !1;

      try {
        n = null == e.frameElement && re.documentElement;
      } catch (r) {}

      n && n.doScroll && !function i() {
        if (!pe.isReady) {
          try {
            n.doScroll("left");
          } catch (t) {
            return e.setTimeout(i, 50);
          }

          a(), pe.ready();
        }
      }();
    }
    return je.promise(t);
  }, pe.ready.promise();
  var Le;

  for (Le in pe(fe)) {
    break;
  }

  fe.ownFirst = "0" === Le, fe.inlineBlockNeedsLayout = !1, pe(function () {
    var e, t, n, r;
    n = re.getElementsByTagName("body")[0], n && n.style && (t = re.createElement("div"), r = re.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", fe.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r));
  }), function () {
    var e = re.createElement("div");
    fe.deleteExpando = !0;

    try {
      delete e.test;
    } catch (t) {
      fe.deleteExpando = !1;
    }

    e = null;
  }();

  var He = function He(e) {
    var t = pe.noData[(e.nodeName + " ").toLowerCase()],
        n = +e.nodeType || 1;
    return (1 === n || 9 === n) && (!t || t !== !0 && e.getAttribute("classid") === t);
  },
      qe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      _e = /([A-Z])/g;

  pe.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
    },
    hasData: function hasData(e) {
      return e = e.nodeType ? pe.cache[e[pe.expando]] : e[pe.expando], !!e && !l(e);
    },
    data: function data(e, t, n) {
      return c(e, t, n);
    },
    removeData: function removeData(e, t) {
      return f(e, t);
    },
    _data: function _data(e, t, n) {
      return c(e, t, n, !0);
    },
    _removeData: function _removeData(e, t) {
      return f(e, t, !0);
    }
  }), pe.fn.extend({
    data: function data(e, t) {
      var n,
          r,
          i,
          o = this[0],
          a = o && o.attributes;

      if (void 0 === e) {
        if (this.length && (i = pe.data(o), 1 === o.nodeType && !pe._data(o, "parsedAttrs"))) {
          for (n = a.length; n--;) {
            a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = pe.camelCase(r.slice(5)), u(o, r, i[r])));
          }

          pe._data(o, "parsedAttrs", !0);
        }

        return i;
      }

      return "object" == _typeof(e) ? this.each(function () {
        pe.data(this, e);
      }) : arguments.length > 1 ? this.each(function () {
        pe.data(this, e, t);
      }) : o ? u(o, e, pe.data(o, e)) : void 0;
    },
    removeData: function removeData(e) {
      return this.each(function () {
        pe.removeData(this, e);
      });
    }
  }), pe.extend({
    queue: function queue(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = pe._data(e, t), n && (!r || pe.isArray(n) ? r = pe._data(e, t, pe.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";

      var n = pe.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = pe._queueHooks(e, t),
          a = function a() {
        pe.dequeue(e, t);
      };

      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return pe._data(e, n) || pe._data(e, n, {
        empty: pe.Callbacks("once memory").add(function () {
          pe._removeData(e, t + "queue"), pe._removeData(e, n);
        })
      });
    }
  }), pe.fn.extend({
    queue: function queue(e, t) {
      var n = 2;
      return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? pe.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = pe.queue(this, e, t);
        pe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && pe.dequeue(this, e);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        pe.dequeue(this, e);
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, t) {
      var n,
          r = 1,
          i = pe.Deferred(),
          o = this,
          a = this.length,
          s = function s() {
        --r || i.resolveWith(o, [o]);
      };

      for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) {
        n = pe._data(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
      }

      return s(), i.promise(t);
    }
  }), function () {
    var e;

    fe.shrinkWrapBlocks = function () {
      if (null != e) return e;
      e = !1;
      var t, n, r;
      return n = re.getElementsByTagName("body")[0], n && n.style ? (t = re.createElement("div"), r = re.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(re.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0;
    };
  }();

  var Fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      Me = new RegExp("^(?:([+-])=|)(" + Fe + ")([a-z%]*)$", "i"),
      Oe = ["Top", "Right", "Bottom", "Left"],
      Re = function Re(e, t) {
    return e = t || e, "none" === pe.css(e, "display") || !pe.contains(e.ownerDocument, e);
  },
      Pe = function Pe(e, t, n, r, i, o, a) {
    var s = 0,
        u = e.length,
        l = null == n;

    if ("object" === pe.type(n)) {
      i = !0;

      for (s in n) {
        Pe(e, t, s, n[s], !0, o, a);
      }
    } else if (void 0 !== r && (i = !0, pe.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
      return l.call(pe(e), n);
    })), t)) for (; s < u; s++) {
      t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    }

    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
      Be = /^(?:checkbox|radio)$/i,
      We = /<([\w:-]+)/,
      Ie = /^$|\/(?:java|ecma)script/i,
      $e = /^\s+/,
      ze = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

  !function () {
    var e = re.createElement("div"),
        t = re.createDocumentFragment(),
        n = re.createElement("input");
    e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", fe.leadingWhitespace = 3 === e.firstChild.nodeType, fe.tbody = !e.getElementsByTagName("tbody").length, fe.htmlSerialize = !!e.getElementsByTagName("link").length, fe.html5Clone = "<:nav></:nav>" !== re.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), fe.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", fe.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), n = re.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), fe.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, fe.noCloneEvent = !!e.addEventListener, e[pe.expando] = 1, fe.attributes = !e.getAttribute(pe.expando);
  }();
  var Xe = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    area: [1, "<map>", "</map>"],
    param: [1, "<object>", "</object>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: fe.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
  };
  Xe.optgroup = Xe.option, Xe.tbody = Xe.tfoot = Xe.colgroup = Xe.caption = Xe.thead, Xe.th = Xe.td;
  var Ue = /<|&#?\w+;/,
      Ve = /<tbody/i;
  !function () {
    var t,
        n,
        r = re.createElement("div");

    for (t in {
      submit: !0,
      change: !0,
      focusin: !0
    }) {
      n = "on" + t, (fe[t] = n in e) || (r.setAttribute(n, "t"), fe[t] = r.attributes[n].expando === !1);
    }

    r = null;
  }();
  var Ye = /^(?:input|select|textarea)$/i,
      Je = /^key/,
      Ge = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ke = /^(?:focusinfocus|focusoutblur)$/,
      Qe = /^([^.]*)(?:\.(.+)|)/;
  pe.event = {
    global: {},
    add: function add(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          d,
          p,
          h,
          g,
          m = pe._data(e);

      if (m) {
        for (n.handler && (u = n, n = u.handler, i = u.selector), n.guid || (n.guid = pe.guid++), (a = m.events) || (a = m.events = {}), (c = m.handle) || (c = m.handle = function (e) {
          return "undefined" == typeof pe || e && pe.event.triggered === e.type ? void 0 : pe.event.dispatch.apply(c.elem, arguments);
        }, c.elem = e), t = (t || "").match(De) || [""], s = t.length; s--;) {
          o = Qe.exec(t[s]) || [], p = g = o[1], h = (o[2] || "").split(".").sort(), p && (l = pe.event.special[p] || {}, p = (i ? l.delegateType : l.bindType) || p, l = pe.event.special[p] || {}, f = pe.extend({
            type: p,
            origType: g,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && pe.expr.match.needsContext.test(i),
            namespace: h.join(".")
          }, u), (d = a[p]) || (d = a[p] = [], d.delegateCount = 0, l.setup && l.setup.call(e, r, h, c) !== !1 || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), l.add && (l.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, f) : d.push(f), pe.event.global[p] = !0);
        }

        e = null;
      }
    },
    remove: function remove(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          d,
          p,
          h,
          g,
          m = pe.hasData(e) && pe._data(e);

      if (m && (c = m.events)) {
        for (t = (t || "").match(De) || [""], l = t.length; l--;) {
          if (s = Qe.exec(t[l]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
            for (f = pe.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, d = c[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = d.length; o--;) {
              a = d[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (d.splice(o, 1), a.selector && d.delegateCount--, f.remove && f.remove.call(e, a));
            }

            u && !d.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || pe.removeEvent(e, p, m.handle), delete c[p]);
          } else for (p in c) {
            pe.event.remove(e, p + t[l], n, r, !0);
          }
        }

        pe.isEmptyObject(c) && (delete m.handle, pe._removeData(e, "events"));
      }
    },
    trigger: function trigger(t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          d = [r || re],
          p = ce.call(t, "type") ? t.type : t,
          h = ce.call(t, "namespace") ? t.namespace.split(".") : [];

      if (s = c = r = r || re, 3 !== r.nodeType && 8 !== r.nodeType && !Ke.test(p + pe.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, t = t[pe.expando] ? t : new pe.Event(p, "object" == _typeof(t) && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : pe.makeArray(n, [t]), l = pe.event.special[p] || {}, i || !l.trigger || l.trigger.apply(r, n) !== !1)) {
        if (!i && !l.noBubble && !pe.isWindow(r)) {
          for (u = l.delegateType || p, Ke.test(u + p) || (s = s.parentNode); s; s = s.parentNode) {
            d.push(s), c = s;
          }

          c === (r.ownerDocument || re) && d.push(c.defaultView || c.parentWindow || e);
        }

        for (f = 0; (s = d[f++]) && !t.isPropagationStopped();) {
          t.type = f > 1 ? u : l.bindType || p, o = (pe._data(s, "events") || {})[t.type] && pe._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && He(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
        }

        if (t.type = p, !i && !t.isDefaultPrevented() && (!l._default || l._default.apply(d.pop(), n) === !1) && He(r) && a && r[p] && !pe.isWindow(r)) {
          c = r[a], c && (r[a] = null), pe.event.triggered = p;

          try {
            r[p]();
          } catch (g) {}

          pe.event.triggered = void 0, c && (r[a] = c);
        }

        return t.result;
      }
    },
    dispatch: function dispatch(e) {
      e = pe.event.fix(e);
      var t,
          n,
          r,
          i,
          o,
          a = [],
          s = ie.call(arguments),
          u = (pe._data(this, "events") || {})[e.type] || [],
          l = pe.event.special[e.type] || {};

      if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
        for (a = pe.event.handlers.call(this, e, u), t = 0; (i = a[t++]) && !e.isPropagationStopped();) {
          for (e.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) {
            e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, r = ((pe.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
          }
        }

        return l.postDispatch && l.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function handlers(e, t) {
      var n,
          r,
          i,
          o,
          a = [],
          s = t.delegateCount,
          u = e.target;
      if (s && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1)) for (; u != this; u = u.parentNode || this) {
        if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
          for (r = [], n = 0; n < s; n++) {
            o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? pe(i, this).index(u) > -1 : pe.find(i, this, null, [u]).length), r[i] && r.push(o);
          }

          r.length && a.push({
            elem: u,
            handlers: r
          });
        }
      }
      return s < t.length && a.push({
        elem: this,
        handlers: t.slice(s)
      }), a;
    },
    fix: function fix(e) {
      if (e[pe.expando]) return e;
      var t,
          n,
          r,
          i = e.type,
          o = e,
          a = this.fixHooks[i];

      for (a || (this.fixHooks[i] = a = Ge.test(i) ? this.mouseHooks : Je.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new pe.Event(o), t = r.length; t--;) {
        n = r[t], e[n] = o[n];
      }

      return e.target || (e.target = o.srcElement || re), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e;
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function filter(e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function filter(e, t) {
        var n,
            r,
            i,
            o = t.button,
            a = t.fromElement;
        return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || re, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e;
      }
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function trigger() {
          if (this !== b() && this.focus) try {
            return this.focus(), !1;
          } catch (e) {}
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function trigger() {
          if (this === b() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function trigger() {
          if (pe.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1;
        },
        _default: function _default(e) {
          return pe.nodeName(e.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    },
    simulate: function simulate(e, t, n) {
      var r = pe.extend(new pe.Event(), n, {
        type: e,
        isSimulated: !0
      });
      pe.event.trigger(r, null, t), r.isDefaultPrevented() && n.preventDefault();
    }
  }, pe.removeEvent = re.removeEventListener ? function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  } : function (e, t, n) {
    var r = "on" + t;
    e.detachEvent && ("undefined" == typeof e[r] && (e[r] = null), e.detachEvent(r, n));
  }, pe.Event = function (e, t) {
    return this instanceof pe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? v : x) : this.type = e, t && pe.extend(this, t), this.timeStamp = e && e.timeStamp || pe.now(), void (this[pe.expando] = !0)) : new pe.Event(e, t);
  }, pe.Event.prototype = {
    constructor: pe.Event,
    isDefaultPrevented: x,
    isPropagationStopped: x,
    isImmediatePropagationStopped: x,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = v, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = v, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0);
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = v, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, pe.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, t) {
    pe.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function handle(e) {
        var n,
            r = this,
            i = e.relatedTarget,
            o = e.handleObj;
        return i && (i === r || pe.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
      }
    };
  }), fe.submit || (pe.event.special.submit = {
    setup: function setup() {
      return !pe.nodeName(this, "form") && void pe.event.add(this, "click._submit keypress._submit", function (e) {
        var t = e.target,
            n = pe.nodeName(t, "input") || pe.nodeName(t, "button") ? pe.prop(t, "form") : void 0;
        n && !pe._data(n, "submit") && (pe.event.add(n, "submit._submit", function (e) {
          e._submitBubble = !0;
        }), pe._data(n, "submit", !0));
      });
    },
    postDispatch: function postDispatch(e) {
      e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && pe.event.simulate("submit", this.parentNode, e));
    },
    teardown: function teardown() {
      return !pe.nodeName(this, "form") && void pe.event.remove(this, "._submit");
    }
  }), fe.change || (pe.event.special.change = {
    setup: function setup() {
      return Ye.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (pe.event.add(this, "propertychange._change", function (e) {
        "checked" === e.originalEvent.propertyName && (this._justChanged = !0);
      }), pe.event.add(this, "click._change", function (e) {
        this._justChanged && !e.isTrigger && (this._justChanged = !1), pe.event.simulate("change", this, e);
      })), !1) : void pe.event.add(this, "beforeactivate._change", function (e) {
        var t = e.target;
        Ye.test(t.nodeName) && !pe._data(t, "change") && (pe.event.add(t, "change._change", function (e) {
          !this.parentNode || e.isSimulated || e.isTrigger || pe.event.simulate("change", this.parentNode, e);
        }), pe._data(t, "change", !0));
      });
    },
    handle: function handle(e) {
      var t = e.target;
      if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments);
    },
    teardown: function teardown() {
      return pe.event.remove(this, "._change"), !Ye.test(this.nodeName);
    }
  }), fe.focusin || pe.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    var n = function n(e) {
      pe.event.simulate(t, e.target, pe.event.fix(e));
    };

    pe.event.special[t] = {
      setup: function setup() {
        var r = this.ownerDocument || this,
            i = pe._data(r, t);

        i || r.addEventListener(e, n, !0), pe._data(r, t, (i || 0) + 1);
      },
      teardown: function teardown() {
        var r = this.ownerDocument || this,
            i = pe._data(r, t) - 1;
        i ? pe._data(r, t, i) : (r.removeEventListener(e, n, !0), pe._removeData(r, t));
      }
    };
  }), pe.fn.extend({
    on: function on(e, t, n, r) {
      return w(this, e, t, n, r);
    },
    one: function one(e, t, n, r) {
      return w(this, e, t, n, r, 1);
    },
    off: function off(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, pe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

      if ("object" == _typeof(e)) {
        for (i in e) {
          this.off(i, t, e[i]);
        }

        return this;
      }

      return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = x), this.each(function () {
        pe.event.remove(this, e, n, t);
      });
    },
    trigger: function trigger(e, t) {
      return this.each(function () {
        pe.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, t) {
      var n = this[0];
      if (n) return pe.event.trigger(e, t, n, !0);
    }
  });
  var Ze = / jQuery\d+="(?:null|\d+)"/g,
      et = new RegExp("<(?:" + ze + ")[\\s/>]", "i"),
      tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      nt = /<script|<style|<link/i,
      rt = /checked\s*(?:[^=]|=\s*.checked.)/i,
      it = /^true\/(.*)/,
      ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      at = p(re),
      st = at.appendChild(re.createElement("div"));
  pe.extend({
    htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(tt, "<$1></$2>");
    },
    clone: function clone(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u = pe.contains(e.ownerDocument, e);
      if (fe.html5Clone || pe.isXMLDoc(e) || !et.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (st.innerHTML = e.outerHTML, st.removeChild(o = st.firstChild)), !(fe.noCloneEvent && fe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || pe.isXMLDoc(e))) for (r = h(o), s = h(e), a = 0; null != (i = s[a]); ++a) {
        r[a] && k(i, r[a]);
      }
      if (t) if (n) for (s = s || h(e), r = r || h(o), a = 0; null != (i = s[a]); a++) {
        N(i, r[a]);
      } else N(e, o);
      return r = h(o, "script"), r.length > 0 && g(r, !u && h(e, "script")), r = s = i = null, o;
    },
    cleanData: function cleanData(e, t) {
      for (var n, r, i, o, a = 0, s = pe.expando, u = pe.cache, l = fe.attributes, c = pe.event.special; null != (n = e[a]); a++) {
        if ((t || He(n)) && (i = n[s], o = i && u[i])) {
          if (o.events) for (r in o.events) {
            c[r] ? pe.event.remove(n, r) : pe.removeEvent(n, r, o.handle);
          }
          u[i] && (delete u[i], l || "undefined" == typeof n.removeAttribute ? n[s] = void 0 : n.removeAttribute(s), ne.push(i));
        }
      }
    }
  }), pe.fn.extend({
    domManip: S,
    detach: function detach(e) {
      return A(this, e, !0);
    },
    remove: function remove(e) {
      return A(this, e);
    },
    text: function text(e) {
      return Pe(this, function (e) {
        return void 0 === e ? pe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || re).createTextNode(e));
      }, null, e, arguments.length);
    },
    append: function append() {
      return S(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = T(this, e);
          t.appendChild(e);
        }
      });
    },
    prepend: function prepend() {
      return S(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = T(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function before() {
      return S(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return S(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        for (1 === e.nodeType && pe.cleanData(h(e, !1)); e.firstChild;) {
          e.removeChild(e.firstChild);
        }

        e.options && pe.nodeName(e, "select") && (e.options.length = 0);
      }

      return this;
    },
    clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return pe.clone(this, e, t);
      });
    },
    html: function html(e) {
      return Pe(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;
        if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Ze, "") : void 0;

        if ("string" == typeof e && !nt.test(e) && (fe.htmlSerialize || !et.test(e)) && (fe.leadingWhitespace || !$e.test(e)) && !Xe[(We.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = pe.htmlPrefilter(e);

          try {
            for (; n < r; n++) {
              t = this[n] || {}, 1 === t.nodeType && (pe.cleanData(h(t, !1)), t.innerHTML = e);
            }

            t = 0;
          } catch (i) {}
        }

        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var e = [];
      return S(this, arguments, function (t) {
        var n = this.parentNode;
        pe.inArray(this, e) < 0 && (pe.cleanData(h(this)), n && n.replaceChild(t, this));
      }, e);
    }
  }), pe.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, t) {
    pe.fn[e] = function (e) {
      for (var n, r = 0, i = [], o = pe(e), a = o.length - 1; r <= a; r++) {
        n = r === a ? this : this.clone(!0), pe(o[r])[t](n), ae.apply(i, n.get());
      }

      return this.pushStack(i);
    };
  });

  var ut,
      lt = {
    HTML: "block",
    BODY: "block"
  },
      ct = /^margin/,
      ft = new RegExp("^(" + Fe + ")(?!px)[a-z%]+$", "i"),
      dt = function dt(e, t, n, r) {
    var i,
        o,
        a = {};

    for (o in t) {
      a[o] = e.style[o], e.style[o] = t[o];
    }

    i = n.apply(e, r || []);

    for (o in t) {
      e.style[o] = a[o];
    }

    return i;
  },
      pt = re.documentElement;

  !function () {
    function t() {
      var t,
          c,
          f = re.documentElement;
      f.appendChild(u), l.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = i = s = !1, r = a = !0, e.getComputedStyle && (c = e.getComputedStyle(l), n = "1%" !== (c || {}).top, s = "2px" === (c || {}).marginLeft, i = "4px" === (c || {
        width: "4px"
      }).width, l.style.marginRight = "50%", r = "4px" === (c || {
        marginRight: "4px"
      }).marginRight, t = l.appendChild(re.createElement("div")), t.style.cssText = l.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", l.style.width = "1px", a = !parseFloat((e.getComputedStyle(t) || {}).marginRight), l.removeChild(t)), l.style.display = "none", o = 0 === l.getClientRects().length, o && (l.style.display = "", l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", t = l.getElementsByTagName("td"), t[0].style.cssText = "margin:0;border:0;padding:0;display:none", o = 0 === t[0].offsetHeight, o && (t[0].style.display = "", t[1].style.display = "none", o = 0 === t[0].offsetHeight)), f.removeChild(u);
    }

    var n,
        r,
        i,
        o,
        a,
        s,
        u = re.createElement("div"),
        l = re.createElement("div");
    l.style && (l.style.cssText = "float:left;opacity:.5", fe.opacity = "0.5" === l.style.opacity, fe.cssFloat = !!l.style.cssFloat, l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", fe.clearCloneStyle = "content-box" === l.style.backgroundClip, u = re.createElement("div"), u.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", l.innerHTML = "", u.appendChild(l), fe.boxSizing = "" === l.style.boxSizing || "" === l.style.MozBoxSizing || "" === l.style.WebkitBoxSizing, pe.extend(fe, {
      reliableHiddenOffsets: function reliableHiddenOffsets() {
        return null == n && t(), o;
      },
      boxSizingReliable: function boxSizingReliable() {
        return null == n && t(), i;
      },
      pixelMarginRight: function pixelMarginRight() {
        return null == n && t(), r;
      },
      pixelPosition: function pixelPosition() {
        return null == n && t(), n;
      },
      reliableMarginRight: function reliableMarginRight() {
        return null == n && t(), a;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        return null == n && t(), s;
      }
    }));
  }();
  var ht,
      gt,
      mt = /^(top|right|bottom|left)$/;
  e.getComputedStyle ? (ht = function ht(t) {
    var n = t.ownerDocument.defaultView;
    return n && n.opener || (n = e), n.getComputedStyle(t);
  }, gt = function gt(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;
    return n = n || ht(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== a && void 0 !== a || pe.contains(e.ownerDocument, e) || (a = pe.style(e, t)), n && !fe.pixelMarginRight() && ft.test(a) && ct.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o), void 0 === a ? a : a + "";
  }) : pt.currentStyle && (ht = function ht(e) {
    return e.currentStyle;
  }, gt = function gt(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;
    return n = n || ht(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), ft.test(a) && !mt.test(t) && (r = s.left, i = e.runtimeStyle, o = i && i.left, o && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), void 0 === a ? a : a + "" || "auto";
  });
  var yt = /alpha\([^)]*\)/i,
      vt = /opacity\s*=\s*([^)]*)/i,
      xt = /^(none|table(?!-c[ea]).+)/,
      bt = new RegExp("^(" + Fe + ")(.*)$", "i"),
      wt = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Tt = {
    letterSpacing: "0",
    fontWeight: "400"
  },
      Ct = ["Webkit", "O", "Moz", "ms"],
      Et = re.createElement("div").style;
  pe.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = gt(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": fe.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            s = pe.camelCase(t),
            u = e.style;
        if (t = pe.cssProps[s] || (pe.cssProps[s] = H(s) || s), a = pe.cssHooks[t] || pe.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
        if (o = _typeof(n), "string" === o && (i = Me.exec(n)) && i[1] && (n = d(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (pe.cssNumber[s] ? "" : "px")), fe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, r))))) try {
          u[t] = n;
        } catch (l) {}
      }
    },
    css: function css(e, t, n, r) {
      var i,
          o,
          a,
          s = pe.camelCase(t);
      return t = pe.cssProps[s] || (pe.cssProps[s] = H(s) || s), a = pe.cssHooks[t] || pe.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = gt(e, t, r)), "normal" === o && t in Tt && (o = Tt[t]), "" === n || n ? (i = parseFloat(o), n === !0 || isFinite(i) ? i || 0 : o) : o;
    }
  }), pe.each(["height", "width"], function (e, t) {
    pe.cssHooks[t] = {
      get: function get(e, n, r) {
        if (n) return xt.test(pe.css(e, "display")) && 0 === e.offsetWidth ? dt(e, wt, function () {
          return M(e, t, r);
        }) : M(e, t, r);
      },
      set: function set(e, n, r) {
        var i = r && ht(e);
        return _(e, n, r ? F(e, t, r, fe.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, i), i) : 0);
      }
    };
  }), fe.opacity || (pe.cssHooks.opacity = {
    get: function get(e, t) {
      return vt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
    },
    set: function set(e, t) {
      var n = e.style,
          r = e.currentStyle,
          i = pe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
          o = r && r.filter || n.filter || "";
      n.zoom = 1, (t >= 1 || "" === t) && "" === pe.trim(o.replace(yt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = yt.test(o) ? o.replace(yt, i) : o + " " + i);
    }
  }), pe.cssHooks.marginRight = L(fe.reliableMarginRight, function (e, t) {
    if (t) return dt(e, {
      display: "inline-block"
    }, gt, [e, "marginRight"]);
  }), pe.cssHooks.marginLeft = L(fe.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(gt(e, "marginLeft")) || (pe.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - dt(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    }) : 0)) + "px";
  }), pe.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (e, t) {
    pe.cssHooks[e + t] = {
      expand: function expand(n) {
        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) {
          i[e + Oe[r] + t] = o[r] || o[r - 2] || o[0];
        }

        return i;
      }
    }, ct.test(e) || (pe.cssHooks[e + t].set = _);
  }), pe.fn.extend({
    css: function css(e, t) {
      return Pe(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;

        if (pe.isArray(t)) {
          for (r = ht(e), i = t.length; a < i; a++) {
            o[t[a]] = pe.css(e, t[a], !1, r);
          }

          return o;
        }

        return void 0 !== n ? pe.style(e, t, n) : pe.css(e, t);
      }, e, t, arguments.length > 1);
    },
    show: function show() {
      return q(this, !0);
    },
    hide: function hide() {
      return q(this);
    },
    toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        Re(this) ? pe(this).show() : pe(this).hide();
      });
    }
  }), pe.Tween = O, O.prototype = {
    constructor: O,
    init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || pe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (pe.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = O.propHooks[this.prop];
      return e && e.get ? e.get(this) : O.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
          n = O.propHooks[this.prop];
      return this.options.duration ? this.pos = t = pe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : O.propHooks._default.set(this), this;
    }
  }, O.prototype.init.prototype = O.prototype, O.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = pe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0);
      },
      set: function set(e) {
        pe.fx.step[e.prop] ? pe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[pe.cssProps[e.prop]] && !pe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : pe.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }, O.propHooks.scrollTop = O.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, pe.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, pe.fx = O.prototype.init, pe.fx.step = {};
  var Nt,
      kt,
      St = /^(?:toggle|show|hide)$/,
      At = /queueHooks$/;
  pe.Animation = pe.extend($, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return d(n.elem, e, Me.exec(t), n), n;
      }]
    },
    tweener: function tweener(e, t) {
      pe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(De);

      for (var n, r = 0, i = e.length; r < i; r++) {
        n = e[r], $.tweeners[n] = $.tweeners[n] || [], $.tweeners[n].unshift(t);
      }
    },
    prefilters: [W],
    prefilter: function prefilter(e, t) {
      t ? $.prefilters.unshift(e) : $.prefilters.push(e);
    }
  }), pe.speed = function (e, t, n) {
    var r = e && "object" == _typeof(e) ? pe.extend({}, e) : {
      complete: n || !n && t || pe.isFunction(e) && e,
      duration: e,
      easing: n && t || t && !pe.isFunction(t) && t
    };
    return r.duration = pe.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in pe.fx.speeds ? pe.fx.speeds[r.duration] : pe.fx.speeds._default, null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      pe.isFunction(r.old) && r.old.call(this), r.queue && pe.dequeue(this, r.queue);
    }, r;
  }, pe.fn.extend({
    fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(Re).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function animate(e, t, n, r) {
      var i = pe.isEmptyObject(e),
          o = pe.speed(t, n, r),
          a = function a() {
        var t = $(this, pe.extend({}, e), o);
        (i || pe._data(this, "finish")) && t.stop(!0);
      };

      return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function stop(e, t, n) {
      var r = function r(e) {
        var t = e.stop;
        delete e.stop, t(n);
      };

      return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            i = null != e && e + "queueHooks",
            o = pe.timers,
            a = pe._data(this);

        if (i) a[i] && a[i].stop && r(a[i]);else for (i in a) {
          a[i] && a[i].stop && At.test(i) && r(a[i]);
        }

        for (i = o.length; i--;) {
          o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
        }

        !t && n || pe.dequeue(this, e);
      });
    },
    finish: function finish(e) {
      return e !== !1 && (e = e || "fx"), this.each(function () {
        var t,
            n = pe._data(this),
            r = n[e + "queue"],
            i = n[e + "queueHooks"],
            o = pe.timers,
            a = r ? r.length : 0;

        for (n.finish = !0, pe.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
          o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        }

        for (t = 0; t < a; t++) {
          r[t] && r[t].finish && r[t].finish.call(this);
        }

        delete n.finish;
      });
    }
  }), pe.each(["toggle", "show", "hide"], function (e, t) {
    var n = pe.fn[t];

    pe.fn[t] = function (e, r, i) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(P(t, !0), e, r, i);
    };
  }), pe.each({
    slideDown: P("show"),
    slideUp: P("hide"),
    slideToggle: P("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, t) {
    pe.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r);
    };
  }), pe.timers = [], pe.fx.tick = function () {
    var e,
        t = pe.timers,
        n = 0;

    for (Nt = pe.now(); n < t.length; n++) {
      e = t[n], e() || t[n] !== e || t.splice(n--, 1);
    }

    t.length || pe.fx.stop(), Nt = void 0;
  }, pe.fx.timer = function (e) {
    pe.timers.push(e), e() ? pe.fx.start() : pe.timers.pop();
  }, pe.fx.interval = 13, pe.fx.start = function () {
    kt || (kt = e.setInterval(pe.fx.tick, pe.fx.interval));
  }, pe.fx.stop = function () {
    e.clearInterval(kt), kt = null;
  }, pe.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, pe.fn.delay = function (t, n) {
    return t = pe.fx ? pe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
      var i = e.setTimeout(n, t);

      r.stop = function () {
        e.clearTimeout(i);
      };
    });
  }, function () {
    var e,
        t = re.createElement("input"),
        n = re.createElement("div"),
        r = re.createElement("select"),
        i = r.appendChild(re.createElement("option"));
    n = re.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), e = n.getElementsByTagName("a")[0], e.style.cssText = "top:1px", fe.getSetAttribute = "t" !== n.className, fe.style = /top/.test(e.getAttribute("style")), fe.hrefNormalized = "/a" === e.getAttribute("href"), fe.checkOn = !!t.value, fe.optSelected = i.selected, fe.enctype = !!re.createElement("form").enctype, r.disabled = !0, fe.optDisabled = !i.disabled, t = re.createElement("input"), t.setAttribute("value", ""), fe.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), fe.radioValue = "t" === t.value;
  }();
  var Dt = /\r/g,
      jt = /[\x20\t\r\n\f]+/g;
  pe.fn.extend({
    val: function val(e) {
      var t,
          n,
          r,
          i = this[0];
      {
        if (arguments.length) return r = pe.isFunction(e), this.each(function (n) {
          var i;
          1 === this.nodeType && (i = r ? e.call(this, n, pe(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : pe.isArray(i) && (i = pe.map(i, function (e) {
            return null == e ? "" : e + "";
          })), t = pe.valHooks[this.type] || pe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
        });
        if (i) return t = pe.valHooks[i.type] || pe.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(Dt, "") : null == n ? "" : n);
      }
    }
  }), pe.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = pe.find.attr(e, "value");
          return null != t ? t : pe.trim(pe.text(e)).replace(jt, " ");
        }
      },
      select: {
        get: function get(e) {
          for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, u = i < 0 ? s : o ? i : 0; u < s; u++) {
            if (n = r[u], (n.selected || u === i) && (fe.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !pe.nodeName(n.parentNode, "optgroup"))) {
              if (t = pe(n).val(), o) return t;
              a.push(t);
            }
          }

          return a;
        },
        set: function set(e, t) {
          for (var n, r, i = e.options, o = pe.makeArray(t), a = i.length; a--;) {
            if (r = i[a], pe.inArray(pe.valHooks.option.get(r), o) > -1) try {
              r.selected = n = !0;
            } catch (s) {
              r.scrollHeight;
            } else r.selected = !1;
          }

          return n || (e.selectedIndex = -1), i;
        }
      }
    }
  }), pe.each(["radio", "checkbox"], function () {
    pe.valHooks[this] = {
      set: function set(e, t) {
        if (pe.isArray(t)) return e.checked = pe.inArray(pe(e).val(), t) > -1;
      }
    }, fe.checkOn || (pe.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  });
  var Lt,
      Ht,
      qt = pe.expr.attrHandle,
      _t = /^(?:checked|selected)$/i,
      Ft = fe.getSetAttribute,
      Mt = fe.input;
  pe.fn.extend({
    attr: function attr(e, t) {
      return Pe(this, pe.attr, e, t, arguments.length > 1);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        pe.removeAttr(this, e);
      });
    }
  }), pe.extend({
    attr: function attr(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? pe.prop(e, t, n) : (1 === o && pe.isXMLDoc(e) || (t = t.toLowerCase(), i = pe.attrHooks[t] || (pe.expr.match.bool.test(t) ? Ht : Lt)), void 0 !== n ? null === n ? void pe.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = pe.find.attr(e, t), null == r ? void 0 : r));
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!fe.radioValue && "radio" === t && pe.nodeName(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function removeAttr(e, t) {
      var n,
          r,
          i = 0,
          o = t && t.match(De);
      if (o && 1 === e.nodeType) for (; n = o[i++];) {
        r = pe.propFix[n] || n, pe.expr.match.bool.test(n) ? Mt && Ft || !_t.test(n) ? e[r] = !1 : e[pe.camelCase("default-" + n)] = e[r] = !1 : pe.attr(e, n, ""), e.removeAttribute(Ft ? n : r);
      }
    }
  }), Ht = {
    set: function set(e, t, n) {
      return t === !1 ? pe.removeAttr(e, n) : Mt && Ft || !_t.test(n) ? e.setAttribute(!Ft && pe.propFix[n] || n, n) : e[pe.camelCase("default-" + n)] = e[n] = !0, n;
    }
  }, pe.each(pe.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = qt[t] || pe.find.attr;
    Mt && Ft || !_t.test(t) ? qt[t] = function (e, t, r) {
      var i, o;
      return r || (o = qt[t], qt[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, qt[t] = o), i;
    } : qt[t] = function (e, t, n) {
      if (!n) return e[pe.camelCase("default-" + t)] ? t.toLowerCase() : null;
    };
  }), Mt && Ft || (pe.attrHooks.value = {
    set: function set(e, t, n) {
      return pe.nodeName(e, "input") ? void (e.defaultValue = t) : Lt && Lt.set(e, t, n);
    }
  }), Ft || (Lt = {
    set: function set(e, t, n) {
      var r = e.getAttributeNode(n);
      if (r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n)) return t;
    }
  }, qt.id = qt.name = qt.coords = function (e, t, n) {
    var r;
    if (!n) return (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null;
  }, pe.valHooks.button = {
    get: function get(e, t) {
      var n = e.getAttributeNode(t);
      if (n && n.specified) return n.value;
    },
    set: Lt.set
  }, pe.attrHooks.contenteditable = {
    set: function set(e, t, n) {
      Lt.set(e, "" !== t && t, n);
    }
  }, pe.each(["width", "height"], function (e, t) {
    pe.attrHooks[t] = {
      set: function set(e, n) {
        if ("" === n) return e.setAttribute(t, "auto"), n;
      }
    };
  })), fe.style || (pe.attrHooks.style = {
    get: function get(e) {
      return e.style.cssText || void 0;
    },
    set: function set(e, t) {
      return e.style.cssText = t + "";
    }
  });
  var Ot = /^(?:input|select|textarea|button|object)$/i,
      Rt = /^(?:a|area)$/i;
  pe.fn.extend({
    prop: function prop(e, t) {
      return Pe(this, pe.prop, e, t, arguments.length > 1);
    },
    removeProp: function removeProp(e) {
      return e = pe.propFix[e] || e, this.each(function () {
        try {
          this[e] = void 0, delete this[e];
        } catch (t) {}
      });
    }
  }), pe.extend({
    prop: function prop(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && pe.isXMLDoc(e) || (t = pe.propFix[t] || t, i = pe.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var t = pe.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : Ot.test(e.nodeName) || Rt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), fe.hrefNormalized || pe.each(["href", "src"], function (e, t) {
    pe.propHooks[t] = {
      get: function get(e) {
        return e.getAttribute(t, 4);
      }
    };
  }), fe.optSelected || (pe.propHooks.selected = {
    get: function get(e) {
      var t = e.parentNode;
      return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
    },
    set: function set(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), pe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    pe.propFix[this.toLowerCase()] = this;
  }), fe.enctype || (pe.propFix.enctype = "encoding");
  var Pt = /[\t\r\n\f]/g;
  pe.fn.extend({
    addClass: function addClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (pe.isFunction(e)) return this.each(function (t) {
        pe(this).addClass(e.call(this, t, z(this)));
      });
      if ("string" == typeof e && e) for (t = e.match(De) || []; n = this[u++];) {
        if (i = z(n), r = 1 === n.nodeType && (" " + i + " ").replace(Pt, " ")) {
          for (a = 0; o = t[a++];) {
            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
          }

          s = pe.trim(r), i !== s && pe.attr(n, "class", s);
        }
      }
      return this;
    },
    removeClass: function removeClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (pe.isFunction(e)) return this.each(function (t) {
        pe(this).removeClass(e.call(this, t, z(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof e && e) for (t = e.match(De) || []; n = this[u++];) {
        if (i = z(n), r = 1 === n.nodeType && (" " + i + " ").replace(Pt, " ")) {
          for (a = 0; o = t[a++];) {
            for (; r.indexOf(" " + o + " ") > -1;) {
              r = r.replace(" " + o + " ", " ");
            }
          }

          s = pe.trim(r), i !== s && pe.attr(n, "class", s);
        }
      }
      return this;
    },
    toggleClass: function toggleClass(e, t) {
      var n = _typeof(e);

      return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : pe.isFunction(e) ? this.each(function (n) {
        pe(this).toggleClass(e.call(this, n, z(this), t), t);
      }) : this.each(function () {
        var t, r, i, o;
        if ("string" === n) for (r = 0, i = pe(this), o = e.match(De) || []; t = o[r++];) {
          i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
        } else void 0 !== e && "boolean" !== n || (t = z(this), t && pe._data(this, "__className__", t), pe.attr(this, "class", t || e === !1 ? "" : pe._data(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(e) {
      var t,
          n,
          r = 0;

      for (t = " " + e + " "; n = this[r++];) {
        if (1 === n.nodeType && (" " + z(n) + " ").replace(Pt, " ").indexOf(t) > -1) return !0;
      }

      return !1;
    }
  }), pe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
    pe.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), pe.fn.extend({
    hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  });
  var Bt = e.location,
      Wt = pe.now(),
      It = /\?/,
      $t = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  pe.parseJSON = function (t) {
    if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
    var n,
        r = null,
        i = pe.trim(t + "");
    return i && !pe.trim(i.replace($t, function (e, t, i, o) {
      return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !o - !i, "");
    })) ? Function("return " + i)() : pe.error("Invalid JSON: " + t);
  }, pe.parseXML = function (t) {
    var n, r;
    if (!t || "string" != typeof t) return null;

    try {
      e.DOMParser ? (r = new e.DOMParser(), n = r.parseFromString(t, "text/xml")) : (n = new e.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t));
    } catch (i) {
      n = void 0;
    }

    return n && n.documentElement && !n.getElementsByTagName("parsererror").length || pe.error("Invalid XML: " + t), n;
  };
  var zt = /#.*$/,
      Xt = /([?&])_=[^&]*/,
      Ut = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      Vt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Yt = /^(?:GET|HEAD)$/,
      Jt = /^\/\//,
      Gt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      Kt = {},
      Qt = {},
      Zt = "*/".concat("*"),
      en = Bt.href,
      tn = Gt.exec(en.toLowerCase()) || [];
  pe.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: en,
      type: "GET",
      isLocal: Vt.test(tn[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Zt,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": pe.parseJSON,
        "text xml": pe.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? V(V(e, pe.ajaxSettings), t) : V(pe.ajaxSettings, e);
    },
    ajaxPrefilter: X(Kt),
    ajaxTransport: X(Qt),
    ajax: function ajax(t, n) {
      function r(t, n, r, i) {
        var o,
            f,
            v,
            x,
            w,
            C = n;
        2 !== b && (b = 2, u && e.clearTimeout(u), c = void 0, s = i || "", T.readyState = t > 0 ? 4 : 0, o = t >= 200 && t < 300 || 304 === t, r && (x = Y(d, T, r)), x = J(d, x, T, o), o ? (d.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (pe.lastModified[a] = w), w = T.getResponseHeader("etag"), w && (pe.etag[a] = w)), 204 === t || "HEAD" === d.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = x.state, f = x.data, v = x.error, o = !v)) : (v = C, !t && C || (C = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (n || C) + "", o ? g.resolveWith(p, [f, C, T]) : g.rejectWith(p, [T, C, v]), T.statusCode(y), y = void 0, l && h.trigger(o ? "ajaxSuccess" : "ajaxError", [T, d, o ? f : v]), m.fireWith(p, [T, C]), l && (h.trigger("ajaxComplete", [T, d]), --pe.active || pe.event.trigger("ajaxStop")));
      }

      "object" == _typeof(t) && (n = t, t = void 0), n = n || {};
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          d = pe.ajaxSetup({}, n),
          p = d.context || d,
          h = d.context && (p.nodeType || p.jquery) ? pe(p) : pe.event,
          g = pe.Deferred(),
          m = pe.Callbacks("once memory"),
          y = d.statusCode || {},
          v = {},
          x = {},
          b = 0,
          w = "canceled",
          T = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(e) {
          var t;

          if (2 === b) {
            if (!f) for (f = {}; t = Ut.exec(s);) {
              f[t[1].toLowerCase()] = t[2];
            }
            t = f[e.toLowerCase()];
          }

          return null == t ? null : t;
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return 2 === b ? s : null;
        },
        setRequestHeader: function setRequestHeader(e, t) {
          var n = e.toLowerCase();
          return b || (e = x[n] = x[n] || e, v[e] = t), this;
        },
        overrideMimeType: function overrideMimeType(e) {
          return b || (d.mimeType = e), this;
        },
        statusCode: function statusCode(e) {
          var t;
          if (e) if (b < 2) for (t in e) {
            y[t] = [y[t], e[t]];
          } else T.always(e[T.status]);
          return this;
        },
        abort: function abort(e) {
          var t = e || w;
          return c && c.abort(t), r(0, t), this;
        }
      };
      if (g.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, d.url = ((t || d.url || en) + "").replace(zt, "").replace(Jt, tn[1] + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = pe.trim(d.dataType || "*").toLowerCase().match(De) || [""], null == d.crossDomain && (i = Gt.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === tn[1] && i[2] === tn[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (tn[3] || ("http:" === tn[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = pe.param(d.data, d.traditional)), U(Kt, d, n, T), 2 === b) return T;
      l = pe.event && d.global, l && 0 === pe.active++ && pe.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Yt.test(d.type), a = d.url, d.hasContent || (d.data && (a = d.url += (It.test(a) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Xt.test(a) ? a.replace(Xt, "$1_=" + Wt++) : a + (It.test(a) ? "&" : "?") + "_=" + Wt++)), d.ifModified && (pe.lastModified[a] && T.setRequestHeader("If-Modified-Since", pe.lastModified[a]), pe.etag[a] && T.setRequestHeader("If-None-Match", pe.etag[a])), (d.data && d.hasContent && d.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", d.contentType), T.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Zt + "; q=0.01" : "") : d.accepts["*"]);

      for (o in d.headers) {
        T.setRequestHeader(o, d.headers[o]);
      }

      if (d.beforeSend && (d.beforeSend.call(p, T, d) === !1 || 2 === b)) return T.abort();
      w = "abort";

      for (o in {
        success: 1,
        error: 1,
        complete: 1
      }) {
        T[o](d[o]);
      }

      if (c = U(Qt, d, n, T)) {
        if (T.readyState = 1, l && h.trigger("ajaxSend", [T, d]), 2 === b) return T;
        d.async && d.timeout > 0 && (u = e.setTimeout(function () {
          T.abort("timeout");
        }, d.timeout));

        try {
          b = 1, c.send(v, r);
        } catch (C) {
          if (!(b < 2)) throw C;
          r(-1, C);
        }
      } else r(-1, "No Transport");

      return T;
    },
    getJSON: function getJSON(e, t, n) {
      return pe.get(e, t, n, "json");
    },
    getScript: function getScript(e, t) {
      return pe.get(e, void 0, t, "script");
    }
  }), pe.each(["get", "post"], function (e, t) {
    pe[t] = function (e, n, r, i) {
      return pe.isFunction(n) && (i = i || r, r = n, n = void 0), pe.ajax(pe.extend({
        url: e,
        type: t,
        dataType: i,
        data: n,
        success: r
      }, pe.isPlainObject(e) && e));
    };
  }), pe._evalUrl = function (e) {
    return pe.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      "throws": !0
    });
  }, pe.fn.extend({
    wrapAll: function wrapAll(e) {
      if (pe.isFunction(e)) return this.each(function (t) {
        pe(this).wrapAll(e.call(this, t));
      });

      if (this[0]) {
        var t = pe(e, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
          for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) {
            e = e.firstChild;
          }

          return e;
        }).append(this);
      }

      return this;
    },
    wrapInner: function wrapInner(e) {
      return pe.isFunction(e) ? this.each(function (t) {
        pe(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = pe(this),
            n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e);
      });
    },
    wrap: function wrap(e) {
      var t = pe.isFunction(e);
      return this.each(function (n) {
        pe(this).wrapAll(t ? e.call(this, n) : e);
      });
    },
    unwrap: function unwrap() {
      return this.parent().each(function () {
        pe.nodeName(this, "body") || pe(this).replaceWith(this.childNodes);
      }).end();
    }
  }), pe.expr.filters.hidden = function (e) {
    return fe.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : K(e);
  }, pe.expr.filters.visible = function (e) {
    return !pe.expr.filters.hidden(e);
  };
  var nn = /%20/g,
      rn = /\[\]$/,
      on = /\r?\n/g,
      an = /^(?:submit|button|image|reset|file)$/i,
      sn = /^(?:input|select|textarea|keygen)/i;
  pe.param = function (e, t) {
    var n,
        r = [],
        i = function i(e, t) {
      t = pe.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
    };

    if (void 0 === t && (t = pe.ajaxSettings && pe.ajaxSettings.traditional), pe.isArray(e) || e.jquery && !pe.isPlainObject(e)) pe.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) {
      Q(n, e[n], t, i);
    }
    return r.join("&").replace(nn, "+");
  }, pe.fn.extend({
    serialize: function serialize() {
      return pe.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = pe.prop(this, "elements");
        return e ? pe.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !pe(this).is(":disabled") && sn.test(this.nodeName) && !an.test(e) && (this.checked || !Be.test(e));
      }).map(function (e, t) {
        var n = pe(this).val();
        return null == n ? null : pe.isArray(n) ? pe.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(on, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(on, "\r\n")
        };
      }).get();
    }
  }), pe.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function () {
    return this.isLocal ? ee() : re.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || ee();
  } : Z;
  var un = 0,
      ln = {},
      cn = pe.ajaxSettings.xhr();
  e.attachEvent && e.attachEvent("onunload", function () {
    for (var e in ln) {
      ln[e](void 0, !0);
    }
  }), fe.cors = !!cn && "withCredentials" in cn, cn = fe.ajax = !!cn, cn && pe.ajaxTransport(function (t) {
    if (!t.crossDomain || fe.cors) {
      var _n2;

      return {
        send: function send(r, i) {
          var o,
              a = t.xhr(),
              s = ++un;
          if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (o in t.xhrFields) {
            a[o] = t.xhrFields[o];
          }
          t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");

          for (o in r) {
            void 0 !== r[o] && a.setRequestHeader(o, r[o] + "");
          }

          a.send(t.hasContent && t.data || null), _n2 = function n(e, r) {
            var o, u, l;
            if (_n2 && (r || 4 === a.readyState)) if (delete ln[s], _n2 = void 0, a.onreadystatechange = pe.noop, r) 4 !== a.readyState && a.abort();else {
              l = {}, o = a.status, "string" == typeof a.responseText && (l.text = a.responseText);

              try {
                u = a.statusText;
              } catch (c) {
                u = "";
              }

              o || !t.isLocal || t.crossDomain ? 1223 === o && (o = 204) : o = l.text ? 200 : 404;
            }
            l && i(o, u, l, a.getAllResponseHeaders());
          }, t.async ? 4 === a.readyState ? e.setTimeout(_n2) : a.onreadystatechange = ln[s] = _n2 : _n2();
        },
        abort: function abort() {
          _n2 && _n2(void 0, !0);
        }
      };
    }
  }), pe.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(e) {
        return pe.globalEval(e), e;
      }
    }
  }), pe.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
  }), pe.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var t,
          n = re.head || pe("head")[0] || re.documentElement;
      return {
        send: function send(r, i) {
          t = re.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, n) {
            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"));
          }, n.insertBefore(t, n.firstChild);
        },
        abort: function abort() {
          t && t.onload(void 0, !0);
        }
      };
    }
  });
  var fn = [],
      dn = /(=)\?(?=&|$)|\?\?/;
  pe.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = fn.pop() || pe.expando + "_" + Wt++;
      return this[e] = !0, e;
    }
  }), pe.ajaxPrefilter("json jsonp", function (t, n, r) {
    var i,
        o,
        a,
        s = t.jsonp !== !1 && (dn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && dn.test(t.data) && "data");
    if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = pe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(dn, "$1" + i) : t.jsonp !== !1 && (t.url += (It.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
      return a || pe.error(i + " was not called"), a[0];
    }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
      a = arguments;
    }, r.always(function () {
      void 0 === o ? pe(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, fn.push(i)), a && pe.isFunction(o) && o(a[0]), a = o = void 0;
    }), "script";
  }), pe.parseHTML = function (e, t, n) {
    if (!e || "string" != typeof e) return null;
    "boolean" == typeof t && (n = t, t = !1), t = t || re;
    var r = Te.exec(e),
        i = !n && [];
    return r ? [t.createElement(r[1])] : (r = y([e], t, i), i && i.length && pe(i).remove(), pe.merge([], r.childNodes));
  };
  var pn = pe.fn.load;
  return pe.fn.load = function (e, t, n) {
    if ("string" != typeof e && pn) return pn.apply(this, arguments);
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
    return s > -1 && (r = pe.trim(e.slice(s, e.length)), e = e.slice(0, s)), pe.isFunction(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (i = "POST"), a.length > 0 && pe.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? pe("<div>").append(pe.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, pe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    pe.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), pe.expr.filters.animated = function (e) {
    return pe.grep(pe.timers, function (t) {
      return e === t.elem;
    }).length;
  }, pe.offset = {
    setOffset: function setOffset(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = pe.css(e, "position"),
          f = pe(e),
          d = {};
      "static" === c && (e.style.position = "relative"), s = f.offset(), o = pe.css(e, "top"), u = pe.css(e, "left"), l = ("absolute" === c || "fixed" === c) && pe.inArray("auto", [o, u]) > -1, l ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + i), "using" in t ? t.using.call(e, d) : f.css(d);
    }
  }, pe.fn.extend({
    offset: function offset(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        pe.offset.setOffset(this, e, t);
      });
      var t,
          n,
          r = {
        top: 0,
        left: 0
      },
          i = this[0],
          o = i && i.ownerDocument;
      if (o) return t = o.documentElement, pe.contains(t, i) ? ("undefined" != typeof i.getBoundingClientRect && (r = i.getBoundingClientRect()), n = te(o), {
        top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
        left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
      }) : r;
    },
    position: function position() {
      if (this[0]) {
        var e,
            t,
            n = {
          top: 0,
          left: 0
        },
            r = this[0];
        return "fixed" === pe.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), pe.nodeName(e[0], "html") || (n = e.offset()), n.top += pe.css(e[0], "borderTopWidth", !0), n.left += pe.css(e[0], "borderLeftWidth", !0)), {
          top: t.top - n.top - pe.css(r, "marginTop", !0),
          left: t.left - n.left - pe.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        for (var e = this.offsetParent; e && !pe.nodeName(e, "html") && "static" === pe.css(e, "position");) {
          e = e.offsetParent;
        }

        return e || pt;
      });
    }
  }), pe.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (e, t) {
    var n = /Y/.test(t);

    pe.fn[e] = function (r) {
      return Pe(this, function (e, r, i) {
        var o = te(e);
        return void 0 === i ? o ? t in o ? o[t] : o.document.documentElement[r] : e[r] : void (o ? o.scrollTo(n ? pe(o).scrollLeft() : i, n ? i : pe(o).scrollTop()) : e[r] = i);
      }, e, r, arguments.length, null);
    };
  }), pe.each(["top", "left"], function (e, t) {
    pe.cssHooks[t] = L(fe.pixelPosition, function (e, n) {
      if (n) return n = gt(e, t), ft.test(n) ? pe(e).position()[t] + "px" : n;
    });
  }), pe.each({
    Height: "height",
    Width: "width"
  }, function (e, t) {
    pe.each({
      padding: "inner" + e,
      content: t,
      "": "outer" + e
    }, function (n, r) {
      pe.fn[r] = function (r, i) {
        var o = arguments.length && (n || "boolean" != typeof r),
            a = n || (r === !0 || i === !0 ? "margin" : "border");
        return Pe(this, function (t, n, r) {
          var i;
          return pe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? pe.css(t, n, a) : pe.style(t, n, r, a);
        }, t, o ? r : void 0, o, null);
      };
    });
  }), pe.fn.extend({
    bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return this.off(e, null, t);
    },
    delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    }
  }), pe.fn.size = function () {
    return this.length;
  }, pe.fn.andSelf = pe.fn.addBack, layui.define(function (e) {
    layui.$ = pe, e("jquery", pe);
  }), pe;
});
!function (e, t) {
  "use strict";

  var i,
      n,
      a = e.layui && layui.define,
      o = {
    getPath: function () {
      var e = document.currentScript ? document.currentScript.src : function () {
        for (var e, t = document.scripts, i = t.length - 1, n = i; n > 0; n--) {
          if ("interactive" === t[n].readyState) {
            e = t[n].src;
            break;
          }
        }

        return e || t[i].src;
      }();
      return e.substring(0, e.lastIndexOf("/") + 1);
    }(),
    config: {},
    end: {},
    minIndex: 0,
    minLeft: [],
    btn: ["&#x786E;&#x5B9A;", "&#x53D6;&#x6D88;"],
    type: ["dialog", "page", "iframe", "loading", "tips"],
    getStyle: function getStyle(t, i) {
      var n = t.currentStyle ? t.currentStyle : e.getComputedStyle(t, null);
      return n[n.getPropertyValue ? "getPropertyValue" : "getAttribute"](i);
    },
    link: function link(t, i, n) {
      if (r.path) {
        var a = document.getElementsByTagName("head")[0],
            s = document.createElement("link");
        "string" == typeof i && (n = i);
        var l = (n || t).replace(/\.|\//g, ""),
            f = "layuicss-" + l,
            c = 0;
        s.rel = "stylesheet", s.href = r.path + t, s.id = f, document.getElementById(f) || a.appendChild(s), "function" == typeof i && !function u() {
          return ++c > 80 ? e.console && console.error("layer.css: Invalid") : void (1989 === parseInt(o.getStyle(document.getElementById(f), "width")) ? i() : setTimeout(u, 100));
        }();
      }
    }
  },
      r = {
    v: "3.1.1",
    ie: function () {
      var t = navigator.userAgent.toLowerCase();
      return !!(e.ActiveXObject || "ActiveXObject" in e) && ((t.match(/msie\s(\d+)/) || [])[1] || "11");
    }(),
    index: e.layer && e.layer.v ? 1e5 : 0,
    path: o.getPath,
    config: function config(e, t) {
      return e = e || {}, r.cache = o.config = i.extend({}, o.config, e), r.path = o.config.path || r.path, "string" == typeof e.extend && (e.extend = [e.extend]), o.config.path && r.ready(), e.extend ? (a ? layui.addcss("modules/layer/" + e.extend) : o.link("theme/" + e.extend), this) : this;
    },
    ready: function ready(e) {
      var t = "layer",
          i = "",
          n = (a ? "modules/layer/" : "theme/") + "default/layer.css?v=" + r.v + i;
      return a ? layui.addcss(n, e, t) : o.link(n, e, t), this;
    },
    alert: function alert(e, t, n) {
      var a = "function" == typeof t;
      return a && (n = t), r.open(i.extend({
        content: e,
        yes: n
      }, a ? {} : t));
    },
    confirm: function confirm(e, t, n, a) {
      var s = "function" == typeof t;
      return s && (a = n, n = t), r.open(i.extend({
        content: e,
        btn: o.btn,
        yes: n,
        btn2: a
      }, s ? {} : t));
    },
    msg: function msg(e, n, a) {
      var s = "function" == typeof n,
          f = o.config.skin,
          c = (f ? f + " " + f + "-msg" : "") || "layui-layer-msg",
          u = l.anim.length - 1;
      return s && (a = n), r.open(i.extend({
        content: e,
        time: 3e3,
        shade: !1,
        skin: c,
        title: !1,
        closeBtn: !1,
        btn: !1,
        resize: !1,
        end: a
      }, s && !o.config.skin ? {
        skin: c + " layui-layer-hui",
        anim: u
      } : function () {
        return n = n || {}, (n.icon === -1 || n.icon === t && !o.config.skin) && (n.skin = c + " " + (n.skin || "layui-layer-hui")), n;
      }()));
    },
    load: function load(e, t) {
      return r.open(i.extend({
        type: 3,
        icon: e || 0,
        resize: !1,
        shade: .01
      }, t));
    },
    tips: function tips(e, t, n) {
      return r.open(i.extend({
        type: 4,
        content: [e, t],
        closeBtn: !1,
        time: 3e3,
        shade: !1,
        resize: !1,
        fixed: !1,
        maxWidth: 210
      }, n));
    }
  },
      s = function s(e) {
    var t = this;
    t.index = ++r.index, t.config = i.extend({}, t.config, o.config, e), document.body ? t.creat() : setTimeout(function () {
      t.creat();
    }, 30);
  };

  s.pt = s.prototype;
  var l = ["layui-layer", ".layui-layer-title", ".layui-layer-main", ".layui-layer-dialog", "layui-layer-iframe", "layui-layer-content", "layui-layer-btn", "layui-layer-close"];
  l.anim = ["layer-anim-00", "layer-anim-01", "layer-anim-02", "layer-anim-03", "layer-anim-04", "layer-anim-05", "layer-anim-06"], s.pt.config = {
    type: 0,
    shade: .3,
    fixed: !0,
    move: l[1],
    title: "&#x4FE1;&#x606F;",
    offset: "auto",
    area: "auto",
    closeBtn: 1,
    time: 0,
    zIndex: 19891014,
    maxWidth: 360,
    anim: 0,
    isOutAnim: !0,
    icon: -1,
    moveType: 1,
    resize: !0,
    scrollbar: !0,
    tips: 2
  }, s.pt.vessel = function (e, t) {
    var n = this,
        a = n.index,
        r = n.config,
        s = r.zIndex + a,
        f = "object" == _typeof(r.title),
        c = r.maxmin && (1 === r.type || 2 === r.type),
        u = r.title ? '<div class="layui-layer-title" style="' + (f ? r.title[1] : "") + '">' + (f ? r.title[0] : r.title) + "</div>" : "";

    return r.zIndex = s, t([r.shade ? '<div class="layui-layer-shade" id="layui-layer-shade' + a + '" times="' + a + '" style="' + ("z-index:" + (s - 1) + "; ") + '"></div>' : "", '<div class="' + l[0] + (" layui-layer-" + o.type[r.type]) + (0 != r.type && 2 != r.type || r.shade ? "" : " layui-layer-border") + " " + (r.skin || "") + '" id="' + l[0] + a + '" type="' + o.type[r.type] + '" times="' + a + '" showtime="' + r.time + '" conType="' + (e ? "object" : "string") + '" style="z-index: ' + s + "; width:" + r.area[0] + ";height:" + r.area[1] + (r.fixed ? "" : ";position:absolute;") + '">' + (e && 2 != r.type ? "" : u) + '<div id="' + (r.id || "") + '" class="layui-layer-content' + (0 == r.type && r.icon !== -1 ? " layui-layer-padding" : "") + (3 == r.type ? " layui-layer-loading" + r.icon : "") + '">' + (0 == r.type && r.icon !== -1 ? '<i class="layui-layer-ico layui-layer-ico' + r.icon + '"></i>' : "") + (1 == r.type && e ? "" : r.content || "") + '</div><span class="layui-layer-setwin">' + function () {
      var e = c ? '<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>' : "";
      return r.closeBtn && (e += '<a class="layui-layer-ico ' + l[7] + " " + l[7] + (r.title ? r.closeBtn : 4 == r.type ? "1" : "2") + '" href="javascript:;"></a>'), e;
    }() + "</span>" + (r.btn ? function () {
      var e = "";
      "string" == typeof r.btn && (r.btn = [r.btn]);

      for (var t = 0, i = r.btn.length; t < i; t++) {
        e += '<a class="' + l[6] + t + '">' + r.btn[t] + "</a>";
      }

      return '<div class="' + l[6] + " layui-layer-btn-" + (r.btnAlign || "") + '">' + e + "</div>";
    }() : "") + (r.resize ? '<span class="layui-layer-resize"></span>' : "") + "</div>"], u, i('<div class="layui-layer-move"></div>')), n;
  }, s.pt.creat = function () {
    var e = this,
        t = e.config,
        a = e.index,
        s = t.content,
        f = "object" == _typeof(s),
        c = i("body");

    if (!t.id || !i("#" + t.id)[0]) {
      switch ("string" == typeof t.area && (t.area = "auto" === t.area ? ["", ""] : [t.area, ""]), t.shift && (t.anim = t.shift), 6 == r.ie && (t.fixed = !1), t.type) {
        case 0:
          t.btn = "btn" in t ? t.btn : o.btn[0], r.closeAll("dialog");
          break;

        case 2:
          var s = t.content = f ? t.content : [t.content || "", "auto"];
          t.content = '<iframe scrolling="' + (t.content[1] || "auto") + '" allowtransparency="true" id="' + l[4] + a + '" name="' + l[4] + a + '" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="' + t.content[0] + '"></iframe>';
          break;

        case 3:
          delete t.title, delete t.closeBtn, t.icon === -1 && 0 === t.icon, r.closeAll("loading");
          break;

        case 4:
          f || (t.content = [t.content, "body"]), t.follow = t.content[1], t.content = t.content[0] + '<i class="layui-layer-TipsG"></i>', delete t.title, t.tips = "object" == _typeof(t.tips) ? t.tips : [t.tips, !0], t.tipsMore || r.closeAll("tips");
      }

      if (e.vessel(f, function (n, r, u) {
        c.append(n[0]), f ? function () {
          2 == t.type || 4 == t.type ? function () {
            i("body").append(n[1]);
          }() : function () {
            s.parents("." + l[0])[0] || (s.data("display", s.css("display")).show().addClass("layui-layer-wrap").wrap(n[1]), i("#" + l[0] + a).find("." + l[5]).before(r));
          }();
        }() : c.append(n[1]), i(".layui-layer-move")[0] || c.append(o.moveElem = u), e.layero = i("#" + l[0] + a), t.scrollbar || l.html.css("overflow", "hidden").attr("layer-full", a);
      }).auto(a), i("#layui-layer-shade" + e.index).css({
        "background-color": t.shade[1] || "#000",
        opacity: t.shade[0] || t.shade
      }), 2 == t.type && 6 == r.ie && e.layero.find("iframe").attr("src", s[0]), 4 == t.type ? e.tips() : e.offset(), t.fixed && n.on("resize", function () {
        e.offset(), (/^\d+%$/.test(t.area[0]) || /^\d+%$/.test(t.area[1])) && e.auto(a), 4 == t.type && e.tips();
      }), t.time <= 0 || setTimeout(function () {
        r.close(e.index);
      }, t.time), e.move().callback(), l.anim[t.anim]) {
        var u = "layer-anim " + l.anim[t.anim];
        e.layero.addClass(u).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
          i(this).removeClass(u);
        });
      }

      t.isOutAnim && e.layero.data("isOutAnim", !0);
    }
  }, s.pt.auto = function (e) {
    var t = this,
        a = t.config,
        o = i("#" + l[0] + e);
    "" === a.area[0] && a.maxWidth > 0 && (r.ie && r.ie < 8 && a.btn && o.width(o.innerWidth()), o.outerWidth() > a.maxWidth && o.width(a.maxWidth));

    var s = [o.innerWidth(), o.innerHeight()],
        f = o.find(l[1]).outerHeight() || 0,
        c = o.find("." + l[6]).outerHeight() || 0,
        u = function u(e) {
      e = o.find(e), e.height(s[1] - f - c - 2 * (0 | parseFloat(e.css("padding-top"))));
    };

    switch (a.type) {
      case 2:
        u("iframe");
        break;

      default:
        "" === a.area[1] ? a.maxHeight > 0 && o.outerHeight() > a.maxHeight ? (s[1] = a.maxHeight, u("." + l[5])) : a.fixed && s[1] >= n.height() && (s[1] = n.height(), u("." + l[5])) : u("." + l[5]);
    }

    return t;
  }, s.pt.offset = function () {
    var e = this,
        t = e.config,
        i = e.layero,
        a = [i.outerWidth(), i.outerHeight()],
        o = "object" == _typeof(t.offset);

    e.offsetTop = (n.height() - a[1]) / 2, e.offsetLeft = (n.width() - a[0]) / 2, o ? (e.offsetTop = t.offset[0], e.offsetLeft = t.offset[1] || e.offsetLeft) : "auto" !== t.offset && ("t" === t.offset ? e.offsetTop = 0 : "r" === t.offset ? e.offsetLeft = n.width() - a[0] : "b" === t.offset ? e.offsetTop = n.height() - a[1] : "l" === t.offset ? e.offsetLeft = 0 : "lt" === t.offset ? (e.offsetTop = 0, e.offsetLeft = 0) : "lb" === t.offset ? (e.offsetTop = n.height() - a[1], e.offsetLeft = 0) : "rt" === t.offset ? (e.offsetTop = 0, e.offsetLeft = n.width() - a[0]) : "rb" === t.offset ? (e.offsetTop = n.height() - a[1], e.offsetLeft = n.width() - a[0]) : e.offsetTop = t.offset), t.fixed || (e.offsetTop = /%$/.test(e.offsetTop) ? n.height() * parseFloat(e.offsetTop) / 100 : parseFloat(e.offsetTop), e.offsetLeft = /%$/.test(e.offsetLeft) ? n.width() * parseFloat(e.offsetLeft) / 100 : parseFloat(e.offsetLeft), e.offsetTop += n.scrollTop(), e.offsetLeft += n.scrollLeft()), i.attr("minLeft") && (e.offsetTop = n.height() - (i.find(l[1]).outerHeight() || 0), e.offsetLeft = i.css("left")), i.css({
      top: e.offsetTop,
      left: e.offsetLeft
    });
  }, s.pt.tips = function () {
    var e = this,
        t = e.config,
        a = e.layero,
        o = [a.outerWidth(), a.outerHeight()],
        r = i(t.follow);
    r[0] || (r = i("body"));
    var s = {
      width: r.outerWidth(),
      height: r.outerHeight(),
      top: r.offset().top,
      left: r.offset().left
    },
        f = a.find(".layui-layer-TipsG"),
        c = t.tips[0];
    t.tips[1] || f.remove(), s.autoLeft = function () {
      s.left + o[0] - n.width() > 0 ? (s.tipLeft = s.left + s.width - o[0], f.css({
        right: 12,
        left: "auto"
      })) : s.tipLeft = s.left;
    }, s.where = [function () {
      s.autoLeft(), s.tipTop = s.top - o[1] - 10, f.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color", t.tips[1]);
    }, function () {
      s.tipLeft = s.left + s.width + 10, s.tipTop = s.top, f.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color", t.tips[1]);
    }, function () {
      s.autoLeft(), s.tipTop = s.top + s.height + 10, f.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color", t.tips[1]);
    }, function () {
      s.tipLeft = s.left - o[0] - 10, s.tipTop = s.top, f.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color", t.tips[1]);
    }], s.where[c - 1](), 1 === c ? s.top - (n.scrollTop() + o[1] + 16) < 0 && s.where[2]() : 2 === c ? n.width() - (s.left + s.width + o[0] + 16) > 0 || s.where[3]() : 3 === c ? s.top - n.scrollTop() + s.height + o[1] + 16 - n.height() > 0 && s.where[0]() : 4 === c && o[0] + 16 - s.left > 0 && s.where[1](), a.find("." + l[5]).css({
      "background-color": t.tips[1],
      "padding-right": t.closeBtn ? "30px" : ""
    }), a.css({
      left: s.tipLeft - (t.fixed ? n.scrollLeft() : 0),
      top: s.tipTop - (t.fixed ? n.scrollTop() : 0)
    });
  }, s.pt.move = function () {
    var e = this,
        t = e.config,
        a = i(document),
        s = e.layero,
        l = s.find(t.move),
        f = s.find(".layui-layer-resize"),
        c = {};
    return t.move && l.css("cursor", "move"), l.on("mousedown", function (e) {
      e.preventDefault(), t.move && (c.moveStart = !0, c.offset = [e.clientX - parseFloat(s.css("left")), e.clientY - parseFloat(s.css("top"))], o.moveElem.css("cursor", "move").show());
    }), f.on("mousedown", function (e) {
      e.preventDefault(), c.resizeStart = !0, c.offset = [e.clientX, e.clientY], c.area = [s.outerWidth(), s.outerHeight()], o.moveElem.css("cursor", "se-resize").show();
    }), a.on("mousemove", function (i) {
      if (c.moveStart) {
        var a = i.clientX - c.offset[0],
            o = i.clientY - c.offset[1],
            l = "fixed" === s.css("position");

        if (i.preventDefault(), c.stX = l ? 0 : n.scrollLeft(), c.stY = l ? 0 : n.scrollTop(), !t.moveOut) {
          var f = n.width() - s.outerWidth() + c.stX,
              u = n.height() - s.outerHeight() + c.stY;
          a < c.stX && (a = c.stX), a > f && (a = f), o < c.stY && (o = c.stY), o > u && (o = u);
        }

        s.css({
          left: a,
          top: o
        });
      }

      if (t.resize && c.resizeStart) {
        var a = i.clientX - c.offset[0],
            o = i.clientY - c.offset[1];
        i.preventDefault(), r.style(e.index, {
          width: c.area[0] + a,
          height: c.area[1] + o
        }), c.isResize = !0, t.resizing && t.resizing(s);
      }
    }).on("mouseup", function (e) {
      c.moveStart && (delete c.moveStart, o.moveElem.hide(), t.moveEnd && t.moveEnd(s)), c.resizeStart && (delete c.resizeStart, o.moveElem.hide());
    }), e;
  }, s.pt.callback = function () {
    function e() {
      var e = a.cancel && a.cancel(t.index, n);
      e === !1 || r.close(t.index);
    }

    var t = this,
        n = t.layero,
        a = t.config;
    t.openLayer(), a.success && (2 == a.type ? n.find("iframe").on("load", function () {
      a.success(n, t.index);
    }) : a.success(n, t.index)), 6 == r.ie && t.IE6(n), n.find("." + l[6]).children("a").on("click", function () {
      var e = i(this).index();
      if (0 === e) a.yes ? a.yes(t.index, n) : a.btn1 ? a.btn1(t.index, n) : r.close(t.index);else {
        var o = a["btn" + (e + 1)] && a["btn" + (e + 1)](t.index, n);
        o === !1 || r.close(t.index);
      }
    }), n.find("." + l[7]).on("click", e), a.shadeClose && i("#layui-layer-shade" + t.index).on("click", function () {
      r.close(t.index);
    }), n.find(".layui-layer-min").on("click", function () {
      var e = a.min && a.min(n);
      e === !1 || r.min(t.index, a);
    }), n.find(".layui-layer-max").on("click", function () {
      i(this).hasClass("layui-layer-maxmin") ? (r.restore(t.index), a.restore && a.restore(n)) : (r.full(t.index, a), setTimeout(function () {
        a.full && a.full(n);
      }, 100));
    }), a.end && (o.end[t.index] = a.end);
  }, o.reselect = function () {
    i.each(i("select"), function (e, t) {
      var n = i(this);
      n.parents("." + l[0])[0] || 1 == n.attr("layer") && i("." + l[0]).length < 1 && n.removeAttr("layer").show(), n = null;
    });
  }, s.pt.IE6 = function (e) {
    i("select").each(function (e, t) {
      var n = i(this);
      n.parents("." + l[0])[0] || "none" === n.css("display") || n.attr({
        layer: "1"
      }).hide(), n = null;
    });
  }, s.pt.openLayer = function () {
    var e = this;
    r.zIndex = e.config.zIndex, r.setTop = function (e) {
      var t = function t() {
        r.zIndex++, e.css("z-index", r.zIndex + 1);
      };

      return r.zIndex = parseInt(e[0].style.zIndex), e.on("mousedown", t), r.zIndex;
    };
  }, o.record = function (e) {
    var t = [e.width(), e.height(), e.position().top, e.position().left + parseFloat(e.css("margin-left"))];
    e.find(".layui-layer-max").addClass("layui-layer-maxmin"), e.attr({
      area: t
    });
  }, o.rescollbar = function (e) {
    l.html.attr("layer-full") == e && (l.html[0].style.removeProperty ? l.html[0].style.removeProperty("overflow") : l.html[0].style.removeAttribute("overflow"), l.html.removeAttr("layer-full"));
  }, e.layer = r, r.getChildFrame = function (e, t) {
    return t = t || i("." + l[4]).attr("times"), i("#" + l[0] + t).find("iframe").contents().find(e);
  }, r.getFrameIndex = function (e) {
    return i("#" + e).parents("." + l[4]).attr("times");
  }, r.iframeAuto = function (e) {
    if (e) {
      var t = r.getChildFrame("html", e).outerHeight(),
          n = i("#" + l[0] + e),
          a = n.find(l[1]).outerHeight() || 0,
          o = n.find("." + l[6]).outerHeight() || 0;
      n.css({
        height: t + a + o
      }), n.find("iframe").css({
        height: t
      });
    }
  }, r.iframeSrc = function (e, t) {
    i("#" + l[0] + e).find("iframe").attr("src", t);
  }, r.style = function (e, t, n) {
    var a = i("#" + l[0] + e),
        r = a.find(".layui-layer-content"),
        s = a.attr("type"),
        f = a.find(l[1]).outerHeight() || 0,
        c = a.find("." + l[6]).outerHeight() || 0;
    a.attr("minLeft");
    s !== o.type[3] && s !== o.type[4] && (n || (parseFloat(t.width) <= 260 && (t.width = 260), parseFloat(t.height) - f - c <= 64 && (t.height = 64 + f + c)), a.css(t), c = a.find("." + l[6]).outerHeight(), s === o.type[2] ? a.find("iframe").css({
      height: parseFloat(t.height) - f - c
    }) : r.css({
      height: parseFloat(t.height) - f - c - parseFloat(r.css("padding-top")) - parseFloat(r.css("padding-bottom"))
    }));
  }, r.min = function (e, t) {
    var a = i("#" + l[0] + e),
        s = a.find(l[1]).outerHeight() || 0,
        f = a.attr("minLeft") || 181 * o.minIndex + "px",
        c = a.css("position");
    o.record(a), o.minLeft[0] && (f = o.minLeft[0], o.minLeft.shift()), a.attr("position", c), r.style(e, {
      width: 180,
      height: s,
      left: f,
      top: n.height() - s,
      position: "fixed",
      overflow: "hidden"
    }, !0), a.find(".layui-layer-min").hide(), "page" === a.attr("type") && a.find(l[4]).hide(), o.rescollbar(e), a.attr("minLeft") || o.minIndex++, a.attr("minLeft", f);
  }, r.restore = function (e) {
    var t = i("#" + l[0] + e),
        n = t.attr("area").split(",");
    t.attr("type");
    r.style(e, {
      width: parseFloat(n[0]),
      height: parseFloat(n[1]),
      top: parseFloat(n[2]),
      left: parseFloat(n[3]),
      position: t.attr("position"),
      overflow: "visible"
    }, !0), t.find(".layui-layer-max").removeClass("layui-layer-maxmin"), t.find(".layui-layer-min").show(), "page" === t.attr("type") && t.find(l[4]).show(), o.rescollbar(e);
  }, r.full = function (e) {
    var t,
        a = i("#" + l[0] + e);
    o.record(a), l.html.attr("layer-full") || l.html.css("overflow", "hidden").attr("layer-full", e), clearTimeout(t), t = setTimeout(function () {
      var t = "fixed" === a.css("position");
      r.style(e, {
        top: t ? 0 : n.scrollTop(),
        left: t ? 0 : n.scrollLeft(),
        width: n.width(),
        height: n.height()
      }, !0), a.find(".layui-layer-min").hide();
    }, 100);
  }, r.title = function (e, t) {
    var n = i("#" + l[0] + (t || r.index)).find(l[1]);
    n.html(e);
  }, r.close = function (e) {
    var t = i("#" + l[0] + e),
        n = t.attr("type"),
        a = "layer-anim-close";

    if (t[0]) {
      var s = "layui-layer-wrap",
          f = function f() {
        if (n === o.type[1] && "object" === t.attr("conType")) {
          t.children(":not(." + l[5] + ")").remove();

          for (var a = t.find("." + s), r = 0; r < 2; r++) {
            a.unwrap();
          }

          a.css("display", a.data("display")).removeClass(s);
        } else {
          if (n === o.type[2]) try {
            var f = i("#" + l[4] + e)[0];
            f.contentWindow.document.write(""), f.contentWindow.close(), t.find("." + l[5])[0].removeChild(f);
          } catch (c) {}
          t[0].innerHTML = "", t.remove();
        }

        "function" == typeof o.end[e] && o.end[e](), delete o.end[e];
      };

      t.data("isOutAnim") && t.addClass("layer-anim " + a), i("#layui-layer-moves, #layui-layer-shade" + e).remove(), 6 == r.ie && o.reselect(), o.rescollbar(e), t.attr("minLeft") && (o.minIndex--, o.minLeft.push(t.attr("minLeft"))), r.ie && r.ie < 10 || !t.data("isOutAnim") ? f() : setTimeout(function () {
        f();
      }, 200);
    }
  }, r.closeAll = function (e) {
    i.each(i("." + l[0]), function () {
      var t = i(this),
          n = e ? t.attr("type") === e : 1;
      n && r.close(t.attr("times")), n = null;
    });
  };

  var f = r.cache || {},
      c = function c(e) {
    return f.skin ? " " + f.skin + " " + f.skin + "-" + e : "";
  };

  r.prompt = function (e, t) {
    var a = "";

    if (e = e || {}, "function" == typeof e && (t = e), e.area) {
      var o = e.area;
      a = 'style="width: ' + o[0] + "; height: " + o[1] + ';"', delete e.area;
    }

    var s,
        l = 2 == e.formType ? '<textarea class="layui-layer-input"' + a + "></textarea>" : function () {
      return '<input type="' + (1 == e.formType ? "password" : "text") + '" class="layui-layer-input">';
    }(),
        f = e.success;
    return delete e.success, r.open(i.extend({
      type: 1,
      btn: ["&#x786E;&#x5B9A;", "&#x53D6;&#x6D88;"],
      content: l,
      skin: "layui-layer-prompt" + c("prompt"),
      maxWidth: n.width(),
      success: function success(t) {
        s = t.find(".layui-layer-input"), s.val(e.value || "").focus(), "function" == typeof f && f(t);
      },
      resize: !1,
      yes: function yes(i) {
        var n = s.val();
        "" === n ? s.focus() : n.length > (e.maxlength || 500) ? r.tips("&#x6700;&#x591A;&#x8F93;&#x5165;" + (e.maxlength || 500) + "&#x4E2A;&#x5B57;&#x6570;", s, {
          tips: 1
        }) : t && t(n, i, s);
      }
    }, e));
  }, r.tab = function (e) {
    e = e || {};
    var t = e.tab || {},
        n = "layui-this",
        a = e.success;
    return delete e.success, r.open(i.extend({
      type: 1,
      skin: "layui-layer-tab" + c("tab"),
      resize: !1,
      title: function () {
        var e = t.length,
            i = 1,
            a = "";
        if (e > 0) for (a = '<span class="' + n + '">' + t[0].title + "</span>"; i < e; i++) {
          a += "<span>" + t[i].title + "</span>";
        }
        return a;
      }(),
      content: '<ul class="layui-layer-tabmain">' + function () {
        var e = t.length,
            i = 1,
            a = "";
        if (e > 0) for (a = '<li class="layui-layer-tabli ' + n + '">' + (t[0].content || "no content") + "</li>"; i < e; i++) {
          a += '<li class="layui-layer-tabli">' + (t[i].content || "no  content") + "</li>";
        }
        return a;
      }() + "</ul>",
      success: function success(t) {
        var o = t.find(".layui-layer-title").children(),
            r = t.find(".layui-layer-tabmain").children();
        o.on("mousedown", function (t) {
          t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0;
          var a = i(this),
              o = a.index();
          a.addClass(n).siblings().removeClass(n), r.eq(o).show().siblings().hide(), "function" == typeof e.change && e.change(o);
        }), "function" == typeof a && a(t);
      }
    }, e));
  }, r.photos = function (t, n, a) {
    function o(e, t, i) {
      var n = new Image();
      return n.src = e, n.complete ? t(n) : (n.onload = function () {
        n.onload = null, t(n);
      }, void (n.onerror = function (e) {
        n.onerror = null, i(e);
      }));
    }

    var s = {};

    if (t = t || {}, t.photos) {
      var l = t.photos.constructor === Object,
          f = l ? t.photos : {},
          u = f.data || [],
          d = f.start || 0;
      s.imgIndex = (0 | d) + 1, t.img = t.img || "img";
      var y = t.success;

      if (delete t.success, l) {
        if (0 === u.length) return r.msg("&#x6CA1;&#x6709;&#x56FE;&#x7247;");
      } else {
        var p = i(t.photos),
            h = function h() {
          u = [], p.find(t.img).each(function (e) {
            var t = i(this);
            t.attr("layer-index", e), u.push({
              alt: t.attr("alt"),
              pid: t.attr("layer-pid"),
              src: t.attr("layer-src") || t.attr("src"),
              thumb: t.attr("src")
            });
          });
        };

        if (h(), 0 === u.length) return;
        if (n || p.on("click", t.img, function () {
          var e = i(this),
              n = e.attr("layer-index");
          r.photos(i.extend(t, {
            photos: {
              start: n,
              data: u,
              tab: t.tab
            },
            full: t.full
          }), !0), h();
        }), !n) return;
      }

      s.imgprev = function (e) {
        s.imgIndex--, s.imgIndex < 1 && (s.imgIndex = u.length), s.tabimg(e);
      }, s.imgnext = function (e, t) {
        s.imgIndex++, s.imgIndex > u.length && (s.imgIndex = 1, t) || s.tabimg(e);
      }, s.keyup = function (e) {
        if (!s.end) {
          var t = e.keyCode;
          e.preventDefault(), 37 === t ? s.imgprev(!0) : 39 === t ? s.imgnext(!0) : 27 === t && r.close(s.index);
        }
      }, s.tabimg = function (e) {
        if (!(u.length <= 1)) return f.start = s.imgIndex - 1, r.close(s.index), r.photos(t, !0, e);
      }, s.event = function () {
        s.bigimg.hover(function () {
          s.imgsee.show();
        }, function () {
          s.imgsee.hide();
        }), s.bigimg.find(".layui-layer-imgprev").on("click", function (e) {
          e.preventDefault(), s.imgprev();
        }), s.bigimg.find(".layui-layer-imgnext").on("click", function (e) {
          e.preventDefault(), s.imgnext();
        }), i(document).on("keyup", s.keyup);
      }, s.loadi = r.load(1, {
        shade: !("shade" in t) && .9,
        scrollbar: !1
      }), o(u[d].src, function (n) {
        r.close(s.loadi), s.index = r.open(i.extend({
          type: 1,
          id: "layui-layer-photos",
          area: function () {
            var a = [n.width, n.height],
                o = [i(e).width() - 100, i(e).height() - 100];

            if (!t.full && (a[0] > o[0] || a[1] > o[1])) {
              var r = [a[0] / o[0], a[1] / o[1]];
              r[0] > r[1] ? (a[0] = a[0] / r[0], a[1] = a[1] / r[0]) : r[0] < r[1] && (a[0] = a[0] / r[1], a[1] = a[1] / r[1]);
            }

            return [a[0] + "px", a[1] + "px"];
          }(),
          title: !1,
          shade: .9,
          shadeClose: !0,
          closeBtn: !1,
          move: ".layui-layer-phimg img",
          moveType: 1,
          scrollbar: !1,
          moveOut: !0,
          isOutAnim: !1,
          skin: "layui-layer-photos" + c("photos"),
          content: '<div class="layui-layer-phimg"><img src="' + u[d].src + '" alt="' + (u[d].alt || "") + '" layer-pid="' + u[d].pid + '"><div class="layui-layer-imgsee">' + (u.length > 1 ? '<span class="layui-layer-imguide"><a href="javascript:;" class="layui-layer-iconext layui-layer-imgprev"></a><a href="javascript:;" class="layui-layer-iconext layui-layer-imgnext"></a></span>' : "") + '<div class="layui-layer-imgbar" style="display:' + (a ? "block" : "") + '"><span class="layui-layer-imgtit"><a href="javascript:;">' + (u[d].alt || "") + "</a><em>" + s.imgIndex + "/" + u.length + "</em></span></div></div></div>",
          success: function success(e, i) {
            s.bigimg = e.find(".layui-layer-phimg"), s.imgsee = e.find(".layui-layer-imguide,.layui-layer-imgbar"), s.event(e), t.tab && t.tab(u[d], e), "function" == typeof y && y(e);
          },
          end: function end() {
            s.end = !0, i(document).off("keyup", s.keyup);
          }
        }, t));
      }, function () {
        r.close(s.loadi), r.msg("&#x5F53;&#x524D;&#x56FE;&#x7247;&#x5730;&#x5740;&#x5F02;&#x5E38;<br>&#x662F;&#x5426;&#x7EE7;&#x7EED;&#x67E5;&#x770B;&#x4E0B;&#x4E00;&#x5F20;&#xFF1F;", {
          time: 3e4,
          btn: ["&#x4E0B;&#x4E00;&#x5F20;", "&#x4E0D;&#x770B;&#x4E86;"],
          yes: function yes() {
            u.length > 1 && s.imgnext(!0, !0);
          }
        });
      });
    }
  }, o.run = function (t) {
    i = t, n = i(e), l.html = i("html"), r.open = function (e) {
      var t = new s(e);
      return t.index;
    };
  }, e.layui && layui.define ? (r.ready(), layui.define("jquery", function (t) {
    r.path = layui.cache.dir, o.run(layui.$), e.layer = r, t("layer", r);
  })) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return o.run(e.jQuery), r;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(window);
layui.define("jquery", function (t) {
  "use strict";

  var a = layui.$,
      i = (layui.hint(), layui.device()),
      e = "element",
      l = "layui-this",
      n = "layui-show",
      s = function s() {
    this.config = {};
  };

  s.prototype.set = function (t) {
    var i = this;
    return a.extend(!0, i.config, t), i;
  }, s.prototype.on = function (t, a) {
    return layui.onevent.call(this, e, t, a);
  }, s.prototype.tabAdd = function (t, i) {
    var e = ".layui-tab-title",
        l = a(".layui-tab[lay-filter=" + t + "]"),
        n = l.children(e),
        s = n.children(".layui-tab-bar"),
        o = l.children(".layui-tab-content"),
        r = '<li lay-id="' + (i.id || "") + '"' + (i.attr ? ' lay-attr="' + i.attr + '"' : "") + ">" + (i.title || "unnaming") + "</li>";
    return s[0] ? s.before(r) : n.append(r), o.append('<div class="layui-tab-item">' + (i.content || "") + "</div>"), f.hideTabMore(!0), f.tabAuto(), this;
  }, s.prototype.tabDelete = function (t, i) {
    var e = ".layui-tab-title",
        l = a(".layui-tab[lay-filter=" + t + "]"),
        n = l.children(e),
        s = n.find('>li[lay-id="' + i + '"]');
    return f.tabDelete(null, s), this;
  }, s.prototype.tabChange = function (t, i) {
    var e = ".layui-tab-title",
        l = a(".layui-tab[lay-filter=" + t + "]"),
        n = l.children(e),
        s = n.find('>li[lay-id="' + i + '"]');
    return f.tabClick.call(s[0], null, null, s), this;
  }, s.prototype.tab = function (t) {
    t = t || {}, b.on("click", t.headerElem, function (i) {
      var e = a(this).index();
      f.tabClick.call(this, i, e, null, t);
    });
  }, s.prototype.progress = function (t, i) {
    var e = "layui-progress",
        l = a("." + e + "[lay-filter=" + t + "]"),
        n = l.find("." + e + "-bar"),
        s = n.find("." + e + "-text");
    return n.css("width", i), s.text(i), this;
  };
  var o = ".layui-nav",
      r = "layui-nav-item",
      c = "layui-nav-bar",
      u = "layui-nav-tree",
      d = "layui-nav-child",
      y = "layui-nav-more",
      h = "layui-anim layui-anim-upbit",
      f = {
    tabClick: function tabClick(t, i, s, o) {
      o = o || {};
      var r = s || a(this),
          i = i || r.parent().children("li").index(r),
          c = o.headerElem ? r.parent() : r.parents(".layui-tab").eq(0),
          u = o.bodyElem ? a(o.bodyElem) : c.children(".layui-tab-content").children(".layui-tab-item"),
          d = r.find("a"),
          y = c.attr("lay-filter");
      "javascript:;" !== d.attr("href") && "_blank" === d.attr("target") || (r.addClass(l).siblings().removeClass(l), u.eq(i).addClass(n).siblings().removeClass(n)), layui.event.call(this, e, "tab(" + y + ")", {
        elem: c,
        index: i
      });
    },
    tabDelete: function tabDelete(t, i) {
      var n = i || a(this).parent(),
          s = n.index(),
          o = n.parents(".layui-tab").eq(0),
          r = o.children(".layui-tab-content").children(".layui-tab-item"),
          c = o.attr("lay-filter");
      n.hasClass(l) && (n.next()[0] ? f.tabClick.call(n.next()[0], null, s + 1) : n.prev()[0] && f.tabClick.call(n.prev()[0], null, s - 1)), n.remove(), r.eq(s).remove(), setTimeout(function () {
        f.tabAuto();
      }, 50), layui.event.call(this, e, "tabDelete(" + c + ")", {
        elem: o,
        index: s
      });
    },
    tabAuto: function tabAuto() {
      var t = "layui-tab-more",
          e = "layui-tab-bar",
          l = "layui-tab-close",
          n = this;
      a(".layui-tab").each(function () {
        var s = a(this),
            o = s.children(".layui-tab-title"),
            r = (s.children(".layui-tab-content").children(".layui-tab-item"), 'lay-stope="tabmore"'),
            c = a('<span class="layui-unselect layui-tab-bar" ' + r + "><i " + r + ' class="layui-icon">&#xe61a;</i></span>');
        if (n === window && 8 != i.ie && f.hideTabMore(!0), s.attr("lay-allowClose") && o.find("li").each(function () {
          var t = a(this);

          if (!t.find("." + l)[0]) {
            var i = a('<i class="layui-icon layui-unselect ' + l + '">&#x1006;</i>');
            i.on("click", f.tabDelete), t.append(i);
          }
        }), "string" != typeof s.attr("lay-unauto")) if (o.prop("scrollWidth") > o.outerWidth() + 1) {
          if (o.find("." + e)[0]) return;
          o.append(c), s.attr("overflow", ""), c.on("click", function (a) {
            o[this.title ? "removeClass" : "addClass"](t), this.title = this.title ? "" : "收缩";
          });
        } else o.find("." + e).remove(), s.removeAttr("overflow");
      });
    },
    hideTabMore: function hideTabMore(t) {
      var i = a(".layui-tab-title");
      t !== !0 && "tabmore" === a(t.target).attr("lay-stope") || (i.removeClass("layui-tab-more"), i.find(".layui-tab-bar").attr("title", ""));
    },
    clickThis: function clickThis() {
      var t = a(this),
          i = t.parents(o),
          n = i.attr("lay-filter"),
          s = t.parent(),
          c = t.siblings("." + d),
          y = "string" == typeof s.attr("lay-unselect");
      "javascript:;" !== t.attr("href") && "_blank" === t.attr("target") || y || c[0] || (i.find("." + l).removeClass(l), s.addClass(l)), i.hasClass(u) && (c.removeClass(h), c[0] && (s["none" === c.css("display") ? "addClass" : "removeClass"](r + "ed"), "all" === i.attr("lay-shrink") && s.siblings().removeClass(r + "ed"))), layui.event.call(this, e, "nav(" + n + ")", t);
    },
    collapse: function collapse() {
      var t = a(this),
          i = t.find(".layui-colla-icon"),
          l = t.siblings(".layui-colla-content"),
          s = t.parents(".layui-collapse").eq(0),
          o = s.attr("lay-filter"),
          r = "none" === l.css("display");

      if ("string" == typeof s.attr("lay-accordion")) {
        var c = s.children(".layui-colla-item").children("." + n);
        c.siblings(".layui-colla-title").children(".layui-colla-icon").html("&#xe602;"), c.removeClass(n);
      }

      l[r ? "addClass" : "removeClass"](n), i.html(r ? "&#xe61a;" : "&#xe602;"), layui.event.call(this, e, "collapse(" + o + ")", {
        title: t,
        content: l,
        show: r
      });
    }
  };
  s.prototype.init = function (t, e) {
    var l = function () {
      return e ? '[lay-filter="' + e + '"]' : "";
    }(),
        s = {
      tab: function tab() {
        f.tabAuto.call({});
      },
      nav: function nav() {
        var t = 200,
            e = {},
            s = {},
            p = {},
            b = function b(l, o, r) {
          var c = a(this),
              f = c.find("." + d);
          o.hasClass(u) ? l.css({
            top: c.position().top,
            height: c.children("a").outerHeight(),
            opacity: 1
          }) : (f.addClass(h), l.css({
            left: c.position().left + parseFloat(c.css("marginLeft")),
            top: c.position().top + c.height() - l.height()
          }), e[r] = setTimeout(function () {
            l.css({
              width: c.width(),
              opacity: 1
            });
          }, i.ie && i.ie < 10 ? 0 : t), clearTimeout(p[r]), "block" === f.css("display") && clearTimeout(s[r]), s[r] = setTimeout(function () {
            f.addClass(n), c.find("." + y).addClass(y + "d");
          }, 300));
        };

        a(o + l).each(function (i) {
          var l = a(this),
              o = a('<span class="' + c + '"></span>'),
              h = l.find("." + r);
          l.find("." + c)[0] || (l.append(o), h.on("mouseenter", function () {
            b.call(this, o, l, i);
          }).on("mouseleave", function () {
            l.hasClass(u) || (clearTimeout(s[i]), s[i] = setTimeout(function () {
              l.find("." + d).removeClass(n), l.find("." + y).removeClass(y + "d");
            }, 300));
          }), l.on("mouseleave", function () {
            clearTimeout(e[i]), p[i] = setTimeout(function () {
              l.hasClass(u) ? o.css({
                height: 0,
                top: o.position().top + o.height() / 2,
                opacity: 0
              }) : o.css({
                width: 0,
                left: o.position().left + o.width() / 2,
                opacity: 0
              });
            }, t);
          })), h.find("a").each(function () {
            var t = a(this),
                i = (t.parent(), t.siblings("." + d));
            i[0] && !t.children("." + y)[0] && t.append('<span class="' + y + '"></span>'), t.off("click", f.clickThis).on("click", f.clickThis);
          });
        });
      },
      breadcrumb: function breadcrumb() {
        var t = ".layui-breadcrumb";
        a(t + l).each(function () {
          var t = a(this),
              i = "lay-separator",
              e = t.attr(i) || "/",
              l = t.find("a");
          l.next("span[" + i + "]")[0] || (l.each(function (t) {
            t !== l.length - 1 && a(this).after("<span " + i + ">" + e + "</span>");
          }), t.css("visibility", "visible"));
        });
      },
      progress: function progress() {
        var t = "layui-progress";
        a("." + t + l).each(function () {
          var i = a(this),
              e = i.find(".layui-progress-bar"),
              l = e.attr("lay-percent");
          e.css("width", function () {
            return /^.+\/.+$/.test(l) ? 100 * new Function("return " + l)() + "%" : l;
          }()), i.attr("lay-showPercent") && setTimeout(function () {
            e.html('<span class="' + t + '-text">' + l + "</span>");
          }, 350);
        });
      },
      collapse: function collapse() {
        var t = "layui-collapse";
        a("." + t + l).each(function () {
          var t = a(this).find(".layui-colla-item");
          t.each(function () {
            var t = a(this),
                i = t.find(".layui-colla-title"),
                e = t.find(".layui-colla-content"),
                l = "none" === e.css("display");
            i.find(".layui-colla-icon").remove(), i.append('<i class="layui-icon layui-colla-icon">' + (l ? "&#xe602;" : "&#xe61a;") + "</i>"), i.off("click", f.collapse).on("click", f.collapse);
          });
        });
      }
    };

    return s[t] ? s[t]() : layui.each(s, function (t, a) {
      a();
    });
  }, s.prototype.render = s.prototype.init;
  var p = new s(),
      b = a(document);
  p.render();
  var v = ".layui-tab-title li";
  b.on("click", v, f.tabClick), b.on("click", f.hideTabMore), a(window).on("resize", f.tabAuto), t(e, p);
});
layui.define("layer", function (e) {
  "use strict";

  var t = layui.$,
      i = layui.layer,
      n = layui.hint(),
      o = layui.device(),
      a = {
    config: {},
    set: function set(e) {
      var i = this;
      return i.config = t.extend({}, i.config, e), i;
    },
    on: function on(e, t) {
      return layui.onevent.call(this, r, e, t);
    }
  },
      l = function l() {
    var e = this;
    return {
      upload: function upload(t) {
        e.upload.call(e, t);
      },
      reload: function reload(t) {
        e.reload.call(e, t);
      },
      config: e.config
    };
  },
      r = "upload",
      u = "layui-upload-file",
      c = "layui-upload-form",
      f = "layui-upload-iframe",
      s = "layui-upload-choose",
      p = function p(e) {
    var i = this;
    i.config = t.extend({}, i.config, a.config, e), i.render();
  };

  p.prototype.config = {
    accept: "images",
    exts: "",
    auto: !0,
    bindAction: "",
    url: "",
    field: "file",
    acceptMime: "",
    method: "post",
    data: {},
    drag: !0,
    size: 0,
    number: 0,
    multiple: !1
  }, p.prototype.render = function (e) {
    var i = this,
        e = i.config;
    e.elem = t(e.elem), e.bindAction = t(e.bindAction), i.file(), i.events();
  }, p.prototype.file = function () {
    var e = this,
        i = e.config,
        n = e.elemFile = t(['<input class="' + u + '" type="file" accept="' + i.acceptMime + '" name="' + i.field + '"', i.multiple ? " multiple" : "", ">"].join("")),
        a = i.elem.next();
    (a.hasClass(u) || a.hasClass(c)) && a.remove(), o.ie && o.ie < 10 && i.elem.wrap('<div class="layui-upload-wrap"></div>'), e.isFile() ? (e.elemFile = i.elem, i.field = i.elem[0].name) : i.elem.after(n), o.ie && o.ie < 10 && e.initIE();
  }, p.prototype.initIE = function () {
    var e = this,
        i = e.config,
        n = t('<iframe id="' + f + '" class="' + f + '" name="' + f + '" frameborder="0"></iframe>'),
        o = t(['<form target="' + f + '" class="' + c + '" method="post" key="set-mine" enctype="multipart/form-data" action="' + i.url + '">', "</form>"].join(""));
    t("#" + f)[0] || t("body").append(n), i.elem.next().hasClass(c) || (e.elemFile.wrap(o), i.elem.next("." + c).append(function () {
      var e = [];
      return layui.each(i.data, function (t, i) {
        i = "function" == typeof i ? i() : i, e.push('<input type="hidden" name="' + t + '" value="' + i + '">');
      }), e.join("");
    }()));
  }, p.prototype.msg = function (e) {
    return i.msg(e, {
      icon: 2,
      shift: 6
    });
  }, p.prototype.isFile = function () {
    var e = this.config.elem[0];
    if (e) return "input" === e.tagName.toLocaleLowerCase() && "file" === e.type;
  }, p.prototype.preview = function (e) {
    var t = this;
    window.FileReader && layui.each(t.chooseFiles, function (t, i) {
      var n = new FileReader();
      n.readAsDataURL(i), n.onload = function () {
        e && e(t, i, this.result);
      };
    });
  }, p.prototype.upload = function (e, i) {
    var n,
        a = this,
        l = a.config,
        r = a.elemFile[0],
        u = function u() {
      var i = 0,
          n = 0,
          o = e || a.files || a.chooseFiles || r.files,
          u = function u() {
        l.multiple && i + n === a.fileLength && "function" == typeof l.allDone && l.allDone({
          total: a.fileLength,
          successful: i,
          aborted: n
        });
      };

      layui.each(o, function (e, o) {
        var r = new FormData();
        r.append(l.field, o), layui.each(l.data, function (e, t) {
          t = "function" == typeof t ? t() : t, r.append(e, t);
        }), t.ajax({
          url: l.url,
          type: "post",
          data: r,
          contentType: !1,
          processData: !1,
          dataType: "json",
          headers: l.headers || {},
          success: function success(t) {
            i++, d(e, t), u();
          },
          error: function error() {
            n++, a.msg("请求上传接口出现异常"), m(e), u();
          },
          xhr: function xhr() {
            var e = new XMLHttpRequest();
            return e.upload.addEventListener("progress", function (e) {
              if (e.lengthComputable) {
                var t = Math.floor(e.loaded / e.total * 100);
                "function" == typeof l.progress && l.progress(t, e);
              }
            }), e;
          }
        });
      });
    },
        c = function c() {
      var e = t("#" + f);
      a.elemFile.parent().submit(), clearInterval(p.timer), p.timer = setInterval(function () {
        var t,
            i = e.contents().find("body");

        try {
          t = i.text();
        } catch (n) {
          a.msg("获取上传后的响应信息出现异常"), clearInterval(p.timer), m();
        }

        t && (clearInterval(p.timer), i.html(""), d(0, t));
      }, 30);
    },
        d = function d(e, t) {
      if (a.elemFile.next("." + s).remove(), r.value = "", "object" != _typeof(t)) try {
        t = JSON.parse(t);
      } catch (i) {
        return t = {}, a.msg("请对上传接口返回有效JSON");
      }
      "function" == typeof l.done && l.done(t, e || 0, function (e) {
        a.upload(e);
      });
    },
        m = function m(e) {
      l.auto && (r.value = ""), "function" == typeof l.error && l.error(e || 0, function (e) {
        a.upload(e);
      });
    },
        h = l.exts,
        v = function () {
      var t = [];
      return layui.each(e || a.chooseFiles, function (e, i) {
        t.push(i.name);
      }), t;
    }(),
        g = {
      preview: function preview(e) {
        a.preview(e);
      },
      upload: function upload(e, t) {
        var i = {};
        i[e] = t, a.upload(i);
      },
      pushFile: function pushFile() {
        return a.files = a.files || {}, layui.each(a.chooseFiles, function (e, t) {
          a.files[e] = t;
        }), a.files;
      },
      resetFile: function resetFile(e, t, i) {
        var n = new File([t], i);
        a.files = a.files || {}, a.files[e] = n;
      }
    },
        y = function y() {
      if ("choose" !== i && !l.auto || (l.choose && l.choose(g), "choose" !== i)) return l.before && l.before(g), o.ie ? o.ie > 9 ? u() : c() : void u();
    };

    if (v = 0 === v.length ? r.value.match(/[^\/\\]+\..+/g) || [] || "" : v, 0 !== v.length) {
      switch (l.accept) {
        case "file":
          if (h && !RegExp("\\w\\.(" + h + ")$", "i").test(escape(v))) return a.msg("选择的文件中包含不支持的格式"), r.value = "";
          break;

        case "video":
          if (!RegExp("\\w\\.(" + (h || "avi|mp4|wma|rmvb|rm|flash|3gp|flv") + ")$", "i").test(escape(v))) return a.msg("选择的视频中包含不支持的格式"), r.value = "";
          break;

        case "audio":
          if (!RegExp("\\w\\.(" + (h || "mp3|wav|mid") + ")$", "i").test(escape(v))) return a.msg("选择的音频中包含不支持的格式"), r.value = "";
          break;

        default:
          if (layui.each(v, function (e, t) {
            RegExp("\\w\\.(" + (h || "jpg|png|gif|bmp|jpeg$") + ")", "i").test(escape(t)) || (n = !0);
          }), n) return a.msg("选择的图片中包含不支持的格式"), r.value = "";
      }

      if (a.fileLength = function () {
        var t = 0,
            i = e || a.files || a.chooseFiles || r.files;
        return layui.each(i, function () {
          t++;
        }), t;
      }(), l.number && a.fileLength > l.number) return a.msg("同时最多只能上传的数量为：" + l.number);

      if (l.size > 0 && !(o.ie && o.ie < 10)) {
        var F;
        if (layui.each(a.chooseFiles, function (e, t) {
          if (t.size > 1024 * l.size) {
            var i = l.size / 1024;
            i = i >= 1 ? i.toFixed(2) + "MB" : l.size + "KB", r.value = "", F = i;
          }
        }), F) return a.msg("文件不能超过" + F);
      }

      y();
    }
  }, p.prototype.reload = function (e) {
    e = e || {}, delete e.elem, delete e.bindAction;
    var i = this,
        e = i.config = t.extend({}, i.config, a.config, e),
        n = e.elem.next();
    n.attr({
      name: e.name,
      accept: e.acceptMime,
      multiple: e.multiple
    });
  }, p.prototype.events = function () {
    var e = this,
        i = e.config,
        a = function a(t) {
      e.chooseFiles = {}, layui.each(t, function (t, i) {
        var n = new Date().getTime();
        e.chooseFiles[n + "-" + t] = i;
      });
    },
        l = function l(t, n) {
      var o = e.elemFile,
          a = t.length > 1 ? t.length + "个文件" : (t[0] || {}).name || o[0].value.match(/[^\/\\]+\..+/g) || [] || "";
      o.next().hasClass(s) && o.next().remove(), e.upload(null, "choose"), e.isFile() || i.choose || o.after('<span class="layui-inline ' + s + '">' + a + "</span>");
    };

    i.elem.off("upload.start").on("upload.start", function () {
      var o = t(this),
          a = o.attr("lay-data");
      if (a) try {
        a = new Function("return " + a)(), e.config = t.extend({}, i, a);
      } catch (l) {
        n.error("Upload element property lay-data configuration item has a syntax error: " + a);
      }
      e.config.item = o, e.elemFile[0].click();
    }), o.ie && o.ie < 10 || i.elem.off("upload.over").on("upload.over", function () {
      var e = t(this);
      e.attr("lay-over", "");
    }).off("upload.leave").on("upload.leave", function () {
      var e = t(this);
      e.removeAttr("lay-over");
    }).off("upload.drop").on("upload.drop", function (n, o) {
      var r = t(this),
          u = o.originalEvent.dataTransfer.files || [];
      r.removeAttr("lay-over"), a(u), i.auto ? e.upload(u) : l(u);
    }), e.elemFile.off("upload.change").on("upload.change", function () {
      var t = this.files || [];
      a(t), i.auto ? e.upload() : l(t);
    }), i.bindAction.off("upload.action").on("upload.action", function () {
      e.upload();
    }), i.elem.data("haveEvents") || (e.elemFile.on("change", function () {
      t(this).trigger("upload.change");
    }), i.elem.on("click", function () {
      e.isFile() || t(this).trigger("upload.start");
    }), i.drag && i.elem.on("dragover", function (e) {
      e.preventDefault(), t(this).trigger("upload.over");
    }).on("dragleave", function (e) {
      t(this).trigger("upload.leave");
    }).on("drop", function (e) {
      e.preventDefault(), t(this).trigger("upload.drop", e);
    }), i.bindAction.on("click", function () {
      t(this).trigger("upload.action");
    }), i.elem.data("haveEvents", !0));
  }, a.render = function (e) {
    var t = new p(e);
    return l.call(t);
  }, e(r, a);
});
layui.define("jquery", function (e) {
  "use strict";

  var i = layui.jquery,
      t = {
    config: {},
    index: layui.slider ? layui.slider.index + 1e4 : 0,
    set: function set(e) {
      var t = this;
      return t.config = i.extend({}, t.config, e), t;
    },
    on: function on(e, i) {
      return layui.onevent.call(this, n, e, i);
    }
  },
      a = function a() {
    var e = this,
        i = e.config;
    return {
      setValue: function setValue(i, t) {
        return e.slide("set", i, t || 0);
      },
      config: i
    };
  },
      n = "slider",
      l = "layui-disabled",
      s = "layui-slider",
      r = "layui-slider-bar",
      o = "layui-slider-wrap",
      u = "layui-slider-wrap-btn",
      d = "layui-slider-tips",
      v = "layui-slider-input",
      c = "layui-slider-input-txt",
      m = "layui-slider-input-btn",
      p = "layui-slider-hover",
      f = function f(e) {
    var a = this;
    a.index = ++t.index, a.config = i.extend({}, a.config, t.config, e), a.render();
  };

  f.prototype.config = {
    type: "default",
    min: 0,
    max: 100,
    value: 0,
    step: 1,
    showstep: !1,
    tips: !0,
    input: !1,
    range: !1,
    height: 200,
    disabled: !1,
    theme: "#009688"
  }, f.prototype.render = function () {
    var e = this,
        t = e.config;

    if (t.step < 1 && (t.step = 1), t.max < t.min && (t.max = t.min + t.step), t.range) {
      t.value = "object" == _typeof(t.value) ? t.value : [t.min, t.value];
      var a = Math.min(t.value[0], t.value[1]),
          n = Math.max(t.value[0], t.value[1]);
      t.value[0] = a > t.min ? a : t.min, t.value[1] = n > t.min ? n : t.min, t.value[0] = t.value[0] > t.max ? t.max : t.value[0], t.value[1] = t.value[1] > t.max ? t.max : t.value[1];
      var r = Math.floor((t.value[0] - t.min) / (t.max - t.min) * 100),
          v = Math.floor((t.value[1] - t.min) / (t.max - t.min) * 100),
          m = v - r + "%";
      r += "%", v += "%";
    } else {
      "object" == _typeof(t.value) && (t.value = Math.min.apply(null, t.value)), t.value < t.min && (t.value = t.min), t.value > t.max && (t.value = t.max);
      var m = Math.floor((t.value - t.min) / (t.max - t.min) * 100) + "%";
    }

    var p = t.disabled ? "#c2c2c2" : t.theme,
        f = '<div class="layui-slider ' + ("vertical" === t.type ? "layui-slider-vertical" : "") + '">' + (t.tips ? '<div class="layui-slider-tips"></div>' : "") + '<div class="layui-slider-bar" style="background:' + p + "; " + ("vertical" === t.type ? "height" : "width") + ":" + m + ";" + ("vertical" === t.type ? "bottom" : "left") + ":" + (r || 0) + ';"></div><div class="layui-slider-wrap" style="' + ("vertical" === t.type ? "bottom" : "left") + ":" + (r || m) + ';"><div class="layui-slider-wrap-btn" style="border: 2px solid ' + p + ';"></div></div>' + (t.range ? '<div class="layui-slider-wrap" style="' + ("vertical" === t.type ? "bottom" : "left") + ":" + v + ';"><div class="layui-slider-wrap-btn" style="border: 2px solid ' + p + ';"></div></div>' : "") + "</div>",
        h = i(t.elem),
        y = h.next("." + s);

    if (y[0] && y.remove(), e.elemTemp = i(f), t.range ? (e.elemTemp.find("." + o).eq(0).data("value", t.value[0]), e.elemTemp.find("." + o).eq(1).data("value", t.value[1])) : e.elemTemp.find("." + o).data("value", t.value), h.html(e.elemTemp), "vertical" === t.type && e.elemTemp.height(t.height + "px"), t.showstep) {
      for (var g = (t.max - t.min) / t.step, b = "", x = 1; x < g + 1; x++) {
        var T = 100 * x / g;
        T < 100 && (b += '<div class="layui-slider-step" style="' + ("vertical" === t.type ? "bottom" : "left") + ":" + T + '%"></div>');
      }

      e.elemTemp.append(b);
    }

    if (t.input && !t.range) {
      var w = i('<div class="layui-slider-input layui-input"><div class="layui-slider-input-txt"><input type="text" class="layui-input"></div><div class="layui-slider-input-btn"><i class="layui-icon layui-icon-up"></i><i class="layui-icon layui-icon-down"></i></div></div>');
      h.css("position", "relative"), h.append(w), h.find("." + c).children("input").val(t.value), "vertical" === t.type ? w.css({
        left: 0,
        top: -48
      }) : e.elemTemp.css("margin-right", w.outerWidth() + 15);
    }

    t.disabled ? (e.elemTemp.addClass(l), e.elemTemp.find("." + u).addClass(l)) : e.slide(), e.elemTemp.find("." + u).on("mouseover", function () {
      var a = "vertical" === t.type ? t.height : e.elemTemp[0].offsetWidth,
          n = e.elemTemp.find("." + o),
          l = "vertical" === t.type ? a - i(this).parent()[0].offsetTop - n.height() : i(this).parent()[0].offsetLeft,
          s = l / a * 100,
          r = i(this).parent().data("value"),
          u = t.setTips ? t.setTips(r) : r;
      e.elemTemp.find("." + d).html(u), "vertical" === t.type ? e.elemTemp.find("." + d).css({
        bottom: s + "%",
        "margin-bottom": "20px",
        display: "inline-block"
      }) : e.elemTemp.find("." + d).css({
        left: s + "%",
        display: "inline-block"
      });
    }).on("mouseout", function () {
      e.elemTemp.find("." + d).css("display", "none");
    });
  }, f.prototype.slide = function (e, t, a) {
    var n = this,
        l = n.config,
        s = n.elemTemp,
        f = function f() {
      return "vertical" === l.type ? l.height : s[0].offsetWidth;
    },
        h = s.find("." + o),
        y = s.next("." + v),
        g = y.children("." + c).children("input").val(),
        b = 100 / ((l.max - l.min) / Math.ceil(l.step)),
        x = function x(e, i) {
      e = Math.ceil(e) * b > 100 ? Math.ceil(e) * b : Math.round(e) * b, e = e > 100 ? 100 : e, h.eq(i).css("vertical" === l.type ? "bottom" : "left", e + "%");
      var t = T(h[0].offsetLeft),
          a = l.range ? T(h[1].offsetLeft) : 0;
      "vertical" === l.type ? (s.find("." + d).css({
        bottom: e + "%",
        "margin-bottom": "20px"
      }), t = T(f() - h[0].offsetTop - h.height()), a = l.range ? T(f() - h[1].offsetTop - h.height()) : 0) : s.find("." + d).css("left", e + "%"), t = t > 100 ? 100 : t, a = a > 100 ? 100 : a;
      var n = Math.min(t, a),
          o = Math.abs(t - a);
      "vertical" === l.type ? s.find("." + r).css({
        height: o + "%",
        bottom: n + "%"
      }) : s.find("." + r).css({
        width: o + "%",
        left: n + "%"
      });
      var u = l.min + Math.round((l.max - l.min) * e / 100);

      if (g = u, y.children("." + c).children("input").val(g), h.eq(i).data("value", u), u = l.setTips ? l.setTips(u) : u, s.find("." + d).html(u), l.range) {
        var v = [h.eq(0).data("value"), h.eq(1).data("value")];
        v[0] > v[1] && v.reverse();
      }

      l.change && l.change(l.range ? v : u);
    },
        T = function T(e) {
      var i = e / f() * 100 / b,
          t = Math.round(i) * b;
      return e == f() && (t = Math.ceil(i) * b), t;
    },
        w = i(['<div class="layui-auxiliar-moving" id="LAY-slider-moving"></div'].join("")),
        M = function M(e, t) {
      var a = function a() {
        t && t(), w.remove();
      };

      i("#LAY-slider-moving")[0] || i("body").append(w), w.on("mousemove", e), w.on("mouseup", a).on("mouseleave", a);
    };

    if ("set" === e) return x(t, a);
    s.find("." + u).each(function (e) {
      var t = i(this);
      t.on("mousedown", function (i) {
        i = i || window.event;
        var a = t.parent()[0].offsetLeft,
            n = i.clientX;
        "vertical" === l.type && (a = f() - t.parent()[0].offsetTop - h.height(), n = i.clientY);

        var r = function r(i) {
          i = i || window.event;
          var r = a + ("vertical" === l.type ? n - i.clientY : i.clientX - n);
          r < 0 && (r = 0), r > f() && (r = f());
          var o = r / f() * 100 / b;
          x(o, e), t.addClass(p), s.find("." + d).show(), i.preventDefault();
        },
            o = function o() {
          t.removeClass(p), s.find("." + d).hide();
        };

        M(r, o);
      });
    }), s.on("click", function (e) {
      var t = i("." + u);

      if (!t.is(event.target) && 0 === t.has(event.target).length && t.length) {
        var a,
            n = "vertical" === l.type ? f() - e.clientY + i(this).offset().top : e.clientX - i(this).offset().left;
        n < 0 && (n = 0), n > f() && (n = f());
        var s = n / f() * 100 / b;
        a = l.range ? "vertical" === l.type ? Math.abs(n - parseInt(i(h[0]).css("bottom"))) > Math.abs(n - parseInt(i(h[1]).css("bottom"))) ? 1 : 0 : Math.abs(n - h[0].offsetLeft) > Math.abs(n - h[1].offsetLeft) ? 1 : 0 : 0, x(s, a), e.preventDefault();
      }
    }), y.hover(function () {
      var e = i(this);
      e.children("." + m).fadeIn("fast");
    }, function () {
      var e = i(this);
      e.children("." + m).fadeOut("fast");
    }), y.children("." + m).children("i").each(function (e) {
      i(this).on("click", function () {
        g = 1 == e ? g - l.step < l.min ? l.min : Number(g) - l.step : Number(g) + l.step > l.max ? l.max : Number(g) + l.step;
        var i = (g - l.min) / (l.max - l.min) * 100 / b;
        x(i, 0);
      });
    });

    var q = function q() {
      var e = this.value;
      e = isNaN(e) ? 0 : e, e = e < l.min ? l.min : e, e = e > l.max ? l.max : e, this.value = e;
      var i = (e - l.min) / (l.max - l.min) * 100 / b;
      x(i, 0);
    };

    y.children("." + c).children("input").on("keydown", function (e) {
      13 === e.keyCode && (e.preventDefault(), q.call(this));
    }).on("change", q);
  }, f.prototype.events = function () {
    var e = this;
    e.config;
  }, t.render = function (e) {
    var i = new f(e);
    return a.call(i);
  }, e(n, t);
});
layui.define("jquery", function (e) {
  "use strict";

  var i = layui.jquery,
      o = {
    config: {},
    index: layui.colorpicker ? layui.colorpicker.index + 1e4 : 0,
    set: function set(e) {
      var o = this;
      return o.config = i.extend({}, o.config, e), o;
    },
    on: function on(e, i) {
      return layui.onevent.call(this, "colorpicker", e, i);
    }
  },
      r = function r() {
    var e = this,
        i = e.config;
    return {
      config: i
    };
  },
      t = "colorpicker",
      n = "layui-show",
      l = "layui-colorpicker",
      c = ".layui-colorpicker-main",
      a = "layui-icon-down",
      s = "layui-icon-close",
      f = "layui-colorpicker-trigger-span",
      d = "layui-colorpicker-trigger-i",
      u = "layui-colorpicker-side",
      p = "layui-colorpicker-side-slider",
      g = "layui-colorpicker-basis",
      v = "layui-colorpicker-alpha-bgcolor",
      h = "layui-colorpicker-alpha-slider",
      m = "layui-colorpicker-basis-cursor",
      b = "layui-colorpicker-main-input",
      k = function k(e) {
    var i = {
      h: 0,
      s: 0,
      b: 0
    },
        o = Math.min(e.r, e.g, e.b),
        r = Math.max(e.r, e.g, e.b),
        t = r - o;
    return i.b = r, i.s = 0 != r ? 255 * t / r : 0, 0 != i.s ? e.r == r ? i.h = (e.g - e.b) / t : e.g == r ? i.h = 2 + (e.b - e.r) / t : i.h = 4 + (e.r - e.g) / t : i.h = -1, r == o && (i.h = 0), i.h *= 60, i.h < 0 && (i.h += 360), i.s *= 100 / 255, i.b *= 100 / 255, i;
  },
      y = function y(e) {
    var e = e.indexOf("#") > -1 ? e.substring(1) : e;

    if (3 == e.length) {
      var i = e.split("");
      e = i[0] + i[0] + i[1] + i[1] + i[2] + i[2];
    }

    e = parseInt(e, 16);
    var o = {
      r: e >> 16,
      g: (65280 & e) >> 8,
      b: 255 & e
    };
    return k(o);
  },
      x = function x(e) {
    var i = {},
        o = e.h,
        r = 255 * e.s / 100,
        t = 255 * e.b / 100;
    if (0 == r) i.r = i.g = i.b = t;else {
      var n = t,
          l = (255 - r) * t / 255,
          c = (n - l) * (o % 60) / 60;
      360 == o && (o = 0), o < 60 ? (i.r = n, i.b = l, i.g = l + c) : o < 120 ? (i.g = n, i.b = l, i.r = n - c) : o < 180 ? (i.g = n, i.r = l, i.b = l + c) : o < 240 ? (i.b = n, i.r = l, i.g = n - c) : o < 300 ? (i.b = n, i.g = l, i.r = l + c) : o < 360 ? (i.r = n, i.g = l, i.b = n - c) : (i.r = 0, i.g = 0, i.b = 0);
    }
    return {
      r: Math.round(i.r),
      g: Math.round(i.g),
      b: Math.round(i.b)
    };
  },
      C = function C(e) {
    var o = x(e),
        r = [o.r.toString(16), o.g.toString(16), o.b.toString(16)];
    return i.each(r, function (e, i) {
      1 == i.length && (r[e] = "0" + i);
    }), r.join("");
  },
      P = function P(e) {
    var i = /[0-9]{1,3}/g,
        o = e.match(i) || [];
    return {
      r: o[0],
      g: o[1],
      b: o[2]
    };
  },
      B = i(window),
      w = i(document),
      D = function D(e) {
    var r = this;
    r.index = ++o.index, r.config = i.extend({}, r.config, o.config, e), r.render();
  };

  D.prototype.config = {
    color: "",
    size: null,
    alpha: !1,
    format: "hex",
    predefine: !1,
    colors: ["#009688", "#5FB878", "#1E9FFF", "#FF5722", "#FFB800", "#01AAED", "#999", "#c00", "#ff8c00", "#ffd700", "#90ee90", "#00ced1", "#1e90ff", "#c71585", "rgb(0, 186, 189)", "rgb(255, 120, 0)", "rgb(250, 212, 0)", "#393D49", "rgba(0,0,0,.5)", "rgba(255, 69, 0, 0.68)", "rgba(144, 240, 144, 0.5)", "rgba(31, 147, 255, 0.73)"]
  }, D.prototype.render = function () {
    var e = this,
        o = e.config,
        r = i(['<div class="layui-unselect layui-colorpicker">', "<span " + ("rgb" == o.format && o.alpha ? 'class="layui-colorpicker-trigger-bgcolor"' : "") + ">", '<span class="layui-colorpicker-trigger-span" ', 'lay-type="' + ("rgb" == o.format ? o.alpha ? "rgba" : "torgb" : "") + '" ', 'style="' + function () {
      var e = "";
      return o.color ? (e = o.color, (o.color.match(/[0-9]{1,3}/g) || []).length > 3 && (o.alpha && "rgb" == o.format || (e = "#" + C(k(P(o.color))))), "background: " + e) : e;
    }() + '">', '<i class="layui-icon layui-colorpicker-trigger-i ' + (o.color ? a : s) + '"></i>', "</span>", "</span>", "</div>"].join("")),
        t = i(o.elem);
    o.size && r.addClass("layui-colorpicker-" + o.size), t.addClass("layui-inline").html(e.elemColorBox = r), e.color = e.elemColorBox.find("." + f)[0].style.background, e.events();
  }, D.prototype.renderPicker = function () {
    var e = this,
        o = e.config,
        r = e.elemColorBox[0],
        t = e.elemPicker = i(['<div id="layui-colorpicker' + e.index + '" data-index="' + e.index + '" class="layui-anim layui-anim-upbit layui-colorpicker-main">', '<div class="layui-colorpicker-main-wrapper">', '<div class="layui-colorpicker-basis">', '<div class="layui-colorpicker-basis-white"></div>', '<div class="layui-colorpicker-basis-black"></div>', '<div class="layui-colorpicker-basis-cursor"></div>', "</div>", '<div class="layui-colorpicker-side">', '<div class="layui-colorpicker-side-slider"></div>', "</div>", "</div>", '<div class="layui-colorpicker-main-alpha ' + (o.alpha ? n : "") + '">', '<div class="layui-colorpicker-alpha-bgcolor">', '<div class="layui-colorpicker-alpha-slider"></div>', "</div>", "</div>", function () {
      if (o.predefine) {
        var e = ['<div class="layui-colorpicker-main-pre">'];
        return layui.each(o.colors, function (i, o) {
          e.push(['<div class="layui-colorpicker-pre' + ((o.match(/[0-9]{1,3}/g) || []).length > 3 ? " layui-colorpicker-pre-isalpha" : "") + '">', '<div style="background:' + o + '"></div>', "</div>"].join(""));
        }), e.push("</div>"), e.join("");
      }

      return "";
    }(), '<div class="layui-colorpicker-main-input">', '<div class="layui-inline">', '<input type="text" class="layui-input">', "</div>", '<div class="layui-btn-container">', '<button class="layui-btn layui-btn-primary layui-btn-sm" colorpicker-events="clear">清空</button>', '<button class="layui-btn layui-btn-sm" colorpicker-events="confirm">确定</button>', "</div", "</div>", "</div>"].join(""));
    e.elemColorBox.find("." + f)[0];
    i(c)[0] && i(c).data("index") == e.index ? e.removePicker(D.thisElemInd) : (e.removePicker(D.thisElemInd), i("body").append(t)), D.thisElemInd = e.index, D.thisColor = r.style.background, e.position(), e.pickerEvents();
  }, D.prototype.removePicker = function (e) {
    var o = this;
    o.config;
    return i("#layui-colorpicker" + (e || o.index)).remove(), o;
  }, D.prototype.position = function () {
    var e = this,
        i = e.config,
        o = e.bindElem || e.elemColorBox[0],
        r = e.elemPicker[0],
        t = o.getBoundingClientRect(),
        n = r.offsetWidth,
        l = r.offsetHeight,
        c = function c(e) {
      return e = e ? "scrollLeft" : "scrollTop", document.body[e] | document.documentElement[e];
    },
        a = function a(e) {
      return document.documentElement[e ? "clientWidth" : "clientHeight"];
    },
        s = 5,
        f = t.left,
        d = t.bottom;

    f -= (n - o.offsetWidth) / 2, d += s, f + n + s > a("width") ? f = a("width") - n - s : f < s && (f = s), d + l + s > a() && (d = t.top > l ? t.top - l : a() - l, d -= 2 * s), i.position && (r.style.position = i.position), r.style.left = f + ("fixed" === i.position ? 0 : c(1)) + "px", r.style.top = d + ("fixed" === i.position ? 0 : c()) + "px";
  }, D.prototype.val = function () {
    var e = this,
        i = (e.config, e.elemColorBox.find("." + f)),
        o = e.elemPicker.find("." + b),
        r = i[0],
        t = r.style.backgroundColor;

    if (t) {
      var n = k(P(t)),
          l = i.attr("lay-type");

      if (e.select(n.h, n.s, n.b), "torgb" === l && o.find("input").val(t), "rgba" === l) {
        var c = P(t);
        if (3 == (t.match(/[0-9]{1,3}/g) || []).length) o.find("input").val("rgba(" + c.r + ", " + c.g + ", " + c.b + ", 1)"), e.elemPicker.find("." + h).css("left", 280);else {
          o.find("input").val(t);
          var a = 280 * t.slice(t.lastIndexOf(",") + 1, t.length - 1);
          e.elemPicker.find("." + h).css("left", a);
        }
        e.elemPicker.find("." + v)[0].style.background = "linear-gradient(to right, rgba(" + c.r + ", " + c.g + ", " + c.b + ", 0), rgb(" + c.r + ", " + c.g + ", " + c.b + "))";
      }
    } else e.select(0, 100, 100), o.find("input").val(""), e.elemPicker.find("." + v)[0].style.background = "", e.elemPicker.find("." + h).css("left", 280);
  }, D.prototype.side = function () {
    var e = this,
        o = e.config,
        r = e.elemColorBox.find("." + f),
        t = r.attr("lay-type"),
        n = e.elemPicker.find("." + u),
        l = e.elemPicker.find("." + p),
        c = e.elemPicker.find("." + g),
        y = e.elemPicker.find("." + m),
        C = e.elemPicker.find("." + v),
        w = e.elemPicker.find("." + h),
        D = l[0].offsetTop / 180 * 360,
        E = 100 - (y[0].offsetTop + 3) / 180 * 100,
        H = (y[0].offsetLeft + 3) / 260 * 100,
        W = Math.round(w[0].offsetLeft / 280 * 100) / 100,
        j = e.elemColorBox.find("." + d),
        F = e.elemPicker.find(".layui-colorpicker-pre").children("div"),
        L = function L(i, n, l, c) {
      e.select(i, n, l);
      var f = x({
        h: i,
        s: n,
        b: l
      });

      if (j.addClass(a).removeClass(s), r[0].style.background = "rgb(" + f.r + ", " + f.g + ", " + f.b + ")", "torgb" === t && e.elemPicker.find("." + b).find("input").val("rgb(" + f.r + ", " + f.g + ", " + f.b + ")"), "rgba" === t) {
        var d = 0;
        d = 280 * c, w.css("left", d), e.elemPicker.find("." + b).find("input").val("rgba(" + f.r + ", " + f.g + ", " + f.b + ", " + c + ")"), r[0].style.background = "rgba(" + f.r + ", " + f.g + ", " + f.b + ", " + c + ")", C[0].style.background = "linear-gradient(to right, rgba(" + f.r + ", " + f.g + ", " + f.b + ", 0), rgb(" + f.r + ", " + f.g + ", " + f.b + "))";
      }

      o.change && o.change(e.elemPicker.find("." + b).find("input").val());
    },
        M = i(['<div class="layui-auxiliar-moving" id="LAY-colorpicker-moving"></div'].join("")),
        Y = function Y(e) {
      i("#LAY-colorpicker-moving")[0] || i("body").append(M), M.on("mousemove", e), M.on("mouseup", function () {
        M.remove();
      }).on("mouseleave", function () {
        M.remove();
      });
    };

    l.on("mousedown", function (e) {
      var i = this.offsetTop,
          o = e.clientY,
          r = function r(e) {
        var r = i + (e.clientY - o),
            t = n[0].offsetHeight;
        r < 0 && (r = 0), r > t && (r = t);
        var l = r / 180 * 360;
        D = l, L(l, H, E, W), e.preventDefault();
      };

      Y(r), e.preventDefault();
    }), n.on("click", function (e) {
      var o = e.clientY - i(this).offset().top;
      o < 0 && (o = 0), o > this.offsetHeight && (o = this.offsetHeight);
      var r = o / 180 * 360;
      D = r, L(r, H, E, W), e.preventDefault();
    }), y.on("mousedown", function (e) {
      var i = this.offsetTop,
          o = this.offsetLeft,
          r = e.clientY,
          t = e.clientX,
          n = function n(e) {
        var n = i + (e.clientY - r),
            l = o + (e.clientX - t),
            a = c[0].offsetHeight - 3,
            s = c[0].offsetWidth - 3;
        n < -3 && (n = -3), n > a && (n = a), l < -3 && (l = -3), l > s && (l = s);
        var f = (l + 3) / 260 * 100,
            d = 100 - (n + 3) / 180 * 100;
        E = d, H = f, L(D, f, d, W), e.preventDefault();
      };

      layui.stope(e), Y(n), e.preventDefault();
    }), c.on("mousedown", function (e) {
      var o = e.clientY - i(this).offset().top - 3 + B.scrollTop(),
          r = e.clientX - i(this).offset().left - 3 + B.scrollLeft();
      o < -3 && (o = -3), o > this.offsetHeight - 3 && (o = this.offsetHeight - 3), r < -3 && (r = -3), r > this.offsetWidth - 3 && (r = this.offsetWidth - 3);
      var t = (r + 3) / 260 * 100,
          n = 100 - (o + 3) / 180 * 100;
      E = n, H = t, L(D, t, n, W), e.preventDefault(), y.trigger(e, "mousedown");
    }), w.on("mousedown", function (e) {
      var i = this.offsetLeft,
          o = e.clientX,
          r = function r(e) {
        var r = i + (e.clientX - o),
            t = C[0].offsetWidth;
        r < 0 && (r = 0), r > t && (r = t);
        var n = Math.round(r / 280 * 100) / 100;
        W = n, L(D, H, E, n), e.preventDefault();
      };

      Y(r), e.preventDefault();
    }), C.on("click", function (e) {
      var o = e.clientX - i(this).offset().left;
      o < 0 && (o = 0), o > this.offsetWidth && (o = this.offsetWidth);
      var r = Math.round(o / 280 * 100) / 100;
      W = r, L(D, H, E, r), e.preventDefault();
    }), F.each(function () {
      i(this).on("click", function () {
        i(this).parent(".layui-colorpicker-pre").addClass("selected").siblings().removeClass("selected");
        var e,
            o = this.style.backgroundColor,
            r = k(P(o)),
            t = o.slice(o.lastIndexOf(",") + 1, o.length - 1);
        D = r.h, H = r.s, E = r.b, 3 == (o.match(/[0-9]{1,3}/g) || []).length && (t = 1), W = t, e = 280 * t, L(r.h, r.s, r.b, t);
      });
    });
  }, D.prototype.select = function (e, i, o, r) {
    var t = this,
        n = (t.config, C({
      h: e,
      s: 100,
      b: 100
    })),
        l = C({
      h: e,
      s: i,
      b: o
    }),
        c = e / 360 * 180,
        a = 180 - o / 100 * 180 - 3,
        s = i / 100 * 260 - 3;
    t.elemPicker.find("." + p).css("top", c), t.elemPicker.find("." + g)[0].style.background = "#" + n, t.elemPicker.find("." + m).css({
      top: a,
      left: s
    }), "change" !== r && t.elemPicker.find("." + b).find("input").val("#" + l);
  }, D.prototype.pickerEvents = function () {
    var e = this,
        o = e.config,
        r = e.elemColorBox.find("." + f),
        t = e.elemPicker.find("." + b + " input"),
        n = {
      clear: function clear(i) {
        r[0].style.background = "", e.elemColorBox.find("." + d).removeClass(a).addClass(s), e.color = "", o.done && o.done(""), e.removePicker();
      },
      confirm: function confirm(i, n) {
        var l = t.val(),
            c = l,
            f = {};

        if (l.indexOf(",") > -1) {
          if (f = k(P(l)), e.select(f.h, f.s, f.b), r[0].style.background = c = "#" + C(f), (l.match(/[0-9]{1,3}/g) || []).length > 3 && "rgba" === r.attr("lay-type")) {
            var u = 280 * l.slice(l.lastIndexOf(",") + 1, l.length - 1);
            e.elemPicker.find("." + h).css("left", u), r[0].style.background = l, c = l;
          }
        } else f = y(l), r[0].style.background = c = "#" + C(f), e.elemColorBox.find("." + d).removeClass(s).addClass(a);

        return "change" === n ? (e.select(f.h, f.s, f.b, n), void (o.change && o.change(c))) : (e.color = l, o.done && o.done(l), void e.removePicker());
      }
    };
    e.elemPicker.on("click", "*[colorpicker-events]", function () {
      var e = i(this),
          o = e.attr("colorpicker-events");
      n[o] && n[o].call(this, e);
    }), t.on("keyup", function (e) {
      var o = i(this);
      n.confirm.call(this, o, 13 === e.keyCode ? null : "change");
    });
  }, D.prototype.events = function () {
    var e = this,
        o = e.config,
        r = e.elemColorBox.find("." + f);
    e.elemColorBox.on("click", function () {
      e.renderPicker(), i(c)[0] && (e.val(), e.side());
    }), o.elem[0] && !e.elemColorBox[0].eventHandler && (w.on("click", function (o) {
      if (!i(o.target).hasClass(l) && !i(o.target).parents("." + l)[0] && !i(o.target).hasClass(c.replace(/\./g, "")) && !i(o.target).parents(c)[0] && e.elemPicker) {
        if (e.color) {
          var t = k(P(e.color));
          e.select(t.h, t.s, t.b);
        } else e.elemColorBox.find("." + d).removeClass(a).addClass(s);

        r[0].style.background = e.color || "", e.removePicker();
      }
    }), B.on("resize", function () {
      return !(!e.elemPicker || !i(c)[0]) && void e.position();
    }), e.elemColorBox[0].eventHandler = !0);
  }, o.render = function (e) {
    var i = new D(e);
    return r.call(i);
  }, e(t, o);
});
layui.define("layer", function (e) {
  "use strict";

  var t = layui.$,
      i = layui.layer,
      a = layui.hint(),
      n = layui.device(),
      l = "form",
      r = ".layui-form",
      s = "layui-this",
      o = "layui-hide",
      c = "layui-disabled",
      u = function u() {
    this.config = {
      verify: {
        required: [/[\S]+/, "必填项不能为空"],
        phone: [/^1\d{10}$/, "请输入正确的手机号"],
        email: [/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/, "邮箱格式不正确"],
        url: [/(^#)|(^http(s*):\/\/[^\s]+\.[^\s]+)/, "链接格式不正确"],
        number: function number(e) {
          if (!e || isNaN(e)) return "只能填写数字";
        },
        date: [/^(\d{4})[-\/](\d{1}|0\d{1}|1[0-2])([-\/](\d{1}|0\d{1}|[1-2][0-9]|3[0-1]))*$/, "日期格式不正确"],
        identity: [/(^\d{15}$)|(^\d{17}(x|X|\d)$)/, "请输入正确的身份证号"]
      }
    };
  };

  u.prototype.set = function (e) {
    var i = this;
    return t.extend(!0, i.config, e), i;
  }, u.prototype.verify = function (e) {
    var i = this;
    return t.extend(!0, i.config.verify, e), i;
  }, u.prototype.on = function (e, t) {
    return layui.onevent.call(this, l, e, t);
  }, u.prototype.val = function (e, i) {
    var a = this,
        n = t(r + '[lay-filter="' + e + '"]');
    return n.each(function (e, a) {
      var n = t(this);
      layui.each(i, function (e, t) {
        var i,
            a = n.find('[name="' + e + '"]');
        a[0] && (i = a[0].type, "checkbox" === i ? a[0].checked = t : "radio" === i ? a.each(function () {
          this.value == t && (this.checked = !0);
        }) : a.val(t));
      });
    }), f.render(null, e), a.getValue(e);
  }, u.prototype.getValue = function (e, i) {
    i = i || t(r + '[lay-filter="' + e + '"]').eq(0);
    var a = {},
        n = {},
        l = i.find("input,select,textarea");
    return layui.each(l, function (e, t) {
      if (t.name = (t.name || "").replace(/^\s*|\s*&/, ""), t.name) {
        if (/^.*\[\]$/.test(t.name)) {
          var i = t.name.match(/^(.*)\[\]$/g)[0];
          a[i] = 0 | a[i], t.name = t.name.replace(/^(.*)\[\]$/, "$1[" + a[i]++ + "]");
        }

        /^checkbox|radio$/.test(t.type) && !t.checked || (n[t.name] = t.value);
      }
    }), n;
  }, u.prototype.render = function (e, i) {
    var n = this,
        u = t(r + function () {
      return i ? '[lay-filter="' + i + '"]' : "";
    }()),
        d = {
      select: function select() {
        var e,
            i = "请选择",
            a = "layui-form-select",
            n = "layui-select-title",
            r = "layui-select-none",
            d = "",
            f = u.find("select"),
            v = function v(i, l) {
          t(i.target).parent().hasClass(n) && !l || (t("." + a).removeClass(a + "ed " + a + "up"), e && d && e.val(d)), e = null;
        },
            y = function y(i, u, f) {
          var y,
              p = t(this),
              m = i.find("." + n),
              k = m.find("input"),
              g = i.find("dl"),
              x = g.children("dd"),
              b = this.selectedIndex;

          if (!u) {
            var C = function C() {
              var e = i.offset().top + i.outerHeight() + 5 - h.scrollTop(),
                  t = g.outerHeight();
              b = p[0].selectedIndex, i.addClass(a + "ed"), x.removeClass(o), y = null, x.eq(b).addClass(s).siblings().removeClass(s), e + t > h.height() && e >= t && i.addClass(a + "up"), T();
            },
                w = function w(e) {
              i.removeClass(a + "ed " + a + "up"), k.blur(), y = null, e || $(k.val(), function (e) {
                var i = p[0].selectedIndex;
                e && (d = t(p[0].options[i]).html(), 0 === i && d === k.attr("placeholder") && (d = ""), k.val(d || ""));
              });
            },
                T = function T() {
              var e = g.children("dd." + s);

              if (e[0]) {
                var t = e.position().top,
                    i = g.height(),
                    a = e.height();
                t > i && g.scrollTop(t + g.scrollTop() - i + a - 5), t < 0 && g.scrollTop(t + g.scrollTop() - 5);
              }
            };

            m.on("click", function (e) {
              i.hasClass(a + "ed") ? w() : (v(e, !0), C()), g.find("." + r).remove();
            }), m.find(".layui-edge").on("click", function () {
              k.focus();
            }), k.on("keyup", function (e) {
              var t = e.keyCode;
              9 === t && C();
            }).on("keydown", function (e) {
              var t = e.keyCode;
              9 === t && w();

              var i = function i(t, a) {
                var n, l;
                e.preventDefault();

                var r = function () {
                  var e = g.children("dd." + s);

                  if (g.children("dd." + o)[0] && "next" === t) {
                    var i = g.children("dd:not(." + o + ",." + c + ")"),
                        n = i.eq(0).index();
                    if (n >= 0 && n < e.index() && !i.hasClass(s)) return i.eq(0).prev()[0] ? i.eq(0).prev() : g.children(":last");
                  }

                  return a && a[0] ? a : y && y[0] ? y : e;
                }();

                return l = r[t](), n = r[t]("dd:not(." + o + ")"), l[0] ? (y = r[t](), n[0] && !n.hasClass(c) || !y[0] ? (n.addClass(s).siblings().removeClass(s), void T()) : i(t, y)) : y = null;
              };

              38 === t && i("prev"), 40 === t && i("next"), 13 === t && (e.preventDefault(), g.children("dd." + s).trigger("click"));
            });

            var $ = function $(e, i, a) {
              var n = 0;
              layui.each(x, function () {
                var i = t(this),
                    l = i.text(),
                    r = l.indexOf(e) === -1;
                ("" === e || "blur" === a ? e !== l : r) && n++, "keyup" === a && i[r ? "addClass" : "removeClass"](o);
              });
              var l = n === x.length;
              return i(l), l;
            },
                q = function q(e) {
              var t = this.value,
                  i = e.keyCode;
              return 9 !== i && 13 !== i && 37 !== i && 38 !== i && 39 !== i && 40 !== i && ($(t, function (e) {
                e ? g.find("." + r)[0] || g.append('<p class="' + r + '">无匹配项</p>') : g.find("." + r).remove();
              }, "keyup"), "" === t && g.find("." + r).remove(), void T());
            };

            f && k.on("keyup", q).on("blur", function (i) {
              var a = p[0].selectedIndex;
              e = k, d = t(p[0].options[a]).html(), 0 === a && d === k.attr("placeholder") && (d = ""), setTimeout(function () {
                $(k.val(), function (e) {
                  d || k.val("");
                }, "blur");
              }, 200);
            }), x.on("click", function () {
              var e = t(this),
                  a = e.attr("lay-value"),
                  n = p.attr("lay-filter");
              return !e.hasClass(c) && (e.hasClass("layui-select-tips") ? k.val("") : (k.val(e.text()), e.addClass(s)), e.siblings().removeClass(s), p.val(a).removeClass("layui-form-danger"), layui.event.call(this, l, "select(" + n + ")", {
                elem: p[0],
                value: a,
                othis: i
              }), w(!0), !1);
            }), i.find("dl>dt").on("click", function (e) {
              return !1;
            }), t(document).off("click", v).on("click", v);
          }
        };

        f.each(function (e, l) {
          var r = t(this),
              o = r.next("." + a),
              u = this.disabled,
              d = l.value,
              f = t(l.options[l.selectedIndex]),
              v = l.options[0];
          if ("string" == typeof r.attr("lay-ignore")) return r.show();
          var h = "string" == typeof r.attr("lay-search"),
              p = v ? v.value ? i : v.innerHTML || i : i,
              m = t(['<div class="' + (h ? "" : "layui-unselect ") + a, (u ? " layui-select-disabled" : "") + '">', '<div class="' + n + '">', '<input type="text" placeholder="' + p + '" ' + ('value="' + (d ? f.html() : "") + '"') + (h ? "" : " readonly") + ' class="layui-input' + (h ? "" : " layui-unselect") + (u ? " " + c : "") + '">', '<i class="layui-edge"></i></div>', '<dl class="layui-anim layui-anim-upbit' + (r.find("optgroup")[0] ? " layui-select-group" : "") + '">', function (e) {
            var t = [];
            return layui.each(e, function (e, a) {
              0 !== e || a.value ? "optgroup" === a.tagName.toLowerCase() ? t.push("<dt>" + a.label + "</dt>") : t.push('<dd lay-value="' + a.value + '" class="' + (d === a.value ? s : "") + (a.disabled ? " " + c : "") + '">' + a.innerHTML + "</dd>") : t.push('<dd lay-value="" class="layui-select-tips">' + (a.innerHTML || i) + "</dd>");
            }), 0 === t.length && t.push('<dd lay-value="" class="' + c + '">没有选项</dd>'), t.join("");
          }(r.find("*")) + "</dl>", "</div>"].join(""));
          o[0] && o.remove(), r.after(m), y.call(this, m, u, h);
        });
      },
      checkbox: function checkbox() {
        var e = {
          checkbox: ["layui-form-checkbox", "layui-form-checked", "checkbox"],
          _switch: ["layui-form-switch", "layui-form-onswitch", "switch"]
        },
            i = u.find("input[type=checkbox]"),
            a = function a(e, i) {
          var a = t(this);
          e.on("click", function () {
            var t = a.attr("lay-filter"),
                n = (a.attr("lay-text") || "").split("|");
            a[0].disabled || (a[0].checked ? (a[0].checked = !1, e.removeClass(i[1]).find("em").text(n[1])) : (a[0].checked = !0, e.addClass(i[1]).find("em").text(n[0])), layui.event.call(a[0], l, i[2] + "(" + t + ")", {
              elem: a[0],
              value: a[0].value,
              othis: e
            }));
          });
        };

        i.each(function (i, n) {
          var l = t(this),
              r = l.attr("lay-skin"),
              s = (l.attr("lay-text") || "").split("|"),
              o = this.disabled;
          "switch" === r && (r = "_" + r);
          var u = e[r] || e.checkbox;
          if ("string" == typeof l.attr("lay-ignore")) return l.show();
          var d = l.next("." + u[0]),
              f = t(['<div class="layui-unselect ' + u[0], n.checked ? " " + u[1] : "", o ? " layui-checkbox-disbaled " + c : "", '"', r ? ' lay-skin="' + r + '"' : "", ">", function () {
            var e = n.title.replace(/\s/g, ""),
                t = {
              checkbox: [e ? "<span>" + n.title + "</span>" : "", '<i class="layui-icon layui-icon-ok"></i>'].join(""),
              _switch: "<em>" + ((n.checked ? s[0] : s[1]) || "") + "</em><i></i>"
            };
            return t[r] || t.checkbox;
          }(), "</div>"].join(""));
          d[0] && d.remove(), l.after(f), a.call(this, f, u);
        });
      },
      radio: function radio() {
        var e = "layui-form-radio",
            i = ["&#xe643;", "&#xe63f;"],
            a = u.find("input[type=radio]"),
            n = function n(a) {
          var n = t(this),
              s = "layui-anim-scaleSpring";
          a.on("click", function () {
            var o = n[0].name,
                c = n.parents(r),
                u = n.attr("lay-filter"),
                d = c.find("input[name=" + o.replace(/(\.|#|\[|\])/g, "\\$1") + "]");
            n[0].disabled || (layui.each(d, function () {
              var a = t(this).next("." + e);
              this.checked = !1, a.removeClass(e + "ed"), a.find(".layui-icon").removeClass(s).html(i[1]);
            }), n[0].checked = !0, a.addClass(e + "ed"), a.find(".layui-icon").addClass(s).html(i[0]), layui.event.call(n[0], l, "radio(" + u + ")", {
              elem: n[0],
              value: n[0].value,
              othis: a
            }));
          });
        };

        a.each(function (a, l) {
          var r = t(this),
              s = r.next("." + e),
              o = this.disabled;
          if ("string" == typeof r.attr("lay-ignore")) return r.show();
          s[0] && s.remove();
          var u = t(['<div class="layui-unselect ' + e, l.checked ? " " + e + "ed" : "", (o ? " layui-radio-disbaled " + c : "") + '">', '<i class="layui-anim layui-icon">' + i[l.checked ? 0 : 1] + "</i>", "<div>" + function () {
            var e = l.title || "";
            return "string" == typeof r.next().attr("lay-radio") && (e = r.next().html(), r.next().remove()), e;
          }() + "</div>", "</div>"].join(""));
          r.after(u), n.call(this, u);
        });
      }
    };
    return e ? d[e] ? d[e]() : a.error("不支持的" + e + "表单渲染") : layui.each(d, function (e, t) {
      t();
    }), n;
  };

  var d = function d() {
    var e = null,
        a = f.config.verify,
        s = "layui-form-danger",
        o = {},
        c = t(this),
        u = c.parents(r),
        d = u.find("*[lay-verify]"),
        v = c.parents("form")[0],
        h = c.attr("lay-filter");
    return layui.each(d, function (l, r) {
      var o = t(this),
          c = o.attr("lay-verify").split("|"),
          u = o.attr("lay-verType"),
          d = o.val();
      if (o.removeClass(s), layui.each(c, function (t, l) {
        var c,
            f = "",
            v = "function" == typeof a[l];

        if (a[l]) {
          var c = v ? f = a[l](d, r) : !a[l][0].test(d);
          if (f = f || a[l][1], "required" === l && (f = o.attr("lay-reqText") || f), c) return "tips" === u ? i.tips(f, function () {
            return "string" == typeof o.attr("lay-ignore") || "select" !== r.tagName.toLowerCase() && !/^checkbox|radio$/.test(r.type) ? o : o.next();
          }(), {
            tips: 1
          }) : "alert" === u ? i.alert(f, {
            title: "提示",
            shadeClose: !0
          }) : i.msg(f, {
            icon: 5,
            shift: 6
          }), n.android || n.ios || setTimeout(function () {
            r.focus();
          }, 7), o.addClass(s), e = !0;
        }
      }), e) return e;
    }), !e && (o = f.getValue(null, u), layui.event.call(this, l, "submit(" + h + ")", {
      elem: this,
      form: v,
      field: o
    }));
  },
      f = new u(),
      v = t(document),
      h = t(window);

  f.render(), v.on("reset", r, function () {
    var e = t(this).attr("lay-filter");
    setTimeout(function () {
      f.render(null, e);
    }, 50);
  }), v.on("submit", r, d).on("click", "*[lay-submit]", d), e(l, f);
});
layui.define("form", function (e) {
  "use strict";

  var i = layui.$,
      a = layui.form,
      n = layui.layer,
      t = "tree",
      r = {
    config: {},
    index: layui[t] ? layui[t].index + 1e4 : 0,
    set: function set(e) {
      var a = this;
      return a.config = i.extend({}, a.config, e), a;
    },
    on: function on(e, i) {
      return layui.onevent.call(this, t, e, i);
    }
  },
      l = function l() {
    var e = this,
        i = e.config,
        a = i.id || e.index;
    return l.that[a] = e, l.config[a] = i, {
      config: i,
      reload: function reload(i) {
        e.reload.call(e, i);
      },
      getChecked: function getChecked() {
        return e.getChecked.call(e);
      },
      setChecked: function setChecked(i) {
        return e.setChecked.call(e, i);
      }
    };
  },
      c = "layui-hide",
      d = "layui-disabled",
      s = "layui-tree-set",
      o = "layui-tree-iconClick",
      h = "layui-icon-addition",
      u = "layui-icon-subtraction",
      p = "layui-tree-entry",
      f = "layui-tree-main",
      y = "layui-tree-txt",
      v = "layui-tree-pack",
      C = "layui-tree-spread",
      k = "layui-tree-setLineShort",
      m = "layui-tree-showLine",
      x = "layui-tree-lineExtend",
      b = function b(e) {
    var a = this;
    a.index = ++r.index, a.config = i.extend({}, a.config, r.config, e), a.render();
  };

  b.prototype.config = {
    data: [],
    showCheckbox: !1,
    showLine: !0,
    accordion: !1,
    onlyIconControl: !1,
    isJump: !1,
    edit: !1,
    text: {
      defaultNodeName: "未命名",
      none: "无数据"
    }
  }, b.prototype.reload = function (e) {
    var a = this;
    layui.each(e, function (e, i) {
      i.constructor === Array && delete a.config[e];
    }), a.config = i.extend(!0, {}, a.config, e), a.render();
  }, b.prototype.render = function () {
    var e = this,
        a = e.config;
    e.checkids = [];
    var n = i('<div class="layui-tree' + (a.showCheckbox ? " layui-form" : "") + (a.showLine ? " layui-tree-line" : "") + '" lay-filter="LAY-tree-' + e.index + '"></div>');
    e.tree(n);
    var t = a.elem = i(a.elem);

    if (t[0]) {
      if (e.key = a.id || e.index, e.elem = n, e.elemNone = i('<div class="layui-tree-emptyText">' + a.text.none + "</div>"), t.html(e.elem), 0 == e.elem.find(".layui-tree-set").length) return e.elem.append(e.elemNone);
      a.showCheckbox && e.renderForm("checkbox"), e.elem.find(".layui-tree-set").each(function () {
        var e = i(this);
        e.parent(".layui-tree-pack")[0] || e.addClass("layui-tree-setHide"), !e.next()[0] && e.parents(".layui-tree-pack").eq(1).hasClass("layui-tree-lineExtend") && e.addClass(k), e.next()[0] || e.parents(".layui-tree-set").eq(0).next()[0] || e.addClass(k);
      }), e.events();
    }
  }, b.prototype.renderForm = function (e) {
    a.render(e, "LAY-tree-" + this.index);
  }, b.prototype.tree = function (e, a) {
    var n = this,
        t = n.config,
        r = a || t.data;
    layui.each(r, function (a, r) {
      var l = r.children && r.children.length > 0,
          o = i('<div class="layui-tree-pack" ' + (r.spread ? 'style="display: block;"' : "") + '"></div>'),
          h = i(['<div data-id="' + r.id + '" class="layui-tree-set' + (r.spread ? " layui-tree-spread" : "") + (r.checked ? " layui-tree-checkedFirst" : "") + '">', '<div class="layui-tree-entry">', '<div class="layui-tree-main">', function () {
        return t.showLine ? l ? '<span class="layui-tree-iconClick layui-tree-icon"><i class="layui-icon ' + (r.spread ? "layui-icon-subtraction" : "layui-icon-addition") + '"></i></span>' : '<span class="layui-tree-iconClick"><i class="layui-icon layui-icon-file"></i></span>' : '<span class="layui-tree-iconClick"><i class="layui-tree-iconArrow ' + (l ? "" : c) + '"></i></span>';
      }(), function () {
        return t.showCheckbox ? '<input type="checkbox" name="' + (r.field || "layuiTreeCheck_" + r.id) + '" same="layuiTreeCheck" lay-skin="primary" ' + (r.disabled ? "disabled" : "") + ' value="' + r.id + '">' : "";
      }(), function () {
        return t.isJump && r.href ? '<a href="' + r.href + '" target="_blank" class="' + y + '">' + (r.title || r.label || t.text.defaultNodeName) + "</a>" : '<span class="' + y + (r.disabled ? " " + d : "") + '">' + (r.title || r.label || t.text.defaultNodeName) + "</span>";
      }(), "</div>", function () {
        if (!t.edit) return "";
        var e = {
          add: '<i class="layui-icon layui-icon-add-1"  data-type="add"></i>',
          update: '<i class="layui-icon layui-icon-edit" data-type="update"></i>',
          del: '<i class="layui-icon layui-icon-delete" data-type="del"></i>'
        },
            i = ['<div class="layui-btn-group layui-tree-btnGroup">'];
        return t.edit === !0 && (t.edit = ["update", "del"]), "object" == _typeof(t.edit) ? (layui.each(t.edit, function (a, n) {
          i.push(e[n] || "");
        }), i.join("") + "</div>") : void 0;
      }(), "</div></div>"].join(""));
      l && (h.append(o), n.tree(o, r.children)), e.append(h), h.prev("." + s)[0] && h.prev().children(".layui-tree-pack").addClass("layui-tree-showLine"), l || h.parent(".layui-tree-pack").addClass("layui-tree-lineExtend"), n.spread(h, r), t.showCheckbox && (r.checked && n.checkids.push(r.id), n.checkClick(h, r)), t.edit && n.operate(h, r);
    });
  }, b.prototype.spread = function (e, a) {
    var n = this,
        t = n.config,
        r = e.children("." + p),
        l = r.children("." + f),
        c = r.find("." + o),
        k = r.find("." + y),
        m = t.onlyIconControl ? c : l,
        x = "";
    m.on("click", function (i) {
      var a = e.children("." + v),
          n = m.children(".layui-icon")[0] ? m.children(".layui-icon") : m.find(".layui-tree-icon").children(".layui-icon");

      if (a[0]) {
        if (e.hasClass(C)) e.removeClass(C), a.slideUp(200), n.removeClass(u).addClass(h);else if (e.addClass(C), a.slideDown(200), n.addClass(u).removeClass(h), t.accordion) {
          var r = e.siblings("." + s);
          r.removeClass(C), r.children("." + v).slideUp(200), r.find(".layui-tree-icon").children(".layui-icon").removeClass(u).addClass(h);
        }
      } else x = "normal";
    }), k.on("click", function () {
      var n = i(this);
      n.hasClass(d) || (x = e.hasClass(C) ? t.onlyIconControl ? "open" : "close" : t.onlyIconControl ? "close" : "open", t.click && t.click({
        elem: e,
        state: x,
        data: a
      }));
    });
  }, b.prototype.setCheckbox = function (e, i, a) {
    var n = this,
        t = (n.config, a.prop("checked"));

    if (!a.prop("disabled")) {
      if ("object" == _typeof(i.children) || e.find("." + v)[0]) {
        var r = e.find("." + v).find('input[same="layuiTreeCheck"]');
        r.each(function () {
          this.disabled || (this.checked = t);
        });
      }

      var l = function l(e) {
        if (e.parents("." + s)[0]) {
          var i,
              a = e.parent("." + v),
              n = a.parent(),
              r = a.prev().find('input[same="layuiTreeCheck"]');
          t ? r.prop("checked", t) : (a.find('input[same="layuiTreeCheck"]').each(function () {
            this.checked && (i = !0);
          }), i || r.prop("checked", !1)), l(n);
        }
      };

      l(e), n.renderForm("checkbox");
    }
  }, b.prototype.checkClick = function (e, a) {
    var n = this,
        t = n.config,
        r = e.children("." + p),
        l = r.children("." + f);
    l.on("click", 'input[same="layuiTreeCheck"]+', function (r) {
      layui.stope(r);
      var l = i(this).prev(),
          c = l.prop("checked");
      l.prop("disabled") || (n.setCheckbox(e, a, l), t.oncheck && t.oncheck({
        elem: e,
        checked: c,
        data: a
      }));
    });
  }, b.prototype.operate = function (e, a) {
    var t = this,
        r = t.config,
        l = e.children("." + p),
        d = l.children("." + f);
    l.children(".layui-tree-btnGroup").on("click", ".layui-icon", function (l) {
      layui.stope(l);
      var f = i(this).data("type"),
          b = e.children("." + v),
          g = {
        data: a,
        type: f,
        elem: e
      };

      if ("add" == f) {
        b[0] || (r.showLine ? (d.find("." + o).addClass("layui-tree-icon"), d.find("." + o).children(".layui-icon").addClass(h).removeClass("layui-icon-file")) : d.find(".layui-tree-iconArrow").removeClass(c), e.append('<div class="layui-tree-pack"></div>'));
        var w = r.operate && r.operate(g),
            N = {};
        if (N.title = r.text.defaultNodeName, N.id = w, t.tree(e.children("." + v), [N]), r.showLine) if (b[0]) b.hasClass(x) || b.addClass(x), e.find("." + v).each(function () {
          i(this).children("." + s).last().addClass(k);
        }), b.children("." + s).last().prev().hasClass(k) ? b.children("." + s).last().prev().removeClass(k) : b.children("." + s).last().removeClass(k), !e.parent("." + v)[0] && e.next()[0] && b.children("." + s).last().removeClass(k);else {
          var T = e.siblings("." + s),
              L = 1,
              A = e.parent("." + v);
          layui.each(T, function (e, a) {
            i(a).children("." + v)[0] || (L = 0);
          }), 1 == L ? (T.children("." + v).addClass(m), T.children("." + v).children("." + s).removeClass(k), e.children("." + v).addClass(m), A.removeClass(x), A.children("." + s).last().children("." + v).children("." + s).last().addClass(k)) : e.children("." + v).children("." + s).addClass(k);
        }
        if (!r.showCheckbox) return;

        if (d.find('input[same="layuiTreeCheck"]')[0].checked) {
          var I = e.children("." + v).children("." + s).last();
          I.find('input[same="layuiTreeCheck"]')[0].checked = !0;
        }

        t.renderForm("checkbox");
      } else if ("update" == f) {
        var F = d.children("." + y).html();
        d.children("." + y).html(""), d.append('<input type="text" class="layui-tree-editInput">'), d.children(".layui-tree-editInput").val(F).focus();

        var j = function j(e) {
          var i = e.val().trim();
          i = i ? i : r.text.defaultNodeName, e.remove(), d.children("." + y).html(i), g.data.title = i, r.operate && r.operate(g);
        };

        d.children(".layui-tree-editInput").blur(function () {
          j(i(this));
        }), d.children(".layui-tree-editInput").on("keydown", function (e) {
          13 === e.keyCode && (e.preventDefault(), j(i(this)));
        });
      } else n.confirm('确认删除该节点 "<span style="color: #999;">' + (a.title || "") + '</span>" 吗？', function (a) {
        if (r.operate && r.operate(g), g.status = "remove", n.close(a), !e.prev("." + s)[0] && !e.next("." + s)[0] && !e.parent("." + v)[0]) return e.remove(), void t.elem.append(t.elemNone);

        if (e.siblings("." + s).children("." + p)[0]) {
          if (r.showCheckbox) {
            var l = function l(e) {
              if (e.parents("." + s)[0]) {
                var a = e.siblings("." + s).children("." + p),
                    n = e.parent("." + v).prev(),
                    r = n.find('input[same="layuiTreeCheck"]')[0],
                    c = 1,
                    d = 0;
                0 == r.checked && (a.each(function (e, a) {
                  var n = i(a).find('input[same="layuiTreeCheck"]')[0];
                  0 != n.checked || n.disabled || (c = 0), n.disabled || (d = 1);
                }), 1 == c && 1 == d && (r.checked = !0, t.renderForm("checkbox"), l(n.parent("." + s))));
              }
            };

            l(e);
          }

          if (r.showLine) {
            var d = e.siblings("." + s),
                h = 1,
                f = e.parent("." + v);
            layui.each(d, function (e, a) {
              i(a).children("." + v)[0] || (h = 0);
            }), 1 == h ? (b[0] || (f.removeClass(x), d.children("." + v).addClass(m), d.children("." + v).children("." + s).removeClass(k)), e.next()[0] ? f.children("." + s).last().children("." + v).children("." + s).last().addClass(k) : e.prev().children("." + v).children("." + s).last().addClass(k), e.next()[0] || e.parents("." + s)[1] || e.parents("." + s).eq(0).next()[0] || e.prev("." + s).addClass(k)) : !e.next()[0] && e.hasClass(k) && e.prev().addClass(k);
          }
        } else {
          var y = e.parent("." + v).prev();

          if (r.showLine) {
            y.find("." + o).removeClass("layui-tree-icon"), y.find("." + o).children(".layui-icon").removeClass(u).addClass("layui-icon-file");
            var w = y.parents("." + v).eq(0);
            w.addClass(x), w.children("." + s).each(function () {
              i(this).children("." + v).children("." + s).last().addClass(k);
            });
          } else y.find(".layui-tree-iconArrow").addClass(c);

          e.parents("." + s).eq(0).removeClass(C), e.parent("." + v).remove();
        }

        e.remove();
      });
    });
  }, b.prototype.events = function () {
    var e = this,
        a = e.config;
    e.elem.find(".layui-tree-checkedFirst");
    e.setChecked(e.checkids), e.elem.find(".layui-tree-search").on("keyup", function () {
      var n = i(this),
          t = n.val(),
          r = n.nextAll(),
          l = [];
      r.find("." + y).each(function () {
        var e = i(this).parents("." + p);

        if (i(this).html().indexOf(t) != -1) {
          l.push(i(this).parent());

          var a = function a(e) {
            e.addClass("layui-tree-searchShow"), e.parent("." + v)[0] && a(e.parent("." + v).parent("." + s));
          };

          a(e.parent("." + s));
        }
      }), r.find("." + p).each(function () {
        var e = i(this).parent("." + s);
        e.hasClass("layui-tree-searchShow") || e.addClass(c);
      }), 0 == r.find(".layui-tree-searchShow").length && e.elem.append(e.elemNone), a.onsearch && a.onsearch({
        elem: l
      });
    }), e.elem.find(".layui-tree-search").on("keydown", function () {
      i(this).nextAll().find("." + p).each(function () {
        var e = i(this).parent("." + s);
        e.removeClass("layui-tree-searchShow " + c);
      }), i(".layui-tree-emptyText")[0] && i(".layui-tree-emptyText").remove();
    });
  }, b.prototype.getChecked = function () {
    var e = this,
        a = e.config,
        n = [],
        t = [];
    e.elem.find(".layui-form-checked").each(function () {
      n.push(i(this).prev()[0].value);
    });

    var r = function r(e, a) {
      layui.each(e, function (e, t) {
        layui.each(n, function (e, n) {
          if (t.id == n) {
            var l = i.extend({}, t);
            return delete l.children, a.push(l), t.children && (l.children = [], r(t.children, l.children)), !0;
          }
        });
      });
    };

    return r(i.extend({}, a.data), t), t;
  }, b.prototype.setChecked = function (e) {
    var a = this;
    a.config;
    a.elem.find("." + s).each(function (a, n) {
      var t = i(this).data("id"),
          r = i(n).children("." + p).find('input[same="layuiTreeCheck"]'),
          l = r.next();

      if ("number" == typeof e) {
        if (t == e) return r[0].checked || l.click(), !1;
      } else "object" == _typeof(e) && layui.each(e, function (e, i) {
        if (i == t && !r[0].checked) return l.click(), !0;
      });
    });
  }, l.that = {}, l.config = {}, r.reload = function (e, i) {
    var a = l.that[e];
    return a.reload(i), l.call(a);
  }, r.getChecked = function (e) {
    var i = l.that[e];
    return i.getChecked();
  }, r.setChecked = function (e, i) {
    var a = l.that[e];
    return a.setChecked(i);
  }, r.render = function (e) {
    var i = new b(e);
    return l.call(i);
  }, e(t, r);
});
layui.define(["laytpl", "form"], function (e) {
  "use strict";

  var a = layui.$,
      t = layui.laytpl,
      n = layui.form,
      i = "transfer",
      l = {
    config: {},
    index: layui[i] ? layui[i].index + 1e4 : 0,
    set: function set(e) {
      var t = this;
      return t.config = a.extend({}, t.config, e), t;
    },
    on: function on(e, a) {
      return layui.onevent.call(this, i, e, a);
    }
  },
      r = function r() {
    var e = this,
        a = e.config,
        t = a.id || e.index;
    return r.that[t] = e, r.config[t] = a, {
      config: a,
      reload: function reload(a) {
        e.reload.call(e, a);
      },
      getData: function getData() {
        return e.getData.call(e);
      }
    };
  },
      c = "layui-hide",
      o = "layui-btn-disabled",
      d = "layui-none",
      s = "layui-transfer-box",
      u = "layui-transfer-header",
      h = "layui-transfer-search",
      f = "layui-transfer-active",
      y = "layui-transfer-data",
      p = function p(e) {
    return e = e || {}, ['<div class="layui-transfer-box" data-index="' + e.index + '">', '<div class="layui-transfer-header">', '<input type="checkbox" name="' + e.checkAllName + '" lay-filter="layTransferCheckbox" lay-type="all" lay-skin="primary" title="{{ d.data.title[' + e.index + "] || 'list" + (e.index + 1) + "' }}\">", "</div>", "{{# if(d.data.showSearch){ }}", '<div class="layui-transfer-search">', '<i class="layui-icon layui-icon-search"></i>', '<input type="input" class="layui-input" placeholder="关键词搜索">', "</div>", "{{# } }}", '<ul class="layui-transfer-data"></ul>', "</div>"].join("");
  },
      v = ['<div class="layui-transfer layui-form layui-border-box" lay-filter="LAY-transfer-{{ d.index }}">', p({
    index: 0,
    checkAllName: "layTransferLeftCheckAll"
  }), '<div class="layui-transfer-active">', '<button type="button" class="layui-btn layui-btn-sm layui-btn-primary layui-btn-disabled" data-index="0">', '<i class="layui-icon layui-icon-next"></i>', "</button>", '<button type="button" class="layui-btn layui-btn-sm layui-btn-primary layui-btn-disabled" data-index="1">', '<i class="layui-icon layui-icon-prev"></i>', "</button>", "</div>", p({
    index: 1,
    checkAllName: "layTransferRightCheckAll"
  }), "</div>"].join(""),
      x = function x(e) {
    var t = this;
    t.index = ++l.index, t.config = a.extend({}, t.config, l.config, e), t.render();
  };

  x.prototype.config = {
    title: ["列表一", "列表二"],
    width: 200,
    height: 360,
    data: [],
    value: [],
    showSearch: !1,
    id: "",
    text: {
      none: "无数据",
      searchNone: "无匹配数据"
    }
  }, x.prototype.reload = function (e) {
    var t = this;
    layui.each(e, function (e, a) {
      a.constructor === Array && delete t.config[e];
    }), t.config = a.extend(!0, {}, t.config, e), t.render();
  }, x.prototype.render = function () {
    var e = this,
        n = e.config,
        i = e.elem = a(t(v).render({
      data: n,
      index: e.index
    })),
        l = n.elem = a(n.elem);
    l[0] && (n.data = n.data || [], n.value = n.value || [], e.key = n.id || e.index, l.html(e.elem), e.layBox = e.elem.find("." + s), e.layHeader = e.elem.find("." + u), e.laySearch = e.elem.find("." + h), e.layData = i.find("." + y), e.layBtn = i.find("." + f + " .layui-btn"), e.layBox.css({
      width: n.width,
      height: n.height
    }), e.layData.css({
      height: function () {
        return n.height - e.layHeader.outerHeight() - e.laySearch.outerHeight() - 2;
      }()
    }), e.renderData(), e.events());
  }, x.prototype.renderData = function () {
    var e = this,
        a = (e.config, [{
      checkName: "layTransferLeftCheck",
      views: []
    }, {
      checkName: "layTransferRightCheck",
      views: []
    }]);
    e.parseData(function (e) {
      var t = e.selected ? 1 : 0,
          n = ["<li>", '<input type="checkbox" name="' + a[t].checkName + '" lay-skin="primary" lay-filter="layTransferCheckbox" title="' + e.title + '"' + (e.disabled ? " disabled" : "") + (e.checked ? " checked" : "") + ' value="' + e.value + '">', "</li>"].join("");
      a[t].views.push(n), delete e.selected;
    }), e.layData.eq(0).html(a[0].views.join("")), e.layData.eq(1).html(a[1].views.join("")), e.renderCheckBtn();
  }, x.prototype.renderForm = function (e) {
    n.render(e, "LAY-transfer-" + this.index);
  }, x.prototype.renderCheckBtn = function (e) {
    var t = this,
        n = t.config;
    e = e || {}, t.layBox.each(function (i) {
      var l = a(this),
          r = l.find("." + y),
          d = l.find("." + u).find('input[type="checkbox"]'),
          s = r.find('input[type="checkbox"]'),
          h = 0,
          f = !1;

      if (s.each(function () {
        var e = a(this).data("hide");
        (this.checked || this.disabled || e) && h++, this.checked && !e && (f = !0);
      }), d.prop("checked", f && h === s.length), t.layBtn.eq(i)[f ? "removeClass" : "addClass"](o), !e.stopNone) {
        var p = r.children("li:not(." + c + ")").length;
        t.noneView(r, p ? "" : n.text.none);
      }
    }), t.renderForm("checkbox");
  }, x.prototype.noneView = function (e, t) {
    var n = a('<p class="layui-none">' + (t || "") + "</p>");
    e.find("." + d)[0] && e.find("." + d).remove(), t.replace(/\s/g, "") && e.append(n);
  }, x.prototype.setValue = function () {
    var e = this,
        t = e.config,
        n = [];
    return e.layBox.eq(1).find("." + y + ' input[type="checkbox"]').each(function () {
      var e = a(this).data("hide");
      e || n.push(this.value);
    }), t.value = n, e;
  }, x.prototype.parseData = function (e) {
    var t = this,
        n = t.config,
        i = [];
    return layui.each(n.data, function (t, l) {
      l = ("function" == typeof n.parseData ? n.parseData(l) : l) || l, i.push(l = a.extend({}, l)), layui.each(n.value, function (e, a) {
        a == l.value && (l.selected = !0);
      }), e && e(l);
    }), n.data = i, t;
  }, x.prototype.getData = function (e) {
    var a = this,
        t = a.config,
        n = [];
    return a.setValue(), layui.each(e || t.value, function (e, a) {
      layui.each(t.data, function (e, t) {
        delete t.selected, a == t.value && n.push(t);
      });
    }), n;
  }, x.prototype.events = function () {
    var e = this,
        t = e.config;
    e.elem.on("click", 'input[lay-filter="layTransferCheckbox"]+', function () {
      var t = a(this).prev(),
          n = t[0].checked,
          i = t.parents("." + s).eq(0).find("." + y);
      t[0].disabled || ("all" === t.attr("lay-type") && i.find('input[type="checkbox"]').each(function () {
        this.disabled || (this.checked = n);
      }), e.renderCheckBtn({
        stopNone: !0
      }));
    }), e.layBtn.on("click", function () {
      var n = a(this),
          i = n.data("index"),
          l = e.layBox.eq(i),
          r = [];

      if (!n.hasClass(o)) {
        e.layBox.eq(i).each(function (t) {
          var n = a(this),
              i = n.find("." + y);
          i.children("li").each(function () {
            var t = a(this),
                n = t.find('input[type="checkbox"]'),
                i = n.data("hide");
            n[0].checked && !i && (n[0].checked = !1, l.siblings("." + s).find("." + y).append(t.clone()), t.remove(), r.push(n[0].value)), e.setValue();
          });
        }), e.renderCheckBtn();
        var c = l.siblings("." + s).find("." + h + " input");
        "" === c.val() || c.trigger("keyup"), t.onchange && t.onchange(e.getData(r), i);
      }
    }), e.laySearch.find("input").on("keyup", function () {
      var n = this.value,
          i = a(this).parents("." + h).eq(0).siblings("." + y),
          l = i.children("li");
      l.each(function () {
        var e = a(this),
            t = e.find('input[type="checkbox"]'),
            i = t[0].title.indexOf(n) !== -1;
        e[i ? "removeClass" : "addClass"](c), t.data("hide", !i);
      }), e.renderCheckBtn();
      var r = l.length === i.children("li." + c).length;
      e.noneView(i, r ? t.text.searchNone : "");
    });
  }, r.that = {}, r.config = {}, l.reload = function (e, a) {
    var t = r.that[e];
    return t.reload(a), r.call(t);
  }, l.getData = function (e) {
    var a = r.that[e];
    return a.getData();
  }, l.render = function (e) {
    var a = new x(e);
    return r.call(a);
  }, e(i, l);
});
layui.define(["laytpl", "laypage", "layer", "form", "util"], function (e) {
  "use strict";

  var t = layui.$,
      i = layui.laytpl,
      a = layui.laypage,
      l = layui.layer,
      n = layui.form,
      o = (layui.util, layui.hint()),
      r = layui.device(),
      d = {
    config: {
      checkName: "LAY_CHECKED",
      indexName: "LAY_TABLE_INDEX"
    },
    cache: {},
    index: layui.table ? layui.table.index + 1e4 : 0,
    set: function set(e) {
      var i = this;
      return i.config = t.extend({}, i.config, e), i;
    },
    on: function on(e, t) {
      return layui.onevent.call(this, y, e, t);
    }
  },
      c = function c() {
    var e = this,
        t = e.config,
        i = t.id || t.index;
    return i && (c.that[i] = e, c.config[i] = t), {
      config: t,
      reload: function reload(t) {
        e.reload.call(e, t);
      },
      setColsWidth: function setColsWidth() {
        e.setColsWidth.call(e);
      },
      resize: function resize() {
        e.resize.call(e);
      }
    };
  },
      s = function s(e) {
    var t = c.config[e];
    return t || o.error("The ID option was not found in the table instance"), t || null;
  },
      u = function u(e, a, l, n) {
    var o = e.templet ? function () {
      return "function" == typeof e.templet ? e.templet(l) : i(t(e.templet).html() || String(a)).render(l);
    }() : a;
    return n ? t("<div>" + o + "</div>").text() : o;
  },
      y = "table",
      h = ".layui-table",
      f = "layui-hide",
      p = "layui-none",
      v = "layui-table-view",
      m = ".layui-table-tool",
      g = ".layui-table-box",
      b = ".layui-table-init",
      x = ".layui-table-header",
      k = ".layui-table-body",
      C = ".layui-table-main",
      w = ".layui-table-fixed",
      T = ".layui-table-fixed-l",
      A = ".layui-table-fixed-r",
      L = ".layui-table-total",
      N = ".layui-table-page",
      S = ".layui-table-sort",
      W = "layui-table-edit",
      _ = "layui-table-hover",
      E = function E(e) {
    var t = '{{#if(item2.colspan){}} colspan="{{item2.colspan}}"{{#} if(item2.rowspan){}} rowspan="{{item2.rowspan}}"{{#}}}';
    return e = e || {}, ['<table cellspacing="0" cellpadding="0" border="0" class="layui-table" ', '{{# if(d.data.skin){ }}lay-skin="{{d.data.skin}}"{{# } }} {{# if(d.data.size){ }}lay-size="{{d.data.size}}"{{# } }} {{# if(d.data.even){ }}lay-even{{# } }}>', "<thead>", "{{# layui.each(d.data.cols, function(i1, item1){ }}", "<tr>", "{{# layui.each(item1, function(i2, item2){ }}", '{{# if(item2.fixed && item2.fixed !== "right"){ left = true; } }}', '{{# if(item2.fixed === "right"){ right = true; } }}', function () {
      return e.fixed && "right" !== e.fixed ? '{{# if(item2.fixed && item2.fixed !== "right"){ }}' : "right" === e.fixed ? '{{# if(item2.fixed === "right"){ }}' : "";
    }(), "{{# var isSort = !(item2.colGroup) && item2.sort; }}", '<th data-field="{{ item2.field||i2 }}" data-key="{{d.index}}-{{i1}}-{{i2}}" {{# if( item2.parentKey){ }}data-parentkey="{{ item2.parentKey }}"{{# } }} {{# if(item2.minWidth){ }}data-minwidth="{{item2.minWidth}}"{{# } }} ' + t + ' {{# if(item2.unresize || item2.colGroup){ }}data-unresize="true"{{# } }} class="{{# if(item2.hide){ }}layui-hide{{# } }}{{# if(isSort){ }} layui-unselect{{# } }}{{# if(!item2.field){ }} layui-table-col-special{{# } }}">', '<div class="layui-table-cell laytable-cell-', "{{# if(item2.colGroup){ }}", "group", "{{# } else { }}", "{{d.index}}-{{i1}}-{{i2}}", '{{# if(item2.type !== "normal"){ }}', " laytable-cell-{{ item2.type }}", "{{# } }}", "{{# } }}", '" {{#if(item2.align){}}align="{{item2.align}}"{{#}}}>', '{{# if(item2.type === "checkbox"){ }}', '<input type="checkbox" name="layTableCheckbox" lay-skin="primary" lay-filter="layTableAllChoose" {{# if(item2[d.data.checkName]){ }}checked{{# }; }}>', "{{# } else { }}", '<span>{{item2.title||""}}</span>', "{{# if(isSort){ }}", '<span class="layui-table-sort layui-inline"><i class="layui-edge layui-table-sort-asc" title="升序"></i><i class="layui-edge layui-table-sort-desc" title="降序"></i></span>', "{{# } }}", "{{# } }}", "</div>", "</th>", e.fixed ? "{{# }; }}" : "", "{{# }); }}", "</tr>", "{{# }); }}", "</thead>", "</table>"].join("");
  },
      z = ['<table cellspacing="0" cellpadding="0" border="0" class="layui-table" ', '{{# if(d.data.skin){ }}lay-skin="{{d.data.skin}}"{{# } }} {{# if(d.data.size){ }}lay-size="{{d.data.size}}"{{# } }} {{# if(d.data.even){ }}lay-even{{# } }}>', "<tbody></tbody>", "</table>"].join(""),
      H = ['<div class="layui-form layui-border-box {{d.VIEW_CLASS}}" lay-filter="LAY-table-{{d.index}}" lay-id="{{ d.data.id }}" style="{{# if(d.data.width){ }}width:{{d.data.width}}px;{{# } }} {{# if(d.data.height){ }}height:{{d.data.height}}px;{{# } }}">', "{{# if(d.data.toolbar){ }}", '<div class="layui-table-tool">', '<div class="layui-table-tool-temp"></div>', '<div class="layui-table-tool-self"></div>', "</div>", "{{# } }}", '<div class="layui-table-box">', "{{# if(d.data.loading){ }}", '<div class="layui-table-init" style="background-color: #fff;">', '<i class="layui-icon layui-icon-loading layui-anim layui-anim-rotate layui-anim-loop"></i>', "</div>", "{{# } }}", "{{# var left, right; }}", '<div class="layui-table-header">', E(), "</div>", '<div class="layui-table-body layui-table-main">', z, "</div>", "{{# if(left){ }}", '<div class="layui-table-fixed layui-table-fixed-l">', '<div class="layui-table-header">', E({
    fixed: !0
  }), "</div>", '<div class="layui-table-body">', z, "</div>", "</div>", "{{# }; }}", "{{# if(right){ }}", '<div class="layui-table-fixed layui-table-fixed-r">', '<div class="layui-table-header">', E({
    fixed: "right"
  }), '<div class="layui-table-mend"></div>', "</div>", '<div class="layui-table-body">', z, "</div>", "</div>", "{{# }; }}", "</div>", "{{# if(d.data.totalRow){ }}", '<div class="layui-table-total">', '<table cellspacing="0" cellpadding="0" border="0" class="layui-table" ', '{{# if(d.data.skin){ }}lay-skin="{{d.data.skin}}"{{# } }} {{# if(d.data.size){ }}lay-size="{{d.data.size}}"{{# } }} {{# if(d.data.even){ }}lay-even{{# } }}>', '<tbody><tr><td><div class="layui-table-cell" style="visibility: hidden;">Total</div></td></tr></tbody>', "</table>", "</div>", "{{# } }}", "{{# if(d.data.page){ }}", '<div class="layui-table-page">', '<div id="layui-table-page{{d.index}}"></div>', "</div>", "{{# } }}", "<style>", "{{# layui.each(d.data.cols, function(i1, item1){", "layui.each(item1, function(i2, item2){ }}", ".laytable-cell-{{d.index}}-{{i1}}-{{i2}}{ ", "{{# if(item2.width){ }}", "width: {{item2.width}}px;", "{{# } }}", " }", "{{# });", "}); }}", "</style>", "</div>"].join(""),
      R = t(window),
      F = t(document),
      j = function j(e) {
    var i = this;
    i.index = ++d.index, i.config = t.extend({}, i.config, d.config, e), i.render();
  };

  j.prototype.config = {
    limit: 10,
    loading: !0,
    cellMinWidth: 60,
    defaultToolbar: ["filter", "exports", "print"],
    autoSort: !0,
    text: {
      none: "无数据"
    }
  }, j.prototype.render = function () {
    var e = this,
        a = e.config;
    if (a.elem = t(a.elem), a.where = a.where || {}, a.id = a.id || a.elem.attr("id") || e.index, a.request = t.extend({
      pageName: "page",
      limitName: "limit"
    }, a.request), a.response = t.extend({
      statusName: "code",
      statusCode: 0,
      msgName: "msg",
      dataName: "data",
      countName: "count"
    }, a.response), "object" == _typeof(a.page) && (a.limit = a.page.limit || a.limit, a.limits = a.page.limits || a.limits, e.page = a.page.curr = a.page.curr || 1, delete a.page.elem, delete a.page.jump), !a.elem[0]) return e;
    a.height && /^full-\d+$/.test(a.height) && (e.fullHeightGap = a.height.split("-")[1], a.height = R.height() - e.fullHeightGap), e.setInit();
    var l = a.elem,
        n = l.next("." + v),
        o = e.elem = t(i(H).render({
      VIEW_CLASS: v,
      data: a,
      index: e.index
    }));

    if (a.index = e.index, e.key = a.id || a.index, n[0] && n.remove(), l.after(o), e.layTool = o.find(m), e.layBox = o.find(g), e.layHeader = o.find(x), e.layMain = o.find(C), e.layBody = o.find(k), e.layFixed = o.find(w), e.layFixLeft = o.find(T), e.layFixRight = o.find(A), e.layTotal = o.find(L), e.layPage = o.find(N), e.renderToolbar(), e.fullSize(), a.cols.length > 1) {
      var r = e.layFixed.find(x).find("th");
      r.height(e.layHeader.height() - 1 - parseFloat(r.css("padding-top")) - parseFloat(r.css("padding-bottom")));
    }

    e.pullData(e.page), e.events();
  }, j.prototype.initOpts = function (e) {
    var t = this,
        i = (t.config, {
      checkbox: 48,
      radio: 48,
      space: 15,
      numbers: 40
    });
    e.checkbox && (e.type = "checkbox"), e.space && (e.type = "space"), e.type || (e.type = "normal"), "normal" !== e.type && (e.unresize = !0, e.width = e.width || i[e.type]);
  }, j.prototype.setInit = function (e) {
    var t = this,
        i = t.config;
    return i.clientWidth = i.width || function () {
      var e = function e(t) {
        var a, l;
        t = t || i.elem.parent(), a = t.width();

        try {
          l = "none" === t.css("display");
        } catch (n) {}

        return !t[0] || a && !l ? a : e(t.parent());
      };

      return e();
    }(), "width" === e ? i.clientWidth : void layui.each(i.cols, function (e, a) {
      layui.each(a, function (l, n) {
        if (!n) return void a.splice(l, 1);

        if (n.key = e + "-" + l, n.hide = n.hide || !1, n.colGroup || n.colspan > 1) {
          var o = 0;
          layui.each(i.cols[e + 1], function (t, i) {
            i.HAS_PARENT || o > 1 && o == n.colspan || (i.HAS_PARENT = !0, i.parentKey = e + "-" + l, o += parseInt(i.colspan > 1 ? i.colspan : 1));
          }), n.colGroup = !0;
        }

        t.initOpts(n);
      });
    });
  }, j.prototype.renderToolbar = function () {
    var e = this,
        a = e.config,
        l = ['<div class="layui-inline" lay-event="add"><i class="layui-icon layui-icon-add-1"></i></div>', '<div class="layui-inline" lay-event="update"><i class="layui-icon layui-icon-edit"></i></div>', '<div class="layui-inline" lay-event="delete"><i class="layui-icon layui-icon-delete"></i></div>'].join(""),
        n = e.layTool.find(".layui-table-tool-temp");
    if ("default" === a.toolbar) n.html(l);else if ("string" == typeof a.toolbar) {
      var o = t(a.toolbar).html() || "";
      o && n.html(i(o).render(a));
    }
    var r = {
      filter: {
        title: "筛选列",
        layEvent: "LAYTABLE_COLS",
        icon: "layui-icon-cols"
      },
      exports: {
        title: "导出",
        layEvent: "LAYTABLE_EXPORT",
        icon: "layui-icon-export"
      },
      print: {
        title: "打印",
        layEvent: "LAYTABLE_PRINT",
        icon: "layui-icon-print"
      }
    },
        d = [];
    "object" == _typeof(a.defaultToolbar) && layui.each(a.defaultToolbar, function (e, t) {
      var i = "string" == typeof t ? r[t] : t;
      i && d.push('<div class="layui-inline" title="' + i.title + '" lay-event="' + i.layEvent + '"><i class="layui-icon ' + i.icon + '"></i></div>');
    }), e.layTool.find(".layui-table-tool-self").html(d.join(""));
  }, j.prototype.setParentCol = function (e, t) {
    var i = this,
        a = i.config,
        l = i.layHeader.find('th[data-key="' + a.index + "-" + t + '"]'),
        n = parseInt(l.attr("colspan")) || 0;

    if (l[0]) {
      var o = t.split("-"),
          r = a.cols[o[0]][o[1]];
      e ? n-- : n++, l.attr("colspan", n), l[n < 1 ? "addClass" : "removeClass"](f), r.colspan = n, r.hide = n < 1;
      var d = l.data("parentkey");
      d && i.setParentCol(e, d);
    }
  }, j.prototype.setColsPatch = function () {
    var e = this,
        t = e.config;
    layui.each(t.cols, function (t, i) {
      layui.each(i, function (t, i) {
        i.hide && e.setParentCol(i.hide, i.parentKey);
      });
    });
  }, j.prototype.setColsWidth = function () {
    var e = this,
        t = e.config,
        i = 0,
        a = 0,
        l = 0,
        n = 0,
        o = e.setInit("width");
    e.eachCols(function (e, t) {
      t.hide || i++;
    }), o = o - function () {
      return "line" === t.skin || "nob" === t.skin ? 2 : i + 1;
    }() - e.getScrollWidth(e.layMain[0]) - 1;

    var r = function r(e) {
      layui.each(t.cols, function (i, r) {
        layui.each(r, function (i, d) {
          var c = 0,
              s = d.minWidth || t.cellMinWidth;
          return d ? void (d.colGroup || d.hide || (e ? l && l < s && (a--, c = s) : (c = d.width || 0, /\d+%$/.test(c) ? (c = Math.floor(parseFloat(c) / 100 * o), c < s && (c = s)) : c || (d.width = c = 0, a++)), d.hide && (c = 0), n += c)) : void r.splice(i, 1);
        });
      }), o > n && a && (l = (o - n) / a);
    };

    r(), r(!0), e.autoColNums = a, e.eachCols(function (i, a) {
      var n = a.minWidth || t.cellMinWidth;
      a.colGroup || a.hide || (0 === a.width ? e.getCssRule(t.index + "-" + a.key, function (e) {
        e.style.width = Math.floor(l >= n ? l : n) + "px";
      }) : /\d+%$/.test(a.width) && e.getCssRule(t.index + "-" + a.key, function (e) {
        e.style.width = Math.floor(parseFloat(a.width) / 100 * o) + "px";
      }));
    });
    var d = e.layMain.width() - e.getScrollWidth(e.layMain[0]) - e.layMain.children("table").outerWidth();

    if (e.autoColNums && d >= -i && d <= i) {
      var c = function c(t) {
        var i;
        return t = t || e.layHeader.eq(0).find("thead th:last-child"), i = t.data("field"), !i && t.prev()[0] ? c(t.prev()) : t;
      },
          s = c(),
          u = s.data("key");

      e.getCssRule(u, function (t) {
        var i = t.style.width || s.outerWidth();
        t.style.width = parseFloat(i) + d + "px", e.layMain.height() - e.layMain.prop("clientHeight") > 0 && (t.style.width = parseFloat(t.style.width) - 1 + "px");
      });
    }

    e.loading(!0);
  }, j.prototype.resize = function () {
    var e = this;
    e.fullSize(), e.setColsWidth(), e.scrollPatch();
  }, j.prototype.reload = function (e) {
    var i = this;
    e = e || {}, delete i.haveInit, e.data && e.data.constructor === Array && delete i.config.data, i.config = t.extend(!0, {}, i.config, e), i.render();
  }, j.prototype.errorView = function (e) {
    var i = this,
        a = i.layMain.find("." + p),
        l = t('<div class="' + p + '">' + (e || "Error") + "</div>");
    a[0] && (i.layNone.remove(), a.remove()), i.layFixed.addClass(f), i.layMain.find("tbody").html(""), i.layMain.append(i.layNone = l), d.cache[i.key] = [];
  }, j.prototype.page = 1, j.prototype.pullData = function (e) {
    var i = this,
        a = i.config,
        l = a.request,
        n = a.response,
        o = function o() {
      "object" == _typeof(a.initSort) && i.sort(a.initSort.field, a.initSort.type);
    };

    if (i.startTime = new Date().getTime(), a.url) {
      var r = {};
      r[l.pageName] = e, r[l.limitName] = a.limit;
      var d = t.extend(r, a.where);
      a.contentType && 0 == a.contentType.indexOf("application/json") && (d = JSON.stringify(d)), i.loading(), t.ajax({
        type: a.method || "get",
        url: a.url,
        contentType: a.contentType,
        data: d,
        dataType: "json",
        headers: a.headers || {},
        success: function success(t) {
          "function" == typeof a.parseData && (t = a.parseData(t) || t), t[n.statusName] != n.statusCode ? (i.renderForm(), i.errorView(t[n.msgName] || '返回的数据不符合规范，正确的成功状态码应为："' + n.statusName + '": ' + n.statusCode)) : (i.renderData(t, e, t[n.countName]), o(), a.time = new Date().getTime() - i.startTime + " ms"), i.setColsWidth(), "function" == typeof a.done && a.done(t, e, t[n.countName]);
        },
        error: function error(e, t) {
          i.errorView("数据接口请求异常：" + t), i.renderForm(), i.setColsWidth();
        }
      });
    } else if (a.data && a.data.constructor === Array) {
      var c = {},
          s = e * a.limit - a.limit;
      c[n.dataName] = a.data.concat().splice(s, a.limit), c[n.countName] = a.data.length, i.renderData(c, e, c[n.countName]), o(), i.setColsWidth(), "function" == typeof a.done && a.done(c, e, c[n.countName]);
    }
  }, j.prototype.eachCols = function (e) {
    var t = this;
    return d.eachCols(null, e, t.config.cols), t;
  }, j.prototype.renderData = function (e, n, o, r) {
    var c = this,
        s = c.config,
        y = e[s.response.dataName] || [],
        h = [],
        v = [],
        m = [],
        g = function g() {
      var e;
      return !r && c.sortKey ? c.sort(c.sortKey.field, c.sortKey.sort, !0) : (layui.each(y, function (a, l) {
        var o = [],
            y = [],
            p = [],
            g = a + s.limit * (n - 1) + 1;
        0 !== l.length && (r || (l[d.config.indexName] = a), c.eachCols(function (n, r) {
          var c = r.field || n,
              h = s.index + "-" + r.key,
              v = l[c];

          if (void 0 !== v && null !== v || (v = ""), !r.colGroup) {
            var m = ['<td data-field="' + c + '" data-key="' + h + '" ' + function () {
              var e = [];
              return r.edit && e.push('data-edit="' + r.edit + '"'), r.align && e.push('align="' + r.align + '"'), r.templet && e.push('data-content="' + v + '"'), r.toolbar && e.push('data-off="true"'), r.event && e.push('lay-event="' + r.event + '"'), r.style && e.push('style="' + r.style + '"'), r.minWidth && e.push('data-minwidth="' + r.minWidth + '"'), e.join(" ");
            }() + ' class="' + function () {
              var e = [];
              return r.hide && e.push(f), r.field || e.push("layui-table-col-special"), e.join(" ");
            }() + '">', '<div class="layui-table-cell laytable-cell-' + function () {
              return "normal" === r.type ? h : h + " laytable-cell-" + r.type;
            }() + '">' + function () {
              var n = t.extend(!0, {
                LAY_INDEX: g
              }, l),
                  o = d.config.checkName;

              switch (r.type) {
                case "checkbox":
                  return '<input type="checkbox" name="layTableCheckbox" lay-skin="primary" ' + function () {
                    return r[o] ? (l[o] = r[o], r[o] ? "checked" : "") : n[o] ? "checked" : "";
                  }() + ">";

                case "radio":
                  return n[o] && (e = a), '<input type="radio" name="layTableRadio_' + s.index + '" ' + (n[o] ? "checked" : "") + ' lay-type="layTableRadio">';

                case "numbers":
                  return g;
              }

              return r.toolbar ? i(t(r.toolbar).html() || "").render(n) : u(r, v, n);
            }(), "</div></td>"].join("");
            o.push(m), r.fixed && "right" !== r.fixed && y.push(m), "right" === r.fixed && p.push(m);
          }
        }), h.push('<tr data-index="' + a + '">' + o.join("") + "</tr>"), v.push('<tr data-index="' + a + '">' + y.join("") + "</tr>"), m.push('<tr data-index="' + a + '">' + p.join("") + "</tr>"));
      }), c.layBody.scrollTop(0), c.layMain.find("." + p).remove(), c.layMain.find("tbody").html(h.join("")), c.layFixLeft.find("tbody").html(v.join("")), c.layFixRight.find("tbody").html(m.join("")), c.renderForm(), "number" == typeof e && c.setThisRowChecked(e), c.syncCheckAll(), c.haveInit ? c.scrollPatch() : setTimeout(function () {
        c.scrollPatch();
      }, 50), c.haveInit = !0, l.close(c.tipsIndex), s.HAS_SET_COLS_PATCH || c.setColsPatch(), void (s.HAS_SET_COLS_PATCH = !0));
    };

    return d.cache[c.key] = y, c.layPage[0 == o || 0 === y.length && 1 == n ? "addClass" : "removeClass"](f), r ? g() : 0 === y.length ? (c.renderForm(), c.errorView(s.text.none)) : (c.layFixed.removeClass(f), g(), c.renderTotal(y), void (s.page && (s.page = t.extend({
      elem: "layui-table-page" + s.index,
      count: o,
      limit: s.limit,
      limits: s.limits || [10, 20, 30, 40, 50, 60, 70, 80, 90],
      groups: 3,
      layout: ["prev", "page", "next", "skip", "count", "limit"],
      prev: '<i class="layui-icon">&#xe603;</i>',
      next: '<i class="layui-icon">&#xe602;</i>',
      jump: function jump(e, t) {
        t || (c.page = e.curr, s.limit = e.limit, c.pullData(e.curr));
      }
    }, s.page), s.page.count = o, a.render(s.page))));
  }, j.prototype.renderTotal = function (e) {
    var t = this,
        i = t.config,
        a = {};

    if (i.totalRow) {
      layui.each(e, function (e, i) {
        0 !== i.length && t.eachCols(function (e, t) {
          var l = t.field || e,
              n = i[l];
          t.totalRow && (a[l] = (a[l] || 0) + (parseFloat(n) || 0));
        });
      }), t.dataTotal = {};
      var l = [];
      t.eachCols(function (e, n) {
        var o = n.field || e,
            r = function () {
          var e = n.totalRowText || "",
              t = parseFloat(a[o]).toFixed(2),
              i = {};
          return i[o] = t, t = u(n, t, i), n.totalRow ? t || e : e;
        }(),
            d = ['<td data-field="' + o + '" data-key="' + i.index + "-" + n.key + '" ' + function () {
          var e = [];
          return n.align && e.push('align="' + n.align + '"'), n.style && e.push('style="' + n.style + '"'), n.minWidth && e.push('data-minwidth="' + n.minWidth + '"'), e.join(" ");
        }() + ' class="' + function () {
          var e = [];
          return n.hide && e.push(f), n.field || e.push("layui-table-col-special"), e.join(" ");
        }() + '">', '<div class="layui-table-cell laytable-cell-' + function () {
          var e = i.index + "-" + n.key;
          return "normal" === n.type ? e : e + " laytable-cell-" + n.type;
        }() + '">' + r, "</div></td>"].join("");

        n.field && (t.dataTotal[o] = r), l.push(d);
      }), t.layTotal.find("tbody").html("<tr>" + l.join("") + "</tr>");
    }
  }, j.prototype.getColElem = function (e, t) {
    var i = this,
        a = i.config;
    return e.eq(0).find(".laytable-cell-" + (a.index + "-" + t) + ":eq(0)");
  }, j.prototype.renderForm = function (e) {
    n.render(e, "LAY-table-" + this.index);
  }, j.prototype.setThisRowChecked = function (e) {
    var t = this,
        i = (t.config, "layui-table-click"),
        a = t.layBody.find('tr[data-index="' + e + '"]');
    a.addClass(i).siblings("tr").removeClass(i);
  }, j.prototype.sort = function (e, i, a, l) {
    var n,
        r,
        c = this,
        s = {},
        u = c.config,
        h = u.elem.attr("lay-filter"),
        f = d.cache[c.key];
    "string" == typeof e && c.layHeader.find("th").each(function (i, a) {
      var l = t(this),
          o = l.data("field");
      if (o === e) return e = l, n = o, !1;
    });

    try {
      var n = n || e.data("field"),
          p = e.data("key");
      if (c.sortKey && !a && n === c.sortKey.field && i === c.sortKey.sort) return;
      var v = c.layHeader.find("th .laytable-cell-" + p).find(S);
      c.layHeader.find("th").find(S).removeAttr("lay-sort"), v.attr("lay-sort", i || null), c.layFixed.find("th");
    } catch (m) {
      return o.error("Table modules: Did not match to field");
    }

    c.sortKey = {
      field: n,
      sort: i
    }, u.autoSort && ("asc" === i ? r = layui.sort(f, n) : "desc" === i ? r = layui.sort(f, n, !0) : (r = layui.sort(f, d.config.indexName), delete c.sortKey)), s[u.response.dataName] = r || f, c.renderData(s, c.page, c.count, !0), l && layui.event.call(e, y, "sort(" + h + ")", {
      field: n,
      type: i
    });
  }, j.prototype.loading = function (e) {
    var i = this,
        a = i.config;
    a.loading && (e ? (i.layInit && i.layInit.remove(), delete i.layInit, i.layBox.find(b).remove()) : (i.layInit = t(['<div class="layui-table-init">', '<i class="layui-icon layui-icon-loading layui-anim layui-anim-rotate layui-anim-loop"></i>', "</div>"].join("")), i.layBox.append(i.layInit)));
  }, j.prototype.setCheckData = function (e, t) {
    var i = this,
        a = i.config,
        l = d.cache[i.key];
    l[e] && l[e].constructor !== Array && (l[e][a.checkName] = t);
  }, j.prototype.syncCheckAll = function () {
    var e = this,
        t = e.config,
        i = e.layHeader.find('input[name="layTableCheckbox"]'),
        a = function a(i) {
      return e.eachCols(function (e, a) {
        "checkbox" === a.type && (a[t.checkName] = i);
      }), i;
    };

    i[0] && (d.checkStatus(e.key).isAll ? (i[0].checked || (i.prop("checked", !0), e.renderForm("checkbox")), a(!0)) : (i[0].checked && (i.prop("checked", !1), e.renderForm("checkbox")), a(!1)));
  }, j.prototype.getCssRule = function (e, t) {
    var i = this,
        a = i.elem.find("style")[0],
        l = a.sheet || a.styleSheet || {},
        n = l.cssRules || l.rules;
    layui.each(n, function (i, a) {
      if (a.selectorText === ".laytable-cell-" + e) return t(a), !0;
    });
  }, j.prototype.fullSize = function () {
    var e,
        t = this,
        i = t.config,
        a = i.height;
    t.fullHeightGap && (a = R.height() - t.fullHeightGap, a < 135 && (a = 135), t.elem.css("height", a)), a && (e = parseFloat(a) - (t.layHeader.outerHeight() || 38), i.toolbar && (e -= t.layTool.outerHeight() || 50), i.totalRow && (e -= t.layTotal.outerHeight() || 40), i.page && (e -= t.layPage.outerHeight() || 41), t.layMain.css("height", e - 2));
  }, j.prototype.getScrollWidth = function (e) {
    var t = 0;
    return e ? t = e.offsetWidth - e.clientWidth : (e = document.createElement("div"), e.style.width = "100px", e.style.height = "100px", e.style.overflowY = "scroll", document.body.appendChild(e), t = e.offsetWidth - e.clientWidth, document.body.removeChild(e)), t;
  }, j.prototype.scrollPatch = function () {
    var e = this,
        i = e.layMain.children("table"),
        a = e.layMain.width() - e.layMain.prop("clientWidth"),
        l = e.layMain.height() - e.layMain.prop("clientHeight"),
        n = (e.getScrollWidth(e.layMain[0]), i.outerWidth() - e.layMain.width()),
        o = function o(e) {
      if (a && l) {
        if (e = e.eq(0), !e.find(".layui-table-patch")[0]) {
          var i = t('<th class="layui-table-patch"><div class="layui-table-cell"></div></th>');
          i.find("div").css({
            width: a
          }), e.find("tr").append(i);
        }
      } else e.find(".layui-table-patch").remove();
    };

    o(e.layHeader), o(e.layTotal);
    var r = e.layMain.height(),
        d = r - l;
    e.layFixed.find(k).css("height", i.height() >= d ? d : "auto"), e.layFixRight[n > 0 ? "removeClass" : "addClass"](f), e.layFixRight.css("right", a - 1);
  }, j.prototype.events = function () {
    var e,
        i = this,
        a = i.config,
        o = t("body"),
        c = {},
        s = i.layHeader.find("th"),
        h = ".layui-table-cell",
        p = a.elem.attr("lay-filter");
    i.layTool.on("click", "*[lay-event]", function (e) {
      var o = t(this),
          c = o.attr("lay-event"),
          s = function s(e) {
        var l = t(e.list),
            n = t('<ul class="layui-table-tool-panel"></ul>');
        n.html(l), a.height && n.css("max-height", a.height - (i.layTool.outerHeight() || 50)), o.find(".layui-table-tool-panel")[0] || o.append(n), i.renderForm(), n.on("click", function (e) {
          layui.stope(e);
        }), e.done && e.done(n, l);
      };

      switch (layui.stope(e), F.trigger("table.tool.panel.remove"), l.close(i.tipsIndex), c) {
        case "LAYTABLE_COLS":
          s({
            list: function () {
              var e = [];
              return i.eachCols(function (t, i) {
                i.field && "normal" == i.type && e.push('<li><input type="checkbox" name="' + i.field + '" data-key="' + i.key + '" data-parentkey="' + (i.parentKey || "") + '" lay-skin="primary" ' + (i.hide ? "" : "checked") + ' title="' + (i.title || i.field) + '" lay-filter="LAY_TABLE_TOOL_COLS"></li>');
              }), e.join("");
            }(),
            done: function done() {
              n.on("checkbox(LAY_TABLE_TOOL_COLS)", function (e) {
                var l = t(e.elem),
                    n = this.checked,
                    o = l.data("key"),
                    r = l.data("parentkey");
                layui.each(a.cols, function (e, t) {
                  layui.each(t, function (t, l) {
                    if (e + "-" + t === o) {
                      var d = l.hide;
                      l.hide = !n, i.elem.find('*[data-key="' + a.index + "-" + o + '"]')[n ? "removeClass" : "addClass"](f), d != l.hide && i.setParentCol(!n, r), i.resize();
                    }
                  });
                });
              });
            }
          });
          break;

        case "LAYTABLE_EXPORT":
          r.ie ? l.tips("导出功能不支持 IE，请用 Chrome 等高级浏览器导出", this, {
            tips: 3
          }) : s({
            list: function () {
              return ['<li data-type="csv">导出到 Csv 文件</li>', '<li data-type="xls">导出到 Excel 文件</li>'].join("");
            }(),
            done: function done(e, l) {
              l.on("click", function () {
                var e = t(this).data("type");
                d.exportFile.call(i, a.id, null, e);
              });
            }
          });
          break;

        case "LAYTABLE_PRINT":
          var u = window.open("打印窗口", "_blank"),
              h = ["<style>", "body{font-size: 12px; color: #666;}", "table{width: 100%; border-collapse: collapse; border-spacing: 0;}", "th,td{line-height: 20px; padding: 9px 15px; border: 1px solid #ccc; text-align: left; font-size: 12px; color: #666;}", "a{color: #666; text-decoration:none;}", "*.layui-hide{display: none}", "</style>"].join(""),
              v = t(i.layHeader.html());
          v.append(i.layMain.find("table").html()), v.append(i.layTotal.find("table").html()), v.find("th.layui-table-patch").remove(), v.find(".layui-table-col-special").remove(), u.document.write(h + v.prop("outerHTML")), u.document.close(), u.print(), u.close();
      }

      layui.event.call(this, y, "toolbar(" + p + ")", t.extend({
        event: c,
        config: a
      }, {}));
    }), s.on("mousemove", function (e) {
      var i = t(this),
          a = i.offset().left,
          l = e.clientX - a;
      i.data("unresize") || c.resizeStart || (c.allowResize = i.width() - l <= 10, o.css("cursor", c.allowResize ? "col-resize" : ""));
    }).on("mouseleave", function () {
      t(this);
      c.resizeStart || o.css("cursor", "");
    }).on("mousedown", function (e) {
      var l = t(this);

      if (c.allowResize) {
        var n = l.data("key");
        e.preventDefault(), c.resizeStart = !0, c.offset = [e.clientX, e.clientY], i.getCssRule(n, function (e) {
          var t = e.style.width || l.outerWidth();
          c.rule = e, c.ruleWidth = parseFloat(t), c.minWidth = l.data("minwidth") || a.cellMinWidth;
        });
      }
    }), F.on("mousemove", function (t) {
      if (c.resizeStart) {
        if (t.preventDefault(), c.rule) {
          var a = c.ruleWidth + t.clientX - c.offset[0];
          a < c.minWidth && (a = c.minWidth), c.rule.style.width = a + "px", l.close(i.tipsIndex);
        }

        e = 1;
      }
    }).on("mouseup", function (t) {
      c.resizeStart && (c = {}, o.css("cursor", ""), i.scrollPatch()), 2 === e && (e = null);
    }), s.on("click", function (a) {
      var l,
          n = t(this),
          o = n.find(S),
          r = o.attr("lay-sort");
      return o[0] && 1 !== e ? (l = "asc" === r ? "desc" : "desc" === r ? null : "asc", void i.sort(n, l, null, !0)) : e = 2;
    }).find(S + " .layui-edge ").on("click", function (e) {
      var a = t(this),
          l = a.index(),
          n = a.parents("th").eq(0).data("field");
      layui.stope(e), 0 === l ? i.sort(n, "asc", null, !0) : i.sort(n, "desc", null, !0);
    });

    var v = function v(e) {
      var a = t(this),
          l = a.parents("tr").eq(0).data("index"),
          n = i.layBody.find('tr[data-index="' + l + '"]'),
          o = d.cache[i.key] || [];
      return o = o[l] || {}, t.extend({
        tr: n,
        data: d.clearCacheKey(o),
        del: function del() {
          d.cache[i.key][l] = [], n.remove(), i.scrollPatch();
        },
        update: function update(e) {
          e = e || {}, layui.each(e, function (e, t) {
            if (e in o) {
              var a,
                  l = n.children('td[data-field="' + e + '"]');
              o[e] = t, i.eachCols(function (t, i) {
                i.field == e && i.templet && (a = i.templet);
              }), l.children(h).html(u({
                templet: a
              }, t, o)), l.data("content", t);
            }
          });
        }
      }, e);
    };

    i.elem.on("click", 'input[name="layTableCheckbox"]+', function () {
      var e = t(this).prev(),
          a = i.layBody.find('input[name="layTableCheckbox"]'),
          l = e.parents("tr").eq(0).data("index"),
          n = e[0].checked,
          o = "layTableAllChoose" === e.attr("lay-filter");
      o ? (a.each(function (e, t) {
        t.checked = n, i.setCheckData(e, n);
      }), i.syncCheckAll(), i.renderForm("checkbox")) : (i.setCheckData(l, n), i.syncCheckAll()), layui.event.call(e[0], y, "checkbox(" + p + ")", v.call(e[0], {
        checked: n,
        type: o ? "all" : "one"
      }));
    }), i.elem.on("click", 'input[lay-type="layTableRadio"]+', function () {
      var e = t(this).prev(),
          a = e[0].checked,
          l = d.cache[i.key],
          n = e.parents("tr").eq(0).data("index");
      layui.each(l, function (e, t) {
        n === e ? t.LAY_CHECKED = !0 : delete t.LAY_CHECKED;
      }), i.setThisRowChecked(n), layui.event.call(this, y, "radio(" + p + ")", v.call(this, {
        checked: a
      }));
    }), i.layBody.on("mouseenter", "tr", function () {
      var e = t(this),
          a = e.index();
      e.data("off") || i.layBody.find("tr:eq(" + a + ")").addClass(_);
    }).on("mouseleave", "tr", function () {
      var e = t(this),
          a = e.index();
      e.data("off") || i.layBody.find("tr:eq(" + a + ")").removeClass(_);
    }).on("click", "tr", function () {
      m.call(this, "row");
    }).on("dblclick", "tr", function () {
      m.call(this, "rowDouble");
    });

    var m = function m(e) {
      var i = t(this);
      i.data("off") || layui.event.call(this, y, e + "(" + p + ")", v.call(i.children("td")[0]));
    };

    i.layBody.on("change", "." + W, function () {
      var e = t(this),
          a = this.value,
          l = e.parent().data("field"),
          n = e.parents("tr").eq(0).data("index"),
          o = d.cache[i.key][n];
      o[l] = a, layui.event.call(this, y, "edit(" + p + ")", v.call(this, {
        value: a,
        field: l
      }));
    }).on("blur", "." + W, function () {
      var e,
          a = t(this),
          l = this,
          n = a.parent().data("field"),
          o = a.parents("tr").eq(0).data("index"),
          r = d.cache[i.key][o];
      i.eachCols(function (t, i) {
        i.field == n && i.templet && (e = i.templet);
      }), a.siblings(h).html(function (t) {
        return u({
          templet: e
        }, t, r);
      }(l.value)), a.parent().data("content", l.value), a.remove();
    }), i.layBody.on("click", "td", function (e) {
      var i = t(this),
          a = (i.data("field"), i.data("edit")),
          l = i.children(h);

      if (!i.data("off") && a) {
        var n = t('<input class="layui-input ' + W + '">');
        return n[0].value = i.data("content") || l.text(), i.find("." + W)[0] || i.append(n), n.focus(), void layui.stope(e);
      }
    }).on("mouseenter", "td", function () {
      b.call(this);
    }).on("mouseleave", "td", function () {
      b.call(this, "hide");
    });

    var g = "layui-table-grid-down",
        b = function b(e) {
      var i = t(this),
          a = i.children(h);
      if (!i.data("off")) if (e) i.find(".layui-table-grid-down").remove();else if (a.prop("scrollWidth") > a.outerWidth()) {
        if (a.find("." + g)[0]) return;
        i.append('<div class="' + g + '"><i class="layui-icon layui-icon-down"></i></div>');
      }
    };

    i.layBody.on("click", "." + g, function (e) {
      var n = t(this),
          o = n.parent(),
          d = o.children(h);
      i.tipsIndex = l.tips(['<div class="layui-table-tips-main" style="margin-top: -' + (d.height() + 16) + "px;" + function () {
        return "sm" === a.size ? "padding: 4px 15px; font-size: 12px;" : "lg" === a.size ? "padding: 14px 15px;" : "";
      }() + '">', d.html(), "</div>", '<i class="layui-icon layui-table-tips-c layui-icon-close"></i>'].join(""), d[0], {
        tips: [3, ""],
        time: -1,
        anim: -1,
        maxWidth: r.ios || r.android ? 300 : i.elem.width() / 2,
        isOutAnim: !1,
        skin: "layui-table-tips",
        success: function success(e, t) {
          e.find(".layui-table-tips-c").on("click", function () {
            l.close(t);
          });
        }
      }), layui.stope(e);
    }), i.layBody.on("click", "*[lay-event]", function () {
      var e = t(this),
          a = e.parents("tr").eq(0).data("index");
      layui.event.call(this, y, "tool(" + p + ")", v.call(this, {
        event: e.attr("lay-event")
      })), i.setThisRowChecked(a);
    }), i.layMain.on("scroll", function () {
      var e = t(this),
          a = e.scrollLeft(),
          n = e.scrollTop();
      i.layHeader.scrollLeft(a), i.layTotal.scrollLeft(a), i.layFixed.find(k).scrollTop(n), l.close(i.tipsIndex);
    }), R.on("resize", function () {
      i.resize();
    });
  }, function () {
    F.on("click", function () {
      F.trigger("table.remove.tool.panel");
    }), F.on("table.remove.tool.panel", function () {
      t(".layui-table-tool-panel").remove();
    });
  }(), d.init = function (e, i) {
    i = i || {};
    var a = this,
        l = t(e ? 'table[lay-filter="' + e + '"]' : h + "[lay-data]"),
        n = "Table element property lay-data configuration item has a syntax error: ";
    return l.each(function () {
      var a = t(this),
          l = a.attr("lay-data");

      try {
        l = new Function("return " + l)();
      } catch (r) {
        o.error(n + l);
      }

      var c = [],
          s = t.extend({
        elem: this,
        cols: [],
        data: [],
        skin: a.attr("lay-skin"),
        size: a.attr("lay-size"),
        even: "string" == typeof a.attr("lay-even")
      }, d.config, i, l);
      e && a.hide(), a.find("thead>tr").each(function (e) {
        s.cols[e] = [], t(this).children().each(function (i) {
          var a = t(this),
              l = a.attr("lay-data");

          try {
            l = new Function("return " + l)();
          } catch (r) {
            return o.error(n + l);
          }

          var d = t.extend({
            title: a.text(),
            colspan: a.attr("colspan") || 0,
            rowspan: a.attr("rowspan") || 0
          }, l);
          d.colspan < 2 && c.push(d), s.cols[e].push(d);
        });
      }), a.find("tbody>tr").each(function (e) {
        var i = t(this),
            a = {};
        i.children("td").each(function (e, i) {
          var l = t(this),
              n = l.data("field");
          if (n) return a[n] = l.html();
        }), layui.each(c, function (e, t) {
          var l = i.children("td").eq(e);
          a[t.field] = l.html();
        }), s.data[e] = a;
      }), d.render(s);
    }), a;
  }, c.that = {}, c.config = {}, d.eachCols = function (e, i, a) {
    var l = c.config[e] || {},
        n = [],
        o = 0;
    a = t.extend(!0, [], a || l.cols), layui.each(a, function (e, t) {
      layui.each(t, function (t, i) {
        if (i.colGroup) {
          var l = 0;
          o++, i.CHILD_COLS = [], layui.each(a[e + 1], function (e, t) {
            t.PARENT_COL_INDEX || l > 1 && l == i.colspan || (t.PARENT_COL_INDEX = o, i.CHILD_COLS.push(t), l += parseInt(t.colspan > 1 ? t.colspan : 1));
          });
        }

        i.PARENT_COL_INDEX || n.push(i);
      });
    });

    var r = function r(e) {
      layui.each(e || n, function (e, t) {
        return t.CHILD_COLS ? r(t.CHILD_COLS) : void ("function" == typeof i && i(e, t));
      });
    };

    r();
  }, d.checkStatus = function (e) {
    var t = 0,
        i = 0,
        a = [],
        l = d.cache[e] || [];
    return layui.each(l, function (e, l) {
      return l.constructor === Array ? void i++ : void (l[d.config.checkName] && (t++, a.push(d.clearCacheKey(l))));
    }), {
      data: a,
      isAll: !!l.length && t === l.length - i
    };
  }, d.exportFile = function (e, t, i) {
    var a = this;
    t = t || d.clearCacheKey(d.cache[e]), i = i || "csv";
    var l = c.config[e] || {},
        n = {
      csv: "text/csv",
      xls: "application/vnd.ms-excel"
    }[i],
        s = document.createElement("a");
    return r.ie ? o.error("IE_NOT_SUPPORT_EXPORTS") : (s.href = "data:" + n + ";charset=utf-8,\uFEFF" + encodeURIComponent(function () {
      var i = [],
          l = [],
          n = [];
      return layui.each(t, function (t, a) {
        var n = [];
        "object" == _typeof(e) ? (layui.each(e, function (e, a) {
          0 == t && i.push(a || "");
        }), layui.each(d.clearCacheKey(a), function (e, t) {
          n.push('"' + (t || "") + '"');
        })) : d.eachCols(e, function (e, l) {
          if (l.field && "normal" == l.type && !l.hide) {
            var o = a[l.field];
            void 0 !== o && null !== o || (o = ""), 0 == t && i.push(l.title || ""), n.push('"' + u(l, o, a, "text") + '"');
          }
        }), l.push(n.join(","));
      }), layui.each(a.dataTotal, function (e, t) {
        n.push(t);
      }), i.join(",") + "\r\n" + l.join("\r\n") + "\r\n" + n.join(",");
    }()), s.download = (l.title || "table_" + (l.index || "")) + "." + i, document.body.appendChild(s), s.click(), void document.body.removeChild(s));
  }, d.resize = function (e) {
    if (e) {
      var t = s(e);
      if (!t) return;
      c.that[e].resize();
    } else layui.each(c.that, function () {
      this.resize();
    });
  }, d.reload = function (e, t) {
    var i = s(e);

    if (i) {
      var a = c.that[e];
      return a.reload(t), c.call(a);
    }
  }, d.render = function (e) {
    var t = new j(e);
    return c.call(t);
  }, d.clearCacheKey = function (e) {
    return e = t.extend({}, e), delete e[d.config.checkName], delete e[d.config.indexName], e;
  }, d.init(), e(y, d);
});
layui.define("jquery", function (e) {
  "use strict";

  var i = layui.$,
      n = (layui.hint(), layui.device(), {
    config: {},
    set: function set(e) {
      var n = this;
      return n.config = i.extend({}, n.config, e), n;
    },
    on: function on(e, i) {
      return layui.onevent.call(this, t, e, i);
    }
  }),
      t = "carousel",
      a = "layui-this",
      l = ">*[carousel-item]>*",
      o = "layui-carousel-left",
      r = "layui-carousel-right",
      d = "layui-carousel-prev",
      s = "layui-carousel-next",
      u = "layui-carousel-arrow",
      c = "layui-carousel-ind",
      m = function m(e) {
    var t = this;
    t.config = i.extend({}, t.config, n.config, e), t.render();
  };

  m.prototype.config = {
    width: "600px",
    height: "280px",
    full: !1,
    arrow: "hover",
    indicator: "inside",
    autoplay: !0,
    interval: 3e3,
    anim: "",
    trigger: "click",
    index: 0
  }, m.prototype.render = function () {
    var e = this,
        n = e.config;
    n.elem = i(n.elem), n.elem[0] && (e.elemItem = n.elem.find(l), n.index < 0 && (n.index = 0), n.index >= e.elemItem.length && (n.index = e.elemItem.length - 1), n.interval < 800 && (n.interval = 800), n.full ? n.elem.css({
      position: "fixed",
      width: "100%",
      height: "100%",
      zIndex: 9999
    }) : n.elem.css({
      width: n.width,
      height: n.height
    }), n.elem.attr("lay-anim", n.anim), e.elemItem.eq(n.index).addClass(a), e.elemItem.length <= 1 || (e.indicator(), e.arrow(), e.autoplay(), e.events()));
  }, m.prototype.reload = function (e) {
    var n = this;
    clearInterval(n.timer), n.config = i.extend({}, n.config, e), n.render();
  }, m.prototype.prevIndex = function () {
    var e = this,
        i = e.config,
        n = i.index - 1;
    return n < 0 && (n = e.elemItem.length - 1), n;
  }, m.prototype.nextIndex = function () {
    var e = this,
        i = e.config,
        n = i.index + 1;
    return n >= e.elemItem.length && (n = 0), n;
  }, m.prototype.addIndex = function (e) {
    var i = this,
        n = i.config;
    e = e || 1, n.index = n.index + e, n.index >= i.elemItem.length && (n.index = 0);
  }, m.prototype.subIndex = function (e) {
    var i = this,
        n = i.config;
    e = e || 1, n.index = n.index - e, n.index < 0 && (n.index = i.elemItem.length - 1);
  }, m.prototype.autoplay = function () {
    var e = this,
        i = e.config;
    i.autoplay && (clearInterval(e.timer), e.timer = setInterval(function () {
      e.slide();
    }, i.interval));
  }, m.prototype.arrow = function () {
    var e = this,
        n = e.config,
        t = i(['<button class="layui-icon ' + u + '" lay-type="sub">' + ("updown" === n.anim ? "&#xe619;" : "&#xe603;") + "</button>", '<button class="layui-icon ' + u + '" lay-type="add">' + ("updown" === n.anim ? "&#xe61a;" : "&#xe602;") + "</button>"].join(""));
    n.elem.attr("lay-arrow", n.arrow), n.elem.find("." + u)[0] && n.elem.find("." + u).remove(), n.elem.append(t), t.on("click", function () {
      var n = i(this),
          t = n.attr("lay-type");
      e.slide(t);
    });
  }, m.prototype.indicator = function () {
    var e = this,
        n = e.config,
        t = e.elemInd = i(['<div class="' + c + '"><ul>', function () {
      var i = [];
      return layui.each(e.elemItem, function (e) {
        i.push("<li" + (n.index === e ? ' class="layui-this"' : "") + "></li>");
      }), i.join("");
    }(), "</ul></div>"].join(""));
    n.elem.attr("lay-indicator", n.indicator), n.elem.find("." + c)[0] && n.elem.find("." + c).remove(), n.elem.append(t), "updown" === n.anim && t.css("margin-top", -(t.height() / 2)), t.find("li").on("hover" === n.trigger ? "mouseover" : n.trigger, function () {
      var t = i(this),
          a = t.index();
      a > n.index ? e.slide("add", a - n.index) : a < n.index && e.slide("sub", n.index - a);
    });
  }, m.prototype.slide = function (e, i) {
    var n = this,
        l = n.elemItem,
        u = n.config,
        c = u.index,
        m = u.elem.attr("lay-filter");
    n.haveSlide || ("sub" === e ? (n.subIndex(i), l.eq(u.index).addClass(d), setTimeout(function () {
      l.eq(c).addClass(r), l.eq(u.index).addClass(r);
    }, 50)) : (n.addIndex(i), l.eq(u.index).addClass(s), setTimeout(function () {
      l.eq(c).addClass(o), l.eq(u.index).addClass(o);
    }, 50)), setTimeout(function () {
      l.removeClass(a + " " + d + " " + s + " " + o + " " + r), l.eq(u.index).addClass(a), n.haveSlide = !1;
    }, 300), n.elemInd.find("li").eq(u.index).addClass(a).siblings().removeClass(a), n.haveSlide = !0, layui.event.call(this, t, "change(" + m + ")", {
      index: u.index,
      prevIndex: c,
      item: l.eq(u.index)
    }));
  }, m.prototype.events = function () {
    var e = this,
        i = e.config;
    i.elem.data("haveEvents") || (i.elem.on("mouseenter", function () {
      clearInterval(e.timer);
    }).on("mouseleave", function () {
      e.autoplay();
    }), i.elem.data("haveEvents", !0));
  }, n.render = function (e) {
    var i = new m(e);
    return i;
  }, e(t, n);
});
layui.define("jquery", function (e) {
  "use strict";

  var a = layui.jquery,
      i = {
    config: {},
    index: layui.rate ? layui.rate.index + 1e4 : 0,
    set: function set(e) {
      var i = this;
      return i.config = a.extend({}, i.config, e), i;
    },
    on: function on(e, a) {
      return layui.onevent.call(this, n, e, a);
    }
  },
      l = function l() {
    var e = this,
        a = e.config;
    return {
      setvalue: function setvalue(a) {
        e.setvalue.call(e, a);
      },
      config: a
    };
  },
      n = "rate",
      t = "layui-rate",
      o = "layui-icon-rate",
      s = "layui-icon-rate-solid",
      u = "layui-icon-rate-half",
      r = "layui-icon-rate-solid layui-icon-rate-half",
      c = "layui-icon-rate-solid layui-icon-rate",
      f = "layui-icon-rate layui-icon-rate-half",
      v = function v(e) {
    var l = this;
    l.index = ++i.index, l.config = a.extend({}, l.config, i.config, e), l.render();
  };

  v.prototype.config = {
    length: 5,
    text: !1,
    readonly: !1,
    half: !1,
    value: 0,
    theme: ""
  }, v.prototype.render = function () {
    var e = this,
        i = e.config,
        l = i.theme ? 'style="color: ' + i.theme + ';"' : "";
    i.elem = a(i.elem), parseInt(i.value) !== i.value && (i.half || (i.value = Math.ceil(i.value) - i.value < .5 ? Math.ceil(i.value) : Math.floor(i.value)));

    for (var n = '<ul class="layui-rate" ' + (i.readonly ? "readonly" : "") + ">", u = 1; u <= i.length; u++) {
      var r = '<li class="layui-inline"><i class="layui-icon ' + (u > Math.floor(i.value) ? o : s) + '" ' + l + "></i></li>";
      i.half && parseInt(i.value) !== i.value && u == Math.ceil(i.value) ? n = n + '<li><i class="layui-icon layui-icon-rate-half" ' + l + "></i></li>" : n += r;
    }

    n += "</ul>" + (i.text ? '<span class="layui-inline">' + i.value + "星" : "") + "</span>";
    var c = i.elem,
        f = c.next("." + t);
    f[0] && f.remove(), e.elemTemp = a(n), i.span = e.elemTemp.next("span"), i.setText && i.setText(i.value), c.html(e.elemTemp), c.addClass("layui-inline"), i.readonly || e.action();
  }, v.prototype.setvalue = function (e) {
    var a = this,
        i = a.config;
    i.value = e, a.render();
  }, v.prototype.action = function () {
    var e = this,
        i = e.config,
        l = e.elemTemp,
        n = l.find("i").width();
    l.children("li").each(function (e) {
      var t = e + 1,
          v = a(this);
      v.on("click", function (e) {
        if (i.value = t, i.half) {
          var o = e.pageX - a(this).offset().left;
          o <= n / 2 && (i.value = i.value - .5);
        }

        i.text && l.next("span").text(i.value + "星"), i.choose && i.choose(i.value), i.setText && i.setText(i.value);
      }), v.on("mousemove", function (e) {
        if (l.find("i").each(function () {
          a(this).addClass(o).removeClass(r);
        }), l.find("i:lt(" + t + ")").each(function () {
          a(this).addClass(s).removeClass(f);
        }), i.half) {
          var c = e.pageX - a(this).offset().left;
          c <= n / 2 && v.children("i").addClass(u).removeClass(s);
        }
      }), v.on("mouseleave", function () {
        l.find("i").each(function () {
          a(this).addClass(o).removeClass(r);
        }), l.find("i:lt(" + Math.floor(i.value) + ")").each(function () {
          a(this).addClass(s).removeClass(f);
        }), i.half && parseInt(i.value) !== i.value && l.children("li:eq(" + Math.floor(i.value) + ")").children("i").addClass(u).removeClass(c);
      });
    });
  }, v.prototype.events = function () {
    var e = this;
    e.config;
  }, i.render = function (e) {
    var a = new v(e);
    return l.call(a);
  }, e(n, i);
});
layui.define("jquery", function (t) {
  "use strict";

  var e = layui.$,
      i = {
    fixbar: function fixbar(t) {
      var i,
          n,
          a = "layui-fixbar",
          o = "layui-fixbar-top",
          r = e(document),
          l = e("body");
      t = e.extend({
        showHeight: 200
      }, t), t.bar1 = t.bar1 === !0 ? "&#xe606;" : t.bar1, t.bar2 = t.bar2 === !0 ? "&#xe607;" : t.bar2, t.bgcolor = t.bgcolor ? "background-color:" + t.bgcolor : "";

      var c = [t.bar1, t.bar2, "&#xe604;"],
          g = e(['<ul class="' + a + '">', t.bar1 ? '<li class="layui-icon" lay-type="bar1" style="' + t.bgcolor + '">' + c[0] + "</li>" : "", t.bar2 ? '<li class="layui-icon" lay-type="bar2" style="' + t.bgcolor + '">' + c[1] + "</li>" : "", '<li class="layui-icon ' + o + '" lay-type="top" style="' + t.bgcolor + '">' + c[2] + "</li>", "</ul>"].join("")),
          s = g.find("." + o),
          u = function u() {
        var e = r.scrollTop();
        e >= t.showHeight ? i || (s.show(), i = 1) : i && (s.hide(), i = 0);
      };

      e("." + a)[0] || ("object" == _typeof(t.css) && g.css(t.css), l.append(g), u(), g.find("li").on("click", function () {
        var i = e(this),
            n = i.attr("lay-type");
        "top" === n && e("html,body").animate({
          scrollTop: 0
        }, 200), t.click && t.click.call(this, n);
      }), r.on("scroll", function () {
        clearTimeout(n), n = setTimeout(function () {
          u();
        }, 100);
      }));
    },
    countdown: function countdown(t, e, i) {
      var n = this,
          a = "function" == typeof e,
          o = new Date(t).getTime(),
          r = new Date(!e || a ? new Date().getTime() : e).getTime(),
          l = o - r,
          c = [Math.floor(l / 864e5), Math.floor(l / 36e5) % 24, Math.floor(l / 6e4) % 60, Math.floor(l / 1e3) % 60];
      a && (i = e);
      var g = setTimeout(function () {
        n.countdown(t, r + 1e3, i);
      }, 1e3);
      return i && i(l > 0 ? c : [0, 0, 0, 0], e, g), l <= 0 && clearTimeout(g), g;
    },
    timeAgo: function timeAgo(t, e) {
      var i = this,
          n = [[], []],
          a = new Date().getTime() - new Date(t).getTime();
      return a > 6912e5 ? (a = new Date(t), n[0][0] = i.digit(a.getFullYear(), 4), n[0][1] = i.digit(a.getMonth() + 1), n[0][2] = i.digit(a.getDate()), e || (n[1][0] = i.digit(a.getHours()), n[1][1] = i.digit(a.getMinutes()), n[1][2] = i.digit(a.getSeconds())), n[0].join("-") + " " + n[1].join(":")) : a >= 864e5 ? (a / 1e3 / 60 / 60 / 24 | 0) + "天前" : a >= 36e5 ? (a / 1e3 / 60 / 60 | 0) + "小时前" : a >= 12e4 ? (a / 1e3 / 60 | 0) + "分钟前" : a < 0 ? "未来" : "刚刚";
    },
    digit: function digit(t, e) {
      var i = "";
      t = String(t), e = e || 2;

      for (var n = t.length; n < e; n++) {
        i += "0";
      }

      return t < Math.pow(10, e) ? i + (0 | t) : t;
    },
    toDateString: function toDateString(t, e) {
      var i = this,
          n = new Date(t || new Date()),
          a = [i.digit(n.getFullYear(), 4), i.digit(n.getMonth() + 1), i.digit(n.getDate())],
          o = [i.digit(n.getHours()), i.digit(n.getMinutes()), i.digit(n.getSeconds())];
      return e = e || "yyyy-MM-dd HH:mm:ss", e.replace(/yyyy/g, a[0]).replace(/MM/g, a[1]).replace(/dd/g, a[2]).replace(/HH/g, o[0]).replace(/mm/g, o[1]).replace(/ss/g, o[2]);
    },
    escape: function escape(t) {
      return String(t || "").replace(/&(?!#?[a-zA-Z0-9]+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;");
    },
    event: function event(t, n, a) {
      n = i.event[t] = e.extend(!0, i.event[t], n) || {}, e("body").on(a || "click", "*[" + t + "]", function () {
        var i = e(this),
            a = i.attr(t);
        n[a] && n[a].call(this, i);
      });
    }
  };
  !function (t, e, i) {
    "$:nomunge";

    function n() {
      a = e[l](function () {
        o.each(function () {
          var e = t(this),
              i = e.width(),
              n = e.height(),
              a = t.data(this, g);
          (i !== a.w || n !== a.h) && e.trigger(c, [a.w = i, a.h = n]);
        }), n();
      }, r[s]);
    }

    var a,
        o = t([]),
        r = t.resize = t.extend(t.resize, {}),
        l = "setTimeout",
        c = "resize",
        g = c + "-special-event",
        s = "delay",
        u = "throttleWindow";
    r[s] = 250, r[u] = !0, t.event.special[c] = {
      setup: function setup() {
        if (!r[u] && this[l]) return !1;
        var e = t(this);
        o = o.add(e), t.data(this, g, {
          w: e.width(),
          h: e.height()
        }), 1 === o.length && n();
      },
      teardown: function teardown() {
        if (!r[u] && this[l]) return !1;
        var e = t(this);
        o = o.not(e), e.removeData(g), o.length || clearTimeout(a);
      },
      add: function add(e) {
        function n(e, n, o) {
          var r = t(this),
              l = t.data(this, g) || {};
          l.w = n !== i ? n : r.width(), l.h = o !== i ? o : r.height(), a.apply(this, arguments);
        }

        if (!r[u] && this[l]) return !1;
        var a;
        return t.isFunction(e) ? (a = e, n) : (a = e.handler, void (e.handler = n));
      }
    };
  }(e, window), t("util", i);
});
layui.define("jquery", function (e) {
  "use strict";

  var l = layui.$,
      o = function o(e) {},
      t = '<i class="layui-anim layui-anim-rotate layui-anim-loop layui-icon ">&#xe63e;</i>';

  o.prototype.load = function (e) {
    var o,
        i,
        n,
        r,
        a = this,
        c = 0;
    e = e || {};
    var f = l(e.elem);

    if (f[0]) {
      var m = l(e.scrollElem || document),
          u = e.mb || 50,
          s = !("isAuto" in e) || e.isAuto,
          v = e.end || "没有更多了",
          y = e.scrollElem && e.scrollElem !== document,
          d = "<cite>加载更多</cite>",
          h = l('<div class="layui-flow-more"><a href="javascript:;">' + d + "</a></div>");
      f.find(".layui-flow-more")[0] || f.append(h);

      var p = function p(e, t) {
        e = l(e), h.before(e), t = 0 == t || null, t ? h.html(v) : h.find("a").html(d), i = t, o = null, n && n();
      },
          g = function g() {
        o = !0, h.find("a").html(t), "function" == typeof e.done && e.done(++c, p);
      };

      if (g(), h.find("a").on("click", function () {
        l(this);
        i || o || g();
      }), e.isLazyimg) var n = a.lazyimg({
        elem: e.elem + " img",
        scrollElem: e.scrollElem
      });
      return s ? (m.on("scroll", function () {
        var e = l(this),
            t = e.scrollTop();
        r && clearTimeout(r), i || (r = setTimeout(function () {
          var i = y ? e.height() : l(window).height(),
              n = y ? e.prop("scrollHeight") : document.documentElement.scrollHeight;
          n - t - i <= u && (o || g());
        }, 100));
      }), a) : a;
    }
  }, o.prototype.lazyimg = function (e) {
    var o,
        t = this,
        i = 0;
    e = e || {};

    var n = l(e.scrollElem || document),
        r = e.elem || "img",
        a = e.scrollElem && e.scrollElem !== document,
        c = function c(e, l) {
      var o = n.scrollTop(),
          r = o + l,
          c = a ? function () {
        return e.offset().top - n.offset().top + o;
      }() : e.offset().top;

      if (c >= o && c <= r && !e.attr("src")) {
        var m = e.attr("lay-src");
        layui.img(m, function () {
          var l = t.lazyimg.elem.eq(i);
          e.attr("src", m).removeAttr("lay-src"), l[0] && f(l), i++;
        });
      }
    },
        f = function f(e, o) {
      var f = a ? (o || n).height() : l(window).height(),
          m = n.scrollTop(),
          u = m + f;
      if (t.lazyimg.elem = l(r), e) c(e, f);else for (var s = 0; s < t.lazyimg.elem.length; s++) {
        var v = t.lazyimg.elem.eq(s),
            y = a ? function () {
          return v.offset().top - n.offset().top + m;
        }() : v.offset().top;
        if (c(v, f), i = s, y > u) break;
      }
    };

    if (f(), !o) {
      var m;
      n.on("scroll", function () {
        var e = l(this);
        m && clearTimeout(m), m = setTimeout(function () {
          f(null, e);
        }, 50);
      }), o = !0;
    }

    return f;
  }, e("flow", new o());
});
layui.define(["layer", "form"], function (t) {
  "use strict";

  var e = layui.$,
      i = layui.layer,
      a = layui.form,
      l = (layui.hint(), layui.device()),
      n = "layedit",
      o = "layui-show",
      r = "layui-disabled",
      c = function c() {
    var t = this;
    t.index = 0, t.config = {
      tool: ["strong", "italic", "underline", "del", "|", "left", "center", "right", "|", "link", "unlink", "face", "image"],
      hideTool: [],
      height: 280
    };
  };

  c.prototype.set = function (t) {
    var i = this;
    return e.extend(!0, i.config, t), i;
  }, c.prototype.on = function (t, e) {
    return layui.onevent(n, t, e);
  }, c.prototype.build = function (t, i) {
    i = i || {};

    var a = this,
        n = a.config,
        r = "layui-layedit",
        c = e("string" == typeof t ? "#" + t : t),
        u = "LAY_layedit_" + ++a.index,
        d = c.next("." + r),
        y = e.extend({}, n, i),
        f = function () {
      var t = [],
          e = {};
      return layui.each(y.hideTool, function (t, i) {
        e[i] = !0;
      }), layui.each(y.tool, function (i, a) {
        C[a] && !e[a] && t.push(C[a]);
      }), t.join("");
    }(),
        m = e(['<div class="' + r + '">', '<div class="layui-unselect layui-layedit-tool">' + f + "</div>", '<div class="layui-layedit-iframe">', '<iframe id="' + u + '" name="' + u + '" textarea="' + t + '" frameborder="0"></iframe>', "</div>", "</div>"].join(""));

    return l.ie && l.ie < 8 ? c.removeClass("layui-hide").addClass(o) : (d[0] && d.remove(), s.call(a, m, c[0], y), c.addClass("layui-hide").after(m), a.index);
  }, c.prototype.getContent = function (t) {
    var e = u(t);
    if (e[0]) return d(e[0].document.body.innerHTML);
  }, c.prototype.getText = function (t) {
    var i = u(t);
    if (i[0]) return e(i[0].document.body).text();
  }, c.prototype.setContent = function (t, i, a) {
    var l = u(t);
    l[0] && (a ? e(l[0].document.body).append(i) : e(l[0].document.body).html(i), layedit.sync(t));
  }, c.prototype.sync = function (t) {
    var i = u(t);

    if (i[0]) {
      var a = e("#" + i[1].attr("textarea"));
      a.val(d(i[0].document.body.innerHTML));
    }
  }, c.prototype.getSelection = function (t) {
    var e = u(t);

    if (e[0]) {
      var i = m(e[0].document);
      return document.selection ? i.text : i.toString();
    }
  };

  var s = function s(t, i, a) {
    var l = this,
        n = t.find("iframe");
    n.css({
      height: a.height
    }).on("load", function () {
      var o = n.contents(),
          r = n.prop("contentWindow"),
          c = o.find("head"),
          s = e(["<style>", "*{margin: 0; padding: 0;}", "body{padding: 10px; line-height: 20px; overflow-x: hidden; word-wrap: break-word; font: 14px Helvetica Neue,Helvetica,PingFang SC,Microsoft YaHei,Tahoma,Arial,sans-serif; -webkit-box-sizing: border-box !important; -moz-box-sizing: border-box !important; box-sizing: border-box !important;}", "a{color:#01AAED; text-decoration:none;}a:hover{color:#c00}", "p{margin-bottom: 10px;}", "img{display: inline-block; border: none; vertical-align: middle;}", "pre{margin: 10px 0; padding: 10px; line-height: 20px; border: 1px solid #ddd; border-left-width: 6px; background-color: #F2F2F2; color: #333; font-family: Courier New; font-size: 12px;}", "</style>"].join("")),
          u = o.find("body");
      c.append(s), u.attr("contenteditable", "true").css({
        "min-height": a.height
      }).html(i.value || ""), y.apply(l, [r, n, i, a]), g.call(l, r, t, a);
    });
  },
      u = function u(t) {
    var i = e("#LAY_layedit_" + t),
        a = i.prop("contentWindow");
    return [a, i];
  },
      d = function d(t) {
    return 8 == l.ie && (t = t.replace(/<.+>/g, function (t) {
      return t.toLowerCase();
    })), t;
  },
      y = function y(t, a, n, o) {
    var r = t.document,
        c = e(r.body);
    c.on("keydown", function (t) {
      var e = t.keyCode;

      if (13 === e) {
        var a = m(r),
            l = p(a),
            n = l.parentNode;

        if ("pre" === n.tagName.toLowerCase()) {
          if (t.shiftKey) return;
          return i.msg("请暂时用shift+enter"), !1;
        }

        r.execCommand("formatBlock", !1, "<p>");
      }
    }), e(n).parents("form").on("submit", function () {
      var t = c.html();
      8 == l.ie && (t = t.replace(/<.+>/g, function (t) {
        return t.toLowerCase();
      })), n.value = t;
    }), c.on("paste", function (e) {
      r.execCommand("formatBlock", !1, "<p>"), setTimeout(function () {
        f.call(t, c), n.value = c.html();
      }, 100);
    });
  },
      f = function f(t) {
    var i = this;
    i.document;
    t.find("*[style]").each(function () {
      var t = this.style.textAlign;
      this.removeAttribute("style"), e(this).css({
        "text-align": t || ""
      });
    }), t.find("table").addClass("layui-table"), t.find("script,link").remove();
  },
      m = function m(t) {
    return t.selection ? t.selection.createRange() : t.getSelection().getRangeAt(0);
  },
      p = function p(t) {
    return t.endContainer || t.parentElement().childNodes[0];
  },
      v = function v(t, i, a) {
    var l = this.document,
        n = document.createElement(t);

    for (var o in i) {
      n.setAttribute(o, i[o]);
    }

    if (n.removeAttribute("text"), l.selection) {
      var r = a.text || i.text;
      if ("a" === t && !r) return;
      r && (n.innerHTML = r), a.pasteHTML(e(n).prop("outerHTML")), a.select();
    } else {
      var r = a.toString() || i.text;
      if ("a" === t && !r) return;
      r && (n.innerHTML = r), a.deleteContents(), a.insertNode(n);
    }
  },
      h = function h(t, i) {
    var a = this.document,
        l = "layedit-tool-active",
        n = p(m(a)),
        o = function o(e) {
      return t.find(".layedit-tool-" + e);
    };

    i && i[i.hasClass(l) ? "removeClass" : "addClass"](l), t.find(">i").removeClass(l), o("unlink").addClass(r), e(n).parents().each(function () {
      var t = this.tagName.toLowerCase(),
          e = this.style.textAlign;
      "b" !== t && "strong" !== t || o("b").addClass(l), "i" !== t && "em" !== t || o("i").addClass(l), "u" === t && o("u").addClass(l), "strike" === t && o("d").addClass(l), "p" === t && ("center" === e ? o("center").addClass(l) : "right" === e ? o("right").addClass(l) : o("left").addClass(l)), "a" === t && (o("link").addClass(l), o("unlink").removeClass(r));
    });
  },
      g = function g(t, a, l) {
    var n = t.document,
        o = e(n.body),
        c = {
      link: function link(i) {
        var a = p(i),
            l = e(a).parent();
        b.call(o, {
          href: l.attr("href"),
          target: l.attr("target")
        }, function (e) {
          var a = l[0];
          "A" === a.tagName ? a.href = e.url : v.call(t, "a", {
            target: e.target,
            href: e.url,
            text: e.url
          }, i);
        });
      },
      unlink: function unlink(t) {
        n.execCommand("unlink");
      },
      face: function face(e) {
        x.call(this, function (i) {
          v.call(t, "img", {
            src: i.src,
            alt: i.alt
          }, e);
        });
      },
      image: function image(a) {
        var n = this;
        layui.use("upload", function (o) {
          var r = l.uploadImage || {};
          o.render({
            url: r.url,
            method: r.type,
            elem: e(n).find("input")[0],
            done: function done(e) {
              0 == e.code ? (e.data = e.data || {}, v.call(t, "img", {
                src: e.data.src,
                alt: e.data.title
              }, a)) : i.msg(e.msg || "上传失败");
            }
          });
        });
      },
      code: function code(e) {
        k.call(o, function (i) {
          v.call(t, "pre", {
            text: i.code,
            "lay-lang": i.lang
          }, e);
        });
      },
      help: function help() {
        i.open({
          type: 2,
          title: "帮助",
          area: ["600px", "380px"],
          shadeClose: !0,
          shade: .1,
          skin: "layui-layer-msg",
          content: ["http://www.layui.com/about/layedit/help.html", "no"]
        });
      }
    },
        s = a.find(".layui-layedit-tool"),
        u = function u() {
      var i = e(this),
          a = i.attr("layedit-event"),
          l = i.attr("lay-command");

      if (!i.hasClass(r)) {
        o.focus();
        var u = m(n);
        u.commonAncestorContainer;
        l ? (n.execCommand(l), /justifyLeft|justifyCenter|justifyRight/.test(l) && n.execCommand("formatBlock", !1, "<p>"), setTimeout(function () {
          o.focus();
        }, 10)) : c[a] && c[a].call(this, u), h.call(t, s, i);
      }
    },
        d = /image/;

    s.find(">i").on("mousedown", function () {
      var t = e(this),
          i = t.attr("layedit-event");
      d.test(i) || u.call(this);
    }).on("click", function () {
      var t = e(this),
          i = t.attr("layedit-event");
      d.test(i) && u.call(this);
    }), o.on("click", function () {
      h.call(t, s), i.close(x.index);
    });
  },
      b = function b(t, e) {
    var l = this,
        n = i.open({
      type: 1,
      id: "LAY_layedit_link",
      area: "350px",
      shade: .05,
      shadeClose: !0,
      moveType: 1,
      title: "超链接",
      skin: "layui-layer-msg",
      content: ['<ul class="layui-form" style="margin: 15px;">', '<li class="layui-form-item">', '<label class="layui-form-label" style="width: 60px;">URL</label>', '<div class="layui-input-block" style="margin-left: 90px">', '<input name="url" lay-verify="url" value="' + (t.href || "") + '" autofocus="true" autocomplete="off" class="layui-input">', "</div>", "</li>", '<li class="layui-form-item">', '<label class="layui-form-label" style="width: 60px;">打开方式</label>', '<div class="layui-input-block" style="margin-left: 90px">', '<input type="radio" name="target" value="_self" class="layui-input" title="当前窗口"' + ("_self" !== t.target && t.target ? "" : "checked") + ">", '<input type="radio" name="target" value="_blank" class="layui-input" title="新窗口" ' + ("_blank" === t.target ? "checked" : "") + ">", "</div>", "</li>", '<li class="layui-form-item" style="text-align: center;">', '<button type="button" lay-submit lay-filter="layedit-link-yes" class="layui-btn"> 确定 </button>', '<button style="margin-left: 20px;" type="button" class="layui-btn layui-btn-primary"> 取消 </button>', "</li>", "</ul>"].join(""),
      success: function success(t, n) {
        var o = "submit(layedit-link-yes)";
        a.render("radio"), t.find(".layui-btn-primary").on("click", function () {
          i.close(n), l.focus();
        }), a.on(o, function (t) {
          i.close(b.index), e && e(t.field);
        });
      }
    });
    b.index = n;
  },
      x = function x(t) {
    var a = function () {
      var t = ["[微笑]", "[嘻嘻]", "[哈哈]", "[可爱]", "[可怜]", "[挖鼻]", "[吃惊]", "[害羞]", "[挤眼]", "[闭嘴]", "[鄙视]", "[爱你]", "[泪]", "[偷笑]", "[亲亲]", "[生病]", "[太开心]", "[白眼]", "[右哼哼]", "[左哼哼]", "[嘘]", "[衰]", "[委屈]", "[吐]", "[哈欠]", "[抱抱]", "[怒]", "[疑问]", "[馋嘴]", "[拜拜]", "[思考]", "[汗]", "[困]", "[睡]", "[钱]", "[失望]", "[酷]", "[色]", "[哼]", "[鼓掌]", "[晕]", "[悲伤]", "[抓狂]", "[黑线]", "[阴险]", "[怒骂]", "[互粉]", "[心]", "[伤心]", "[猪头]", "[熊猫]", "[兔子]", "[ok]", "[耶]", "[good]", "[NO]", "[赞]", "[来]", "[弱]", "[草泥马]", "[神马]", "[囧]", "[浮云]", "[给力]", "[围观]", "[威武]", "[奥特曼]", "[礼物]", "[钟]", "[话筒]", "[蜡烛]", "[蛋糕]"],
          e = {};
      return layui.each(t, function (t, i) {
        e[i] = layui.cache.dir + "images/face/" + t + ".gif";
      }), e;
    }();

    return x.hide = x.hide || function (t) {
      "face" !== e(t.target).attr("layedit-event") && i.close(x.index);
    }, x.index = i.tips(function () {
      var t = [];
      return layui.each(a, function (e, i) {
        t.push('<li title="' + e + '"><img src="' + i + '" alt="' + e + '"></li>');
      }), '<ul class="layui-clear">' + t.join("") + "</ul>";
    }(), this, {
      tips: 1,
      time: 0,
      skin: "layui-box layui-util-face",
      maxWidth: 500,
      success: function success(l, n) {
        l.css({
          marginTop: -4,
          marginLeft: -10
        }).find(".layui-clear>li").on("click", function () {
          t && t({
            src: a[this.title],
            alt: this.title
          }), i.close(n);
        }), e(document).off("click", x.hide).on("click", x.hide);
      }
    });
  },
      k = function k(t) {
    var e = this,
        l = i.open({
      type: 1,
      id: "LAY_layedit_code",
      area: "550px",
      shade: .05,
      shadeClose: !0,
      moveType: 1,
      title: "插入代码",
      skin: "layui-layer-msg",
      content: ['<ul class="layui-form layui-form-pane" style="margin: 15px;">', '<li class="layui-form-item">', '<label class="layui-form-label">请选择语言</label>', '<div class="layui-input-block">', '<select name="lang">', '<option value="JavaScript">JavaScript</option>', '<option value="HTML">HTML</option>', '<option value="CSS">CSS</option>', '<option value="Java">Java</option>', '<option value="PHP">PHP</option>', '<option value="C#">C#</option>', '<option value="Python">Python</option>', '<option value="Ruby">Ruby</option>', '<option value="Go">Go</option>', "</select>", "</div>", "</li>", '<li class="layui-form-item layui-form-text">', '<label class="layui-form-label">代码</label>', '<div class="layui-input-block">', '<textarea name="code" lay-verify="required" autofocus="true" class="layui-textarea" style="height: 200px;"></textarea>', "</div>", "</li>", '<li class="layui-form-item" style="text-align: center;">', '<button type="button" lay-submit lay-filter="layedit-code-yes" class="layui-btn"> 确定 </button>', '<button style="margin-left: 20px;" type="button" class="layui-btn layui-btn-primary"> 取消 </button>', "</li>", "</ul>"].join(""),
      success: function success(l, n) {
        var o = "submit(layedit-code-yes)";
        a.render("select"), l.find(".layui-btn-primary").on("click", function () {
          i.close(n), e.focus();
        }), a.on(o, function (e) {
          i.close(k.index), t && t(e.field);
        });
      }
    });
    k.index = l;
  },
      C = {
    html: '<i class="layui-icon layedit-tool-html" title="HTML源代码" lay-command="html" layedit-event="html"">&#xe64b;</i><span class="layedit-tool-mid"></span>',
    strong: '<i class="layui-icon layedit-tool-b" title="加粗" lay-command="Bold" layedit-event="b"">&#xe62b;</i>',
    italic: '<i class="layui-icon layedit-tool-i" title="斜体" lay-command="italic" layedit-event="i"">&#xe644;</i>',
    underline: '<i class="layui-icon layedit-tool-u" title="下划线" lay-command="underline" layedit-event="u"">&#xe646;</i>',
    del: '<i class="layui-icon layedit-tool-d" title="删除线" lay-command="strikeThrough" layedit-event="d"">&#xe64f;</i>',
    "|": '<span class="layedit-tool-mid"></span>',
    left: '<i class="layui-icon layedit-tool-left" title="左对齐" lay-command="justifyLeft" layedit-event="left"">&#xe649;</i>',
    center: '<i class="layui-icon layedit-tool-center" title="居中对齐" lay-command="justifyCenter" layedit-event="center"">&#xe647;</i>',
    right: '<i class="layui-icon layedit-tool-right" title="右对齐" lay-command="justifyRight" layedit-event="right"">&#xe648;</i>',
    link: '<i class="layui-icon layedit-tool-link" title="插入链接" layedit-event="link"">&#xe64c;</i>',
    unlink: '<i class="layui-icon layedit-tool-unlink layui-disabled" title="清除链接" lay-command="unlink" layedit-event="unlink"">&#xe64d;</i>',
    face: '<i class="layui-icon layedit-tool-face" title="表情" layedit-event="face"">&#xe650;</i>',
    image: '<i class="layui-icon layedit-tool-image" title="图片" layedit-event="image">&#xe64a;<input type="file" name="file"></i>',
    code: '<i class="layui-icon layedit-tool-code" title="插入代码" layedit-event="code">&#xe64e;</i>',
    help: '<i class="layui-icon layedit-tool-help" title="帮助" layedit-event="help">&#xe607;</i>'
  },
      w = new c();

  t(n, w);
});
layui.define("jquery", function (e) {
  "use strict";

  var a = layui.$,
      l = "http://www.layui.com/doc/modules/code.html";
  e("code", function (e) {
    var t = [];
    e = e || {}, e.elem = a(e.elem || ".layui-code"), e.about = !("about" in e) || e.about, e.elem.each(function () {
      t.push(this);
    }), layui.each(t.reverse(), function (t, i) {
      var c = a(i),
          o = c.html();
      (c.attr("lay-encode") || e.encode) && (o = o.replace(/&(?!#?[a-zA-Z0-9]+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;")), c.html('<ol class="layui-code-ol"><li>' + o.replace(/[\r\t\n]+/g, "</li><li>") + "</li></ol>"), c.find(">.layui-code-h3")[0] || c.prepend('<h3 class="layui-code-h3">' + (c.attr("lay-title") || e.title || "code") + (e.about ? '<a href="' + l + '" target="_blank">layui.code</a>' : "") + "</h3>");
      var d = c.find(">.layui-code-ol");
      c.addClass("layui-box layui-code-view"), (c.attr("lay-skin") || e.skin) && c.addClass("layui-code-" + (c.attr("lay-skin") || e.skin)), (d.find("li").length / 100 | 0) > 0 && d.css("margin-left", (d.find("li").length / 100 | 0) + "px"), (c.attr("lay-height") || e.height) && d.css("max-height", c.attr("lay-height") || e.height);
    });
  });
}).addcss("modules/code.css", "skincodecss");
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ 1:
/*!************************************************!*\
  !*** multi ./public/static/layui/layui.all.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\test_program\businessrule\rule\public\static\layui\layui.all.js */"./public/static/layui/layui.all.js");


/***/ })

/******/ });