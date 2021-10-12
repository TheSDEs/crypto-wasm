"use strict";
/*
 * Copyright 2020 - MATTR Limited
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Inject the RNG source when in NodeJS environments
const { randomBytes } = require("@stablelib/random");

// This ends up pointing to a CJS version of the ES module generated by wasm-pack
// which is done post-compile via rollup
const {
  generateSignatureParamsG1,
  generateBBSBls12381G1KeyPair,
  bbsSignG1, bbsVerfiyG1, bbsCommitMsgsInG1, bbsBlindSignG1, bbsUnblindSigG1, bbsInitializeProofOfKnowledgeOfSignature,
  bbsVerifyProofOfKnowledgeOfSignature, isSignatureParamsG1Valid, bbsSignatureParamsG1MaxSupportedMsgs,
  isBBSPublicKeyG1Valid, generateAccumulatorSecretKey, generateAccumulatorParams, isAccumulatorParamsValid,
  generateAccumulatorPublicKey, isAccumulatorPublicKeyValid, generateAccumulatorKeyPair, positiveAccumulatorInitialize,
  positiveAccumulatorGetAccumulated, positiveAccumulatorAdd, positiveAccumulatorRemove,
  positiveAccumulatorMembershipWitness, positiveAccumulatorVerifyMembership, generateFieldElementFromNumber,
  accumulatorGetElementFromBytes, positiveAccumulatorAddBatch, positiveAccumulatorRemoveBatch,
  positiveAccumulatorBatchUpdates, positiveAccumulatorMembershipWitnessesForBatch, universalAccumulatorComputeInitialFv,
  universalAccumulatorCombineMultipleInitialFv, universalAccumulatorInitialiseGivenFv,
  universalAccumulatorGetAccumulated, universalAccumulatorAdd, universalAccumulatorRemove,
  universalAccumulatorMembershipWitness, universalAccumulatorVerifyMembership, universalAccumulatorComputeD,
  universalAccumulatorCombineMultipleD, universalAccumulatorNonMembershipWitness,
  universalAccumulatorVerifyNonMembership, universalAccumulatorAddBatch, universalAccumulatorRemoveBatch,
  universalAccumulatorBatchUpdates, universalAccumulatorCombineMultipleDForBatch, universalAccumulatorComputeDForBatch,
  universalAccumulatorNonMembershipWitnessesForBatch, universalAccumulatorMembershipWitnessesForBatch,
  updateMembershipWitnessPostAdd, updateMembershipWitnessPostRemove, updateNonMembershipWitnessPostAdd,
  updateNonMembershipWitnessPostRemove, publicInfoForWitnessUpdate,
  updateMembershipWitnessUsingPublicInfoAfterBatchUpdate, updateNonMembershipWitnessUsingPublicInfoAfterBatchUpdate,
  updateMembershipWitnessUsingPublicInfoAfterMultipleBatchUpdates,
  updateNonMembershipWitnessUsingPublicInfoAfterMultipleBatchUpdates, generateMembershipProvingKey,
  accumulatorInitializeMembershipProof, accumulatorGenMembershipProof, accumulatorVerifyMembershipProof,
  generateChallengeFromBytes, bbsChallengeContributionFromProof, accumulatorChallengeContributionFromMembershipProtocol,
  accumulatorChallengeContributionFromNonMembershipProtocol, accumulatorChallengeContributionFromNonMembershipProof,
  accumulatorDeriveMembershipProvingKeyFromNonMembershipKey, bbsEncodeMessageForSigning, generateFieldElementFromBytes,
  fieldElementAsBytes, generatePoKBBSSignatureStatement, generateAccumulatorMembershipStatement,
  generateAccumulatorNonMembershipStatement, generatePedersenCommitmentStatement, generateWitnessEqualityMetaStatement,
  generatePoKBBSSignatureWitness, generateAccumulatorMembershipWitness, generateAccumulatorNonMembershipWitness,
  generatePedersenCommitmentWitness, generateProofSpec, generateProof, verifyProof, bbsGetBasesForCommitmentG1,
  generateCompositeProof, generateRandomG1Element, bbsGenProofOfKnowledgeOfSignature, bbsExtendSigParamsG1ForMsgCount,
} = require("./index");

// TODO should be able to remove this duplicate definition syntax by using ESM over index.web.js
// in future

module.exports.DEFAULT_BLS12381_PRIVATE_KEY_LENGTH = 32;

module.exports.DEFAULT_BLS12381_G1_PUBLIC_KEY_LENGTH = 48;

module.exports.DEFAULT_BLS12381_G2_PUBLIC_KEY_LENGTH = 96;

module.exports.BBS_SIGNATURE_LENGTH = 112;

const {
  wasm, initializedModule, initialize
} = require('./init_wasm');

module.exports = {
  ...require('./util_wasm'),
  ...require('./bbs_plus_wasm'),
  ...require('./accumulator_wasm'),
  ...require('./proof_system_wasm'),
};
