/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Rather than having a generic `string` type, we use string literals so there's one place where
// all category names are defined. This allows the naming scheme to be more easily reviewed and
// made consistent.
export type DiagnosticCategory =
  | 'analyzeDependencies/cjsExportInES'
  | 'args/fileNotFound'
  | 'args/invalid'
  | 'bundler/moduleCycle'
  | 'bundler/topLevelAwait'
  | 'compile/classes'
  | 'compile/jsx'
  | 'flags/invalid'
  | 'format/disabled'
  | 'internalError/httpServer'
  | 'internalError/request'
  | 'lint/camelCase'
  | 'lint/caseSingleStatement'
  | 'lint/defaultExportSameBasename'
  | 'lint/disabled'
  | 'lint/doubleEquals'
  | 'lint/duplicateImportSource'
  | 'lint/emptyBlocks'
  | 'lint/getterReturn'
  | 'lint/inconsiderateLanguage'
  | 'lint/noArguments'
  | 'lint/noAsyncPromiseExecutor'
  | 'lint/noCatchAssign'
  | 'lint/noCompareNegZero'
  | 'lint/noCondAssign'
  | 'lint/noDebugger'
  | 'lint/noDelete'
  | 'lint/noDeleteVars'
  | 'lint/noDupeArgs'
  | 'lint/noDuplicateCase'
  | 'lint/noDuplicateGroupNamesInRegularExpressions'
  | 'lint/noDuplicateKeys'
  | 'lint/noEmptyCharacterClass'
  | 'lint/noExplicitAny'
  | 'lint/noExtraBooleanCast'
  | 'lint/noFunctionAssign'
  | 'lint/noImportAssign'
  | 'lint/noLabelVar'
  | 'lint/noMultipleSpacesInRegularExpressionLiterals'
  | 'lint/noReferenceToNonExistingGroup'
  | 'lint/noSetterReturn'
  | 'lint/noShadowRestrictedNames'
  | 'lint/noShorthandArrayType'
  | 'lint/noTemplateCurlyInString'
  | 'lint/noUnsafeFinally'
  | 'lint/noVar'
  | 'lint/pendingFixes'
  | 'lint/preferBlockStatements'
  | 'lint/preferFunctionDeclarations'
  | 'lint/preferTemplate'
  | 'lint/preferWhile'
  | 'lint/restrictedGlobals'
  | 'lint/singleVarDeclarator'
  | 'lint/sortImportExportSpecifiers'
  | 'lint/sparseArray'
  | 'lint/undeclaredVariables'
  | 'lint/unsafeNegation'
  | 'lint/unusedVariables'
  | 'lint/react/jsxNoCommentTextnodes'
  | 'lsp/parse'
  | 'parse/js'
  | 'parse/json'
  | 'parse/manifest'
  | 'parse/patchMatch'
  | 'parse/regex'
  | 'parse/semver'
  | 'parse/snapshots'
  | 'parse/spdxLicense'
  | 'parse/stringMarkup'
  | 'parse/url'
  | 'parse/url/query'
  | 'projectManager/incorrectConfigFilename'
  | 'projectManager/missing'
  | 'projectManager/nameCollision'
  | 'projectManager/vscMissing'
  | 'resolver/fetchFailed'
  | 'resolver/importTypeMismatch'
  | 'resolver/notFound'
  | 'resolver/unknownExport'
  | 'resolver/unsupported'
  | 'suppressions/duplicate'
  | 'suppressions/incorrectPrefix'
  | 'suppressions/missingSpace'
  | 'suppressions/unused'
  | 'tests/cancelled'
  | 'tests/disabled'
  | 'tests/failure'
  | 'tests/fixtureOptions'
  | 'tests/logs'
  | 'tests/noneDeclared'
  | 'tests/snapshots/incorrect'
  | 'tests/snapshots/missing'
  | 'tests/snapshots/redundant'
  | 'tests/timeout'
  | 'tests/unhandledRejection'
  | 'typeCheck/incompatible'
  | 'typeCheck/missingCondition'
  | 'typeCheck/notExhaustive'
  | 'typeCheck/uncallable'
  | 'typeCheck/undeclaredVariable'
  | 'typeCheck/unknownImport'
  | 'typeCheck/unknownProperty'
  | 'vsc/dirty'
  | 'v8/syntaxError';

export type DiagnosticCategoryPrefix =
  | 'analyzeDependencies'
  | 'args'
  | 'bundler'
  | 'compiler'
  | 'flags'
  | 'internalError'
  | 'lint'
  | 'lsp'
  | 'parse'
  | 'projectManager'
  | 'resolver'
  | 'tests'
  | 'typeCheck'
  | 'v8';
