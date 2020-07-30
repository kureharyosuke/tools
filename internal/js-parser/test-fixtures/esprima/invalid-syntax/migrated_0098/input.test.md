# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0098`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: true
	directives: Array []
	filename: "esprima/invalid-syntax/migrated_0098/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "esprima/invalid-syntax/migrated_0098/input.js"
		end: Object {
			column: 0
			index: 11
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse/js"}]
			description: Object {
				advice: Array []
				category: "parse/js"
				message: MARKUP {
					parts: Array [
						RAW_MARKUP {value: "Invalid left-hand side in "}
						"arrow function parameters"
					]
				}
			}
			location: Object {
				filename: "esprima/invalid-syntax/migrated_0098/input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 3
					index: 3
					line: 1
				}
				start: Object {
					column: 1
					index: 1
					line: 1
				}
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "esprima/invalid-syntax/migrated_0098/input.js"
				end: Object {
					column: 10
					index: 10
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSArrowFunctionExpression {
				loc: Object {
					filename: "esprima/invalid-syntax/migrated_0098/input.js"
					end: Object {
						column: 10
						index: 10
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				body: JSNumericLiteral {
					value: 0
					format: "octal"
					loc: Object {
						filename: "esprima/invalid-syntax/migrated_0098/input.js"
						end: Object {
							column: 10
							index: 10
							line: 1
						}
						start: Object {
							column: 8
							index: 8
							line: 1
						}
					}
				}
				head: JSFunctionHead {
					async: false
					hasHoistedVars: false
					rest: undefined
					returnType: undefined
					thisType: undefined
					loc: Object {
						filename: "esprima/invalid-syntax/migrated_0098/input.js"
						end: Object {
							column: 7
							index: 7
							line: 1
						}
						start: Object {
							column: 0
							index: 0
							line: 1
						}
					}
					params: Array [
						JSBindingIdentifier {
							name: "INVALID_PLACEHOLDER"
							loc: Object {
								filename: "esprima/invalid-syntax/migrated_0098/input.js"
								end: Object {
									column: 7
									index: 7
									line: 1
								}
								start: Object {
									column: 8
									index: 8
									line: 1
								}
							}
						}
					]
				}
			}
		}
	]
}
```

### `diagnostics`

```

 esprima/invalid-syntax/migrated_0098/input.js:1:1 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Invalid left-hand side in arrow function parameters

    (10) => 00
     ^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```